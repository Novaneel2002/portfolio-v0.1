import { Container } from '@chakra-ui/react';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Work from './components/works/Work';
import Skills from './components/Skill/Skills';
import 'bootstrap/dist/css/bootstrap.min.css'
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
// import Resume from './components/Resume/Resume';

const router = createBrowserRouter([
  {
    path: "/portfolio-v1.0/",
    element: <Homepage />,
  },
  {
    path: "/portfolio-v1.0/Works",
    element: <Work />,
  },
  {
    path: "/portfolio-v1.0/skills",
    element: <Skills />,
  },
  {
    path: "/portfolio-v1.0/resume",
    element: <Resume/>,
  },
  {
    path: "/portfolio-v1.0/contact",
    element: <Contact/>,
  },
]);
function App() {

  return (
    <>

      <RouterProvider router={router} />
      {/* <Homepage/> */}

    </>




  )
}

export default App;
