import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
	<Router>
      <div className="App">
		<Nav/>
        <Route exact path="/" component={Home} />
		<Route exact path="/about" component={Home} />
      </div>
	</Router>
    );
  }
}

export default App;
