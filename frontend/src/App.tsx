import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Home from "@/pages/Home/Home"
import Proposicao from '@/pages/Proposicao/Proposicao';
import Glossario from '@/pages/Glossario/Glossario';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/proposicoes/:id" element={<Proposicao />} /> {/* Detalhe da proposição dinâmica*/}
      <Route path="/glossario" element={<Glossario />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;