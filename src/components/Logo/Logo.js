import React from 'react';
import Tilt from 'react-parallax-tilt';
import logo from './logo.png'
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className='Tilt br2 shadow-2' style={{width: '150px', height: '150px'}}>
			  <div className='pa3' >
			    <img style={{paddingTop: '5px', height: '110px', width: '110px'}} alt='logo' src={logo}/>
			  </div>
			</Tilt>
		</div>
		);
}

export default Logo;