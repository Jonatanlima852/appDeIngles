import { Routes } from "react-router-dom"
import { Route } from 'react-router-dom';
import PagInicial from "./pages/pagInicial/pagInicial"
import Login from "./pages/login/login";
import Registro from "./pages/registro/registro";
import Inicio from "./pages/user/pagInicial/pagInicial"
import ListaTextos from "./pages/user/pagExplorar/listaTextos/listaTextos";
import Texto from "./pages/user/pagExplorar/texto/texto";
import Treino from "./pages/user/pagTreino/treino";

export default function RoutesComponent(){
    return (
        <Routes>
            <Route path="/" element={<PagInicial />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/registrar" element={<Registro />} />
            <Route exact path="/user/inicio" element={<Inicio />} />
            <Route exact path="/user/listaTextos" element={<ListaTextos />} />
            <Route exact path="/user/texto" element={<Texto />} />
            <Route exact path="/user/treino" element={<Treino />} />

        </Routes>
    )
}