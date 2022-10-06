import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
function App() {
  return (
    <>
      <Navigation onClickOutside={() => { }} />
      <Main />
    </>
  );
}

export default App;
