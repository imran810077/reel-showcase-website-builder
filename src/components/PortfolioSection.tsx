
import { Play } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const videoProjects = [
  {
    id: 1,
    title: "Corporate Brand Video",
    category: "commercial",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop",
    videoUrl: "https://player.vimeo.com/video/290775259",
    description: "Brand promotional video for a tech company highlighting their innovation and company culture."
  },
  {
    id: 2,
    title: "Adventure Travel Film",
    category: "travel",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1740&auto=format&fit=crop",
    videoUrl: "https://player.vimeo.com/video/247261658",
    description: "Cinematic travel film showcasing breathtaking landscapes and outdoor adventures."
  },
  {
    id: 3,
    title: "Product Launch Campaign",
    category: "commercial",
    thumbnail: "https://images.unsplash.com/photo-1529500403878-4d2bd2d2022f?q=80&w=1740&auto=format&fit=crop",
    videoUrl: "https://player.vimeo.com/video/369216955",
    description: "Product launch video highlighting features and benefits with stylish motion graphics."
  },
  {
    id: 4,
    title: "Music Video Production",
    category: "creative",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1740&auto=format&fit=crop",
    videoUrl: "https://player.vimeo.com/video/324463470",
    description: "Creative music video with artistic visual effects and synchronized editing."
  },
  {
    id: 5,
    title: "Short Documentary",
    category: "documentary",
    thumbnail: "https://images.unsplash.com/photo-1548675285-b45a0418c53b?q=80&w=1738&auto=format&fit=crop",
    videoUrl: "https://player.vimeo.com/video/239069719",
    description: "Documentary short telling the inspiring story of local artisans and their craft."
  },
  {
    id: 6,
    title: "Wedding Highlights",
    category: "event",
    thumbnail: "https://images.unsplash.com/photo-1505236732171-72a5b19c4981?q=80&w=1642&auto=format&fit=crop",
    videoUrl: "https://player.vimeo.com/video/429380425",
    description: "Emotional wedding highlight reel capturing special moments in a cinematic style."
  }
];

const VideoCard = ({ project }: { project: typeof videoProjects[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="video-card group" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="hover-play-icon absolute top-1/2 left-1/2 bg-primary/90 h-16 w-16 rounded-full flex items-center justify-center">
            <Play className="h-8 w-8 text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 gradient-overlay">
          <h3 className="text-lg font-bold font-montserrat">{project.title}</h3>
          <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary scroll-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-400">
            Showcasing a diverse range of video editing work across multiple genres and styles
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">All Work</TabsTrigger>
            <TabsTrigger value="commercial" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Commercial</TabsTrigger>
            <TabsTrigger value="creative" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Creative</TabsTrigger>
            <TabsTrigger value="documentary" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Documentary</TabsTrigger>
            <TabsTrigger value="travel" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Travel</TabsTrigger>
            <TabsTrigger value="event" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoProjects.map(project => (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <VideoCard project={project} />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-card">
                    <div className="video-container">
                      <iframe
                        src={`${project.videoUrl}?autoplay=1`}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={project.title}
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400">{project.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
          
          {["commercial", "creative", "documentary", "travel", "event"].map(category => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoProjects
                  .filter(project => project.category === category)
                  .map(project => (
                    <Dialog key={project.id}>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer">
                          <VideoCard project={project} />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 bg-card">
                        <div className="video-container">
                          <iframe
                            src={`${project.videoUrl}?autoplay=1`}
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title={project.title}
                          ></iframe>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-gray-400">{project.description}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PortfolioSection;
