import React from 'react';
import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import LandingPage from "./landing-page/LandingPage";

function App() {
    return (
        <div className="App">
            <header>
                <Navbar/>
            </header>
            <body>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="*" element={<LandingPage/>}/>
                    </Routes>
                </BrowserRouter>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
