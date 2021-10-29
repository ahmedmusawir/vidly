import './App.scss';
import Movies from './components/Movies';

function App() {
  return (
    <div className='App container'>
      <h1 className='jumbotron text-danger'>Vidly</h1>
      <Movies />
    </div>
  );
}

export default App;
