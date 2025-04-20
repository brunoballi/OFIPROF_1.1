"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegistroPage() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [aceptaTerminos, setAceptaTerminos] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de registro
    console.log("Registrando usuario:", { nombre, email, password, aceptaTerminos })
  }

  return (
    <div className="app-background flex flex-col">
      <div className="p-4">
        <Link href="/" className="inline-flex items-center text-[#8eaceb] hover:text-[#6d8fd6]">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Volver
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-black">Crear una cuenta</h1>
            <p className="text-gray-600 mt-2">Regístrate para acceder a OFIPROF</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo</Label>
              <Input
                id="nombre"
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
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

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terminos"
                checked={aceptaTerminos}
                onCheckedChange={(checked) => setAceptaTerminos(checked as boolean)}
                required
              />
              <Label htmlFor="terminos" className="text-sm font-normal cursor-pointer">
                Acepto los{" "}
                <Link href="/terminos" className="text-[#8eaceb] hover:text-[#6d8fd6]">
                  Términos y Condiciones
                </Link>{" "}
                y la{" "}
                <Link href="/privacidad" className="text-[#8eaceb] hover:text-[#6d8fd6]">
                  Política de Privacidad
                </Link>
              </Label>
            </div>

            <Button type="submit" className="w-full bg-[#8eaceb] hover:bg-[#6d8fd6] text-black">
              Crear cuenta
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login/email" className="text-[#8eaceb] hover:text-[#6d8fd6]">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
