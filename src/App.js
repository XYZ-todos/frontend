import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Login from "./screens/login/login";
import Signup from "./screens/signup/signup";
import Todos from './screens/todos/index' 
import { Container } from "react-bootstrap";

const App =() =>{
  return (
    <div className="App">
    <BrowserRouter >
      
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/home" component={Todos} />
            <Route exact path="/" component={Todos} />
            {/* <Route exact path="/write" component={WritingScreen} /> */}
            {/* <Route exact path="/article/:id" component={DetailedArticleScreen} /> */}
            {/* <GuardedRoute  path='/manage' component={ManageScreen}/> */}
            {/* <Route exact path="/manage" component={ManageScreen} /> */}

          </Switch>
 
       </BrowserRouter>
  </div>
  );
}

export default App;
