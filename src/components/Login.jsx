import React, {useState} from 'react';
import {auth} from '../firebaseconfig';
import {useHistory} from 'react-router-dom'

const Login = () => {

    const historial = useHistory()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msError, setMsgError] = useState(null)

    const RegistrarUser = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
            .then(() => {
                setMsgError(null)
                setPass('')
                setEmail('')
                historial.push('/')
            })
            .catch(ex => {
                if (ex.code === 'auth/invalid-email') {
                    setMsgError('Formato Email incorrecto')
                }
                else if (ex.code === 'auth/weak-password') {
                    setMsgError('Formato Password incorrecto')
                }
            })
    }

    const LoginUser = () => {
        auth.signInWithEmailAndPassword(email, pass)
            .then(() => {
                setMsgError(null)
                setPass('')
                setEmail('')
                historial.push('/')
            })
            .catch(ex => {
                if (ex.code === 'auth/wrong-password' || ex.code === 'auth/user-not-found') {
                    setMsgError('Password o usuario incorrecto')
                }
            })
    }

    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form   className="form-group"
                        onSubmit={RegistrarUser}>
                    <input  type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            value={email}
                            placeholder="Introduce el email" />
                    <input  type="password"
                            onChange={(e) => setPass(e.target.value)}
                            className="form-control mt-4"
                            value={pass}
                            placeholder="Introduce la contraseña" />
                    <input  value="Registrar usuario"
                            className="btn btn-dark btn-block mt-4"
                            type="submit"/>
                </form>
                <button className="btn btn-success btn-block"
                        onClick={LoginUser}>
                    Iniciar sesión
                </button>
                {
                     msError != null ? (
                        <div className="alert alert-danger mt-2">{msError}</div>
                     ) : (
                        <span></span>
                     )
                }
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Login