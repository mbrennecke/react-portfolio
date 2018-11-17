import React from 'react';
import { Container, Row, Col } from '../Grid';
import { List, ListItem } from '../List';
import "./NavFooter.css";

const NavFooter = () => (
	
	<footer className="footer">
		<Container>
			<Row>
				<Col size="two columns offset-by-five">
					<List className="footerList">
						<ListItem className="footerListItem leftItem"> 
							<a href="https://github.com/mbrennecke" className="main-link" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square" style={{fontSize:36, color: "#999"}}></i></a>
						</ListItem>
						<ListItem className="footerListItem">
							<a href="https://www.linkedin.com/in/matthewbrennecke/" className="main-link" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" style={{fontSize:36, color: "#999"}}></i></a>
						</ListItem>
					</List>
				</Col>
			</Row>
		</Container>
	</footer>
)

export default NavFooter;