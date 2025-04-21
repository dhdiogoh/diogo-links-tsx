"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Copy, ExternalLink, Github, Linkedin, Instagram, BookOpen, Briefcase, Mail, Phone } from "lucide-react"
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
      url: "#",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: "TikTok",
      description: "Conteúdo sobre IA, tecnologia e inovação",
      url: "https://www.tiktok.com/@diogohenriquebx",
      icon: <ExternalLink className="h-5 w-5" />,
    },
    {
      title: "Instagram",
      description: "Acompanhe meu dia a dia e dicas de tecnologia",
      url: "https://www.instagram.com/diogohenriquebx",
      icon: <Instagram className="h-5 w-5" />,
    },
  ]

  const contactInfo = [
    {
      label: "WhatsApp",
      value: "(91) 98113-4890",
      icon: <Phone className="h-4 w-4" />,
      action: () => copyToClipboard("91981134890", "Número de WhatsApp"),
    },
    {
      label: "Email",
      value: "diiogoh04@gmail.com",
      icon: <Mail className="h-4 w-4" />,
      action: () => copyToClipboard("diiogoh04@gmail.com", "Email"),
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

              <div className="flex flex-col space-y-2">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2 text-gray-400">{item.label}:</span>
                    <span className="mr-2 text-gray-200">{item.value}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-gray-400 hover:text-cyan-400"
                      onClick={item.action}
                    >
                      <Copy className="h-3.5 w-3.5" />
                      <span className="sr-only">Copiar {item.label}</span>
                    </Button>
                  </div>
                ))}
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
