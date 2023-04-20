import Header from './components/Header';
import Tabuleiro from './components/Tabuleiro';
import CheckEventos from './objects/CheckEventos';

import './App.css'

const App = () => {
  return (
    <main className='app'>
      <Header />
      <Tabuleiro />
      <CheckEventos />
    </main>
  );
}

export default App;
