import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

import EditUser from './EditUser';
import Adduser from './Adduser';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/AddUser' element={<Adduser/>}></Route>
            <Route path='/EditUser/:userid' element={<EditUser/>} ></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
