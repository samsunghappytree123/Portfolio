import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlus, faThumbTack, faBook } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  return (
    <>
      <Head>
        <title>프로필 - Yunseo Jeong</title>
        <meta name="title" content="프로필 - Yunseo Jeong" />
        <meta property="og:title" content="프로필 - Yunseo Jeong" />
        <meta name="description" content="안녕하세요, 삼해트입니다." />
        <meta name="og:description" content="안녕하세요, 삼해트입니다." />
      </Head>

      <main>
        <div className='user_profile'>
          <div className='user_profile_image'>
            <Image src={'/favicon-512x512.png'} alt='logo' width={296} height={296} style={{borderRadius: '50%', marginBottom: '10px'}} />
            <div>
              <h2>Yunseo Jeong</h2>
              <p style={{color: '#B1B5B0', marginTop: '-15px'}}>samsunghappytree123</p>
              <p>👋 Hello, World!</p>
              <div className='user_profile_links'>
                <hr />
                <p style={{marginBottom: '-10px'}}><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:samsunghappytree123@naver.com" rel="noreferrer" target="_blank">samsunghappytree123@naver.com</a></p>
                <p style={{marginBottom: '-10px'}}><FontAwesomeIcon icon={faInstagram} /> <a href="https://instagram.com/ysj0418" rel="noreferrer" target="_blank">@ysj0418</a></p>
                <p style={{marginBottom: '-10px'}}><FontAwesomeIcon icon={faPlus} /> <Link href="/repositories">레포지토리 페이지 참고</Link></p>
              </div>
            </div>
          </div>

          <div className='user_profile_overview' id="overview">
            <p style={{textAlign: 'left', marginLeft: '20px'}}><code>samsunghappytree123/README.md</code></p>
            <hr />
            <div className='text'>
              <h1># Yunseo Jeong</h1>
              <hr style={{marginTop: '-10px', marginBottom: '-10px'}} />
              <h2>😜 안녕하세요, 삼해트입니다.</h2>
              <p>
                  저는 이것저것 개발하면서 즐기고 있는 학생 개발자입니다.<br />
              </p>

              <h2>## 나만의 깃허브 잔디밭</h2>
              <hr style={{marginTop: '-10px'}} />
              <img style={{marginBottom: '10px'}} src="https://ghchart.rshah.org/samsunghappytree123" alt='github_commit_graph' width={900} height={100} />
              <div>
                <img style={{marginBottom: '10px'}} src='https://github-readme-stats.vercel.app/api?username=samsunghappytree123&show_icons=true&theme=transparent' alt='github_stats' width={400} height={140} />
                <img style={{marginBottom: '10px'}} src='https://github-readme-stats.vercel.app/api/top-langs/?username=samsunghappytree123&show_icons=true&theme=transparent&langs_count=4&layout=compact' alt='github_stats' width={400} height={140} />
              </div>

              <p>➡ 저에 대한 더 자세한 정보는 아래의 레포지토리 목록을 확인해주세요!</p>
            </div>
          </div>
          <div className='user_profile_pin_repos' id="pin_repos">
            <h2><FontAwesomeIcon icon={faThumbTack} /> 고정된 레포지토리 목록</h2>
            <div className='repo_list'>
              <div className='user_profile_repo urp_left'>
                <div className='text'>
                  <p><FontAwesomeIcon icon={faBook} /> <Link href="/about">About</Link> <span className='badge'>Public</span></p>
                  <p className='repo_text'>🚀 안녕하세요, 삼해트입니다. 제 소개를 확인해보세요!</p>
                </div>
              </div>
              <div className='user_profile_repo urp_right'>
                <div className='text'>
                  <p><FontAwesomeIcon icon={faBook} /> <Link href="/projects">Projects</Link> <span className='badge'>Public</span></p>
                  <p className='repo_text'>🔧 제가 운영했던 프로젝트 목록을 소개합니다!</p>
                </div>
              </div>
              <div className='user_profile_repo urp_left'>
                <div className='text'>
                  <p><FontAwesomeIcon icon={faBook} /> <Link href="/ability-and-goal">Ability-and-Goal</Link> <span className='badge'>Public</span></p>
                  <p className='repo_text'>🥇 저의 능력과 앞으로의 목표에 대해 작성했습니다!</p>
                </div>
              </div>
              <div className='user_profile_repo urp_right'>
                <div className='text'>
                  <p><FontAwesomeIcon icon={faBook} /> <Link href="/contact">Contact</Link> <span className='badge'>Public</span></p>
                  <p className='repo_text'>📬 저와 연락할 수 있는 방법입니다! 편하게 연락주세요 :)</p>
                </div>
              </div>
              <p style={{textAlign: 'center'}}>더 많은 레포지토리는 <br className='mobile_br' /><Link href="/repositories">레포지토리 페이지</Link>에서 확인하세요!</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
