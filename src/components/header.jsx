import React from 'react'

const HeaderComponent = () => {
	const profilePic = 'https://github.com/VictorManduca.png'

	return (
		<header className="Component-Container">
			<img src={profilePic} alt="Victor" />

			<h2>Victor Hugo Manduca Rizo</h2>
			<p>Full Stack Engineer</p>
		</header>
	)
}

export default HeaderComponent
