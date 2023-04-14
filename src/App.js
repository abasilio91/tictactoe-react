import Player from './objects/Player';

import Header from './components/Header';
import Tabuleiro from './components/Tabuleiro'; 

function App() {
  return (
    <>
      <Header />
      <Tabuleiro>
        <Player player='x' />
        <Player player='o' />
        <Player player='o' />
        <Player player='o' />
        <Player player='x' />
        <Player player='x' />
        <Player player='o' />
        <Player player='x' />
        <Player player='o' />
      </Tabuleiro>
    </>
  );
}

export default App;
