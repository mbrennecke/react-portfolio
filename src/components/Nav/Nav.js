import React, { Component } from 'react';
import { Container, Row, Col } from '../Grid';
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {

	state = {
		toggle: true
	}
	
	showMenu = () => {
		this.setState({toggle: !this.state.toggle});
		if (!this.state.toggle) {
			document.getElementById("toggler").style.display="none";
			document.getElementById("navbar").style.height="7rem";
		} else {
			document.getElementById("toggler").style.display="block";
			document.getElementById("navbar").style.height="11rem";
		}
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
							<div className="contain" onClick={this.showMenu}>
								<div className="line-top line"></div>
								<div className="line"></div>
								<div className="line-bottom line"></div>
							</div>
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