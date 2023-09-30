import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head'
import Link from 'next/link'
import dayCheck from '../components/Day.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faSpinner } from '@fortawesome/free-solid-svg-icons'
export const runtime = 'experimental-edge';

export default function projectsHome({}) {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://api.hysj.kr/portfolio/projects');
                setProjects(response.data.data);
            }
            catch (e) {
                console.log(e);
                setError(true);
            }
            setLoading(false)
        };
        fetchData();
    }, [])

    return (
        <>
            <Head>
                <title>Projects - Yunseo Jeong</title>
                <meta name="title" content="Projects - Yunseo Jeong" />
                <meta property="og:title" content="Projects - Yunseo Jeong" />
                <meta name="description" content="안녕하세요, 삼해트입니다." />
                <meta name="og:description" content="안녕하세요, 삼해트입니다." />
            </Head>

            <main>

                <div className='repo_header'>
                    <h2><FontAwesomeIcon icon={faBook} /> <Link href="/">YSJ</Link> / <Link href='/projects'>Projects</Link> <span className='badge'>Public</span></h2>
                </div>

                <div className='repo_tab'>
                    <Link href="/projects"><button className='repo_tab_btn'><FontAwesomeIcon icon={faCode} /> 코드</button></Link>
                </div>

                <div className='repo_tab_hr'>
                    <div className='repo_tab_hr1'><hr /></div>
                    <div className='repo_tab_now'></div>
                </div>

                <div className='repo_page'>
                    {
                        loading
                        ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '77.5vh' }}><h1><FontAwesomeIcon icon={faSpinner} spinPulse /> 로딩중입니다...</h1></div>
                        : (
                        error
                            ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '77.5vh' }}><h1>⚠️ 오류가 발생했습니다.</h1></div>
                            : (
                            !projects
                                ? null
                                : <h1>My Projects</h1>
                            )
                        )
                    }
                </div>
            </main>
        </>
    )
}
