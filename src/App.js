import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mt-4">
        <h1>Welcome to My Restaurant</h1>
      </main>
      <main className="container mt-4">
        <Home />
      </main>
      <main className="container mt-4">
        <Menu />
      </main>
    </div>
  );
}
export default App;