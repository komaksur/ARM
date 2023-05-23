import React, {createContext, useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import Login from "../components/Login";
import Main from "../components/Main";


function AppRoutes() {

    return (
        <>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <Login/>
                    }
                />
            </Routes>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Main/>
                    }
                />
            </Routes>
        </>
    );
}

export default AppRoutes;