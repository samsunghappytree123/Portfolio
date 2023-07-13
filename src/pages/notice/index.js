import Head from 'next/head'
import Link from 'next/link'
import * as checkScript from '../components/Day.js'
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
        <div className='repo_page'>
        <h1>공지사항</h1>
        <div className='repo_files_frame'>
            <table className='repo_files'>
                <thead>
                <tr>
                    <th style={{width: '45px'}}><div className="noticeHeader">ID</div></th>
                    <th><div className="noticeHeader">제목</div></th>
                    <th style={{width: '90px'}}><div className="noticeHeader">게시일</div></th>
                </tr>
                </thead>
                <tbody>
                    {list.data.map(notice => (
                        <>
                            <tr className='file_list_tr'>
                                <td style={{borderRight: 'none'}}>
                                    <div style={{textAlign: 'center', margin: '8px'}} className='tableLink'>
                                        {notice.id}
                                    </div>
                                </td>
                                <td style={{borderRight: 'none'}}>
                                    <div style={{textAlign: 'left', margin: '8px'}} className='tableLink noticeTitle'>
                                        <Link href="/notice/1">{notice.title}</Link>
                                    </div>
                                </td>
                                <td style={{color: '#8B949E', margin: '8px'}}>
                                    <div style={{textAlign: 'center', marginLeft: '8px', marginRight: '8px'}}>
                                        {checkScript.dayCheck(notice.writeDate)} 전
                                    </div>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
    const res = await fetch("https://sage-naiad-5bcd9d.netlify.app/list.json");
    const list = await res.json();
    return {
      props: {list: list},
    };
  }