import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Login from "./screens/login/login";
import Signup from "./screens/signup/signup";
import Todos from './screens/todos/index'
import History from "./screens/history";
import Summary from "./screens/summary";


import InnerPageGuard from "./guards/innerPageGuard";
import OuterPageGuard from "./guards/outerPageGuard";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter >

        <Switch>
          <OuterPageGuard exact path="/login" component={Login} />
          <OuterPageGuard exact path="/signup" component={Signup} />
          <InnerPageGuard exact path="/history" component={History} />
          <InnerPageGuard exact path="/home" component={Todos} />
          <InnerPageGuard exact path="/summary" component={Summary} />
          <InnerPageGuard exact path="/" component={Todos} />
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
