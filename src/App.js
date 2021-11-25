import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<Home />}>
          </Route>
          <Route path="/home"
            element={<Home />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
