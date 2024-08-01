import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from './components/layout/index'; 
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <AppRoutes /> 
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;