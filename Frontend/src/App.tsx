import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Career from './pages/Career';
import Result from './pages/Result';
import About from './pages/About';
import Tools from './pages/Tools';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="career" element={<Career />} />
          <Route path="result" element={<Result />} />
          <Route path="about" element={<About />} />
          <Route path="tools" element={<Tools />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
