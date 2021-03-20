import { Fragment } from 'react';
import './App.css';
import companyLogo from './firstpaint.jpg';

function App() {
  return (
    <Fragment>
        
        <div>
          <h1 class='tc'> Paint Bid App</h1>
          <img class=' w-100 ' src={companyLogo}/>
        </div>

        
        <h1 class="tc">Sign in</h1> 
        <form action="/action_page.php" class="tc">
          <label for="email">Email: </label>
          <input type="email" id="email" name="email"/> <br/><br/>
          <label for="password">Password: </label>
          <input type="password" id="password" name="password"/> <br/><br/>
          <input type="submit" value="Submit"/>
        </form>
    


    </Fragment>
    
  
 
    
  );
}

export default App;
