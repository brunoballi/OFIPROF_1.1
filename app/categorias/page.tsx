import Link from "next/link"
import Header from "@/components/header"
import Breadcrumbs from "@/components/breadcrumbs"
import CategorySelector from "@/components/category-selector"
import { Wrench, Lightbulb, Flame, HardHat, PenToolIcon as ToolIcon } from "lucide-react"

export default function CategoriasPage() {
  const categories = [
    { name: "Plomeros", icon: <Wrench className="mr-2" />, url: "/categorias/plomeros" },
    { name: "Electricistas", icon: <Lightbulb className="mr-2" />, url: "/categorias/electricistas" },
    { name: "Gasistas", icon: <Flame className="mr-2" />, url: "/categorias/gasistas" },
    { name: "Albañiles", icon: <HardHat className="mr-2" />, url: "/categorias/albañiles" },
    { name: "Otros Oficios", icon: <ToolIcon className="mr-2" />, url: "/categorias/otros" },
  ]

  const breadcrumbItems = [{ label: "Categorías", href: "/categorias" }]

  return (
    <div className="app-background">
      <Header activeTab="categorias" />
      <Breadcrumbs items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-black mb-4 text-center">Encuentra el profesional que necesitas</h1>

        {/* Selector de categorías */}
        <CategorySelector />

        <h2 className="text-xl font-bold text-black mb-4">Categorías populares</h2>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.url}
              className="block bg-white p-5 rounded-lg shadow-md text-center text-lg font-semibold hover:transform hover:scale-105 transition-transform duration-200 flex items-center justify-center text-[#8eaceb]"
            >
              {category.icon}
              {category.name}
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/home" className="text-[#8eaceb] hover:text-[#6d8fd6] inline-flex items-center">
            ← Volver al Home
          </Link>
        </div>
      </div>
    </div>
  )
}
