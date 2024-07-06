import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SocketIOProvider } from "./context/SocketIOContext";
import RoomEtu from "./Etudiants/pages/Room/RoomEtu";
import AcceuilEtu from "./Etudiants/pages/Acceuil/AcceuilEtu";
import RoomDetailEtu from "./Etudiants/pages/Room/RoomDetailEtu";
import IndexEtu from "./Etudiants/IndexEtu";
import IndexProf from "./Professeur/IndexProf";
import AcceuilProf from "./Professeur/pages/Acceuil/AcceuilProf";
import Index from "./Index";
import RoomProf from "./Professeur/pages/Room/RoomProf";
import RoomDetailProf from "./Professeur/pages/Room/RoomDetailProf";

function App() {
    const etuUser = localStorage.getItem('EtuUser');
    const profUser = localStorage.getItem('ProfUser');

    return (
        <BrowserRouter>
            <section className="bg-slate-50">
                <Routes>
                    <Route index element={<Index />} />

                    {/* Vérification et redirection pour les étudiants */}
                    <Route path="/Etudiant" element={etuUser ? <IndexEtu /> : <IndexEtu />}>

                        <Route index element={<AcceuilEtu />} />
                        <Route path="RoomEtu/Detail" element={<RoomDetailEtu />} />
                        <Route
                            path="RoomEtu"
                            element={
                                <SocketIOProvider>
                                    <RoomEtu />
                                </SocketIOProvider>
                            }
                        />
                    </Route>

                    {/* Vérification et redirection pour les professeurs */}
                    <Route path="/Professeur" element={profUser ? <IndexProf /> : <IndexProf />}>

                        <Route index element={<AcceuilProf />} />
                        <Route path="RoomProf/Detail" element={<RoomDetailProf />} />

                        <Route
                            path="RoomProf"
                            element={
                                <SocketIOProvider>
                                    <RoomProf />
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
