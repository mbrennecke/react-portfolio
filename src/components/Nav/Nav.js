import React, { Component } from 'react';
import { Container, Row, Col } from '../Grid';
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger";
import "./Nav.css";

class Nav extends Component {

	state = {
		toggle: false
	}
	
	showMenu = () => {
		this.setState({toggle: !this.state.toggle});
		(this.state.toggle ? document.getElementById("toggler").style.display="block" : document.getElementById("toggler").style.display="none")
	}
	
	render() {
		return(
			<div id="navbar">
				<Container>
					<Row>
						<Col size="seven columns">
							<Link to="/" className="navMainLink">Matthew Brennecke</Link>
						</Col>
						<Col size="five columns">
							<button onClick={this.showMenu}/>
						</Col>
					</Row>
					<Row>
						<div id="toggler">
							<Col size="two columns link first">
								<Link to="/about">About</Link>
							</Col>
							<Col size="two columns link">
								<Link to="/portfolio">Portfolio</Link>
							</Col>
							<Col size="two columns link">
								<Link to="/contact">Contact</Link>
							</Col>
						</div>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Nav;