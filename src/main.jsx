import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Homepage from './components/homepage/HomePage.jsx';
import Counter from './components/counter/Counter.jsx';
import BackgroundColor from './components/Backgroundcolor/Backgroundcolor.jsx';
import Api from './components/api/Api.jsx';
import Theme from './components/theme/Theme.jsx';
import FormGame from './components/form/FormGame.jsx';
import Calculator from './components/calculator/Calculator.jsx';
import HomeRegister from './components/register/HomeRegister.jsx';
import Parent from './components/optmization/Parent.jsx';
import Todo from './components/todo/Todo.jsx';
import Search from './components/serch/Search.jsx';
import CompleteTodo from './components/completeTodo/CompleteTodo.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Homepage />}>
      <Route path="counter" element={<Counter />} />
      <Route path="background" element={<BackgroundColor />} />
      <Route path="api" element={<Api />} />
      <Route path='/theme' element={<Theme/>} />
      <Route path='form' element={<FormGame/>} />
      <Route path='cal' element={<Calculator/>} />
      <Route path='register' element={<HomeRegister/>} />
      <Route path='optimization' element={<Parent/>} />
      <Route path='todo' element={<Todo/>} />
      <Route path='search' element={<Search/>} />
      <Route path='completeTodo' element={<CompleteTodo/>} />

      <Route path='*' element={ <>NO SUCH PAGE.PLEASE CHECK THE URL</>} />

    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
