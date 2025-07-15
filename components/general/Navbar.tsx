import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="py-5 flex justify-between items-center gap-6">
            <div className="hidden sm:flex items-center gap-6">
                <Link href="/">
                    <div className="flex items-center gap-2.5 cursor-pointer">
                        <Image                
                            src="/accumeo-black.svg"
                            alt="Logo"
                            width={64} // px
                            height={32}
                          />
                    </div>
                </Link>
            </div>

            <div className="hidden sm:flex items-center gap-6">
                <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/">
                    Home
                </Link>
                <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/dashboard">
                    Dashboard
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <Input type="search" placeholder="Search"/>
            </div>
        </nav>
    );
}
