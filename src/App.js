import ProfilePhoto from './Components/ProfilePhoto.js';
import Fullname from './Components/FullName.js';
import Address from './Address.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <div className='pic'>
        <ProfilePhoto/>
        </div>
        <div className='Fullname'>
        <Fullname/>
        </div>
        <div className='Address'>
        <Address/>
        </div>
      </div>
    </div>
  );
}

export default App;
