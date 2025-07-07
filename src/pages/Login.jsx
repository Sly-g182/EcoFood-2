// src/pages/Login.jsx
import { useState } from 'react';
import { auth, db } from '../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      if (!userCred.user.emailVerified) {
        setError('Debes verificar tu correo antes de iniciar sesión.');
        return;
      }

      const ref = doc(db, 'usuarios', userCred.user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const datos = snap.data();
        if (datos.tipo === 'admin' && datos.esPrincipal) navigate('/admin/administracion');
        else if (datos.tipo === 'admin') navigate('/admin/dashboard');
        else if (datos.tipo === 'cliente') navigate('/cliente/home');
        else if (datos.tipo === 'empresa') navigate('/empresa/perfil');
        else setError('No tienes permisos para acceder.');
      } else {
        setError('Tu cuenta no está registrada correctamente en Firestore.');
      }

    } catch (err) {
      console.error(err);
      setError('Credenciales inválidas o error de conexión.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Iniciar Sesión</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Ingresar</button>
        </form>

        {error && <p className="text-danger text-center mt-3">{error}</p>}

        <div className="text-center mt-3">
          <a href="/registro" className="me-2">¿No tienes cuenta?</a>
          <a href="/recuperar">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
