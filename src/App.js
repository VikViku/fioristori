import './App.scss';

import NavMenu from './components/nav-menu/nav-menu.component';
import HomePage from './pages/Home/Homepage.component';
import Footer from './components/footer/footer.component';

const App = () => (
  <div>
    <nav>
      <NavMenu />
    </nav>
    <HomePage />
    <footer>
      <Footer/>
    </footer>
  </div>
);

export default App;
