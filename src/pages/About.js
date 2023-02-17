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
				<meta property="og:title" content="About - Yunseo Jeong" />
			</Helmet>

            <div className='repo_header'>
                <h2><FontAwesomeIcon icon={faBook} /> <Link to="/">YSJ</Link> / <Link to="/About">About</Link> <span className='badge'>Public</span></h2>
                <div className='repo_sidebar_m'>여기는 설명이 올 예정입니다. (모바일 한정)</div>
            </div>

            <div className='repo_tab'>
                <Link to="/About"><button className='repo_tab_btn'><FontAwesomeIcon icon={faCode} /> 코드</button></Link>
            </div>
            <div className='repo_tab_hr'>
                <div className='repo_tab_hr1'><hr /></div>
                <div className='repo_tab_now'></div>
            </div>
            <div className='repo_page'>
                <div className='repo_content'>test</div>
                <div className='repo_sidebar'>여기는 설명이 올 예정입니다. (PC 한정)</div>
            </div>
        </>
    )
};

export default About;