import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
    return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/*Logo*/}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Nilton667<span className="text-accent">.</span>
                </h1>
            </Link>

            {/*Desktop menu*/}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link target="_blank" href="https://wa.me/244935074974">
                    <Button variant={'default'}>Whatsapp</Button>
                </Link>
            </div>

            {/*Mobile menu*/}
            <div className="xl:hidden">
                <MobileNav/>
            </div>
        </div>
    </header>
    );
}