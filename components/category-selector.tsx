"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Datos de categorías y subcategorías
const subcategorias = {
  tecnica: [
    "Electricista",
    "Plomero",
    "Gasista",
    "Técnico en aire acondicionado",
    "Reparador de electrodomésticos",
    "Cerrajero",
  ],
  construccion: ["Albañil", "Pintor", "Yesero", "Maestro mayor de obras", "Carpintero", "Herrero"],
  limpieza: ["Personal de limpieza", "Limpieza industrial", "Jardinero", "Fumigador", "Limpieza de vidrios"],
  arte: ["Diseñador gráfico", "Fotógrafo", "Videógrafo", "Ilustrador", "Diseñador de interiores", "Tatuador"],
  belleza: ["Peluquero/a", "Barbero", "Manicurista", "Cosmetóloga", "Maquillador/a", "Masajista"],
  educacion: ["Profesor/a de idiomas", "Tutor escolar", "Instructor de yoga", "Profesor de música", "Coach ontológico"],
  salud: ["Enfermero/a", "Kinesiólogo/a", "Psicólogo/a", "Nutricionista", "Fonoaudiólogo/a", "Acompañante terapéutico"],
  tecnologia: [
    "Desarrollador web",
    "Técnico en computadoras",
    "Especialista en redes",
    "Community manager",
    "Diseñador UX/UI",
  ],
  logistica: ["Chofer particular", "Flete / mudanzas", "Repartidor", "Courier", "Chofer profesional"],
  administrativo: [
    "Asistente virtual",
    "Administrativo/a",
    "Data entry",
    "Atención al cliente",
    "Contador/a",
    "Gestor de trámites",
  ],
  animales: ["Paseador de perros", "Peluquero canino", "Cuidador de mascotas", "Adiestrador"],
  eventos: ["DJ", "Sonidista", "Organizador de eventos", "Animador/a", "Decorador de fiestas", "Catering"],
}

const categoriasTitulos = {
  tecnica: "Servicios Técnicos y Reparaciones",
  construccion: "Construcción y Obras",
  limpieza: "Limpieza y Mantenimiento",
  arte: "Arte, Diseño y Creatividad",
  belleza: "Belleza y Cuidado Personal",
  educacion: "Educación y Capacitación",
  salud: "Salud y Bienestar",
  tecnologia: "Tecnología e Informática",
  logistica: "Logística y Transporte",
  administrativo: "Servicios Administrativos y Comerciales",
  animales: "Cuidado de Animales",
  eventos: "Eventos y Entretenimiento",
}

export default function CategorySelector() {
  const [categoria, setCategoria] = useState("")
  const [subcategoriasDisponibles, setSubcategoriasDisponibles] = useState<string[]>([])
  const [subcategoriasSeleccionadas, setSubcategoriasSeleccionadas] = useState<string[]>([])
  const [resultado, setResultado] = useState<{ categoria: string; subcategorias: string[] } | null>(null)

  useEffect(() => {
    if (categoria && subcategorias[categoria as keyof typeof subcategorias]) {
      setSubcategoriasDisponibles(subcategorias[categoria as keyof typeof subcategorias])
    } else {
      setSubcategoriasDisponibles([])
    }
    setSubcategoriasSeleccionadas([])
  }, [categoria])

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoria(e.target.value)
  }

  const handleSubcategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map((option) => option.value)
    setSubcategoriasSeleccionadas(selectedOptions)
  }

  const handleGuardarSeleccion = () => {
    const categoriaTitulo = categoria ? categoriasTitulos[categoria as keyof typeof categoriasTitulos] : "Ninguna"
    setResultado({
      categoria: categoriaTitulo,
      subcategorias: subcategoriasSeleccionadas,
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-black">Categorías de Oficios y Profesiones</h2>

      <div className="mb-4">
        <label htmlFor="categoria" className="block font-bold text-gray-700 mb-2">
          Categoría Principal:
        </label>
        <select
          id="categoria"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8eaceb]"
          value={categoria}
          onChange={handleCategoriaChange}
        >
          <option value="">-- Selecciona una categoría --</option>
          {Object.entries(categoriasTitulos).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="subcategoria" className="block font-bold text-gray-700 mb-2">
          Subcategorías:
        </label>
        <select
          id="subcategoria"
          multiple
          size={6}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8eaceb]"
          value={subcategoriasSeleccionadas}
          onChange={handleSubcategoriaChange}
        >
          {subcategoriasDisponibles.length > 0 ? (
            subcategoriasDisponibles.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          ) : (
            <option disabled>Selecciona una categoría primero</option>
          )}
        </select>
        <p className="text-sm text-gray-500 mt-1">
          Mantén presionado Ctrl (o Cmd en Mac) para seleccionar múltiples opciones
        </p>
      </div>

      <Button
        onClick={handleGuardarSeleccion}
        className="w-full bg-[#8eaceb] hover:bg-[#6d8fd6] text-black font-medium py-3"
      >
        Buscar Profesionales
      </Button>

      {resultado && (
        <div className="mt-4 p-4 bg-[#f0f4fc] rounded-md">
          <p className="font-bold text-black">Categoría seleccionada: {resultado.categoria}</p>
          <p className="font-bold text-black">
            Subcategorías: {resultado.subcategorias.length > 0 ? resultado.subcategorias.join(", ") : "Ninguna"}
          </p>

          {/* Aquí podrías agregar enlaces a los resultados de búsqueda */}
          <div className="mt-3 grid grid-cols-1 gap-2">
            {resultado.subcategorias.map((subcategoria, index) => (
              <Link
                key={index}
                href={`/categorias/${subcategoria.toLowerCase().replace(/\s+/g, "-")}`}
                className="block p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow text-center text-[#8eaceb] font-medium"
              >
                Ver profesionales de {subcategoria}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
