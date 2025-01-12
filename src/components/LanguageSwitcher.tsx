import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { Languages } from "lucide-react";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isChanging, setIsChanging] = useState(false);
  const { toast } = useToast();

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
  ];

  const handleLanguageChange = async (value: string) => {
    setIsChanging(true);
    try {
      await i18n.changeLanguage(value);
      const selectedLang = languages.find((lang) => lang.code === value);
      toast({
        title: "Language Changed",
        description: `Successfully changed to ${selectedLang?.name} ${selectedLang?.flag}`,
      });
    } catch (error) {
      console.error("Failed to change language:", error);
      toast({
        title: "Error",
        description: "Failed to change language. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <Select
      defaultValue={i18n.language}
      onValueChange={handleLanguageChange}
      disabled={isChanging}
    >
      <SelectTrigger className="w-[140px] bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-accent/20 transition-colors">
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4" />
          <SelectValue placeholder="Language" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem 
            key={lang.code} 
            value={lang.code}
            className="cursor-pointer hover:bg-accent/20 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};