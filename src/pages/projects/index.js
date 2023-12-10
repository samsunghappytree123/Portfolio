import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head'
import Link from 'next/link'
import dayCheck from '../components/Day.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faSpinner } from '@fortawesome/free-solid-svg-icons'
export const runtime = 'experimental-edge';

export default function projectsHome({list, error}) {
    return (
        <>
            <Head>
                <title>Projects - Yunseo Jeong</title>
                <meta name="title" content="Projects - Yunseo Jeong" />
                <meta property="og:title" content="Projects - Yunseo Jeong" />
                <meta name="description" content="제 프로젝트들을 확인해보세요!" />
                <meta name="og:description" content="제 프로젝트들을 확인해보세요!" />
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
                        error === true
                        ? <h1>오류가 발생했습니다.</h1>
                        : list.data.map(project => (
                            <>
                                <div className='user_profile_repo'>
                                    <div className='text'>
                                    <p><FontAwesomeIcon icon={faBook} /> <Link href={project.path}>{project.name}</Link> <span className='badge'>Public</span></p>
                                    <p className='repo_text'>{project.shortDescription}</p>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch("https://api.hysj.kr/portfolio/projects/list");
    if (res.status !== 200) {
        return {
            props: {list: {data: []}, error: true}
        }
    } else {
        const list = await res.json();
        return {
            props: {list: list, error: false},
        };
    }
}