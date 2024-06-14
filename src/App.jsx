import { BrowserRouter, Routes, Route } from "react-router-dom";


import { SocketIOProvider } from "./context/SocketIOContext";
import RoomEtu from "./Etudiants/pages/Room/RoomEtu";
import LoginEtu from "./Etudiants/pages/LoginEtu";
import AcceuilEtu from "./Etudiants/pages/Acceuil/AcceuilEtu";
import RoomDetailEtu from "./Etudiants/pages/Room/RoomDetailEtu";
import IndexEtu from "./Etudiants/IndexEtu";
import IndexProf from "./Professeur/IndexProf";
import LoginProf from "./Professeur/pages/LoginProf";
import AcceuilProf from "./Professeur/pages/Acceuil/AcceuilProf";

function App() {
    return (
        <BrowserRouter>
            <section className="bg-slate-50">
                <Routes>
                    <Route path="/Etudiant" element={<IndexEtu />}>
                        <Route index
                            element={<LoginEtu />} />
                        <Route path="Acceuil"
                            element={<AcceuilEtu />} />
                        <Route path="RoomEtu/Detail"
                            element={<RoomDetailEtu />} />

                        <Route
                            path="RoomEtu"
                            element={
                                <SocketIOProvider>
                                    <RoomEtu />
                                </SocketIOProvider>
                            }
                        />
                    </Route>
                    
                    <Route path="/" element={<IndexProf />}>
                        <Route index
                            element={<LoginProf />} />
                        <Route path="Acceuil"
                            element={<AcceuilProf />} />
                        <Route path="RoomEtu/Detail"
                            element={<RoomDetailEtu />} />

                        <Route
                            path="RoomEtu"
                            element={
                                <SocketIOProvider>
                                    <RoomEtu />
                                </SocketIOProvider>
                            }
                        />
                    </Route>
                    
                </Routes>
            </section>
        </BrowserRouter>
    );
}

export default App;
