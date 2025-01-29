'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState(""); // Campo para data de nascimento
  const [fullName, setFullName] = useState(""); // Campo para nome completo
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se o e-mail já está cadastrado
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (existingUsers.find((user: { email: string }) => user.email === email)) {
      setError("Este e-mail já está cadastrado!");
      return;
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    // Cria o novo usuário com todos os dados
    const newUser = { email, password, birthDate, fullName };
    existingUsers.push(newUser);

    // Salva os usuários no localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Redireciona para a página de login após o cadastro
    router.push("/Login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-medium">
              Nome Completo
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Digite seu nome completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-12 p-3 mt-2 border border-gray-300 rounded-md"
            />
          </div>

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
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
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

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium"
            >
              Confirme sua senha
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-12 p-3 mt-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="birthDate"
              className="block text-gray-700 font-medium"
            >
              Data de Nascimento
            </label>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full h-12 p-3 mt-2 border border-gray-300 rounded-md"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full h-12 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
          >
            Cadastre-se
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
