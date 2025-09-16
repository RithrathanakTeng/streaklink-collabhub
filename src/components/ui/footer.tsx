import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone,
  Zap
} from "lucide-react";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Trend Hub", href: "#trends" },
      { label: "Success Stories", href: "#testimonials" },
      { label: "Pricing", href: "#pricing" }
    ]
  },
  {
    title: "For Users", 
    links: [
      { label: "Creators", href: "#creators" },
      { label: "Businesses", href: "#businesses" },
      { label: "Agencies", href: "#agencies" },
      { label: "Community", href: "#community" },
      { label: "Resources", href: "#resources" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "Live Chat", href: "/chat" },
      { label: "API Docs", href: "/docs" },
      { label: "Status", href: "/status" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press Kit", href: "/press" },
      { label: "Blog", href: "/blog" },
      { label: "Legal", href: "/legal" }
    ]
  }
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-accent" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-primary" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-accent" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-cta" }
];

const Footer = () => {
  return (
    <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-hero opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          {/* Top section with logo and description */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl gradient-primary glow-primary">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  StreakLink
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The all-in-one platform connecting creators, brands, and agencies. 
                Build authentic partnerships, join trending challenges, and create impact together.
              </p>
              
              <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/30 bg-primary/5">
                🚀 Join 10,000+ Active Users
              </Badge>
              
              {/* Contact info */}
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>hello@streaklink.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-highlight" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links sections */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm hover:underline"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 StreakLink. All rights reserved. Made with 💜 in San Francisco.
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:drop-shadow-lg`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;