
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Film, Upload, Video, Images, Play, Download } from "lucide-react";

const services = [
  {
    title: "Video Editing",
    description: "Professional video editing with seamless transitions, color grading, and pacing to tell your story effectively.",
    icon: Video
  },
  {
    title: "Motion Graphics",
    description: "Eye-catching motion graphics and animations to enhance your video content and engage viewers.",
    icon: Play
  },
  {
    title: "Color Grading",
    description: "Expert color correction and grading to establish mood, atmosphere, and visual consistency across your footage.",
    icon: Images
  },
  {
    title: "Post-Production",
    description: "Comprehensive post-production services including sound design, visual effects, and final delivery formats.",
    icon: Film
  },
  {
    title: "Content Optimization",
    description: "Optimize your video content for different platforms and screens, ensuring maximum impact across all devices.",
    icon: Upload
  },
  {
    title: "Audio Enhancement",
    description: "Professional audio mixing, sound design, and music selection to complement and elevate your visual content.",
    icon: Download
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 scroll-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            <span className="text-gradient">Professional</span> Services
          </h2>
          <p className="text-gray-400">
            Comprehensive video editing and post-production services to elevate your visual content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border/50 hover-scale overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <service.icon className="h-8 w-8 text-primary" />
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">{index + 1}</span>
                  </div>
                </div>
                <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
