import React from 'react';
import Link from 'next/link'
import Head from 'next/head';
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons'

export default function NotFound() {
	return (
		<>
			<Head>
				<title>404 - Yunseo Jeong</title>
				<meta property="og:title" content="404 - Yunseo Jeong" />
				<meta name="description" content="존재하지 않는 페이지입니다." />
				<meta name="og:description" content="존재하지 않는 페이지입니다." />
			</Head>

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '93vh',
                    textAlign: 'center'
				}}
			>
				<div>
					<h1>🚧 404 🚧</h1>
					<h2>요청하신 페이지가 존재하지 않습니다.</h2>
					<p>이 페이지가 이동되었거나, 존재하지 않는 것 같아요.</p>
					<button as={Link} onClick={()=>{Router.back()}} variant="info"><FontAwesomeIcon icon={faArrowLeft} /> 이전 페이지로 이동하기</button> <Link href="/"><button as={Link} variant="primary"><FontAwesomeIcon icon={faHouse} /> 메인 페이지로 이동하기</button></Link>
				</div>
			</div>
		</>
	);
};