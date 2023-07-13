import Head from 'next/head'
import Link from 'next/link'
import * as checkScript from '../components/Day.js'

export default function noticeHome() {
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
                    <tr className='file_list_tr'>
                        <td style={{borderRight: 'none'}}>
                            <div style={{textAlign: 'center', margin: '8px'}} className='tableLink'>
                                1
                            </div>
                        </td>
                        <td style={{borderRight: 'none'}}>
                            <div style={{textAlign: 'left', margin: '8px'}} className='tableLink noticeTitle'>
                                <Link href="/notice/1">공지사항 게시판이 생성되었습니다!</Link>
                            </div>
                        </td>
                        <td style={{color: '#8B949E', margin: '8px'}}>
                            <div style={{textAlign: 'center', marginLeft: '8px', marginRight: '8px'}}>
                                13시간 전
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
      </main>
    </>
  )
}
