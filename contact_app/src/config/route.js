import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import {NavArray} from './constants/Path_Com'

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
               { NavArray.map((route,i)=>{
                    return(

                        <Route key={i} path={route.path} element={<route.component />}/>
                    )
                })}
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter