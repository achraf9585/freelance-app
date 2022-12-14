import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import { BrowserRouter as  Router , Route , Routes} from 'react-router-dom'
import Contact from './component/Contact';
import Home from './component/Home';
import News from './component/News';
function App() {
  return (
    <>
      <Router>
      <Routes>
      <Route path="/freelance-app/" element={<Home/>}  exact />
      <Route path="/" element={<Home/>}  exact />
      <Route path="/contact" element={<Contact/>}  exact />
      <Route path="/news" element={<News/>}  exact />
        </Routes>

      </Router>
 
    </>

  );
}

export default App;
