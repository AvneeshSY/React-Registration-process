
import './App.css';
// import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/login';
import Reg_individual from './component/Reg_individual_acc'
import CompleteProfile from './component/CompleteProfile';
import BankVerification from './component/BankVerification';
// import sign from "./"

function App() {
  return (
    <div className="App">

      <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/reg_individual' element={<Reg_individual />} />
          <Route path='/completeprofile' element={<CompleteProfile/>}/>
          <Route path='/bankverification' element={<BankVerification/>}/>
          
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
