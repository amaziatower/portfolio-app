import { cn } from "@/lib/utils";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navigation = () => {
  const { t } = useTranslation();

  const navItems = [
    { label: t("nav.about"), to: "about" },
    { label: t("nav.experience"), to: "experience" },
    { label: t("nav.projects"), to: "projects" },
    { label: t("nav.testimonials"), to: "testimonials" },
    { label: t("nav.contact"), to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className={cn(
                    "text-sm cursor-pointer hover:text-primary transition-colors",
                    "hover:underline underline-offset-4"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};