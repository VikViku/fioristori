import './App.scss';

import NavMenu from './layouts/nav-menu/nav-menu.component';
import HomePage from './pages/Home/Homepage.component';
import Footer from './layouts/footer/footer.component';

const App = () => (
  <div className='App'>
    <NavMenu />
    <HomePage />
    <Footer/>
  </div>
);

export default App;
