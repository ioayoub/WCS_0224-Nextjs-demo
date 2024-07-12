import React from "react";
import Link from "next/link";

export default function Navbar() : React.ReactElement {
  
  
  return (
    <nav className="bg-indigo-600 text-white flex justify-between p-6">
      <span>MyLogo</span>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}