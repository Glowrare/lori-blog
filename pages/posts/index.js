import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import { Fragment } from 'react';

const AllPostsPage = (props) => {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>View All Posts</title>
        <meta name='description' content='A list of all food recipe blog posts.' />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};
export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
