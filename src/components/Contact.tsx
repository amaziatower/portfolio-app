import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: t("contact.success"),
      description: t("contact.successMessage"),
    });
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground">{t("contact.description")}</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              {t("contact.name")}
            </label>
            <Input
              id="name"
              placeholder={t("contact.namePlaceholder")}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              {t("contact.email")}
            </label>
            <Input
              id="email"
              type="email"
              placeholder={t("contact.emailPlaceholder")}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              {t("contact.message")}
            </label>
            <Textarea
              id="message"
              placeholder={t("contact.messagePlaceholder")}
              required
              className="min-h-[150px]"
            />
          </div>
          <Button type="submit" className="w-full">
            {t("contact.submit")}
          </Button>
        </form>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};