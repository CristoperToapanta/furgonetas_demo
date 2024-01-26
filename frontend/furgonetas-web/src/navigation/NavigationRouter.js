import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainScreen from '../main/MainScreen';
import EmbarqueScreen from '../embarque/EmbarqueScreen';
import ListadoScreen from '../embarque/ListadoScreen';

export default function NavigationRouter() {

  return (
    <Routes>
      <Route path="/" element={<MainScreen />}>
        <Route path="/embarque" element={<EmbarqueScreen />} />
        <Route path="/listado" element={<ListadoScreen />} />
      </Route>
    </Routes>
  );
}
