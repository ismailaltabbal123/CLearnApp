import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './component/ScrollToTop';
import Navbar from './component/Navbar.js';
import Cards from './component/CardS.js';
import QCards from './component/QCardS.js';
import Chanels from './component/Chanels.js';
import Footer from './component/Footer.js';
import Hero from './component/Hero.js';
import Lecture_1 from './Pages/Lecture1.js';
import Lecture_2 from './Pages/Lecture2.js';
import Lecture_3 from './Pages/Lecture3.js';
import AllLeature from './component/AllLecture.js';
import AllQuestions from './component/AllQuestions.js';
import NotFound from './component/NotFound.js';
function App() {
  return (
    <Router>
      <ScrollToTop />
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={
            <>
            <Hero />
            <Cards />
            <QCards />
            </>
            // <Route path="/" element={<BlogList />} />
          } />
          <Route path="/Lectures" element={<AllLeature />}/>
          <Route path="/FinalQuestions" element={<AllQuestions/>}/>
          <Route path="/Lecture/1" element={<Lecture_1/>} />
          <Route path="/Lecture/2" element={<Lecture_2/>} />
          <Route path="/Lecture/3" element={<Lecture_3/>} />
          <Route path="/Questions/1" element={<NotFound/>} />
          <Route path="/Questions/2" element={<NotFound/>} />
          <Route path="/Questions/3" element={<NotFound/>} />

      </Routes>
      <Chanels />
      <Footer />
    </>
    </Router> 
  );
}

export default App;
