import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layout/Navbar";

import ServicesContainer from "./containers/ServicesContainer";
import Home from "./components/home/Home";
import IssuesContainer from "./containers/IssuesContainer";
import Vehicles from "./components/vehicles/Vehicles";

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Switch>
					<div className="container">
						<Route exact path="/" component={Home} />
						<Route exact path="/vehicles" component={Vehicles} />
						<Route exact path="/services" component={ServicesContainer} />
						<Route exact path="/issues" component={IssuesContainer} />
					</div>
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
