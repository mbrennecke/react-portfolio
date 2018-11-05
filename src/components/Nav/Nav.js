import React from 'react';
import { Container, Row, Col } from '../Grid';
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger";
import "./Nav.css";

const Nav = () => (
	<div className="navbar">
		<Container>
			<Row>
				<Col size="seven columns">
					<Link to="/" className="navMainLink">Matthew Brennecke</Link>
				</Col>
				<Col size="five columns">
					<Hamburger/>
				</Col>
			</Row>
		</Container>
	</div>
)

export default Nav;