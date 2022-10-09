import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Library from './pages/Library';
import Authentication from './pages/Authentication';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Navigation onClickOutside={() => { }} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/authentication" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
