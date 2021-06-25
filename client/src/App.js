import './App.css';
import { Router } from '@reach/router';
import AllPetshelter from './components/AllPetshelter';
import CreatePetShelter from './components/CreatePetshelter';
import DetailPetshelter from './components/DetailPetshelter';
import EditPetshelter from './components/EditPetshelter';
import PetHeader from './components/PetHeader';

function App() {
  return (
    <div className="App">
      <PetHeader />
      <Router>
        <AllPetshelter path="/petshelter" />
        <CreatePetShelter path="/petshelter/new" />
        <DetailPetshelter path="/petshelter/:id" />
        <EditPetshelter path="/petshelter/:id/edit"/>
      </Router>

    </div>
  );
}

export default App;
