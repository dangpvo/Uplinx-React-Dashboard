import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import Sidebar from "./components/Sidebar";
import Users from "./pages/Users";
import Sales from "./pages/Sales";
import Orders from "./pages/Orders";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Overview></Overview>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="/sales" element={<Sales></Sales>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/analytics" element={<Analytics></Analytics>}></Route>
        <Route path="/settings" element={<Settings></Settings>}></Route>
      </Routes>
    </div>
  );
};

export default App;
