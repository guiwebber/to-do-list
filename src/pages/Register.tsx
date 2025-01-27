import React from "react";
import "../../app/globals.css";

function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-medium"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Digite seu nome completo"
              className="w-full h-12 p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full h-12 p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full h-12 p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full h-12 p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="birthdate"
              className="block text-gray-700 font-medium"
            >
              Data de Nascimento
            </label>
            <input
              type="date"
              id="birthdate"
              className="w-full h-12 p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-gray-700 font-medium">
              Sexo
            </label>
            <select
              id="gender"
              className="w-full h-12 p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="other">Outro</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-gray-700">
              Eu concordo com os{" "}
              <a href="#" className="text-green-500 underline">
                Termos de Privacidade
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Cadastre-se
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
