import React from "react";
import { Link } from "react-router-dom";

/* eslint-disable no-redeclare */
/* 
Open a database.
Create an object store in the database. 
Start a transaction and make a request to do some database operation, like adding or retrieving data.
Wait for the operation to complete by listening to the right kind of DOM event.
Do something with the results (which can be found on the request object).
*/

const clientData = [{ email: "johnsmith@email.com", name: "John" }];

let db;

//create new DB request for "bid"//
const request = indexedDB.open("bid", 1); //only use round numbers for version

// check for other instances loaded with the database
request.onblocked = function (event) {
  console.log("Please close all other tabs with this site running");
};

request.onerror = function (event) {
  console.log("Whoops!" + event.target.errorCode);
};

request.onsuccess = function (event) {
  db = event.target.result;
  loadDatabase(db);
  return;
};

//set up database
request.onupgradeneeded = function (event) {
  const db = event.target.result;

  //objectStore to hold customer info by email (unique)
  var objectStore = db.createObjectStore("client", {
    keyPath: "email",
    autoIncrement: true,
  });

  //create an index to search clients by email(unique)
  objectStore.createIndex("email", "email", { unique: true });
  objectStore.transaction.oncomplete = function (event) {
    var clientObjStore = db
      .transaction("client", "readwrite")
      .objectStore("client");
    clientData.forEach(function (client) {
      clientObjStore.add(client);
    });
  };
  loadDatabase(db);
};

// allows new page to update database by closing other instance of database
function loadDatabase(db) {
  db.onversionchange = function (event) {
    db.close();
    console.log("Please reload or close this tab to load the new version");
  };
  //addClient();
}

// // //ADDING DATA//
// function addClient() {
//   var newClient = [{ email: "", name: "" }];
//   var transaction = db.transaction(["client"], "readwrite");

//   transaction.oncomplete = function (event) {
//     console.log("complete!");
//   };

//   transaction.onerror = function (event) {
//     console.log("Whoops!" + event.target.errorCode);
//   };

//   var objectStore = transaction.objectStore("client");
//   // clientData.forEach(function (client) {
//   var objStoreRequest = objectStore.add(newClient[0]);
//   objStoreRequest.onsuccess = function (event) {};
// }

// //RETRIEVE DATA//

// var transaction = db.transaction(["clients"]);
// var objectStore = transaction.objectStore("clients");
// //objectStore.openCursor().onsuccess = function (event) {
// indexedDB.openCursor().onsuccess = function (event) {
//   var cursor = event.target.result;
//   if (cursor) {
//     //console.log("Projects for" + cursor.key + "is" + cursor.value.name);
//     console.log(
//       "Projects for" +
//         cursor.key +
//         "Name: " +
//         cursor.value.name +
//         ", Email: " +
//         cursor.value.email
//     );
//     cursor.continue();
//   } else {
//     console.log("no more projects");
//   }
// };
// // var request = objectStore.get ("name");
// request.onerror = function (event) {
//   console.log("Whoops!" + event.target.errorCode);
// };

// request.onsuccess = function (event) {
//   console.log("Project for" + request.result.client);
// };

// //UPDATING DATA//

// var objectStore = db
//   .transaction(["clients"], "readwrite")
//   .objectStore("clients");
// var requestName = objectStore.get("name");
// requestName.onerror = function (event) {
//   console.log("Whoops!" + event.target.errorCode);
// };

// request.onsuccess = function (event) {
//   var data = event.target.result;
//   data.name = "Sue";
//   data.email = "sue@email.com";
//   var requestUpdate = objectStore.put(data);
//   requestUpdate.onerror = function (event) {
//     console.log("Whoops!" + event.target.errorCode);
//   };
//   requestUpdate.onsuccess = function (event) {
//     console.log("Your project client is updated.");
//   };
// };

class Main {
  render() {
    return (
      <div>
        <h1>Main</h1>
        <div>
          <button>setting</button>
        </div>
        <div>
          <button>
            <Link to="/newbids"> Add New Bid </Link>
          </button>
          <h1>Add Bids</h1>
        </div>
        <h3>Search existing Bids</h3>
        <div>
          <ul>
            <li> Bid 1</li>
            <li> Bid 2</li>
            <li> Bid 3</li>
            <li> Bid 4</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
