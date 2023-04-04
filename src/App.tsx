import './App.css';
import { Application } from './components/application/Application';
import { MuiMode } from './components/mui/MuiMode';
import { Skills } from './components/skills/Skills';
import { AppProviders } from './providers/AppProviders';

function App() {
  return (
    <AppProviders>
    <div className="App">
        <Skills skills={[]} />
    </div>
    </AppProviders>
  );
}

export default App;
