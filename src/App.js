import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { useLocation } from 'react-router-dom'
function App() {
  const location=useLocation()
  console.log(location.pathname)
let path=(location.pathname)
  return (
    <div className="App">
       <Nav/>
      {/* <Outlet/> */}
      {path=="/"?<h1>Navbar</h1>:<Outlet/>}
    </div>
  );
}

export default App;




