"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Copy, Github, Linkedin, Instagram, BookOpen, Briefcase } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import ParticleBackground from "@/components/particle-background"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copiado!",
      description: `${label} copiado para a área de transferência.`,
      duration: 3000,
    })
  }

  const links = [
    {
      title: "Bermax Culture",
      description: "Minha Startup de Inteligência Artificial para Negócios",
      url: "https://www.bermaxculture.com.br/",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "GitHub",
      description: "Acesse aqui meus projetos e códigos",
      url: "https://github.com/dhdiogoh",
      icon: <Github className="h-5 w-5" />,
    },
    {
      title: "LinkedIn",
      description: "Minha trajetória profissional e conexões",
      url: "https://www.linkedin.com/in/diogo-henrique-538317294",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      title: "Biblioteca de IAs e Automações",
      description:
        "Tenha acesso aos meus fluxos de automação personalizados para otimizar seus processos e aumentar sua produtividade",
      url: "https://v0-biblioteca-de-ia-s.vercel.app/",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: "TikTok",
      description: "Conteúdo sobre IA, tecnologia e inovação",
      url: "https://www.tiktok.com/@diogohenriquebx",
      icon: <FaTiktok className="h-5 w-5" />,
    },
    {
      title: "Instagram",
      description: "Acompanhe meu dia a dia e dicas de tecnologia",
      url: "https://www.instagram.com/diogohenriquebx",
      icon: <Instagram className="h-5 w-5" />,
    },
  ]

  return (
    <main className="relative min-h-screen bg-black text-white">
      <ParticleBackground />
      <Toaster />

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="z-10 relative">
          {/* Header Section */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <h1 className="mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl pb-1">
                Diogo Henrique
              </h1>

              <p className="mb-4 text-xl font-medium text-gray-200">Especialista em IA for Business</p>

              <div className="mb-6 space-y-1 text-gray-300">
                <p>Founder e CTO Bermax Culture</p>
                <p>Estudante de Análise e Desenvolvimento de Sistemas</p>
                <p>Aluno da Formação Lendária (Primeira Formação de Business IA da América Latina)</p>
              </div>

              <div className="flex flex-col space-y-3">
                <div className="flex items-center">
                  <span className="mr-2 text-gray-400">WhatsApp:</span>
                  <a
                    href="http://wa.me/5591981134890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-purple-600 px-3 py-1 text-sm text-white hover:from-cyan-500 hover:to-purple-500 transition-colors"
                    aria-label="Contato via WhatsApp"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4 mr-1"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Clique aqui
                  </a>
                </div>

                <div className="flex items-center">
                  <span className="mr-2 text-gray-400">Email:</span>
                  <span className="mr-2 text-gray-200">diiogoh04@gmail.com</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-gray-400 hover:text-cyan-400"
                    onClick={() => copyToClipboard("diiogoh04@gmail.com", "Email")}
                  >
                    <Copy className="h-3.5 w-3.5" />
                    <span className="sr-only">Copiar Email</span>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center md:justify-end"
            >
              <div className="group relative h-64 w-64 overflow-hidden rounded-xl border-2 border-cyan-500/30 md:h-80 md:w-80">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 opacity-50 blur-lg transition-all duration-500 group-hover:opacity-75 group-hover:blur-xl"></div>
                <img src="/profile.jpg" alt="Diogo Henrique" className="h-full w-full rounded-xl object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="mb-8 text-2xl font-bold text-gray-200">Meus Links</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-cyan-800/30 bg-gradient-to-r from-black/80 to-gray-900/80 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:from-black/90 hover:to-gray-900/90 hover:shadow-[0_0_15px_rgba(8,145,178,0.3)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 rounded-full bg-cyan-900/30 p-2 text-cyan-400 group-hover:bg-cyan-900/50">
                      {link.icon}
                    </div>
                    <h3 className="text-lg font-medium text-gray-200">{link.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400">{link.description}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center text-sm text-gray-500"
          >
            <p>© 2025 Diogo Henrique. Todos os direitos reservados.</p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
