import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Trophy, Flame, Zap, Eye, Heart } from "lucide-react";
import { useState, useEffect } from "react";

interface TrendChallenge {
  id: string;
  title: string;
  description: string;
  prize: string;
  timeLeft: number; // in hours
  participants: number;
  views: number;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const challenges: TrendChallenge[] = [
  {
    id: "1",
    title: "60-Second Brand Story",
    description: "Create a compelling brand story video in under 60 seconds that showcases authenticity and creativity.",
    prize: "$5,000",
    timeLeft: 72,
    participants: 1247,
    views: 45680,
    category: "Video",
    difficulty: "Intermediate"
  },
  {
    id: "2", 
    title: "Sustainable Living Challenge",
    description: "Show your audience 3 easy ways to live more sustainably through engaging social content.",
    prize: "$3,500",
    timeLeft: 120,
    participants: 892,
    views: 32400,
    category: "Lifestyle",
    difficulty: "Beginner"
  },
  {
    id: "3",
    title: "AI Tech Explainer",
    description: "Break down complex AI concepts for everyday users in an engaging, accessible format.",
    prize: "$7,500", 
    timeLeft: 48,
    participants: 654,
    views: 28900,
    category: "Tech",
    difficulty: "Advanced"
  }
];

const CountdownTimer = ({ hours }: { hours: number }) => {
  const [timeLeft, setTimeLeft] = useState(hours);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 0.1));
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / 24);
  const remainingHours = Math.floor(timeLeft % 24);
  const minutes = Math.floor((timeLeft % 1) * 60);

  return (
    <div className="flex items-center gap-2 text-sm font-mono">
      <div className="countdown-digit">{days.toString().padStart(2, '0')}</div>
      <span className="text-muted-foreground">d</span>
      <div className="countdown-digit">{remainingHours.toString().padStart(2, '0')}</div>
      <span className="text-muted-foreground">h</span>
      <div className="countdown-digit">{minutes.toString().padStart(2, '0')}</div>
      <span className="text-muted-foreground">m</span>
    </div>
  );
};

const TrendHub = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-cta/10 rounded-full blur-3xl animate-pulse pulse-glow" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-highlight/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-cta/30 bg-cta/5 pulse-glow">
            <Flame className="w-4 h-4 mr-2" />
            Trending Now
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cta via-primary to-accent bg-clip-text text-transparent">
              Trend Hub
            </span>
            <br />
            <span className="text-foreground">Viral Challenges</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join time-limited challenges, compete with creators globally, and win amazing prizes while boosting your visibility
          </p>
        </div>

        {/* Live stats bar */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 mb-12 neon-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cta mb-1">Live</div>
              <div className="text-sm text-muted-foreground">Active Challenges</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">2.8K+</div>
              <div className="text-sm text-muted-foreground">Active Participants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">$50K+</div>
              <div className="text-sm text-muted-foreground">Prize Pool</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-highlight mb-1">1.2M+</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
          </div>
        </div>

        {/* Challenge cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <Card key={challenge.id} className="relative p-6 neon-border hover-glow-cta group cursor-pointer overflow-hidden">
              {/* Urgent glow for ending soon */}
              {challenge.timeLeft < 72 && (
                <div className="absolute inset-0 bg-cta/5 pulse-glow" />
              )}
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant="outline" 
                    className={`px-3 py-1 text-xs ${
                      challenge.difficulty === 'Advanced' ? 'border-cta/30 bg-cta/10 text-cta' :
                      challenge.difficulty === 'Intermediate' ? 'border-primary/30 bg-primary/10 text-primary' :
                      'border-highlight/30 bg-highlight/10 text-highlight'
                    }`}
                  >
                    {challenge.difficulty}
                  </Badge>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cta">{challenge.prize}</div>
                    <div className="text-xs text-muted-foreground">Prize Pool</div>
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-cta transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {challenge.description}
                </p>

                {/* Countdown timer */}
                <div className="bg-background/50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      Time remaining
                    </div>
                    <CountdownTimer hours={challenge.timeLeft} />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4" />
                    {challenge.participants.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {(challenge.views / 1000).toFixed(1)}K
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  size="sm" 
                  className="w-full bg-cta hover:bg-cta/90 text-cta-foreground hover-glow-cta group-hover:scale-105 transition-transform"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Join Challenge
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to go viral and win prizes?
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 hover-glow-primary text-lg px-8">
            <Flame className="w-5 h-5 mr-2" />
            Explore All Challenges
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendHub;