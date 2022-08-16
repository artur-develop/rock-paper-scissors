import { io, Socket } from "socket.io-client";
import { getUsername } from "../utils/localStorage";
import { Player } from "../types";
import { URL } from "./constants";
import { EmitType } from "../enum";

interface SocketInitProps {
  onConnected: (player: Player) => void;
  onPlayersReceived: (players: string[]) => void;
  onPlayersChoice: (player: Player) => void;
  onGameFinished: (response: { results: Player[] }) => void;
}

let socket: Socket | null = null;

const socketInit = ({
  onConnected,
  onPlayersReceived,
  onPlayersChoice,
  onGameFinished,
}: SocketInitProps) => {
  if (socket === null) {
    socket = io(URL, {
      query: {
        username: getUsername(),
      },
    });
  }

  socket.on("connected", onConnected);
  socket.on("players_received", onPlayersReceived);
  socket.on("opponent_made_choice", onPlayersChoice);
  socket.on("game_finished", onGameFinished);
};

const socketEmit = (event: EmitType, value?: any) => {
  if (socket) {
    socket.emit(event, value);
  }
};

export { socketInit, socketEmit };
