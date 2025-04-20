import Link from "next/link"
import { ChevronRight } from "lucide-react"

export interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="container mx-auto px-4 py-2 bg-white/50 backdrop-blur-sm relative z-10">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <Link href="/home" className="text-gray-600 hover:text-[#8eaceb]">
              Home
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              {index === items.length - 1 ? (
                <span className="ml-1 md:ml-2 text-[#8eaceb] font-medium">{item.label}</span>
              ) : (
                <Link href={item.href} className="ml-1 md:ml-2 text-gray-600 hover:text-[#8eaceb]">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
