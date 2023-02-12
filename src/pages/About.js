import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <>
            <Helmet>
				<title>About - Yunseo Jeong</title>
				<meta property="og:title" content="About (브랜치 : main) - Yunseo Jeong" />
			</Helmet>

            <div className='repo_header'>
                <h3><FontAwesomeIcon icon={faBook} /> <Link to="/">YSJ</Link> / <Link to="/About">About</Link> <span className='badge'>Public</span></h3>
            </div>

            <div className='repo_tab'>
                <Link to="/About"><button className='repo_tab_btn'><FontAwesomeIcon icon={faCode} /> 코드</button></Link>
            </div>
            <div className='repo_tab_hr'>
                <div className='repo_tab_hr1'><hr /></div>
                <div className='repo_tab_now'></div>
            </div>
        </>
    )
};

export default About;