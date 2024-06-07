import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./page/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
