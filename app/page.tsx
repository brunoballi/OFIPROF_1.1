import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  return (
    <div className="welcome-background text-black text-center">
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-center mb-6">
          <div className="relative w-64 h-64">
            {/* Círculos de fondo - COMPLETAMENTE TRANSPARENTES */}
            <div className="absolute inset-0 rounded-full"></div>
            <div className="absolute inset-4 rounded-full"></div>

            {/* ICONOS ORGANIZADOS EN POSICIONES SIMÉTRICAS */}

            {/* Posición Norte */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>

            {/* Posición Noreste */}
            <div className="absolute top-12 right-12 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 16.98h-5.99c-1.66 0-3.01-1.34-3.01-3s1.34-3 3.01-3H18"></path>
                <path d="M18 16.98c1.66 0 3.01-1.34 3.01-3s-1.34-3-3.01-3"></path>
                <line x1="2" y1="4" x2="22" y2="4"></line>
                <line x1="2" y1="20" x2="22" y2="20"></line>
                <line x1="2" y1="14" x2="6" y2="14"></line>
                <line x1="2" y1="10" x2="6" y2="10"></line>
              </svg>
            </div>

            {/* Posición Este */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"></path>
                <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"></path>
                <path d="M14.5 17.5 4.5 15"></path>
              </svg>
            </div>

            {/* Posición Sureste */}
            <div className="absolute bottom-12 right-12 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
              </svg>
            </div>

            {/* Posición Sur */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v8"></path>
                <path d="m4.93 10.93 1.41 1.41"></path>
                <path d="M2 18h2"></path>
                <path d="M20 18h2"></path>
                <path d="m19.07 10.93-1.41 1.41"></path>
                <path d="M22 22H2"></path>
                <path d="m16 6-4 4-4-4"></path>
                <path d="M16 18a4 4 0 0 0-8 0"></path>
              </svg>
            </div>

            {/* Posición Suroeste */}
            <div className="absolute bottom-12 left-12 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m9 10-2 2 2 2"></path>
                <path d="m15 10 2 2-2 2"></path>
                <path d="m12 8-1 8"></path>
              </svg>
            </div>

            {/* Posición Oeste */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                <circle cx="12" cy="13" r="3"></circle>
              </svg>
            </div>

            {/* Posición Noroeste */}
            <div className="absolute top-12 left-12 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>

            {/* Logo central - Usando la imagen exacta proporcionada */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 flex items-center justify-center">
                <Image
                  src="/images/operario.png"
                  alt="Logo de OFIPROF"
                  width={96}
                  height={96}
                  className="rounded-full shadow-md"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">
          ¡Bienvenido/a a <strong>OFIPROF</strong>!
        </h1>
        <p className="text-lg text-gray-800 mb-8">La aplicación de oficios y profesionales que estabas necesitando.</p>

        <div className="space-y-3 max-w-xs mx-auto">
          <Link href="/login/email" className="block">
            <Button variant="outline" className="w-full py-6 text-black border-white hover:bg-white/10">
              Continuar con mi email
            </Button>
          </Link>

          <Link href="/login/apple" className="block">
            <Button variant="default" className="w-full py-6 bg-black text-white hover:bg-black/80">
              Iniciar sesión con Apple
            </Button>
          </Link>

          <Link href="/login/google" className="block">
            <Button variant="default" className="w-full py-6 bg-white text-black hover:bg-white/90">
              Continuar con{" "}
              <span className="inline-flex items-center">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
            </Button>
          </Link>

          <Link href="/login/facebook" className="block">
            <Button variant="default" className="w-full py-6 bg-[#3b5998] text-white hover:bg-[#3b5998]/90">
              Continuar con Facebook
            </Button>
          </Link>
        </div>

        <div className="mt-8">
          <Link href="/home" className="text-black underline hover:text-gray-700">
            Explorar OFIPROF
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-700">
          Al registrarte aceptás nuestros{" "}
          <Link href="#" className="text-black underline">
            Términos y Condiciones
          </Link>{" "}
          y{" "}
          <Link href="#" className="text-black underline">
            Política de Privacidad
          </Link>
        </p>
      </div>
    </div>
  )
}
