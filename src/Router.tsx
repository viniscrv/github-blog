import { Routes, Route } from "react-router-dom";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<div>Hello World</div>}/>
        </Routes>
    );
}