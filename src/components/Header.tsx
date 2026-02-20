import type {NavBarItem} from "../types/navigation.ts";
import {Link} from "react-router";

type HeaderProps = {
    navBarItems: NavBarItem[]
}

export default function Header({navBarItems} : HeaderProps ){
    return (
        <nav>
            {navBarItems.map(item => (
                <Link key={item.id} to={item.url}>
                    {item.text}
                </Link>
            ))}
        </nav>
    )
}