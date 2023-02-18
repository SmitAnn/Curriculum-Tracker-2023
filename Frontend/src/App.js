
import './App.css';
import { Routes,Route ,BrowserRouter as Router} from 'react-router-dom';
import MainDash from './components/MainDash/MainDash';
import User_Profile from './components/Profile/Profile';
import Create_Requirements from './components/requirements/create/Create_Requirements';
import Read_Requirement from './components/requirements/read/Read_Requirement';
import Update_Requirement from './components/requirements/update/Update_Requirement';
import View_Requirement from './components/requirements/view/View_Requirements';
import Create_Curriculum from './components/curriculum/create/Create_Curriculum';
import Read_Curriculum from './components/curriculum/read/Read_Curriculum';
import View_Curriculum from './components/curriculum/view/View_Curriculum';
import Update_Curriculum from './components/curriculum/update/Update_Curriculum';
import New_Updates from './components/newupdates/New_Updates';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Curriculum_Dash from './components/curriculum/dashboard/Curriculum_Dash';
//import RightSide from './components/RightSide/RightSide';
//import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
    <Router>
     <Routes>
      
      <Route path='/requirements/create'  element={<Create_Requirements/>} />
      <Route path='/requirements/ReadAll' element={<Read_Requirement/>} />
      <Route path='/requirements/update' element={<Update_Requirement/>} />
      <Route path='/user/Profile' element={<User_Profile/>} />
      <Route path='/requirements/ReadOne' element={<View_Requirement/>} />
      <Route path='/curriculum/create' element={<Create_Curriculum/>} />
      <Route path='/curriculums/ReadAll' element={<Read_Curriculum/>} />
      <Route path='/curriculums/ReadOne' element={<View_Curriculum/>} />
      <Route path='/curriculums/update' element={<Update_Curriculum/>} />
      <Route path='/curriculums/dash' element={<Curriculum_Dash/>} />
      <Route path='/dashboard' element={<MainDash/>} />
      <Route path='/updates' element={<New_Updates/>} />
      <Route path='/' element={<Login/>} />
      <Route path='/registration' element={<Registration/>} />
     

      
      


      </Routes>
      </Router>
       </div>
  );
}

export default App;
