
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center scroll-section">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1605481900799-46a6e675c273?q=80&w=1740&auto=format&fit=crop"
        >
          <source
            src="https://player.vimeo.com/external/439548061.sd.mp4?s=9bd7c6b7c8a7bcc78efe6dad5da3a6ef1f6d4f50&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Crafting Visual</span> Stories That Captivate
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Professional video editing and post-production to bring your vision to life
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="font-medium">
              <Link to="/#portfolio">View My Work</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 font-medium"
              asChild
            >
              <Link to="/#contact" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Let's Collaborate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
