import React from "react";
import styles from "./Header.module.css";

import cn from 'classnames'

const Header = () => {
  return <div className={'container'}>
            <div className={cn('box', styles.logo)}>Rock | Paper | Scissors</div>
         </div>;
};

export default Header;
