import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faCodeBranch, faFile, faBookOpen, faScaleBalanced, faStar } from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';

const About = () => {
    var now = new Date(); 
    var writeDay = new Date("2023-02-26 18:45:00");
    
    let ResultTime = "";
    
    var difference = now.getTime() - writeDay.getTime();
    difference = Math.trunc(difference / 1000);
    
    const seconds = 1;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const mon = day * 30;
    const year = mon * 12;
    
    let resultYear, resultMon, resultDay, resultHour, resultMin, resultSec;

    resultYear = Math.trunc(difference / year);
    resultMon = Math.trunc(difference / mon);
    resultDay = Math.trunc(difference / day);
    resultHour = Math.trunc(difference / hour);
    resultMin = Math.trunc(difference / minute);
    resultSec = Math.trunc(difference / seconds);
    if(resultSec > 0){
        ResultTime = resultSec+'초';
        difference = difference - (resultSec * seconds );
    }
    if(resultMin > 0){
        ResultTime = resultMin+'분';
        difference = difference - (resultMin * minute);
    }
    if(resultHour > 0){
        ResultTime = resultHour+'시간';
        difference = difference - (resultHour * hour);
    }
    if(resultDay > 0){
        ResultTime = resultDay+'일';
        difference = difference - (resultDay * day);
    }
    if(resultMon > 0){
        ResultTime = resultMon+'개월';
        difference=  difference - (resultMon * mon);
    }
    if(resultYear > 0){
      ResultTime = resultYear+'년';
      difference= difference - (resultYear * year);
    }

    const commitMessage = 'Hello, World!';
    const pageDescription = '🚀 안녕하세요, 삼해트입니다. 제 소개를 확인해보세요!'
    const readme = `
# # Happytree Samsung

---

😜 안녕하세요, 삼해트입니다.

저는 이것저것 개발하면서 즐기고 있습니다.

---

## 활동 경력
> 이 정보는 대략적으로 작성된 정보입니다.
+ **Team HT - 팀장 (2019.12.25. ~ 2021.12.25.)**
+ 홍보숲 - 메인 개발자 (2020.06 ~ 2021.06)
+ UniqueCode - 개발자 (2020.08. ~ 2021.08.)
+ **삼해트의 공방 - 공방 대표 / 메인 개발자 (2020.08. ~ 현재)**
`

    const star = 0;

    return (
        <>
            <Helmet>
				<title>About - Yunseo Jeong</title>
				<meta property="og:title" content="About - Yunseo Jeong" />
			</Helmet>

            <div className='repo_header'>
                <h2><FontAwesomeIcon icon={faBook} /> <Link to="/">YSJ</Link> / <Link to="/About">About</Link> <span className='badge'>Public</span></h2>
                <div className='repo_sidebar_m'>
                    {pageDescription}
                    <div className="sideLinks" style={{marginTop: '10px', marginBottom: '10px', color: '#8B949E'}}>
                        <a href="#readme"><FontAwesomeIcon icon={faBookOpen} /> Readme</a>  |  <a href="https://github.com/samsunghappytree123/Portfolio/blob/main/LICENSE" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faScaleBalanced} /> MIT license</a>  |  <a href="https://github.com/samsunghappytree123/Portfolio/stargazers" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faStar} /> {star} Star</a>
                    </div>
                </div>
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
                                    <th colSpan="3" style={{backgroundColor: '#161B22'}}>
                                        <div className='table_text'>
                                            <img src='/favicon-192x192.png' alt='logo' width='32px' height='32px' style={{borderRadius: '50%'}}/> <Link to="/">YSJ</Link> <p style={{marginLeft: '10px'}}>{commitMessage}</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{minWidth: '140px', width: '20%', borderRight: 'none'}}>
                                        <div style={{display: 'block', marginTop: '8px', marginBottom: '8px', marginLeft: '10px'}}>
                                            <FontAwesomeIcon icon={faFile} style={{marginRight: '10px'}} />README.md
                                        </div>
                                    </td>
                                    <td style={{minWidth: '100px', width: '5%', color: '#8B949E', borderLeft: 'none', borderRight: 'none'}}>
                                        {commitMessage}
                                    </td>
                                    <td style={{minWidth: '85px', width: '20%', color: '#8B949E', borderLeft: 'none', marginTop: '8px', marginBottom: '8px'}}>
                                        <div style={{textAlign: 'right', marginLeft: '8px', marginRight: '8px'}}>
                                            {ResultTime} 전
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='repo_readme' id="readme">
                        <p style={{textAlign: 'left', marginLeft: '20px'}}><code>README.md</code></p>
                        <hr />
                        <div className='text'>
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    blockquote({ node, children, ...props }) {
                                        return (<blockquote style={{padding: '0 1.8em', color: '#c4c4c4', borderLeft: '0.2em solid #d0d7de'}} {...props}>{children}</blockquote>);
                                    },
                                    a({ node, children, ...props }) {
                                        return (<a {...props} target="_blank">{children}</a>)
                                    },
                                    li({ node, children, ...props }) {
                                        return (<li {...props} style={{lineHeight: '150%'}}>{children}</li>)
                                    }
                                }}
                            >
                                {readme}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
                <div className='repo_sidebar'>
                    <p style={{fontSize: '25px'}} className="boldText">소개</p>
                    {pageDescription}
                    <hr style={{marginTop: '10px', marginBottom: '10px'}}/>
                    <div style={{marginTop: '10px', marginBottom: '5px'}} className="sideLinks">
                        <a href="#readme"><FontAwesomeIcon icon={faBookOpen} /> Readme</a>
                    </div>
                    <div style={{marginTop: '5px', marginBottom: '5px'}} className="sideLinks">
                        <a href="https://github.com/samsunghappytree123/Portfolio/blob/main/LICENSE" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faScaleBalanced} /> MIT license</a>
                    </div>
                    <div style={{marginTop: '5px', marginBottom: '5px'}} className="sideLinks">
                        <a href="https://github.com/samsunghappytree123/Portfolio/stargazers" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faStar} /> {star} Star</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;