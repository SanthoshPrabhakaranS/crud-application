import LoginPage from "./components/LoginPage";
import HomePage from './components/HomePage'
import { GlobalStyle } from "./Task.styles/document.styles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from "./components/Users";
import Networks from "./components/Networks";
import AdduserModal from "./components/form/AdduserModal";
import UserDetails from "./components/userDetails";
import AddNetworkModal from "./components/form/AddNetworkModal";
import ErrorPage from "./components/ErrorPage";

function App() {
  
  return<>
  <GlobalStyle />
  <Router>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} >
      <Route path='users' element={<Users />} />
      <Route path='networks' element={<Networks />} />
      </Route>
      <Route path='/user/edit-user/:id' element={<AdduserModal />}/>
      <Route path='/home/user/:id' element={<UserDetails />}/>
      <Route path='/network/users' element={<AddNetworkModal />}/>
      <Route path='*' element={<ErrorPage />} />
      </Routes> 
  </Router>
  </>
}

export default App;
