import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  User, 
  Briefcase, 
  MessageCircle, 
  BarChart3, 
  TrendingUp, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: User,
    title: "Portfolio Sharing",
    description: "Create stunning personalized portfolios that showcase your work and attract the right collaborators.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Briefcase,
    title: "Campaign Briefs & Budgets",
    description: "Post detailed project briefs with clear budgets and requirements to find perfect matches.",
    gradient: "from-accent to-highlight"
  },
  {
    icon: MessageCircle,
    title: "Real-Time Messaging",
    description: "Collaborate seamlessly with integrated messaging, file sharing, and project updates.",
    gradient: "from-highlight to-cta"
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    description: "Track campaign performance, audience growth, and collaboration success with detailed insights.",
    gradient: "from-cta to-primary"
  },
  {
    icon: TrendingUp,
    title: "Trend Hub Challenges",
    description: "Join time-limited viral challenges and boost your visibility with trending content opportunities.",
    gradient: "from-primary via-accent to-highlight"
  },
  {
    icon: Zap,
    title: "Smart Matchmaking",
    description: "AI-powered matching system connects you with the perfect collaborators based on your goals.",
    gradient: "from-highlight via-cta to-accent"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/5">
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="text-foreground">to Succeed Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed for creators, brands, and agencies to collaborate effortlessly
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative p-8 neon-border hover-glow-primary group cursor-pointer overflow-hidden">
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                {/* Icon container with glow */}
                <div className="mb-6 relative">
                  <div className="p-4 rounded-2xl bg-card/50 backdrop-blur-sm w-fit relative">
                    <feature.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl group-hover:bg-accent/30 transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect indicator */}
                <div className="mt-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more →</span>
                </div>
              </div>

              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the future of collaboration?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg hover-glow-primary font-medium">
              Start Your Free Trial
            </button>
            <button className="px-8 py-3 border border-accent/30 hover:bg-accent/10 text-accent rounded-lg hover-glow-accent font-medium">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;