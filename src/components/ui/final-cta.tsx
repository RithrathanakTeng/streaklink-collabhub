import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Briefcase, Building, Zap, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-highlight/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA Card */}
        <Card className="max-w-4xl mx-auto p-12 text-center neon-border relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 gradient-hero opacity-50" />
          
          <div className="relative z-10">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="p-6 rounded-3xl gradient-primary glow-primary">
                <Zap className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Start Your</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent">
                Streak Today
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join thousands of creators, brands, and agencies who are already building amazing collaborations. 
              Your next breakthrough partnership is just one click away.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-glow-primary text-lg px-10 py-6 min-w-[220px] group">
                <Users className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Join as Creator
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-accent hover:bg-accent/90 hover-glow-accent border-accent text-accent-foreground text-lg px-10 py-6 min-w-[220px] group">
                <Briefcase className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Post Campaign
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" className="bg-highlight hover:bg-highlight/90 hover-glow-highlight text-lg px-10 py-6 min-w-[220px] group">
                <Building className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Explore Agencies
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span>Free to get started</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-highlight animate-pulse"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-primary/30 to-transparent rounded-full opacity-50" />
          <div className="absolute bottom-8 left-8 w-32 h-32 bg-gradient-to-tr from-accent/20 to-transparent rounded-full opacity-50" />
        </Card>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-1">2 min</div>
            <div className="text-sm text-muted-foreground">Setup Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-highlight mb-1">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cta mb-1">5★</div>
            <div className="text-sm text-muted-foreground">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;