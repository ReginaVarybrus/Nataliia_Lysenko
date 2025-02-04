import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/routesConfig';
import { GlobalStyles } from './GlobalStyles';

import Loader from '@/components/Loader/Loader';
// import './css/App.css';
// import Navigation from "./components/Navigation";
// import MainPage from "./pages/MainPage";
// import MassageTherapyPage from "./pages/MassageTherapyPage";
// import NeurographicsPage from "./pages/NeurographicsPage";
// import AromaDiagnosticsPage from "./pages/AromaDiagnosticsPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Suspense>
    {/* <div className="App">
      <BrowserRouter>
        <div className="Main-logo"><h2>Lavender</h2></div>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/massage" element={<MassageTherapyPage />} />
          <Route path="/neurographics" element={<NeurographicsPage />} />
          <Route path="/aroma" element={<AromaDiagnosticsPage />} />
        </Routes>
      </BrowserRouter>
    </div> */}
  </React.StrictMode>
);

export default App;
