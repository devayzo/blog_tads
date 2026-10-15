import { mockPosts } from './mockPosts'
import { mockUsuarios } from './mockUsuarios'

const USUARIOS_KEY = 'blog-tads-usuarios'
const POSTS_KEY = 'blog-tads-posts'

function readStorage(key, fallback) {
  const value = localStorage.getItem(key)

  if (!value) {
    localStorage.setItem(key, JSON.stringify(fallback))
    return fallback
  }

  try {
    return JSON.parse(value)
  } catch {
    localStorage.setItem(key, JSON.stringify(fallback))
    return fallback
  }
}

export function getUsuarios() {
  return readStorage(USUARIOS_KEY, mockUsuarios)
}

export function cadastrarUsuario(usuario) {
  const usuarios = getUsuarios()
  const emailJaCadastrado = usuarios.some(
    (item) => item.email.toLowerCase() === usuario.email.toLowerCase(),
  )

  if (emailJaCadastrado) {
    return { error: 'Já existe um usuário cadastrado com este e-mail.' }
  }

  const novoUsuario = {
    ...usuario,
    id: usuarios.length ? Math.max(...usuarios.map((item) => item.id)) + 1 : 1,
  }

  localStorage.setItem(USUARIOS_KEY, JSON.stringify([...usuarios, novoUsuario]))
  return { usuario: novoUsuario }
}

export function getPosts() {
  return readStorage(POSTS_KEY, mockPosts)
}

export function cadastrarPost(post) {
  const posts = getPosts()
  const novoPost = {
    ...post,
    id: posts.length ? Math.max(...posts.map((item) => item.id)) + 1 : 1,
  }

  localStorage.setItem(POSTS_KEY, JSON.stringify([novoPost, ...posts]))
  return novoPost
}
