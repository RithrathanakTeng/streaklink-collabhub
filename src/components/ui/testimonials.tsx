import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, TrendingUp, DollarSign, Users } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  metric: {
    value: string;
    label: string;
    icon: any;
  };
  category: "creator" | "brand" | "agency";
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Content Creator",
    company: "@sarahcreates",
    avatar: "/api/placeholder/64/64",
    content: "StreakLink transformed my creator journey! I went from 10K to 500K followers in 6 months through brand partnerships I found on the platform. The smart matching actually works - every collaboration felt authentic and aligned with my values.",
    rating: 5,
    metric: {
      value: "500K+",
      label: "Followers Gained",
      icon: Users
    },
    category: "creator"
  },
  {
    id: "2", 
    name: "Marcus Rodriguez",
    role: "Marketing Director",
    company: "EcoTech Solutions",
    avatar: "/api/placeholder/64/64",
    content: "We've run 12 campaigns through StreakLink and achieved 3x better ROI compared to traditional influencer platforms. The creator quality is exceptional, and the dashboard makes tracking performance effortless.",
    rating: 5,
    metric: {
      value: "300%",
      label: "ROI Increase", 
      icon: TrendingUp
    },
    category: "brand"
  },
  {
    id: "3",
    name: "Jennifer Walsh",
    role: "Agency Founder",
    company: "Digital Spark Agency",
    avatar: "/api/placeholder/64/64", 
    content: "Managing campaigns for 20+ clients used to be chaos. StreakLink's agency tools streamlined everything - from creator discovery to campaign reporting. We've increased our client capacity by 200% while improving results.",
    rating: 5,
    metric: {
      value: "$2.5M+",
      label: "Campaign Value Managed",
      icon: DollarSign
    },
    category: "agency"
  }
];

const categoryColors = {
  creator: "primary",
  brand: "accent", 
  agency: "highlight"
};

const categoryLabels = {
  creator: "Creator Success",
  brand: "Brand Growth",
  agency: "Agency Scale"
};

const Testimonials = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/5">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Real Results from</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent">
              Real People
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how creators, brands, and agencies are achieving extraordinary results together
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const colorClass = categoryColors[testimonial.category];
            
            return (
              <Card key={testimonial.id} className="relative p-8 neon-border hover-glow-primary group cursor-pointer overflow-hidden">
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="outline" 
                    className={`px-3 py-1 text-xs border-${colorClass}/30 bg-${colorClass}/10 text-${colorClass}`}
                  >
                    {categoryLabels[testimonial.category]}
                  </Badge>
                </div>

                {/* Quote icon */}
                <div className="mb-6 relative">
                  <div className={`p-3 rounded-xl bg-${colorClass}/10 w-fit relative`}>
                    <Quote className={`h-6 w-6 text-${colorClass}`} />
                    <div className={`absolute inset-0 rounded-xl bg-${colorClass}/20 blur-xl`} />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 fill-${colorClass} text-${colorClass}`} />
                    ))}
                  </div>

                  {/* Metric highlight */}
                  <div className={`bg-${colorClass}/5 rounded-lg p-4 mb-6 border border-${colorClass}/20`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-${colorClass}/10`}>
                        <testimonial.metric.icon className={`h-5 w-5 text-${colorClass}`} />
                      </div>
                      <div>
                        <div className={`text-2xl font-bold text-${colorClass}`}>
                          {testimonial.metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.metric.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className={`bg-${colorClass}/10 text-${colorClass}`}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className={`text-sm text-${colorClass} font-medium`}>{testimonial.company}</div>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-${colorClass}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              </Card>
            );
          })}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">$50M+</div>
              <div className="text-muted-foreground">Creator Earnings Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-highlight mb-2">10,000+</div>
              <div className="text-muted-foreground">Successful Collaborations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;