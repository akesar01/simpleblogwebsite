import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getPosts } from '../services';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import moment from 'moment';
import {Author} from '../components/Author';
import {useState} from 'react';
export default function Home({posts}) {
  // console.log(posts)
  // const [author,setauthor] = useState(posts.node.author);
  return (
    <Layout home>
      <Head>
        <title>Blog</title>
      </Head>
      
      {/* <Author author={author} /> */}
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blogs</h2>
        <ul className={utilStyles.list}>
        {
          posts.map((post,index)=>(
            
            <li className={utilStyles.listItem} key = {index} >
              <Link href={`/posts/${post.node.slug}`}>
              {post.node.title}
              </Link>
              <br/>
              <small className={utilStyles.lightText}>
              {moment(post.createdAt).format('MMM DD, YYYY')}
              </small>
            </li>

          ))
        }

      </ul>
      </section>
      
     
      
     
    </Layout>
  );
}
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
