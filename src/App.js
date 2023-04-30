import { Route, Routes } from "react-router-dom";
import './App.scss';

import NavMenu from './layouts/nav-menu/nav-menu.component';
import HomePage from './pages/Home/Homepage.component';
import Paslaugos from './pages/Paslaugos/Paslaugos.component';
import Nuoma from './pages/Nuoma/Nuoma.component';
import Atsiliepimai from './pages/Atsiliepimai/Atsiliepimai.component';
import Apie from './pages/Apie/Apie.component';
import Galerija from './pages/Galerija/Galerija.component';
import Kontaktai from './pages/Kontaktai/Kontaktai.component';
import Footer from './layouts/footer/footer.component';

const App = () => (
  <div className='App'>
    <NavMenu />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/paslaugos" element={<Paslaugos />} />
      <Route path="/nuoma" element={<Nuoma />} />
      <Route path="/atsiliepimai" element={<Atsiliepimai />} />
      <Route path="/apie-mane" element={<Apie />} />
      <Route path="/galerija" element={<Galerija />} />
      <Route path="/kontaktai" element={<Kontaktai />} />
    </Routes>
    <Footer/>
  </div>
);

export default App;
