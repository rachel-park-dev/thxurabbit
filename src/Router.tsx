import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Intro from '@/pages/Intro';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import CheckThanksResult from '@/pages/CheckThanksResult';
import TotalThanksResult from '@/pages/TotalThanksResult';
import WriteThanks from '@/pages/WriteThanksCard';
import ThanksShare from '@/pages/ThanksShare';
import { NotFound } from '@/NotFound';

const Router = () => {
  const isRedirected = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={isRedirected ? <Navigate to='/result' /> : <Intro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={isRedirected ? <Navigate to='/result' /> : <Register />} />
        <Route path='/check' element={isRedirected ? <Navigate to='/result' /> : <CheckThanksResult />} />
        <Route path='/write/:userName' element={isRedirected ? <Navigate to='/result' /> : <WriteThanks />} />
        <Route path='/share' element={isRedirected ? <Navigate to='/result' /> : <ThanksShare />} />
        <Route path='/result' element={<TotalThanksResult />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
