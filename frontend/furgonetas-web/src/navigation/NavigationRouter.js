import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainScreen from '../main/MainScreen';
import EmbarqueScreen from '../embarque/EmbarqueScreen';
import ConductorScreen from '../conductor/conductorScreen';
import FurgonetaScreen from '../furgoneta/FurgonetaScreen';
import RecorridoScreen from '../recorrido/RecorridoScreen';
import RepresentantesScreen from '../representante/RepresentantesScreen';

export default function NavigationRouter() {

  return (
    <Routes>
      <Route path="/" element={<MainScreen />}>
        <Route path="/conductor" element={<ConductorScreen/>}/>
        <Route path="/embarque" element={<EmbarqueScreen />} />
        <Route path="/representante" element={<RepresentantesScreen/>}/>
        <Route path="/furgoneta" element={<FurgonetaScreen/>}/>
        <Route path="/recorrido" element={<RecorridoScreen/>}/>
      </Route>
    </Routes>
  );
}
