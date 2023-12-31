import TextEditor from "./Components/textEditor.js"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import {v4 as uuidV4} from "uuid";
function App() {

  return( 
      <Router>
        <Switch>
          <Route path="/" exact>
              <Redirect to={`/documents/${uuidV4()}`} ></Redirect> 
          </Route>
          <Route path ='/documents/:id'>
              <TextEditor/>
          </Route>
        </Switch>
      </Router>
    
       // <TextEditor />
  
  
  );
   
  
}

export default App;
