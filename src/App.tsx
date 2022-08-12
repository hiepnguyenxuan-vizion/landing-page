import LayoutContextProvider from 'components/Layout/context';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import AppRouter from 'router/AppRouter';

function App() {
  return (
    <LayoutContextProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </LayoutContextProvider>
  );
}

export default App;
