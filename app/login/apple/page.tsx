"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AppleLoginPage() {
  const [appleId, setAppleId] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación con Apple
    console.log("Iniciando sesión con Apple:", { appleId, password })
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
            <h1 className="text-2xl font-bold text-black">Iniciar sesión con Apple</h1>
            <p className="text-gray-600 mt-2">Usa tu Apple ID para acceder a OFIPROF</p>
          </div>

          <div className="flex justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3-.019-2.17 2.416-2.954 2.5-3-1.023-1.492-2.951-1.963-3.5-2-1.433-.111-2.83 1-3.5 1-.68 0-1.9-1-3-1z" />
              <path d="M12 4a2 2 0 0 0 2-2 2 2 0 0 0-2 2" />
            </svg>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="appleId">Apple ID</Label>
              <Input
                id="appleId"
                type="email"
                placeholder="tu@icloud.com"
                value={appleId}
                onChange={(e) => setAppleId(e.target.value)}
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

            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
              Continuar con Apple
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Al iniciar sesión con Apple, aceptas nuestros{" "}
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
