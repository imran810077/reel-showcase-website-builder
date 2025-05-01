
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary scroll-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-[4/5] bg-card rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1742&auto=format&fit=crop"
                  alt="Video Editor working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-xl border border-border max-w-[250px]">
                <p className="font-medium font-montserrat text-lg mb-2">10+ Years Experience</p>
                <p className="text-sm text-gray-400">Creating captivating visual stories that drive engagement</p>
              </div>
              <div className="absolute -top-6 -left-6 bg-primary/10 backdrop-blur-sm p-6 rounded-full border border-primary/20">
                <span className="text-5xl font-bold text-primary">7</span>
                <span className="block text-xs text-primary/80 mt-1">Awards</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
              About <span className="text-gradient">My Work</span>
            </h2>
            
            <div className="space-y-4 mb-6">
              <p className="text-gray-300">
                I am a passionate video editor with over a decade of experience in creating compelling visual content for brands, agencies, and content creators around the world.
              </p>
              <p className="text-gray-400">
                My editing style combines technical precision with creative storytelling to produce videos that not only look stunning but also effectively communicate messages and evoke emotions.
              </p>
              <p className="text-gray-400">
                Whether it's commercial projects, documentaries, or creative content, I approach each project with dedication to craft and attention to detail, ensuring that every frame serves the overall vision.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">Technical Skills</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  <li>Adobe Premiere Pro</li>
                  <li>After Effects</li>
                  <li>DaVinci Resolve</li>
                  <li>Final Cut Pro</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Specialties</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  <li>Cinematic Editing</li>
                  <li>Color Grading</li>
                  <li>Motion Graphics</li>
                  <li>Sound Design</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-medium">Download Resume</Button>
              <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">Contact Me</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
