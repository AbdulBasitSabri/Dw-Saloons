

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../src/layouts/MainLayout';
import { Home } from '../src/pages/Home';
import { AboutUs } from '../src/pages/AboutUs';
import { Services } from '../src/pages/Services';
import { Gallery } from '../src/pages/Gallery';
import { MakeupCatalogue } from '../src/pages/MakeupCatalogue';
import { AppointmentBooking } from '../src/pages/AppointmentBooking';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/makeup-catalogue" element={<MakeupCatalogue />} />
          <Route path="/appointment-booking" element={<AppointmentBooking />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
