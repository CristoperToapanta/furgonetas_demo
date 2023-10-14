import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainScreen from '../main/MainScreen';
import EmbarqueScreen from '../embarque/EmbarqueScreen';
import ConductorScreen from '../conductor/ConductorScreen';
import PasajerosScreen from '../pasajeros/PasajerosScreen';

export default function NavigationRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />}>
        <Route path="/pasajeros" element={<PasajerosScreen/>}/>
        <Route path="/conductor" element={<ConductorScreen/>}/>
        <Route path="/embarque" element={<EmbarqueScreen />} />
      </Route>
    </Routes>
  );
}
