import { createContext, useContext } from "react";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socketIOContext = createContext();

function SocketIOProvider({ children }) {
    const [isSocketInitialized, setIsSocketInitialized] = useState(false);
    const socketIO = useRef(null);

    useEffect(function () {
        socketIO.current = io(import.meta.env.VITE_BACKEND_SERVER);
        socketIO.current.on("connect", function () {
            console.log("a user connected.");
        });
        setIsSocketInitialized(true);
    }, []);

    return (
        <socketIOContext.Provider value={{ socketIO, isSocketInitialized }}>
            {children}
        </socketIOContext.Provider>
    );
}

function useSocketIO() {
    const context = useContext(socketIOContext);
    if (context === undefined) throw new Error("Le contexte n'est pas defini.");
    return context;
}

export { useSocketIO, SocketIOProvider };
