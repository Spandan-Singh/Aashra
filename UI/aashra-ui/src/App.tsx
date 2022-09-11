import './App.css';
import AashraaHeader from './components/aashraaHeader/aashraHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AashraaHeader />
      </header>
      <div className='container'> Body</div>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
