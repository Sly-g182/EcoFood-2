import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import Swal from "sweetalert2";
import { Dropdown } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';

export default function HeaderAutenticado() {
    const { user, userData } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login", { replace: true });
        } catch (error) {
            Swal.fire("Error", "No se pudo cerrar la sesión.", "error");
        }
    };

    const getPathForProfile = () => {
        switch (userData?.tipo) {
            case 'cliente':
                return '/cliente/perfil';
            case 'empresa':
                return '/empresa/perfil';
            default:
                return '/';
        }
    }

    return (
        <header className="navbar navbar-light bg-white border-bottom px-4 py-2">
            <Link to="/" className="navbar-brand fw-bold text-success fs-4">EcoFood</Link>
            <div className="ms-auto">
                <Dropdown align="end">
                    <Dropdown.Toggle as="div" className="btn btn-light d-flex align-items-center gap-2" style={{ cursor: "pointer" }}>
                        <PersonCircle size={24} />
                        <span className="fw-semibold">{userData?.nombre || user?.email}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {(userData?.tipo === 'cliente' || userData?.tipo === 'empresa') && (
                            <>
                                <Dropdown.Item as={Link} to={getPathForProfile()}>Editar Perfil</Dropdown.Item>
                                <Dropdown.Divider />
                            </>
                        )}
                        <Dropdown.Item onClick={handleLogout}>Cerrar Sesión</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </header>
    );
}
