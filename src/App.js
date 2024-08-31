
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Master from './Master';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import About from './Pages/About';
import Blog from './Pages/Blog';
import AllBlogs from './Pages/AllBlogs';
import DashBoard from './admin/DashBoard';
import NoPage from './Pages/NoPage';
import { Toaster } from 'react-hot-toast';
import MyState from './context/data/MyState';
import CreateBlog from './admin/CreateBlog';
import BlogInfo from './Pages/BlogInfo';

function App() {
  return (
    <div id='root'>
      <div className="main-content"> 
      <MyState> 
        <BrowserRouter> 
          <Toaster /> 
          <Routes>
            <Route path='/' element={<Master Com={Home}/>} />      
            <Route path='/login' element={<Master Com={Login}/>} />
            <Route path='/signup' element={<Master Com={SignUp}/>} />
            <Route path='/about' element={<Master Com={About}/>} /> 
            <Route path='/blog' element={<Master Com={Blog}/>} />   
            <Route path='/allblogs' element={<Master Com={AllBlogs}/>} />  
            <Route path='/bloginfo/:id' element={<Master Com={BlogInfo}/>} />        
            <Route path='/dashboard' element={<ProtectedRouteForAdmin><Master Com={DashBoard}/></ProtectedRouteForAdmin>} />    
            <Route path='/createblog' element={<ProtectedRouteForAdmin><Master Com={CreateBlog}/></ProtectedRouteForAdmin>} /> 
            <Route path='/*' element={<Master Com={NoPage}/>} />               
          </Routes>
        </BrowserRouter>
      </MyState>
      </div>
    </div>
  );
}

export default App;



export const ProtectedRouteForAdmin = ({children}) => {
   const admin = JSON.parse(localStorage.getItem('admin'))
     if (admin?.user?.email === "testclient@gmail.com") {
      return children
     } else {
      return <Navigate to={'/login'}/>
     }
}
