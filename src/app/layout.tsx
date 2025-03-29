import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Viewport } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ruedata - Tire Management with AI",
  description: "Software that saves up to 30% on tire expenses while improving fleet safety and sustainability",
}

export const viewport: Viewport = {
  themeColor: "#0a2463",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
