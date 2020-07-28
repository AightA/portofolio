import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import quiz from '../assets/quiz.png';
import chooseLove from '../assets/Choose_Love_Totaliser.png';
import alphaMiqa from '../assets/Alpha-MigrantsQ_A.png';

export default function Home() {
	return (
		<div className="Background">
			<h1 className="text-white"> Welcome </h1>
			<Container className="my-5">
				<Row>
					<Col className="col-lg-4 col-md-4 col-sm-4">
						<div>
							<h1 className="text-white">CYF quiz</h1>
							<img src={quiz} alt="quiz project" class="img-thumbnail" />
							 <div class="caption text-navy">
                            
                             <p className="text-white">MERN quiz web app aimed to help current students of CodeYourFuture class, and graduates to obtain more
knowledge and test their own skills, React Hooks is part of development tools.</p>
                             </div>
                                <a class="btn btn-primary" href="https://scott-quiz-project.web.app/" role="button">Demo</a>
                                <a class="btn btn-primary ml-2" href="https://github.com/CodeYourFuture/project-quiz" role="button">Code</a>
						</div>
					</Col>
                    <Col className="col-lg-4 col-md-4 col-sm-4">
						<div>
							<h1 className="text-white">Choose love</h1>
							<img src={chooseLove} alt="quiz project" class="img-thumbnail" />
							 <div class="caption text-navy">
                            
                             <p className="text-white"> Web app presents to the clients with instant updates of total value of 
                             the money raised today and yesterday. Development was in React, Node along with WebSocket.</p>
                             </div>
                                <a class="btn btn-primary" href="https://choose-love-totaliser.herokuapp.com/uk" role="button">Demo</a>
                                <a class="btn btn-primary ml-2" href="https://github.com/djgrant/choose-love-totaliser/pulls?q=is%3Apr+author%3AAightA+is%3Aclosed" role="button">Code</a>

						</div>
					</Col>
                    <Col className="col-lg-4 col-md-4 col-sm-4">
						<div>
							<h1 className="text-white">Graduation project - MiQA</h1>
							<img src={alphaMiqa} alt="quiz project" class="img-thumbnail" />
							 <div class="caption text-navy">
                            
                             <p className="text-white">Web application that
provides a multilingual forum for newcomers to Glasgow and Scotland. It is built in React, Node
and PostgreSQL.</p>
                             </div>
                                <a class="btn btn-primary" href="https://miqa.herokuapp.com/" role="button">Demo</a>
                                <a class="btn btn-primary ml-2" href="https://github.com/CodeYourFuture/scot-miqa-migrantsqa/pulls?q=is%3Apr+author%3AAightA+is%3Aclosed" role="button">Code</a>

						</div>
					</Col>
				
				</Row>
			</Container>
		</div>
	);
}
