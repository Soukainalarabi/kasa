import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Apropos from './pages/Apropos/index';
import Accueil from './pages/Accueil/index';
import Logement from './pages/Logement/index';
import Header from './components/Header';
import Erreur from './components/Erreur';
import Footer from './components/Footer';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement/:id" element={<Logement />} />

          <Route path="*" element={<Erreur />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}
// Check if the document object is defined (i.e., running in a browser context)

if (typeof document !== 'undefined') {
  const rootElement = document.getElementById('root');

  // Use createRoot() for rendering
  const root = createRoot(rootElement);
  root.render(<App />);
}
