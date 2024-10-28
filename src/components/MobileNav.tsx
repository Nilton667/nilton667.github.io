"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { AlignRight } from "lucide-react";

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

export default function MobileNav() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <AlignRight className="text-[32px] text-accent"/>
            </SheetTrigger> 
            <SheetContent className="flex flex-col">
            <SheetTitle></SheetTitle>
            <div className="mt-20 mb-20 text-center text-2xl">
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Nilton667<span className="text-accent">.</span>
                </h1>
            </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
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
            </SheetContent>  
        </Sheet>
    );
}