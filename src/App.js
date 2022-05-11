import './App.css';
import { Routes, Route, } from 'react-router-dom';
import { AdminLayouts } from './components/lauots/admin-layouts/AdminLayouts';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/register/Register';
import { Activate } from './components/auth/activate/Activate';
import { PageNotFound } from './components/lauots/admin-layouts/PageNotFound';
import { Profile } from './components/auth/profile/Profile';
import { AboutME } from './components/auth/about/AboutMe';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/activate" element={<Activate />} />
        <Route path="adminlayous" element={<AdminLayouts />}>
          <Route path="profile" element={<Profile />} />
          <Route path="about-me" element={<AboutME />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
export default App;
