import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {MainLayout} from "./layout/MainLayout";
import {UserList} from "./modules/users/UserList/UserList";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout/>}>
        <Route index element={<UserList/>}></Route>
      </Route>
    </Routes>);
}

export default App;
