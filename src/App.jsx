import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/routesConfig';
import { GlobalStyles } from './styles/GlobalStyles';

import Loader from '@/components/Loader/Loader';
// import './css/App.css';
// import Navigation from "./components/Navigation";
// import MainPage from "./pages/MainPage";
// import MassageTherapyPage from "./pages/MassageTherapyPage";
// import NeurographicsPage from "./pages/NeurographicsPage";
// import AromaDiagnosticsPage from "./pages/AromaDiagnosticsPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <Suspense fallback={<Loader />}>
    <GlobalStyles />
    <RouterProvider router={router} />
  </Suspense>
);

export default App;
