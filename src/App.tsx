import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import ArticleDetails from './Components/ArticleDetails';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App