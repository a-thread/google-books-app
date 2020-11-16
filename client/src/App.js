import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import NavBar from "./components/Nav";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Router>
        <Switch>
          <Route exact path="/"><Search /></Route>
          {/* <Route exact path="/saved"><Saved /></Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
