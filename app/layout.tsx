import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"MAZ Palillos de Madera",description:"Palillos y soluciones de madera para la industria."};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es"><body>{children}</body></html>}
