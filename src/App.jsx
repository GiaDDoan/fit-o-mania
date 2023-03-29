import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Footer } from './components';
import { Home, ExerciseDetail } from './pages';


function App() {

  return (
    <BrowserRouter>
      {/* <Box width='400px' sx={{ xl: '1488px' }} m='auto'> */}
      <Box sx={{ xl: '1488px' }} m='auto'>
      <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercise/:id' element={<ExerciseDetail />} />
          </Routes>
          <Footer />
      </Box>
    </BrowserRouter>
  )
}

export default App
