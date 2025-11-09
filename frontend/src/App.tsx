import { Layout } from "./components";
import { Routes, Route } from 'react-router';
import { PaginaInicial, ProposicaoDetalhada, Glossario} from "@/pages/index"; 


const App = () => {
  return (
    <>
      <Routes >
        <Route element={<Layout />}>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/proposicoes/:id" element={<ProposicaoDetalhada />} />
          <Route path="/glossario" element={<Glossario />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;