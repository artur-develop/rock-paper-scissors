import React, { FC } from "react";
import styles from "./Logs.module.css";

import cn from 'classnames'

interface LogsComponent {
  logsList: string[];
}

const Logs: FC<LogsComponent> = ({ logsList }) => {
  return (
    <div className={cn('item', styles.logs)}>
      <div className={'itemCaption'}>Logs</div>
      {logsList.map((log, index) => (
        <div key={index}>{log}</div>
      ))}
    </div>
  );
};

export default Logs;
