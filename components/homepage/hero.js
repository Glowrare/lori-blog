import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/avatar.png' alt="An image showing Lori's avatar" width={320} height={320} />
      </div>
      <h1>Hi, I'm Lori.</h1>
      <p>I blog about food - especially recipes and nutrition facts.</p>
    </section>
  );
};
export default Hero;
