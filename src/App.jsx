import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="home" className="h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Welcome to my Portfolio</h2>
      </div>
    </>
  );
}

export default App;


