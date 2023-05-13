import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddPost from './components/AddPost';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import EditPost from './components/EditPost';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<PostList/>}/>
        <Route path='/' element={<PostList/>}/>
        <Route path='/postList' element={<PostList/>}/>
        <Route path='/addPost' element={<AddPost/>}/>
        <Route path="/editPost/" element={<EditPost/>}/>
        <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
