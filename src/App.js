import './App.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ArticleDetailPage from './pages/home/articleDetail/ArticleDetailPage';
import RegisterPage from './pages/home/register/RegisterPage';



function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path='/' element={<HomePage/>} />
        <Route  path='/blog/:id' element={<ArticleDetailPage/>} />
        <Route  path='/register' element={<RegisterPage/>} />
      </Routes>

    
      
    </div>
  );
}

export default App;
