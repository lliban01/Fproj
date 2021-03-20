/* eslint-disable no-redeclare */
const clientData = [{ email: "johnsmith@email.com", name: "John" }];

let db;

//create new DB request for "bid"//
var request = indexedDB.open("bid", 1); //only use round numbers for version

request.onerror = function (event) {
  console.log("Whoops!" + event.target.errorCode);
};

request.onsuccess = function (event) {
  db = event.target.result;
  // if (navigator.onLine) {
  //     checkDatabase();
};

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  //var objectStore= db.createObjectStore("clients", { keyPath: "email"}); //objectStore to hold customer info by email (unique)
  var objectStore = db.createObjectStore("name", { autoIncrement: true }); //adds a auto incremented key generator to each name
  objectStore.createIndex("name", "name", { unique: false }); //create an index to search clients by name(not unique)
  //objectStore.createIndex("email", "email", { unique: true }); //create an index to search clients by email(unique)
  objectStore.transaction.oncomplete = function (event) {
    var clientObjStore = db
      .transaction("clients", "readwrite")
      .objectStore("clients");
    clientData.forEach(function (client) {
      clientObjStore.add(client.name);
    });
  };
};

//ADDING DATA//

var transaction = db.transaction(["clients"], "readwrite");
transaction.oncomplete = function (event) {
  console.log("complete!");
};

transaction.onerror = function (event) {};

var objectStore = transaction.objectStore("clients");
clientData.forEach(function (client) {
  var request = objectStore.add(client);
  request.onsuccess = function (event) {};
});

//RETRIEVE DATA//

var transaction = db.transaction(["clients"]);
var objectStore = transaction.objectStore("clients");
var request = objectStore.get ("name");
request.onerror = function(event) {
    console.log("Whoops!" + event.target.errorCode);
};

request.onsuccess = function (event) {
    console.log ("Project for" + request.result.name);
};

//UPDATING DATA//

var objectStore = db.transaction(["clients"], "readwrite").objectStore("clients");
var request = objectStore.get ("name");
request.onerror = function(event) {
    console.log("Whoops!" + event.target.errorCode);
};

request.onsuccess = function(event) {
    var data= event.target.result; 
    data.name = "Sue";
    data.email = "sue@email.com"
    var requestUpdate = objectStore.put(data); 
    requestUpdate.onerror = function(event) {
        console.log("Whoops!" + event.target.errorCode);
    };
    requestUpdate.onsuccess = function(event) {

    };
};


//     const store = transaction.objectStore ("pending");
//     store.add(bid);
// }

// function checkDatabase() {
//     const transaction = db.transaction(["pending"], "readwrite");
//     const store = transaction.objectStore("pending");
//     const getAll = store.getAll();

//     getAll.onsuccess = function() {
//         if (getAll.result.length > 0) {
//             fetch("api/transaction/bulk", {
//                 method: "POST",
//                 body: JSON.stringify(getAll.result),
//                 headers: {
//                     Accept: "application/json, text/plain, */*",
//                     "Content-Type": "application/json"
//                 }
//             })
//             .then(response => response.json())
//             .then(() => {
//                 const transaction = db.transaction(["pending"], "readwrite");
//                 const store = transaction.objectStore("pending");
//                 store.clear();
//             });
//         }
//     };
// }

window.addEventListener("online", checkDatabase);
