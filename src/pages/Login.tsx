'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import logo from '../assets/logo.png'
import '../../app/globals.css'

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Busca os usuários armazenados no localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Verifica se o usuário existe
    const user = existingUsers.find(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );

    if (!user) {
      setError("Credenciais inválidas!"); // Mensagem de erro caso o login falhe
      return;
    }

    // Salva o e-mail do usuário logado no localStorage para identificação
    localStorage.setItem("loggedInUser", email);

    // Se o login for bem-sucedido, redireciona para a página principal
    router.push("/HomeList"); // Certifique-se de que HomeList é a página principal
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <img src={logo.src} alt="Logo" className="w-36 m-auto mb-6" />
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 p-3 mt-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 p-3 mt-2 border border-gray-300 rounded-md"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full h-12 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
          >
            Login
          </button>
          <p className="text-sm text-gray-600 mt-2 text-center">
            Não tem uma conta?{" "}
            <Link href="/Register" className="text-green-500 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
