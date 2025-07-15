import Link from "next/link";

const navItems = [
    { label: "Home", href: "/" },
    { label: "companies", href: "/companies" },
    
]

const NavItems = () => {
    return (
        <nav className="flex items-center gap-4">
            {navItems.map((item) => (
                <Link href={item.href} key={item.label}>
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}

export default NavItems;