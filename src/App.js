
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Navigation from './Navigation.jsx';
import Sidebar from './Sidebar.jsx';
import Dashboard from './Dashboard.jsx';
import JoinGroup from './JoinGroup.jsx';
import CreateGroup from './CreateGroup.jsx';
import Tasks from './Tasks.jsx';



function App() {
  return (
    <BrowserRouter >
      <Navigation/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>

        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/sidebar' element={<Sidebar/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/join' element={<JoinGroup/>}></Route>
        <Route path='/create' element={<CreateGroup/>}></Route>
        <Route path='/tasks' element={<Tasks/>}></Route>
        
       
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
