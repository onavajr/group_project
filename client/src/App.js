import './App.css';
import { Router } from '@reach/router';
import AllMusicland from './components/AllMusicland';
import CreateMusicLand from './components/CreateMusicland';
import DetailMusicland from './components/DetailMusicland';
import EditMusicland from './components/EditMusicland';
import MusicHeader from './components/MusicHeader';
import LoginRegistration from './views/LoginRegistration';
import ConcertPage from './views/ConcertPage';


function App() {
  return (
    <div className="App">
      <Router>
        <MusicHeader default/>
        <AllMusicland path="/musicland/" />
        <CreateMusicLand path="/musicland/new" />
        <DetailMusicland path="/musicland/:id" />
        <EditMusicland path="/musicland/:id/edit"/>
        <LoginRegistration path="/musicland/login" />
        {/* <Account path="/musicland/account"/> */}
        <ConcertPage path="/musicland/concertpage" />
      </Router>

    </div>
  );
}

export default App;
