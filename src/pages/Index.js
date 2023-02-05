import React from 'react';

const Index = () => {
    return (
        <>
            <div className='user_profile'>
                <div className='user_profile_image'>
                    <img src='/favicon-192x192.png' alt='logo' width='296px' height='296px' style={{borderRadius: '50%'}}/>
                    <div>
                        <h2>Yunseo Jeong</h2>
                        <p style={{color: '#B1B5B0', marginTop: '-15px'}}>samsunghappytree123</p>
                        <p>👋 Hello, World!</p>
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
                        <img src="https://ghchart.rshah.org/samsunghappytree123" alt='github_commit_graph' width="100%" height="auto" /><br />
                        <img src='https://github-readme-stats.vercel.app/api?username=samsunghappytree123&show_icons=true&theme=transparent' alt='github_stats' width="50%" height="auto" />
                        {/* <img style={{float: 'left'}} src='https://github-readme-stats.vercel.app/api?username=samsunghappytree123&show_icons=true&theme=transparent' alt='github_stats' width="50%" height="auto" /> */}
                        {/* <img style={{float: 'right'}} src='https://github-readme-stats.vercel.app/api/top-langs/?username=samsunghappytree123&show_icons=true&theme=transparent&langs_count=4' alt='github_stats' width="50%" height="auto" /> */}

                        <p>➡ 저에 대한 더 자세한 정보는 아래의 레포지토리 목록을 확인해주세요!</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Index;