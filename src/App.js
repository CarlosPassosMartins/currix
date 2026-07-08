import { Routes, Route } from 'react-router-dom';

import MainHeader from './components/header/MainHeader.js';
import Homepage   from './components/homepage/homepage.js';
import Templates  from './components/templates/templates.js';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/templates' element={<Templates/>} />
      </Routes>
    </div>
  );
}

export default App;
