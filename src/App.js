import { useState } from 'react';
import styled from 'styled-components';
import Display from './Pages/Display';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import { mobileApp } from './ConstantStyles';
import FileUpload from './Components/FileUpload';
const MainApp = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 2rem;
 ${mobileApp};
`

function App() {
  const [image, setImage] = useState([])


  return (

    <Router>
      <MainApp className="app">
        <Routes>

          <Route path="/" exact element={<FileUpload setImage={setImage} />} />
          <Route path="/success" element={<Display image={image} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainApp>
    </Router>


  );
}

export default App;
