import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlus, faThumbTack, faBook } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import styles from '@/styles/repositories.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>레포지토리 목록 - Yunseo Jeong</title>
                <meta name="title" content="레포지토리 목록 - Yunseo Jeong" />
                <meta property="og:title" content="레포지토리 목록 - Yunseo Jeong" />
                <meta name="description" content="전체 레포지토리 목록을 확인해보세요!" />
                <meta name="og:description" content="전체 레포지토리 목록을 확인해보세요!" />
            </Head>

            <main>
                <div className={styles.list}>
                    <hr />
                    <h1>🌟 여기에 레포지토리 목록 입력</h1>
                    <hr />
                </div>
            </main>
        </>
    )
}
