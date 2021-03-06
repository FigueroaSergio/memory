
import 'bootstrap/dist/css/bootstrap.css'

import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import { Form } from './components/Form/Form';
import { Game } from "./components/Game/Game"
import { Landing } from "./components/Landing/Landing"
import logo from  "./logo.svg" 

function App() {
  
 
  
  return (
    <>
      <main>
      <Routes>
        <Route path="/memory" element={<Landing logo={logo} title="memory" description="In this game you should try to open all the cards in the less time possible"/>}/>
        <Route path="/memory/game" element={<Game />} />
          <Route path='/memory/form' element={<Form/>}/>
      </Routes>
      </main>
    </>
  );
}

export default App;
