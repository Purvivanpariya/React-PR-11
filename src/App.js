import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Pages/Add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
