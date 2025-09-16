import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Building } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-highlight/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <Badge variant="outline" className="mb-8 px-6 py-2 text-lg font-medium border-primary/30 bg-primary/5 hover-glow-primary">
          🚀 The Future of Creator Collaboration
        </Badge>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent">
            Connect. Collaborate.
          </span>
          <br />
          <span className="text-foreground">Create Impact.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          The all-in-one platform for creators, brands, and agencies. 
          Smart matchmaking, real-time collaboration, and trending challenges that drive results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 hover-glow-primary text-lg px-8 py-6 min-w-[200px]">
            <Users className="mr-2 h-6 w-6" />
            Join as Creator
          </Button>
          <Button size="lg" variant="outline" className="bg-accent hover:bg-accent/90 hover-glow-accent border-accent text-accent-foreground text-lg px-8 py-6 min-w-[200px]">
            <Briefcase className="mr-2 h-6 w-6" />
            Post a Campaign
          </Button>
          <Button size="lg" className="bg-highlight hover:bg-highlight/90 hover-glow-highlight text-lg px-8 py-6 min-w-[200px]">
            <Building className="mr-2 h-6 w-6" />
            Discover Agencies
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Active Creators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Brand Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-highlight mb-2">50+</div>
            <div className="text-muted-foreground">Media Agencies</div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden neon-border glow-primary">
            <img 
              src={heroImage} 
              alt="StreakLink Platform Dashboard - Creators, Brands and Agencies collaborating" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;