import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Home from "./pages/Portfolio";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
	<Router>
      <div className="App">
		<Nav/>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={Home} />
			<Route exact path="/portfolio" component={Portfolio} />
		<Switch>
      </div>
	</Router>
    );
  }
}

export default App;
