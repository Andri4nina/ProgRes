import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomEtu from "./Etudiants/pages/RoomEtu";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RoomEtu />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
