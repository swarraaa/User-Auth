import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Main from './components/Main/Main'
import LogIn from './components/LogIn/LogIn'
import SignUp from './components/SignUp/SignUp'

function App() {
  const user = localStorage.getItem('token')
  return (
    <>
      <Routes>
        {user && <Route path='/' exact element={<Main />} />}
        <Route path='/login' exact element={<LogIn />} />
        <Route path='/signup' exact element={<SignUp />} />
        <Route path='/' exact element={<Navigate replace to='/login' />} />
      </Routes>
    </>
  )
}

export default App
