import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import SubNavbar from './components/SubNavbar/SubNavbar'
import Main from './components/Main/Main'

function App() {

  return (
    <div className="App">
        <Header />
        <SideBar />
        <SubNavbar />
        <Main />
    </div>
  )
}

export default App
