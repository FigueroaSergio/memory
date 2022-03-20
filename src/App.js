
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Game } from "./components/Game/Game"
import {Landing } from "./components/Landing/Landing"
import logo from  "./logo.svg" 

function App() {
  
 
  
  return (
    <>
      <main>
      <Landing logo={logo} title="memoria" description="Aqui ira la descripcion"/>
      </main>
    </>
  );
}

export default App;
