import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProphetsFlow from './components/ProphetsFlow';
import ProphetDetails from './pages/ProphetDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProphetsFlow />} />
        <Route path="/prophet/:id" element={<ProphetDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
