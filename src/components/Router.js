import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Signup from '../pages/Signup';

function ScoorgeRoute() {
  // TODO: isLoggedIn, setLoggedIn
  return (
    <Router>
      {isLoggedIn && <Nav />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/signup">
              <Signup />
            </Route>
            // TODO: 일별, 월별, 년별, 설정, 예산관리
          </>
        ) : (
          <>// TODO: 랜딩, 로그인, 로그아웃 페이지</>
        )}
      </Switch>
    </Router>
  );
}

export default ScoorgeRoute;
