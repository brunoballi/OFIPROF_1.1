"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FacebookLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación con Facebook
    console.log("Iniciando sesión con Facebook:", { email, password })
  }

  return (
    <div className="app-background flex flex-col">
      <div className="p-4">
        <Link href="/" className="inline-flex items-center text-[#8eaceb] hover:text-[#6d8fd6]">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Volver
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-black">Iniciar sesión con Facebook</h1>
            <p className="text-gray-600 mt-2">Usa tu cuenta de Facebook para acceder a OFIPROF</p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-[#3b5998] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email o teléfono</Label>
              <Input
                id="email"
                type="text"
                placeholder="Email o teléfono"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <Button type="submit" className="w-full bg-[#3b5998] hover:bg-[#324b81] text-white">
              Continuar con Facebook
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Al iniciar sesión con Facebook, aceptas nuestros{" "}
              <Link href="/terminos" className="text-[#8eaceb] hover:text-[#6d8fd6]">
                Términos y Condiciones
              </Link>{" "}
              y{" "}
              <Link href="/privacidad" className="text-[#8eaceb] hover:text-[#6d8fd6]">
                Política de Privacidad
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
