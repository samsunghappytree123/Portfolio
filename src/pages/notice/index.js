import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
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
                    <th><h4 style={{textAlign: 'center'}}>ID</h4></th>
                    <th><h4 style={{textAlign: 'center'}}>제목</h4></th>
                    <th><h4 style={{textAlign: 'center'}}>게시일</h4></th>
                </tr>
                </thead>
                <tbody>
                    <tr className='file_list_tr'>
                        <td style={{width: '15px', borderRight: 'none'}}>
                            <div style={{textAlign: 'center', marginLeft: '8px', marginRight: '8px', marginTop: '8px', marginBottom: '8px'}} className='tableLink'>
                                100
                            </div>
                        </td>
                        <td style={{borderRight: 'none'}}>
                            <div style={{textAlign: 'left', marginLeft: '8px', marginRight: '8px'}} className='tableLink'>
                                <Link href="/notice/1">[공지] 공지사항 게시판이 생성되었습니다!</Link>
                            </div>
                        </td>
                        <td style={{minWidth: '85px', width: '20%', color: '#8B949E', marginTop: '8px', marginBottom: '8px'}}>
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
