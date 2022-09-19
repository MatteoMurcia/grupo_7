import Titulo from './components/Titulo';
import ListCategories from './components/ListCategories';
import TotalCategories from './components/TotalCategories';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Titulo />
      </header>
      <main>
      <ListCategories />
      <TotalCategories />
      </main>
    </div>
  );
}

export default App;
