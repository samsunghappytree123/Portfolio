import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faList } from '@fortawesome/free-solid-svg-icons'
import styles from '@/styles/repositories.module.css'
export const runtime = 'experimental-edge';

export default function repositories() {
    const data = require('./[root]/data.json')

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
                    <h1 style={{textAlign: 'left'}}><FontAwesomeIcon icon={faList} /> 레포지토리 목록</h1>
                    {Object.keys(data).map(repo => (
                        <>
                            <hr />
                            <div className={styles.text}>
                                <h2><FontAwesomeIcon icon={faBook} /> <Link href={(data[repo].name).toLowerCase()}>{data[repo].name}</Link> <span className='badge'>Public</span></h2>
                                <p className={styles.repo_text}>{data[repo].description}</p> <p className={styles.repo_rtext}>마지막 업데이트 : {data[repo].writeDay}</p>
                            </div>
                        </>
                    ))}
                    <hr style={{marginBottom: '30px'}} />
                </div>
            </main>
        </>
    )
}
