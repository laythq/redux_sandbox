import React from 'react';
import VisibleChildrenList from '../containers/VisibleChildrenList'
import NewChild from '../containers/NewChild'
import Footer from './Footer'
import './App.css'

const App = () => (
  <div>
    <NewChild />
    <VisibleChildrenList />
    <Footer />
  </div>
)

export default App;
