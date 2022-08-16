import React, { FC } from "react";
import styles from "./ControlPanel.module.css";
import { Shapes } from "../../../../enum";

import cn from 'classnames'
import Result from "../Result";

interface GameProps {
  handleClick: (shapes: Shapes) => void;
  winner: string;
  onRestart: () => void;
}

const ControlPanel: FC<GameProps> = ({ handleClick, winner, onRestart }) => {
  return (
    <div className={cn('item', styles.game)}>
        <div className={'itemCaption'}>Game</div>
        { winner
            ? <Result winner={winner} onRestart={onRestart} />
            :
                <>
                    <p>Please, choose your shape</p>

                    <img
                        className={styles.shape}
                        src="/img/rock.png"
                        alt="Rock"
                        onClick={() => handleClick(Shapes.rock)}
                    />

                    <img
                        className={styles.shape}
                        src="/img/paper.png"
                        alt="Paper"
                        onClick={() => handleClick(Shapes.paper)}
                    />

                    <img
                        className={styles.shape}
                        src="/img/scissors.png"
                        alt="Scissors"
                        onClick={() => handleClick(Shapes.scissors)}
                    />
                </>
        }
    </div>
  );
};

export default ControlPanel;
