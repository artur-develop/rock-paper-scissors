import styles from "./Players.module.css";
import React, { FC } from "react";

import cn from 'classnames'

interface PlayersComponent {
  playersList: string[];
}

const Players: FC<PlayersComponent> = ({ playersList }) => {
  return (
    <div className={cn('item', styles.playersList)}>
      <div className={'itemCaption'}>Players list</div>
      {playersList.map((username, index) => (
        <div key={index} className={styles.playerItem}>
            <img src="/img/user.png" alt={username}/>{username}
        </div>
      ))}
    </div>
  );
};

export default Players;
