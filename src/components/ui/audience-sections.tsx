import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Target, 
  Network, 
  Camera, 
  DollarSign, 
  Users, 
  Building, 
  Megaphone, 
  Settings,
  TrendingUp,
  BarChart3
} from "lucide-react";

const audiences = [
  {
    id: "creators",
    title: "For Creators",
    subtitle: "Build Your Brand. Showcase Your Talent.",
    description: "Transform your passion into profit with personalized portfolios, brand campaigns, and trending challenges.",
    icon: Palette,
    accent: "primary",
    features: [
      { icon: Camera, text: "Personalized portfolio showcase" },
      { icon: Target, text: "Apply to brand campaigns" },
      { icon: TrendingUp, text: "Join viral trend challenges" },
      { icon: Users, text: "Grow your audience visibility" }
    ],
    cta: "Join as Creator",
    gradient: "from-primary/20 via-accent/10 to-transparent"
  },
  {
    id: "businesses",
    title: "For Businesses", 
    subtitle: "Find Perfect Partners. Scale Your Impact.",
    description: "Connect with authentic creators who align with your brand values and campaign objectives through smart matching.",
    icon: Target,
    accent: "accent", 
    features: [
      { icon: DollarSign, text: "Post project briefs with budgets" },
      { icon: Users, text: "Discover creators with filters" },
      { icon: BarChart3, text: "Track campaign progress" },
      { icon: Network, text: "Smart audience matching" }
    ],
    cta: "Post a Campaign",
    gradient: "from-accent/20 via-highlight/10 to-transparent"
  },
  {
    id: "agencies",
    title: "For Media Agencies",
    subtitle: "Streamline Operations. Amplify Results.", 
    description: "Manage multiple client campaigns, access premium creator networks, and deliver exceptional results at scale.",
    icon: Building,
    accent: "highlight",
    features: [
      { icon: Megaphone, text: "List agency services" },
      { icon: Settings, text: "Manage influencer campaigns" },
      { icon: Network, text: "Smart brand-creator collaboration" },
      { icon: BarChart3, text: "Advanced analytics & reporting" }
    ],
    cta: "Discover Agencies",
    gradient: "from-highlight/20 via-cta/10 to-transparent"
  }
];

const AudienceSections = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-highlight/30 bg-highlight/5">
            Built for Everyone
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Choose Your</span>
            <br />
            <span className="bg-gradient-to-r from-highlight via-cta to-primary bg-clip-text text-transparent">
              Success Path
            </span>
          </h2>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={audience.id} className="relative p-8 neon-border hover-glow-primary group cursor-pointer overflow-hidden">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} group-hover:opacity-80 transition-opacity`} />
              
              <div className="relative z-10">
                {/* Icon header */}
                <div className="mb-6 relative">
                  <div className={`p-4 rounded-2xl bg-${audience.accent}/10 w-fit relative`}>
                    <audience.icon className={`h-10 w-10 text-${audience.accent}`} />
                    <div className={`absolute inset-0 rounded-2xl bg-${audience.accent}/20 blur-xl`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {audience.title}
                </h3>
                <p className={`text-lg font-medium mb-4 text-${audience.accent}`}>
                  {audience.subtitle}
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {audience.description}
                </p>

                {/* Features list */}
                <div className="space-y-4 mb-8">
                  {audience.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-${audience.accent}/10`}>
                        <feature.icon className={`h-4 w-4 text-${audience.accent}`} />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className={`w-full bg-${audience.accent} hover:bg-${audience.accent}/90 text-${audience.accent}-foreground hover-glow-${audience.accent} group-hover:scale-105 transition-transform`}
                >
                  {audience.cta}
                </Button>
              </div>

              {/* Corner decoration */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-${audience.accent}/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSections;