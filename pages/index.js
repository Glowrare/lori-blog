import { Fragment } from 'react';
import Hero from '../components/homepage/hero';
import FeaturedPosts from '../components/homepage/featured-posts';
import Head from 'next/head';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props) => {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>Welcome to Lori's Blog</title>
        <meta name='description' content='I blog about food - especially recipes and nutrition facts.' />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};
export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 18000,
  };
}
