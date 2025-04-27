import React from 'react';
import Link from 'next/link'
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';
import dayCheck from '../components/Day.js'
import NotFound from '../404.js';
export const runtime = 'experimental-edge';

export default function ResolveRoute({data, url, title, description, fileData}) {
  if (data === undefined) {
    return <NotFound />
  } else {
    const star = 0;
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="description" content={description} />
          <meta name="og:description" content={description} />
			  </Head>

        <div className='repo_header'>
          <h2><FontAwesomeIcon icon={faBook} /> <Link href="/">YSJ</Link> / <Link href={url}>{data.name}</Link> <span className='badge'>Public</span></h2>
        </div>

        <div className='repo_tab'>
          <Link href={url}><button className='repo_tab_btn'><FontAwesomeIcon icon={faCode} /> 코드</button></Link>
        </div>

        <div className='repo_tab_hr'>
          <div className='repo_tab_hr1'><hr /></div>
          <div className='repo_tab_now'></div>
        </div>

        <div className='repo_page'>
            <div className='repo_detail_content'>
                <button className='repo_branch_btn'><div style={{marginLeft: '10px', marginRight: '10px'}}><FontAwesomeIcon icon={faCodeBranch} style={{marginRight: '5px'}} /> main</div></button>

                <div className='repo_files_frame'>
                    <table className='repo_files'>
                        <thead>
                            <tr>
                                <th colSpan="3" style={{backgroundColor: '#161B22'}}>
                                    <div className='table_text'>
                                        <img src='/favicon-192x192.png' alt='logo' width='32px' height='32px' style={{borderRadius: '50%'}}/> <Link href="/">YSJ</Link> <p style={{marginLeft: '10px'}}>{data.commitMessage}</p>
                                    </div>
                                    <div style={{textAlign: 'right', marginTop: '15px', marginLeft: '8px', marginRight: '8px'}}>{dayCheck(data.writeDay)} 전</div>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className='repo_code' id="code">
                    <p style={{textAlign: 'left', marginLeft: '20px'}}><code>{fileData.title}</code></p>
                    <hr />
                    <div className='text'>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                blockquote({ node, children, ...props }) {
                                    return (<blockquote style={{padding: '0 1.8em', color: '#c4c4c4', borderLeft: '0.2em solid #d0d7de'}} {...props}>{children}</blockquote>);
                                },
                                a({ node, children, ...props }) {
                                    return (<a {...props} target="_blank">{children}</a>)
                                },
                                li({ node, children, ...props }) {
                                    return (<li {...props} style={{lineHeight: '150%'}}>{children}</li>)
                                }
                            }}
                        >
                            {fileData.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export async function getServerSideProps(context) {
  if (context.params.root !== context.params.root.toLowerCase()) {
    return {
      redirect: {
        permanent: false,
        destination: `/${context.params.root.toLowerCase()}/${context.params.file.toLowerCase()}`,
      },
      props: {},
    };
  }

  if (context.params.file !== context.params.file.toLowerCase()) {
    return {
      redirect: {
        permanent: false,
        destination: `/${context.params.root.toLowerCase()}/${context.params.file.toLowerCase()}`,
      },
      props: {},
    };
  }

  const data = require('./data.json')

  if (data[context.params.root] === undefined) {
    return {props: {}}
  }

  var fileData = null;

  data[context.params.root]['files'].forEach(function(file){
    if (file['name'] == context.params.file) {
      fileData = file;
    }
  });

  if (fileData === null) {
    return {props: {}}
  } else {
    return {
      props: {data: data[context.params.root], fileData: fileData, url: `/${context.params.root}`, title: `${data[context.params.root]['name']}/${fileData['title']} - Yunseo Jung`, description: `${data[context.params.root]['name']} 레포지토리의 ${fileData['title']} 파일을 확인해보세요.`}
    };
  }
}