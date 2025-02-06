import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/router';
import { GlobalStyles } from './styles/GlobalStyles';

import Loader from '@/components/Loader/Loader';

const App = () => (
  <Suspense fallback={<Loader />}>
    <GlobalStyles />
    <RouterProvider router={router} />
  </Suspense>
);

export default App;
