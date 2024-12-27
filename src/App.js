
import { Routes,Route } from 'react-router-dom';
import Navbar from './similarComponets/Navbar';
import Footer from './similarComponets/Footer';
import Contactus from './components/Contactus';

function App() {
  return (
    <div >
        <Navbar/>
        <Routes>
            <Route path="/ContactUs" element={<Contactus/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
