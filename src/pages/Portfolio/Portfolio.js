import React from 'react';
import { Container, Row, Col } from "../../components/Grid";
import Links from "../../utils/links.js";
import { PortfolioBoxes, PortfolioBoxTitle, Tiles } from "../../components/Portfolio";
import "./Portfolio.css";

const Portfolio = () => {

	console.log(Links);
	const projects = Links[0][0];
	
	return (
		<Container>
			<PortfolioBoxes className="links" id="projects">
				<PortfolioBoxTitle>
					Projects developed with a team
				</PortfolioBoxTitle>
				<Row>
					<Col size="one-third column">
						<a href= {`${projects.link}`} target="_blank" rel="noopener noreferrer"><img src={`/images/${projects.image}`} className="u-max-full-width image" alt={`${projects.title}`}/></a>
						<div className="siteLinks">
							<h3 className="site">{projects.title}</h3>
							<h4 className="repo">-Github-</h4>
						</div>
					</Col>
					<Col size="one-third column">
						<img src="/images/pencilme.jpg" className="u-max-full-width"/>
					</Col>
					<Col size="one-third column">
						<img src="/images/readlocal.jpg" className="u-max-full-width"/>
					</Col>
				</Row>
			</PortfolioBoxes>
			<PortfolioBoxes className="links" id="database">
				<PortfolioBoxTitle>
					Sites that utilize a front end and back end
				</PortfolioBoxTitle>
			</PortfolioBoxes>
			<PortfolioBoxes className="links" id="frontend">
				<PortfolioBoxTitle>
					Sites that utilize only a front end
				</PortfolioBoxTitle>
			</PortfolioBoxes>
			<PortfolioBoxes className="links" id="backend">
				<PortfolioBoxTitle>
					Sites that utilize only a back end
					<p>(links go to video demonstrations)</p>
				</PortfolioBoxTitle>
			</PortfolioBoxes>
		</Container>
	)
}

export default Portfolio;