import Layout from '../../components/layout';
import { getPosts, getPostDetails } from '../../services';
import { useRouter } from 'next/router';
import {utilStyles} from '../../styles/utils.module.css'
import PostDetail  from '../../components/PostDetail';
import Head from 'next/head';
export default function Post({post}) {
    const router = useRouter();

  return (<Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostDetail post={post}/>






  </Layout>);
}
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}