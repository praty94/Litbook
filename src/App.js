import './App.css';
import AppShell from './Components/AppShell/AppShell';
import {AppContextProvider} from './Context/Context';
function App() {
  return (
    <div className="App">
      <AppContextProvider>        
        <AppShell></AppShell>      
      </AppContextProvider>
    </div>
  );
}

export default App;
