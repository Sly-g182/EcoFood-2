import { Link } from 'react-router-dom';

export default function HomeCliente() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-success">🌿🌿🌿 Bienvenido a EcoFood 🌿🌿🌿</h1>
        <p className="lead text-muted">🌎Gestiona tus productos, solicitudes y perfil de forma sencilla🌎</p>
      </div>

      <div className="row g-4 justify-content-center">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-100 hover-shadow transition">
            <div className="card-body text-center">
              <i className="bi bi-box-seam display-4 text-primary mb-3"></i>
              <h5 className="card-title">¡Ver Productos!</h5>
              <p className="card-text">Explora todos los productos disponibles para ti.</p>
              <Link to="/cliente/productos" className="btn btn-primary mt-2 w-100">Explorar</Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-100 hover-shadow transition">
            <div className="card-body text-center">
              <i className="bi bi-card-checklist display-4 text-success mb-3"></i>
              <h5 className="card-title">¡Mis Solicitudes!</h5>
              <p className="card-text">Consulta el estado de tus pedidos y solicitudes.</p>
              <Link to="/cliente/pedidos" className="btn btn-success mt-2 w-100">Ver Solicitudes</Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-100 hover-shadow transition">
            <div className="card-body text-center">
              <i className="bi bi-person-circle display-4 text-secondary mb-3"></i>
              <h5 className="card-title">¡Editar Perfil!</h5>
              <p className="card-text">Actualiza tu información personal fácilmente.</p>
              <Link to="/cliente/perfil" className="btn btn-secondary mt-2 w-100">Editar</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
