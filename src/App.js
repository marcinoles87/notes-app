
import './App.css';
import NotesList from './components/NotesList';

function App() {
  return (
    <div className="App">
      <input placeholder='add your note'></input>
      <NotesList></NotesList>
    </div>
  );
}

export default App;
