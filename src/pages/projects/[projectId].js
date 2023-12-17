import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faBook, faBookOpen, faCode, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faKickstarterK, faTwitch, faDiscord } from '@fortawesome/free-brands-svg-icons'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';
import NotFound from '../404.js';
export const runtime = 'experimental-edge';

export default function projectsHome({data, title}) {
    if (data === undefined) {
        return <NotFound />
    } else {
        const type = {
            "homepage": {"icon": <FontAwesomeIcon icon={faHouse} />, "title": "홈페이지"},
            "youtube": {"icon": <FontAwesomeIcon icon={faYoutube} />, "title": "유튜브"},
            "kick": {"icon": <FontAwesomeIcon icon={faKickstarterK} />, "title": "KICK"},
            "twitch": {"icon": <FontAwesomeIcon icon={faTwitch} />, "title": "트위치"},
            "discord": {"icon": <FontAwesomeIcon icon={faDiscord} />, "title": "디스코드"},
            "botInvite": {"icon": <FontAwesomeIcon icon={faDiscord} />, "title": "봇 초대하기"},
            "guide": {"icon": <FontAwesomeIcon icon={faBookOpen} />, "title": "가이드"},
            "blog": {"icon": <FontAwesomeIcon icon={faBlog} />, "title": "블로그"},
        }
        return (
            <>
                <Head>
                    <title>{title}</title>
                    <meta name="title" content={title} />
                    <meta property="og:title" content={title} />
                    <meta name="description" content="프로젝트의 세부사항을 확인해보세요." />
                    <meta name="og:description" content="프로젝트의 세부사항을 확인해보세요." />
                    <meta property="og:image" content={data.defaultImage} />
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
                        <div align="center">
                            <Image src={data.defaultImage} width="150" height="150" style={{borderRadius: '50%'}} />
                            <h1>{data.name}</h1>
                            <p style={{color: '#B1B5B0', marginTop: '-20px'}}>{data.shortDescription}</p>
                            <div className='buttonLink'>
                                {(data.links).map(link => (
                                    <a className='button' target='_blank' key={link.type} href={link.link} title={type[String(link.type)]['title']}><p>{type[String(link.type)]['icon']}</p></a>
                                ))}
                            </div>
                        </div>
                        <div className='noticeDetailContent'>
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
                                    {data.description}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://api.hysj.kr/portfolio/projects/get?id=${context.params.projectId}`);
    if (res.status !== 200) {
      return {props: {}}
    } else {
      const list = await res.json();
      return {
        props: {data: list['data'], title: `${list['data']['name']} > Projects - Yunseo Jeong`,}
      };
    }
  }