import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import firebase from 'firebase';
import { selectUser, selectUserClaims, setUser, setUserClaims } from './features/AuthSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Login } from './components/Login/Login';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AdminPanel } from './components/AdminPanel/AdminPanel';
import { MainPanel } from './components/MainPanel/MainPanel';

function App() {
  const user = useAppSelector(selectUser);
  const userClaims = useAppSelector(selectUserClaims);
  const dispatch = useAppDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdTokenResult().then(idToken => {
          // if (idToken.claims.admin) {
          dispatch(setUser(user));
          dispatch(setUserClaims(idToken.claims));
        })
      }
      else {
        dispatch(setUser(null));
        dispatch(setUserClaims(null));
      }

    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {user && userClaims && userClaims.admin && <AdminPanel />}
        {user && userClaims && !userClaims.admin && < MainPanel />}
        {user === null && <Login />}
        {user === undefined && <Grid container justify="center" alignItems="center">
          <CircularProgress thickness={1.5} />
        </Grid>}
      </header>
    </div>
  );
}

export default App;
