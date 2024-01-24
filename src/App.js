
import './App.css';
import Footer from './componenets/Footer';
import HomePage from './pages/home/HomePage';
import Articles from './pages/home/container/Articles';
import CTA from './pages/home/container/CTA';


function App() {
  return (
    <div className="App font-opensans">
      <HomePage/>
      <Articles/>
      <CTA/>
      <Footer/>
     
    </div>
  );
}

export default App;
