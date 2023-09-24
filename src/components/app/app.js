import { React, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import '../../style.css';

import ItemsList from '../pages/items/items'





const App = () => {

  return (
    <Fragment>
      
      <Routes>
        
        <Route path="/" element={<ItemsList />} />

      </Routes>
    </Fragment>
  )
}

export default App
