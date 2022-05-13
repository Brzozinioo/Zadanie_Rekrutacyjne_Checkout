import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CheckoutPage from "./pages/CheckoutPage";
import SuccessOrderPage from "./pages/SuccessOrderPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="success" element={<SuccessOrderPage />} />
                <Route path="/" element={<CheckoutPage />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
