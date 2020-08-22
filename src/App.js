import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Header />
      {/* react router */}
      <Home />
    </div>
  );
}

export default App;
