import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db, secondaryAuth } from '../../services/firebase';
import './EmpresaForm.css';

const initialState = {
  nombre: '',
  rut: '',
  direccion: '',
  comuna: '',
  email: '',
  telefono: '',
  password: '',
};

export default function EmpresaForm({ empresaEditando, setEmpresaEditando }) {
  const [empresa, setEmpresa] = useState(initialState);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    if (empresaEditando) {
      setEmpresa(empresaEditando);
    }
  }, [empresaEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpresa({ ...empresa, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');

    try {
      const cred = await createUserWithEmailAndPassword(
        secondaryAuth,
        empresa.email,
        empresa.password
      );
      await sendEmailVerification(cred.user);
      await setDoc(doc(db, 'empresas', cred.user.uid), empresa);
      setEmpresa(initialState);
      setMensaje('✅ Empresa registrada correctamente');
    } catch (error) {
      setMensaje(`❌ Error: ${error.message}`);
    }
  };

  return (
    <form className="empresa-form" onSubmit={handleSubmit}>
      <h3>Registro de Empresa</h3>

      <div className="form-row">
        <input type="text" name="nombre" placeholder="Nombre" value={empresa.nombre} onChange={handleChange} required />
        <input type="text" name="rut" placeholder="RUT" value={empresa.rut} onChange={handleChange} required />
      </div>

      <div className="form-row">
        <input type="text" name="direccion" placeholder="Dirección" value={empresa.direccion} onChange={handleChange} required />
        <input type="text" name="comuna" placeholder="Comuna" value={empresa.comuna} onChange={handleChange} required />
      </div>

      <div className="form-row">
        <input type="email" name="email" placeholder="Email" value={empresa.email} onChange={handleChange} required />
        <input type="text" name="telefono" placeholder="Teléfono (+569XXXXXXXX)" value={empresa.telefono} onChange={handleChange} required />
      </div>

      <div className="form-row">
        <input type="password" name="password" placeholder="Contraseña" value={empresa.password} onChange={handleChange} required />
      </div>

      <button type="submit">Agregar Empresa</button>
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </form>
  );
}
