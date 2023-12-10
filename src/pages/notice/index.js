import Head from 'next/head'
import Link from 'next/link'
import dayCheck from '../components/Day.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faBullhorn } from '@fortawesome/free-solid-svg-icons'
export const runtime = 'experimental-edge';

export default function noticeHome({list}) {
  return (
    <>
      <Head>
        <title>공지사항 - Yunseo Jeong</title>
        <meta name="title" content="공지사항 - Yunseo Jeong" />
        <meta property="og:title" content="공지사항 - Yunseo Jeong" />
        <meta name="description" content="안녕하세요, 삼해트입니다." />
        <meta name="og:description" content="안녕하세요, 삼해트입니다." />
      </Head>

      <main>

      <div className='repo_header'>
          <h2><FontAwesomeIcon icon={faBook} /> <Link href="/">YSJ</Link> / <Link href='/notice'>Notice</Link> <span className='badge'>Public</span></h2>
        </div>

        <div className='repo_tab'>
          <Link href="/notice"><button className='repo_tab_btn'><FontAwesomeIcon icon={faCode} /> 코드</button></Link>
        </div>

        <div className='repo_tab_hr'>
          <div className='repo_tab_hr1'><hr /></div>
          <div className='repo_tab_now'></div>
        </div>

        <div className='repo_page'>
        <h1><FontAwesomeIcon icon={faBullhorn} /> 공지사항</h1>
        <div className='repo_files_frame'>
            <table className='repo_files' style={{tableLayout: 'fixed'}}>
                <thead>
                <tr>
                    <th><div className="noticeHeader">제목</div></th>
                    <th style={{width: '90px'}}><div className="noticeHeader">게시일</div></th>
                </tr>
                </thead>
                <tbody>
                {
                    list.data.length === 0
                    ? <tr className='file_list_tr'><td colSpan="2"><div style={{textAlign: 'center', margin: '8px'}}>공지사항이 없습니다.</div></td></tr>
                    : list.data.map(notice => (
                        <>
                            <tr className='file_list_tr'>
                                <td style={{borderRight: 'none', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                                    <div style={{textAlign: 'left', margin: '8px'}} className='tableLink noticeTitle'>
                                        <Link href={notice.path}>{notice.title}</Link>
                                    </div>
                                </td>
                                <td style={{color: '#8B949E', margin: '8px'}}>
                                    <div style={{textAlign: 'center', marginLeft: '8px', marginRight: '8px'}}>
                                        {dayCheck(notice.writeDate)} 전
                                    </div>
                                </td>
                            </tr>
                        </>
                    ))
                }
                </tbody>
            </table>
        </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
    const res = await fetch("https://api.hysj.kr/portfolio/notice/list");
    if (res.status !== 200) {
        return {
            props: {list: {data: []}}
        }
    } else {
        const list = await res.json();
        return {
            props: {list: list},
        };
    }
}