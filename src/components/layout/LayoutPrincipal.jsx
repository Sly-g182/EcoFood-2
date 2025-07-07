// src/components/layout/LayoutPrincipal.jsx
import { Outlet } from "react-router-dom";
import HeaderAutenticado from "./HeaderAutenticado";
import Sidebar from "./Sidebar";
import '../../../assets/css/Layout.css';
import '../../../assets/css/Sidebar.css';
import '../../../assets/css/LayoutPrincipal.css';



export default function LayoutPrincipal() {
    return (
        <div className="layout-container">
        <HeaderAutenticado />
        <div className="main-content">
            <Sidebar />
            <main className="page-content">
            <Outlet />
            </main>a
        </div>
        </div>
    );
}