import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faCodeBranch, faFile } from '@fortawesome/free-solid-svg-icons'

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
                <div className='repo_content'>
                    <button className='repo_branch_btn'><div style={{marginLeft: '10px', marginRight: '10px'}}><FontAwesomeIcon icon={faCodeBranch} style={{marginRight: '5px'}} /> main</div></button>
                    <div className='repo_files_frame'>
                        <table className='repo_files'>
                            <thead>
                                <tr>
                                    <th colspan="5" style={{backgroundColor: '#161B22'}}>
                                        <div className='table_text'>
                                            <img src='/favicon-192x192.png' alt='logo' width='32px' height='32px' style={{borderRadius: '50%'}}/> <Link to="/">YSJ</Link> <p style={{marginLeft: '10px'}}>Hello, World!</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{borderRight: 'none', width: '10px'}}></td>
                                    <td style={{width: '18px', borderLeft: 'none', borderRight: 'none'}}>
                                        <div style={{width: '5px', marginTop: '8px', marginBottom: '8px', fontSize: '18px'}}>
                                            <FontAwesomeIcon icon={faFile} />
                                        </div>
                                    </td>
                                    <td style={{borderLeft: 'none', borderRight: 'none', width: '5px'}}></td>
                                    <td style={{borderLeft: 'none', borderRight: 'none', marginTop: '8px', marginBottom: '8px'}}>README.md</td>
                                    <td style={{color: '#8B949E', borderLeft: 'none', marginTop: '8px', marginBottom: '8px'}}>Commit Message</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='repo_sidebar'>여기는 설명이 올 예정입니다. (PC 한정)</div>
            </div>
        </>
    )
};

export default About;