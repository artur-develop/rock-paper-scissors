import React, { FC } from "react";
import styles from "./Result.module.css";
import { GameResult } from "../../../../enum";

interface ResultProps {
  winner: string;
  onRestart: () => void;
}

const Result: FC<ResultProps> = ({ winner, onRestart }) => {
  return (
    <div className={styles.winner}>
      {winner !== GameResult.DRAW ? (
        <div>Winner {winner}!</div>
      ) : (
        <div>Draw!</div>
      )}
      <button onClick={onRestart} className={styles.button}>
        Restart game
      </button>
    </div>
  );
};

export default Result;
