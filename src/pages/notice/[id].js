import Head from 'next/head'
import dayCheck from '../components/Day.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';
import NotFound from '../404.js';
export const runtime = 'experimental-edge';

export default function noticeDetail({data, title}) {
  if (data === undefined) {
    return <NotFound />
  } else {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta property="og:title" content={title} />
          <meta name="description" content="공지사항을 확인해보세요." />
          <meta name="og:description" content="공지사항을 확인해보세요." />
        </Head>

        <main>
          <div className='repo_page'>
            <div className='noticeDetailHeader'>
              <h1 style={{textAlign: 'center'}}><FontAwesomeIcon icon={faBullhorn} /> {data.title}</h1>
              <p style={{textAlign: 'center', color: '#8B949E'}}><FontAwesomeIcon icon={faUser} /> {data.author} | <FontAwesomeIcon icon={faCalendar} /> {dayCheck(data.writeDate)} 전</p>
            </div>
            <div className='noticeDetailContent'>
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
                  {data.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export async function getServerSideProps(context) {
  const res = await fetch("https://sage-naiad-5bcd9d.netlify.app/content.json");
  if (res.status !== 200) {
    return {props: {}}
  } else {
    const list = await res.json();
    if (list[context.params.id] === undefined) {
      return {props: {}}
    }
    return {
      props: {data: list[context.params.id], title: `${list[context.params.id]['title']} > 공지사항 - Yunseo Jeong`,}
    };
  }
}