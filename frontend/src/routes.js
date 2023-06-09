import { Routes } from "react-router-dom"
import PagInicial from "./pages/pagInicial/pagInicial"
import Login from "./pages/login/login";
import Registro from "./pages/registro/registro";
import Inicio from "./pages/user/pagInicial/pagInicial"
import { Route } from 'react-router-dom';

export default function RoutesComponent(){
    return (
        <Routes>
            <Route path="/" element={<PagInicial />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/registrar" element={<Registro />} />
            <Route exact path="/user/inicio" element={<Inicio />} />

        </Routes>
    )
}