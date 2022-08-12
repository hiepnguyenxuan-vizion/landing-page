import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';

import Home from 'pages/home';
import BecomeAPartner from 'pages/become-a-partner';
// import ContactUs from 'pages/contact-us';

import CaseStudy from 'pages/case-study';
import Others from 'pages/case-study/others';
import RealEstate from 'pages/case-study/real-estate';
import Retails from 'pages/case-study/retails';

import NotFound from 'pages/not-found';
import Gallery from 'pages/demo';
import GalleryDemo from 'pages/demoSecond';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact-us" element={<Home />} />
        <Route path="/become-a-partner" element={<BecomeAPartner />} />
        <Route path="case-study">
          <Route index element={<CaseStudy />} />
          <Route path="real-estate" element={<RealEstate />} />
          <Route path="retails" element={<Retails />} />
          <Route path="others" element={<Others />} />
        </Route>
      </Route>
      <Route path="/demo" element={<GalleryDemo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
