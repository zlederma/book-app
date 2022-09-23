import './App.css';
import BookCards from './components/BookCards';
import Navigation from './components/Navigation';
function App() {
  return (
    <>
      <Navigation />
      <div className='main'>
        <BookCards />
      </div>
    </>
  );
}

export default App;
