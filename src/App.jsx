import { BrowserRouter, Routes, Route } from "react-router-dom";


import { SocketIOProvider } from "./context/SocketIOContext";
import RoomEtu from "./Etudiants/pages/Room/RoomEtu";
import LoginEtu from "./Etudiants/pages/LoginEtu";
import AcceuilEtu from "./Etudiants/pages/Acceuil/AcceuilEtu";
import RoomDetailEtu from "./Etudiants/pages/Room/RoomDetailEtu";

function App() {
    return (
        <BrowserRouter>
            <section className="bg-slate-50">
                <Routes>
                    <Route path="/Login"
                        element={<LoginEtu />} />
                    <Route path="/"
                        element={<AcceuilEtu />} />
                    <Route path="/Room/detail"
                        element={<RoomDetailEtu />} />

                    <Route
                        path="/RoomEtu"
                        element={
                            <SocketIOProvider>
                                <RoomEtu />
                            </SocketIOProvider>
                        }
                    />
                </Routes>
            </section>
        </BrowserRouter>
    );
}

export default App;
