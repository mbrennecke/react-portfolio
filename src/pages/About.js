import React from 'react';
import { Row, Col } from "../components/Grid"
import './About.css';

const About = () => (
	<div className="about">
		<Row>
			<Col size="three columns">
				<img src="/images/headshot.jpg" alt="Photo of Matthew Brennecke" id="headshot" class="img-responsive"/>
			</Col>
			<Col size="nine columns">
				<p>I am full stack developer, I enjoy the creativity of front end and the logic of backend design. I bring strong HTML, CSS, and Javascript, jQuery, node.js, element, and React knowledge, leveraged to make complex back end for clean front end applications.</p>

				<p>I have a Bachelor’s Degree in Computer Information Systems, with a minor in Business Informatics, as well as several technical certifications.</p>

				<p>My years in technical support have given me a strong troubleshooting ability and determined tenacity that I am able to bring to bear on bug fixing and problem solving when developing an application.</p>
			</Col>
		</Row>
	</div>
)

export default About;