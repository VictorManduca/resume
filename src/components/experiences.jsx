import React from 'react'

const ExperiencesComponent = () => {
	return (
		<div className="Component-Container">
			<h2>Experience</h2>

			<div>
				<div className="Company">
					<h4 className="Company-Name">
						Scale Systems <br />
						<span className="Company-Position">Fullstack Engineer</span>
					</h4>
				</div>
				<div className="Company-Text">
					<p className="Responsabilities">
						Responsible to develop and maintain products of our partners like
						Cineclick (UOL/Flix Media) and DIVI Talks. To do that we use Node.js
						with Typescript or ES6 in the backend and Next.js or React.js in the
						frontend depending on the requisites of the project.
					</p>
				</div>
			</div>

			<div>
				<h4>
					Helpper - Soluções Inteligentes <br />
					<span className="Company-Position">Fullstack Engineer</span>
				</h4>
				<div>
					<p className="Responsabilities">
						As a member of Sustention Squad, I work maintaining and improving
						the legacy systems, microservices and apps. To do the work we use
						Node.js with Typescript, Ionic, Cordova, Angular v2+, Flutter, PHP
						with Laravel, Google Cloud and Firebase.
					</p>
				</div>
			</div>

			<div>
				<h4>
					Accesys Solutions <br />
					<span className="Company-Position">Fullstack Engineer</span>
				</h4>
				<div>
					<p className="Responsabilities">
						I started at Accesys Solutions as a intern, in August 2019,
						developing applications to provide for our clients a CRM system and
						a Ecommerce API. I was the backend developer responsible to maintain
						CRM and Ecommerce platforms and improve them. Also, I’m developed
						new features and new products for our clients. To do that, we used
						Node.js and Express.js to develop our APIs, Golang for websocket,
						AWS (serverless and lambda functions), Jest for unit tests and
						Github Actions and CircleCI for Continuous Integrations.
					</p>
				</div>
			</div>

			<div>
				<h4>
					Daksa <br />
					<span className="Company-Position">Developer internship</span>
				</h4>
				<div>
					<p className="Responsabilities">
						As an intern, I was the responsible for the company’s mobile app,
						that consumed the API of company’s blog and showed the articles in
						the app, developed with React Native. Also, I developed in there web
						pages with Javascript, HTML, CSS and for backend we used PHP.
					</p>
				</div>
			</div>
		</div>
	)
}

export default ExperiencesComponent
