import React from 'react'
import Fruit from './components/Fruit'
import Vegetable from './components/Vegetable'
import './App.css';
import Users from './components/Users';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <div className='App'>
      <Fruit />
      <Vegetable />
      <Users />
      <Gallery />
    </div>
  )
}

export default App