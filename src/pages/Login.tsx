import React from "react";
import Link from "next/link";
import logo from "../assets/logo.png";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <img
          src={logo.src}
          alt="Ícone escrito to-do List"
          className="w-36 m-auto"
        />

        <form className="space-y-6">
          <div>
            <label htmlFor="login" className="block text-gray-700 font-medium">
              E-mail
            </label>
            <input
              type="text"
              id="login"
              placeholder="Enter your e-mail"
              className="w-full h-12 p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full h-12 p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <p className="text-sm text-gray-600 mt-2">
              Não tem uma conta?{" "}
              <Link href="/Register" className="text-green-500 hover:underline">
                Cadastre-se
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
