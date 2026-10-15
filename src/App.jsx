import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import CadastroUsuario from './pages/CadastroUsuario'
import Usuarios from './pages/Usuarios'
import NovoPost from './pages/NovoPost'
import Header from './components/Header'

function App() {
  // Guarda quem esta logado. null = ninguem entrou ainda.
  const [usuario, setUsuario] = useState(null)

  return (
    <BrowserRouter>
      {/* O Header so aparece depois do login, por isso fica fora das rotas. */}
      {usuario && <Header usuario={usuario} onSair={() => setUsuario(null)} />}

      <Routes>
        <Route path="/login" element={<Login onLogin={setUsuario} />} />

        {/* Rota protegida: sem usuario logado, volta para o login. */}
        <Route
          path="/"
          element={usuario ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/cadastro-usuario"
          element={usuario ? <CadastroUsuario /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/usuarios"
          element={usuario ? <Usuarios /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/novo-post"
          element={usuario ? <NovoPost usuario={usuario} /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App