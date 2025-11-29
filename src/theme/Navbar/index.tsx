import { useLocation } from "@docusaurus/router";
import type { WrapperProps } from "@docusaurus/types";
import Navbar from "@theme-original/Navbar";
import type NavbarType from "@theme/Navbar";
import { type ReactNode } from "react";
import { HeroBackground } from "../../components/HeroBackground";

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): ReactNode {
    const location = useLocation();

    const combinedClassName = [
        "absolute left-0 w-full text-primary shrink-0 z-1 pointer-events-none transition-all",
        location.pathname === "/" ? "opacity-100" : "opacity-30"
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className="relative">
            <Navbar {...props} />
            <div className={combinedClassName}>
                <HeroBackground />
            </div>
        </div>
    );
}
