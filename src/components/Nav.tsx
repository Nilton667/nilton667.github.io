"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Serviços',
        path: '/servicos',
    },
    {
        name: 'Resumo',
        path: '/resumo',
    },
    {
        name: 'Trabalhos',
        path: '/trabalhos',
    },
    {
        name: 'Contacto',
        path: '/contacto',
    }
];

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">   
            {
                links.map((link, i)=>{
                    return(
                    <Link 
                        href={link.path} 
                        key={i}
                        className={`${
                            link.path === pathname && "text-accent border-b-2 border-accent"
                        } capitalie font-medium hover:text-accent transition-all`}>
                        {link.name}</Link>)
                })
            }
        </nav>
    );
  }
  