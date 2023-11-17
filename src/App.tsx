import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import BetterTodo from './pages/BetterTodo';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Counter from './pages/Counter';
import ExusEffect from './pages/ExusEffect';
import FormExample from './pages/FormExample';
import NewChallenge from './pages/NewChallenge';
import TodoApp from './pages/TodoApp';
import DrawingApp from './pages/DrawingApp';
import RefWorks from './pages/RefWorks';
import LazyLoading from './pages/LazyLoading';




function App() {

    
    
      return (
        <BrowserRouter>
        <Routes >
          <Route path='/' element={<Layout /> }>
            <Route path='Home' element={<Home />}/>
            <Route path='BetterTodo' element={<BetterTodo />}/>
            <Route path='Counter' element={<Counter />}/>
            <Route path='ExusEffect' element={<ExusEffect />}/>
            <Route path='FormExample' element={<FormExample />}/>
            <Route path='NewChallenge' element={<NewChallenge />}/>
            <Route path='TodoApp' element={<TodoApp />}/>
            <Route  path='DrawingApp' element={<DrawingApp />}/> 
            <Route  path='RefWorks' element={<RefWorks />}/> 
            <Route  path='LazyLoading' element={<LazyLoading />}/> 

          </Route>
        </Routes>
        </BrowserRouter>
      );
    }
export default App
