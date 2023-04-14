import Header from'./components/Header';
import Tabuleiro from './components/Tabuleiro';
import Player from './objects/Player';

function App() {
  return (
    <>
      <Header />
      <Tabuleiro />
      <Player player='x'/>
    </>
  );
}

export default App;
