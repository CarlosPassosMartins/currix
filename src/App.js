import { Routes, Route } from 'react-router-dom';

import MainHeader from './components/header/MainHeader.js';
import Homepage from './components/homepage/homepage.js';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
