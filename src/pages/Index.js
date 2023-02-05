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
                <div className='user_profile_overview'>
                    <h1>Yunseo Jeong</h1>
                    <h2>😜 안녕하세요, 삼해트입니다.</h2>
                    <p>🚧 현재 이 페이지는 준비중입니다 :)</p>
                </div>
            </div>
        </>
    )
};

export default Index;