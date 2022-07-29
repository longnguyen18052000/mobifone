import React from "react";
import Register from "./register/Register";
import Login from "./register/Login";
import Home from "./home/Home";
import './App.css';
import PackageRegister from "./home/PackageRegister";
import Packagecancel from "./home/PackageCancel";
import PackageRenewal from "./home/PackageRenewal";
import PackageObject from "./home/PackageObject";
import PackageCancelRequest from "./home/PackageCancelRequest";
import PackageHistory from "./home/PackageHistory";
import PackageLog from "./home/PackageLog";
import TodoList from "./home/TodoList";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>}>
          <Route index element={<PackageRegister />}/>
          <Route path="package-cancel" element={<Packagecancel />}/>
          <Route path="package-renewal" element={<PackageRenewal />}/>
          <Route path="package-object" element={<PackageObject />}/>
          <Route path="package-cancel-request" element={<PackageCancelRequest />}/>
          <Route path="package-history" element={<PackageHistory />}/>
          <Route path="package-log" element={<PackageLog />}/>
          <Route path="todolist" element={<TodoList />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
