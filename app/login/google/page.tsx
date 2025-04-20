"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function GoogleLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación con Google
    console.log("Iniciando sesión con Google:", { email, password })
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
            <h1 className="text-2xl font-bold text-black">Iniciar sesión con Google</h1>
            <p className="text-gray-600 mt-2">Usa tu cuenta de Google para acceder a OFIPROF</p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <span className="text-[#4285F4] text-3xl font-bold">G</span>
              <span className="text-[#EA4335] text-3xl font-bold">o</span>
              <span className="text-[#FBBC05] text-3xl font-bold">o</span>
              <span className="text-[#4285F4] text-3xl font-bold">g</span>
              <span className="text-[#34A853] text-3xl font-bold">l</span>
              <span className="text-[#EA4335] text-3xl font-bold">e</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email de Google</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@gmail.com"
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

            <Button type="submit" className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-black">
              Continuar con Google
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Al iniciar sesión con Google, aceptas nuestros{" "}
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
