import React from 'react';
import Link from 'next/link'
import Head from 'next/head';
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons'

export default function Redirect() {
	return (
		<>
			<Head>
				<title>✨️Sparkly 근태 대표에 대한 공론화 - Yunseo Jeong</title>
				<meta property="og:title" content="✨️Sparkly 근태 대표에 대한 공론화 - Yunseo Jeong" />
				<meta name="description" content="✨️Sparkly 근태 대표에 대한 공론화입니다. 한번만 읽어주세요." />
				<meta name="og:description" content="✨️Sparkly 근태 대표에 대한 공론화입니다. 한번만 읽어주세요." />
        <meta content={`0; URL=https://nebula-galaxy-cd6.notion.site/Sparkly-b7b0b47972ab4d0894608ae9de926a92`} httpEquiv="Refresh"/>
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
					<h1>📡 원하시는 페이지로 이동할게요!</h1>
					<p>⚠ 만일 이동되지 않는다면, <Link href="https://nebula-galaxy-cd6.notion.site/Sparkly-b7b0b47972ab4d0894608ae9de926a92" passHref>여기</Link>를 눌러 이동해주세요!</p>
				</div>
			</div>
		</>
	);
};
