import { Fragment } from 'react';
import Head from 'next/head';

import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

const PostDetailsPage = (props) => {
  const { post } = props;

  return (
    <Fragment>
      <Head>
        <title>{post.title} </title>
        <meta name='description' content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};
export default PostDetailsPage;

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postItem = getPostData(slug);

  return {
    props: {
      post: postItem,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postsFilenames = getPostsFiles();

  const slugs = postsFilenames.map((filename) => filename.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
