import './App.css';
import BookCard from './components/BookCard';
import Navigation from './components/Navigation';
function App() {
  return (
    <>
      <Navigation />
      <div className='main'>
        <BookCard />
      </div>
    </>
  );
}

export default App;
