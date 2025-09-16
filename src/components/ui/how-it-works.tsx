import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { UserPlus, Search, MessageSquare, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up & Choose Your Role",
    description: "Join as a Creator, Brand, or Agency with a personalized profile that showcases your unique strengths and goals.",
    number: "01"
  },
  {
    icon: Search,
    title: "Smart Matching & Discovery",
    description: "Our AI-powered filters help you find the perfect collaborators based on niche, audience, style, and campaign requirements.",
    number: "02"
  },
  {
    icon: MessageSquare,
    title: "Collaborate in Real-Time",
    description: "Use our intuitive dashboards, messaging system, and project management tools to bring campaigns to life seamlessly.",
    number: "03"
  },
  {
    icon: TrendingUp,
    title: "Track Success & Grow",
    description: "Monitor campaign performance, join trending challenges, and scale your influence with detailed analytics and insights.",
    number: "04"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-accent/30 bg-accent/5">
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
              Four Simple Steps
            </span>
            <br />
            <span className="text-foreground">to Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From signup to success, StreakLink makes collaboration effortless
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative p-8 neon-border hover-glow-primary group cursor-pointer">
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center glow-primary">
                <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="mb-6 p-4 rounded-2xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                <step.icon className="h-8 w-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connection line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-accent/50" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;