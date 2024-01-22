import React from 'react';
import Router from '@/Router';
import '@/reset.css';
import { AppProvider } from './contexts/Context';

const App = () => {
  return (
    <AppProvider>
      <div className='App'>
        <Router />
      </div>
    </AppProvider>
  );
};

export default App;
