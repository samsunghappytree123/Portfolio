import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode } from '@fortawesome/free-solid-svg-icons'
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

                    <div className='cardContainer'>
                        {
                            error === true
                            ? <h1>오류가 발생했습니다.</h1>
                            : list.data.map(project => (
                                <div className='card' key={project.name}>
                                    <div className='cardImage'><Image src={project.defaultImage} width="80" height="80" /></div>
                                    <div className='text'>
                                        <p><FontAwesomeIcon icon={faBook} /> <Link href={project.path}>{project.name}</Link> {project.activate === true ? <span className='badge'>운영 중</span> : <span className='badgeYellow'>운영 종료</span>}</p>
                                        <p className='repo_text'>{project.shortDescription}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
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