import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomEtu from "./Etudiants/pages/RoomEtu";

import { SocketIOProvider } from "./context/SocketIOContext";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <SocketIOProvider>
                            <RoomEtu />
                        </SocketIOProvider>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
