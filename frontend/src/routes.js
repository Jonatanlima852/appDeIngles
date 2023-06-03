import { Routes } from "react-router-dom"
import PagInicial from "./pages/pagInicial/pagInicial"
import Login from "./pages/login/login";
import { Route } from 'react-router-dom';

export default function RoutesComponent(){
    return (
        <Routes>
            <Route exact path="/inicio" element={<PagInicial />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
    )
}