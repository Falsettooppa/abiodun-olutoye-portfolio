import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <div id="home" className="h-screen flex items-center justify-center">
//         <h2 className="text-4xl font-bold">Welcome to my Portfolio</h2>
//       </div>
//     </>
//   );
// }

// export default App;
function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <h1 className="text-5xl font-bold text-white">Tailwind v4 is Working 🚀</h1>
    </div>
  );
}

export default App;

