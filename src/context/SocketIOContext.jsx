import { createContext, useContext } from "react";

const socketIOContext = createContext();

function SocketIOProvider({ children }) {
    return <socketIOContext.Provider>{children}</socketIOContext.Provider>;
}

function useSocketIO() {
    const context = useContext(socketIOContext);
    if (context === undefined) throw new Error("Le contexte n'est pas defini.");
    return context;
}

export { useSocketIO, SocketIOProvider };
