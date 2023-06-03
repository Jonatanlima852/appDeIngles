import { Routes } from "react-router-dom"
import PagInicial from "./pages/pagInicial/pagInicial"
import { Route } from 'react-router-dom';

export default function RoutesComponent(){
    return (
        <Routes>
            <Route exact path="/inicio" element={<PagInicial />} />
        </Routes>
    )
}