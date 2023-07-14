import { Fragment } from 'react';
import Link from 'next/link';

import classes from './button.module.css';

const Button = (props) => {
  const { path, mode = 'btn', text, design = 'default', clickHandler } = props;
  return (
    <Fragment>
      {mode === 'link' && (
        <Link href={path}>
          <a className={`${classes.button} ${classes[design]}`}>{text}</a>
        </Link>
      )}
      {mode === 'btn' && (
        <button type='button' className={`${classes.button} ${classes[design]}`} onClick={clickHandler}>
          {text}
        </button>
      )}
    </Fragment>
  );
};
export default Button;
