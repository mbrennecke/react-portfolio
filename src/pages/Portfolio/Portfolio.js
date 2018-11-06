import React from 'react';
import { Container, Row, Col } from "../../components/Grid";
import Links from "../../utils/links.js";
import "./Portfolio.css";

const Portfolio = () => {

	console.log(Links);
	
	return (
		<Container>
			<Row>
				<Col size="twelve columns ">
					<div className="links" id="projects">
						<h2>
							Projects developed with a team
						</h2>
					</div>
				</Col>
			</Row>
			<Row>
				<Col size="twelve columns ">
					<div className="links">
						<h2>
							Sites with a front end and back end
						</h2>
					</div>
				</Col>
			</Row>
			<Row>
				<Col size="twelve columns ">
					<div className="links">
						<h2>
							Sites that utilize only a front end
						</h2>
					</div>
				</Col>
			</Row>
			<Row>
				<Col size="twelve columns ">
					<div className="links">
						<h2>
							Apps that are only back end
						</h2>
						<p>(links go to video demonstrations)</p>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default Portfolio;