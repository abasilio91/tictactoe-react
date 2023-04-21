import Header from './components/Header';
import Tabuleiro from './components/Tabuleiro';
import Checkbox from './objects/Checkbox';
import './App.css'

const App = () => {
  return (
    <main className='app'>
      <Header />
      <Tabuleiro />
      <Checkbox cb_id="show-events" value="show" content="Mostrar eventos" />
    </main>
  );
}

export default App;
