import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {MainLayout} from "./layout/MainLayout";
import {UserList} from "./modules/users/UserList/UserList";
import {SingleUser} from "./modules/users/SingleUser/SingleUser";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout/>}>
        <Route index element={<UserList/>}></Route>
          <Route path={"/user/:id"} element={<SingleUser/>}></Route>
      </Route>
    </Routes>);
}

export default App;
