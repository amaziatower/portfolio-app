import { useTranslation } from "react-i18next";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

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
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            {t("hero.role")}
          </h1>
          <p className="text-xl md:text-2xl">
            <span>I am </span>
            <span ref={el} className="text-primary" />
          </p>
          <div className="space-y-4 max-w-3xl mx-auto text-muted-foreground">
            {Object.entries(t("hero.skills", { returnObjects: true })).map(([key, value]) => (
              <p key={key} className="text-sm md:text-base">
                {value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};