import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import RegexTest from './pages/RegexTest'
import About from './pages/About'
import Tips from './pages/Tips'
const router = createBrowserRouter( [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/regexTest",
    element: <RegexTest/>
  },
  {
    path: "/tips",
    element: <Tips/>
  }
  

]);
function App() {
  

  return (
    <>
      <RouterProvider router = {router}>
        
      </RouterProvider>
      
      
    </>
  )
}

export default App
