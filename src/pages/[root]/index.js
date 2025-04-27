import React from 'react';
import Link from 'next/link'
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faCodeBranch, faFile, faBookOpen, faScaleBalanced, faStar } from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';
import dayCheck from '../components/Day.js'
import NotFound from '../404.js';
export const runtime = 'experimental-edge';

export default function ResolveRoute({data, url, title}) {
  if (data === undefined) {
    return <NotFound />
  } else {
    const star = 0;
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="description" content={data.description} />
          <meta name="og:description" content={data.description} />
			  </Head>

        <div className='repo_header'>
          <h2><FontAwesomeIcon icon={faBook} /> <Link href="/">YSJ</Link> / <Link href={url}>{data.name}</Link> <span className='badge'>Public</span></h2>
          <div className='repo_sidebar_m'>
            {data.description}
            <div className="sideLinks" style={{marginTop: '10px', marginBottom: '10px', color: '#8B949E'}}>
              <a href="#readme"><FontAwesomeIcon icon={faBookOpen} /> Readme</a>  |  <a href="https://github.com/samsunghappytree123/Portfolio/blob/main/LICENSE" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faScaleBalanced} /> MIT license</a>  |  <a href="https://github.com/samsunghappytree123/Portfolio/stargazers" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faStar} /> {star} Star</a>
            </div>
          </div>
        </div>

        <div className='repo_tab'>
          <Link href={url}><button className='repo_tab_btn'><FontAwesomeIcon icon={faCode} /> 코드</button></Link>
        </div>

        <div className='repo_tab_hr'>
          <div className='repo_tab_hr1'><hr /></div>
          <div className='repo_tab_now'></div>
        </div>

        <div className='repo_page'>
          <div className='repo_content'>
            <button className='repo_branch_btn'><div style={{marginLeft: '10px', marginRight: '10px'}}><FontAwesomeIcon icon={faCodeBranch} style={{marginRight: '5px'}} /> main</div></button>
            <div className='repo_files_frame'>
              <table className='repo_files'>
                <thead>
                  <tr>
                    <th colSpan="2" style={{backgroundColor: '#161B22'}}>
                      <div className='table_text'>
                          <img src='/favicon-192x192.png' alt='logo' width='32px' height='32px' style={{borderRadius: '50%'}}/> <Link href="/">YSJ</Link> <p style={{marginLeft: '10px'}}>{data.commitMessage}</p>
                      </div>
                      {/* <div style={{textAlign: 'right', marginTop: '15px', marginLeft: '8px', marginRight: '8px'}}>{dayCheck(data.writeDay)} 전</div> */}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(data.files).map(file =>(
                    <tr key={file.name} className='file_list_tr'>
                      <td style={{minWidth: '140px', width: '30%', borderRight: 'none'}}>
                        <div style={{display: 'block', marginTop: '8px', marginBottom: '8px', marginLeft: '10px'}} className='tableLink'>
                          <FontAwesomeIcon icon={faFile} style={{marginRight: '10px'}} /><Link href={file.fileUrl}>{file.title}</Link>
                        </div>
                      </td>
                      <td style={{minWidth: '100px', width: '70%', color: '#8B949E', borderLeft: 'none'}}>
                        {file.commitMessage}
                      </td>
                      {/* <td style={{minWidth: '85px', width: '20%', color: '#8B949E', borderLeft: 'none', marginTop: '8px', marginBottom: '8px'}}>
                        <div style={{textAlign: 'right', marginLeft: '8px', marginRight: '8px'}}>
                          {dayCheck(file.writeDay)} 전
                        </div>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {
              data.files[0].name === 'readme.md'
              ? (<div className='repo_readme' id="readme">
                <p style={{textAlign: 'left', marginLeft: '20px'}}><code>{data.files[0]['title']}</code></p>
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
                    {data.files[0].content}
                  </ReactMarkdown>
                </div>
              </div>)
             : null
            }
          </div>
          <div className='repo_sidebar'>
            <p style={{fontSize: '25px'}} className="boldText">소개</p>
            {data.description}
            <hr style={{marginTop: '10px', marginBottom: '10px'}}/>
            <div style={{marginTop: '10px', marginBottom: '5px'}} className="sideLinks">
              <a href="#readme"><FontAwesomeIcon icon={faBookOpen} /> Readme</a>
            </div>
            <div style={{marginTop: '5px', marginBottom: '5px'}} className="sideLinks">
              <a href="https://github.com/samsunghappytree123/Portfolio/blob/main/LICENSE" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faScaleBalanced} /> MIT license</a>
            </div>
            <div style={{marginTop: '5px', marginBottom: '5px'}} className="sideLinks">
              <a href="https://github.com/samsunghappytree123/Portfolio/stargazers" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faStar} /> {star} Star</a>
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
        destination: context.params.root.toLowerCase(),
      },
      props: {},
    };
  }

  const data = require('./data.json')

  if (data[context.params.root] === undefined) {
    return {props: {}}
  } else {
    return {
      props: {data: data[context.params.root], url: context.params.root, title: `${data[context.params.root]['name']} - Yunseo Jung`},
    };
  }
}