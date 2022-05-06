import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chats from './components/Chats';
import ChatInput from './components/ChatInput';
import { auth } from './firebase/FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from './components/Login';

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {

  const [user, loading] = useAuthState(auth)
  return (
    <div className="app">
      <Router>
        {!user ? <Login /> : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path={"/"} exact>
                  <Chats />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}


      </Router>

    </div>
  );
}

export default App;


