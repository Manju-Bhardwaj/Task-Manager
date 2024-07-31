
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Sidebar from './components/sidebar.jsx';
import Dashboard from './Dashboard.jsx';
import Tasks from './Tasks.jsx';
import Navigation from './Navigation.js';
import CreateGroup from './CreateGroup.jsx';
import JoinGroup from './JoinGroup.jsx';


function App() {
  return (
    <BrowserRouter >
      <Navigation/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/sidebar' element={<Sidebar/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/tasks' element={<Tasks/>}></Route>
        <Route path='/create' element={<CreateGroup/>}></Route>
        <Route path='/join' element={<JoinGroup/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
