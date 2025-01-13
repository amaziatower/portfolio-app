import { useTranslation } from "react-i18next";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare } from "lucide-react";

export const Hero = () => {
  const { t } = useTranslation();
  const el = useRef(null);

  useEffect(() => {
    const titles: string[] = [
      t("hero.titles.0"),
      t("hero.titles.1"),
      t("hero.titles.2"),
    ];

    const typed = new Typed(el.current, {
      strings: titles,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [t]);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo */}
          <div className="flex flex-col items-center md:items-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="/lovable-uploads/d0afc564-c099-4ce3-8311-3c21f6c4eb65.png"
                alt="Profile"
                className="rounded-full object-cover w-full h-full border-4 border-primary/20"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              {t("hero.role")}
            </h1>
            <p className="text-xl md:text-2xl">
              <span>I am </span>
              <span ref={el} className="text-primary" />
            </p>

            {/* Contact Information */}
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>1355 Dewberry Trail Marietta, GA US 30062-4012</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:amaziaytower@gmail.com" className="hover:text-primary transition-colors">
                  amaziaytower@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+16787482048" className="hover:text-primary transition-colors">
                  (678)-748-2048
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/amaziatower"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://t.me/amazia_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <MessageSquare className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};