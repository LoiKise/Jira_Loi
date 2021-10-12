import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import LoadingComponents from "./components/GlobalSetting/LoadingComponents";

import DrawerJiraBug from "./HOC/JiraBugHOC/DrawerJiraBug";
import CreateProject from "./pages/CreateProject/CreateProject";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProjectManagement from "./pages/ProjectManagement/ProjectManagement";
import indexJiraBugs from "./redux/sagas/Jirabugs/indexJiraBugs";
import JiraBugsTeamplate from "./templates/HomeTemplate/JiraBugsTeamplate";
import { UserTemplate } from "./templates/HomeTemplate/UserTemplate";
import { history } from "./util/libs/history";
// import { createBrowserHistory } from 'history'


// export const history = createBrowserHistory();

function App() {




  return (
    <Router history={history}>
      <LoadingComponents />
      <DrawerJiraBug />
    

      <Switch>
        <UserTemplate exact path="/login" Component={Login} />
        <UserTemplate exact path="/home" Component={Home} />
        <JiraBugsTeamplate exact path='/jirabugs' Component={indexJiraBugs} />
        <JiraBugsTeamplate exact path='/createproject' Component={CreateProject} />
        <JiraBugsTeamplate exact path='/projectmanagement' Component={ProjectManagement} />
        <UserTemplate exact path="/" Component={Login} />
      </Switch>

    </Router>
  );
}

export default App;
