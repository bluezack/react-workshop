import React from 'react';
import Notes from './pages/Notes/Notes';
import Header from './components/Header';

import './assets/css/app.css';

function App() {
  return (
    <div>
      <Header />
      {/* react router */}
      <Notes />
    </div>
  );
}

export default App;
