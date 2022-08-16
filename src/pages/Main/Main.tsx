import React, { FC, useCallback, useEffect, useState } from "react";
import lodash from "lodash";

import ControlPanel from "./components/ControlPanel";
import Players from "../../components/Players";
import Logs from "../../components/Logs";
import { getUsername } from "../../utils/localStorage";
import { winList } from "../../constants";
import { EmitType, GameResult, Shapes } from "../../enum";

import styles from "./Main.module.css";
import { socketEmit, socketInit } from "../../api/api";
import { Player } from "../../types";

const Main: FC = () => {
  const [winner, setWinner] = useState<string>("");
  const [playersList, setPlayersList] = useState<string[]>([]);
  const [logsList, setLogsList] = useState<string[]>([]);

  const addLogs = useCallback((value: string) => {
    setLogsList((prevState) => {
      return [...prevState, value];
    });
  }, []);

  const onConnected = useCallback(
    (player: Player) => {
      const username = player.username;
      addLogs(username + " connected to room");
    },
    [addLogs]
  );

  const onPlayersReceived = (players: string[]) => {
    setPlayersList(players);
  };

  const onPlayersChoice = useCallback(
    (player: Player) => {
      addLogs(player.username + " the choice is made");
    },
    [addLogs]
  );

  const onGameFinished = useCallback(
    (response: { results: Player[] }) => {
      const { results } = response;
      const firstPlayer = lodash.first(results);
      const secondPlayer = lodash.last(results);

      if (
        firstPlayer?.choice &&
        secondPlayer &&
        firstPlayer.choice !== secondPlayer.choice
      ) {
        setWinner(
          winList[firstPlayer.choice] === secondPlayer.choice
            ? firstPlayer.username
            : secondPlayer.username
        );
      } else {
        setWinner(GameResult.DRAW);
      }

      addLogs("game finished");
    },
    [addLogs]
  );

  const handleClick = (choice: Shapes) => {
    socketEmit(EmitType.CHOOSE, choice);
    addLogs("you choose " + choice);
  };

  const onRestart = () => {
    setLogsList([]);
    setWinner("");
  };

  useEffect(() => {
    socketInit({
      onConnected,
      onPlayersReceived,
      onPlayersChoice,
      onGameFinished,
    });
    socketEmit(EmitType.GET_PLAYERS);
  }, [onConnected, onGameFinished, onPlayersChoice]);

  return (
    <div className={"container"}>
      <div className={"box main"}>
        <div className={styles.username}>Hello, {getUsername()}</div>
        <Players playersList={playersList} />
        <ControlPanel
          handleClick={handleClick}
          winner={winner}
          onRestart={onRestart}
        />
        <Logs logsList={logsList} />
      </div>
    </div>
  );
};

export default Main;
