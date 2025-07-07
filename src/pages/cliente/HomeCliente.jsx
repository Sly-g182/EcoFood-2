// /src/pages/cliente/HomeCliente.jsx
import { Link } from 'react-router-dom';

export default function HomeCliente() {
    return (
        <div className="container mt-5 d-flex justify-content-center">
        <div className="card shadow p-4" style={{ maxWidth: '500px', width: '100%' }}>
            <div className="card-body text-center">
            <h2 className="card-title mb-3">Bienvenido a <span className="text-success">EcoFood</span></h2>
            <p className="card-text">Explora nuestros productos o revisa tus solicitudes y perfil.</p>
            
            <div className="d-grid gap-3 mt-4">
                <Link to="/cliente/productos" className="btn btn-primary btn-lg">🛒 Ver Productos</Link>
                <Link to="/cliente/pedidos" className="btn btn-success btn-lg">📦 Mis Solicitudes</Link>
                <Link to="/cliente/perfil" className="btn btn-secondary btn-lg">👤 Editar Perfil</Link>
            </div>
            </div>
        </div>
        </div>
    );
}
