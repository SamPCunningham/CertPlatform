import './App.css';
import Header from './header';
import Footer from './footer';
import { Routes, Route } from 'react-router-dom';
import { Home, MyInfo, MyExams, IndustryInfo, Downloads, Store} from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/myinfo" element={<MyInfo />}/>
        <Route path="/myexams" element={<MyExams />}/>
        <Route path="/industryinfo" element={<IndustryInfo />}/>
        <Route path="/downloads" element={<Downloads />}/>
        <Route path="/store" element={<Store />}/>
      </Routes>
      <Footer />
        
    </div>
  );
}

export default App;
