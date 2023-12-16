import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode } from '@fortawesome/free-solid-svg-icons'
import NotFound from '../404.js';
export const runtime = 'experimental-edge';

export default function projectsHome({data, title}) {
    if (data === undefined) {
        return <NotFound />
    } else {
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