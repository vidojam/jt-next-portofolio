// "use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";


export default function NavBar() {
  // const pathname = usePathname();

  return (
    <nav className="bg-primary sticky-top">
       <div className="container">
          <Link href="/">
               Portfolio
          </Link>
            <ul>
              <Link href="/">Home</Link>
              <Link href="/Projects">Projects</Link>
              <Link href="/Certificates">Certificates</Link>
              <Link href="/Resume">Resume</Link>
              <Link href="/Contact">Contact</Link>
            </ul>
       </div>
    </nav>
  );
}