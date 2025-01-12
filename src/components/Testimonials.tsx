import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from "react-i18next";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface Client {
  id: number;
  name: string;
  country: string;
  platform: string;
  feedback: string;
  projectTitle: string;
}

const clients: Client[] = [
  { 
    id: 1, 
    name: "Renaldo Arciola", 
    country: "Malta", 
    platform: "freelancer.com",
    feedback: "Outstanding work on the Company Culture Analysis project. The data visualization and insights provided were exactly what we needed.",
    projectTitle: "Company Culture Analysis"
  },
  { 
    id: 2, 
    name: "Andrew Howard", 
    country: "United Kingdom", 
    platform: "Upwork.com",
    feedback: "The AI chatbot implementation exceeded our expectations. Very professional and thorough approach.",
    projectTitle: "AI-Powered Chatbot Platform"
  },
  { 
    id: 3, 
    name: "Jose Remis", 
    country: "United States", 
    platform: "Upwork.com",
    feedback: "Excellent work on our image search engine. The integration with Google Search API was seamless.",
    projectTitle: "Reverse Image Search Engine"
  },
  { 
    id: 4, 
    name: "Michael Aganassia", 
    country: "United Kingdom", 
    platform: "Upwork.com",
    feedback: "The Ollabot platform transformed our customer service. Highly recommend!",
    projectTitle: "Ollabot - AI Automation Platform"
  },
  { 
    id: 5, 
    name: "Kevin Mussate", 
    country: "United States", 
    platform: "Upwork.com",
    feedback: "Jsonscout has been a game-changer for our data transformation needs. Excellent implementation.",
    projectTitle: "Jsonscout - Data Transformation Platform"
  },
  { 
    id: 6, 
    name: "Rohit Wagle", 
    country: "United States", 
    platform: "Upwork.com",
    feedback: "The document editor is intuitive and powerful. Great attention to detail.",
    projectTitle: "Online Document Editor - Doculever"
  },
  { 
    id: 7, 
    name: "Gianni Oconner", 
    country: "United Kingdom", 
    platform: "Upwork.com",
    feedback: "The voice assistant implementation was flawless. Very impressed with the natural interactions.",
    projectTitle: "Voice-Interactive AI Assistant"
  },
  { 
    id: 8, 
    name: "Peter Ma", 
    country: "China", 
    platform: "Cofounderlabs",
    feedback: "Novmuser AI has revolutionized our writing process. The AI integration is seamless.",
    projectTitle: "Novmuser AI"
  },
  { 
    id: 9, 
    name: "Amaziah Yahalom", 
    country: "United States", 
    platform: "Upwork.com",
    feedback: "The presale launchpad exceeded our expectations. Very professional implementation.",
    projectTitle: "TowerTransition - Meme Coin Presale Launchpad"
  },
  { 
    id: 10, 
    name: "Daniel Clark", 
    country: "United States", 
    platform: "Upwork.com",
    feedback: "The integer transformation solution was exactly what we needed. Excellent optimization.",
    projectTitle: "Giant Integer Transformer with Python"
  },
  { 
    id: 11, 
    name: "Rodrigo Gomez Conejo", 
    country: "Spain", 
    platform: "workana.com",
    feedback: "The smart contracts developed for Autheo were secure and efficient. Great work!",
    projectTitle: "Autheo - Next-Gen Social Media Platform"
  },
  { 
    id: 12, 
    name: "Jack Feuer", 
    country: "United States", 
    platform: "Telegram",
    feedback: "Project Athena has significantly improved our Web3 security. Outstanding implementation.",
    projectTitle: "Project Athena - Web3 Security Platform"
  },
  { 
    id: 13, 
    name: "Andrew Tonnie", 
    country: "United States", 
    platform: "Upwork.com",
    feedback: "The Chrome extension works perfectly for our real estate data needs. Very satisfied.",
    projectTitle: "Kurouto - Real Estate Site Scraping Chrome Extension"
  }
];

export const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-accent/30">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          {t('testimonials.title')}
        </h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <Card className="max-w-md mx-auto hover-scale bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {client.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{client.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">{t('testimonials.country')}: </span>
                        {client.country}
                      </p>
                      <p className="text-sm text-primary">
                        <span className="font-medium">{t('testimonials.platform')}: </span>
                        {client.platform}
                      </p>
                      <p className="text-sm font-medium text-muted-foreground mt-2">
                        <span className="font-medium">{t('testimonials.projectTitle')}: </span>
                        {client.projectTitle}
                      </p>
                      <blockquote className="mt-4 text-foreground italic">
                        "{t(`testimonials.feedback.${client.id}`)}"
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};