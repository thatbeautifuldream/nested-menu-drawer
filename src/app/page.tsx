"use client";

import { NestedDrawer, TMenuItem } from "@/components/nested-drawer";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Home as HomeIcon,
  Package,
  Building2,
  Users,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Leaf,
  TrendingUp,
  Mail,
  Server,
  Zap,
  Shield,
  Briefcase,
  GraduationCap,
  Stethoscope,
  ShoppingCart,
  Car,
  Plane,
  Factory,
  Wrench,
  BarChart3,
  Newspaper,
  Calendar,
  FileText,
} from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import Link from "next/link";

const menuData: TMenuItem[] = [
  {
    id: "home",
    title: "Home",
    description: "Welcome to our comprehensive platform",
    icon: <HomeIcon className="size-5" />,
    onClick: () => console.log("Home clicked"),
  },
  {
    id: "products",
    title: "Products & Services",
    description: "Explore our comprehensive offerings",
    icon: <Package className="size-5" />,
    children: [
      {
        id: "products-software",
        title: "Software Solutions",
        description: "Enterprise and custom software",
        icon: <Server className="size-5" />,
        children: [
          {
            id: "products-software-enterprise",
            title: "Enterprise Software",
            description: "Large-scale business solutions",
            icon: <Briefcase className="size-5" />,
            onClick: () => console.log("Enterprise Software clicked"),
          },
          {
            id: "products-software-custom",
            title: "Custom Development",
            description: "Tailored software solutions",
            icon: <Wrench className="size-5" />,
            onClick: () => console.log("Custom Development clicked"),
          },
        ],
      },
      {
        id: "products-cloud",
        title: "Cloud Services",
        description: "Scalable cloud infrastructure",
        icon: <Zap className="size-5" />,
        children: [
          {
            id: "products-cloud-hosting",
            title: "Cloud Hosting",
            description: "Reliable cloud infrastructure",
            icon: <Server className="size-5" />,
            onClick: () => console.log("Cloud Hosting clicked"),
          },
          {
            id: "products-cloud-storage",
            title: "Cloud Storage",
            description: "Secure data storage solutions",
            icon: <Shield className="size-5" />,
            onClick: () => console.log("Cloud Storage clicked"),
          },
        ],
      },
    ],
  },
  {
    id: "industry",
    title: "Industry Solutions",
    description: "Specialized solutions for different industries",
    icon: <Building2 className="size-5" />,
    children: [
      {
        id: "industry-healthcare",
        title: "Healthcare",
        description: "Medical and healthcare technology",
        icon: <Stethoscope className="size-5" />,
        children: [
          {
            id: "industry-healthcare-ehr",
            title: "Electronic Health Records",
            description: "Patient data management systems",
            icon: <FileText className="size-5" />,
            onClick: () => console.log("EHR clicked"),
          },
          {
            id: "industry-healthcare-telemedicine",
            title: "Telemedicine Platform",
            description: "Remote healthcare services",
            icon: <HelpCircle className="size-5" />,
            onClick: () => console.log("Telemedicine clicked"),
          },
        ],
      },
      {
        id: "industry-retail",
        title: "Retail & E-commerce",
        description: "Retail technology solutions",
        icon: <ShoppingCart className="size-5" />,
        children: [
          {
            id: "industry-retail-pos",
            title: "Point of Sale Systems",
            description: "Modern POS solutions",
            icon: <BarChart3 className="size-5" />,
            onClick: () => console.log("POS clicked"),
          },
          {
            id: "industry-retail-inventory",
            title: "Inventory Management",
            description: "Track and manage inventory",
            icon: <Package className="size-5" />,
            onClick: () => console.log("Inventory Management clicked"),
          },
        ],
      },
      {
        id: "industry-manufacturing",
        title: "Manufacturing",
        description: "Industrial automation solutions",
        icon: <Factory className="size-5" />,
        children: [
          {
            id: "industry-manufacturing-automation",
            title: "Process Automation",
            description: "Automated manufacturing processes",
            icon: <Zap className="size-5" />,
            onClick: () => console.log("Process Automation clicked"),
          },
          {
            id: "industry-manufacturing-quality",
            title: "Quality Control",
            description: "Quality assurance systems",
            icon: <Shield className="size-5" />,
            onClick: () => console.log("Quality Control clicked"),
          },
        ],
      },
      {
        id: "industry-transportation",
        title: "Transportation & Logistics",
        description: "Fleet and logistics management",
        icon: <Car className="size-5" />,
        children: [
          {
            id: "industry-transportation-fleet",
            title: "Fleet Management",
            description: "Vehicle tracking and optimization",
            icon: <Plane className="size-5" />,
            onClick: () => console.log("Fleet Management clicked"),
          },
          {
            id: "industry-transportation-route",
            title: "Route Optimization",
            description: "Efficient delivery routes",
            icon: <TrendingUp className="size-5" />,
            onClick: () => console.log("Route Optimization clicked"),
          },
        ],
      },
    ],
  },
  {
    id: "company",
    title: "Company",
    description: "Learn about our organization and culture",
    icon: <Users className="size-5" />,
    children: [
      {
        id: "company-about",
        title: "About Us",
        description: "Our story and mission",
        icon: <Building2 className="size-5" />,
        onClick: () => console.log("About Us clicked"),
      },
      {
        id: "company-team",
        title: "Our Team",
        description: "Meet our leadership",
        icon: <Users className="size-5" />,
        onClick: () => console.log("Our Team clicked"),
      },
      {
        id: "company-careers",
        title: "Careers",
        description: "Join our team",
        icon: <Briefcase className="size-5" />,
        onClick: () => console.log("Careers clicked"),
      },
      {
        id: "company-news",
        title: "News & Press",
        description: "Latest company updates",
        icon: <Newspaper className="size-5" />,
        onClick: () => console.log("News clicked"),
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    description: "Knowledge base, tools, and learning materials",
    icon: <BookOpen className="size-5" />,
    children: [
      {
        id: "resources-docs",
        title: "Documentation",
        description: "Technical documentation and guides",
        icon: <FileText className="size-5" />,
        onClick: () => console.log("Documentation clicked"),
      },
      {
        id: "resources-blog",
        title: "Blog",
        description: "Articles and insights",
        icon: <Newspaper className="size-5" />,
        onClick: () => console.log("Blog clicked"),
      },
      {
        id: "resources-webinars",
        title: "Webinars & Events",
        description: "Live sessions and recordings",
        icon: <Calendar className="size-5" />,
        onClick: () => console.log("Webinars clicked"),
      },
      {
        id: "resources-training",
        title: "Training Center",
        description: "Educational programs and certifications",
        icon: <GraduationCap className="size-5" />,
        children: [
          {
            id: "resources-training-courses",
            title: "Online Courses",
            description: "Self-paced learning",
            icon: <BookOpen className="size-5" />,
            onClick: () => console.log("Online Courses clicked"),
          },
          {
            id: "resources-training-certification",
            title: "Certification Programs",
            description: "Professional certifications",
            icon: <GraduationCap className="size-5" />,
            onClick: () => console.log("Certification Programs clicked"),
          },
        ],
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    description: "Get help and support when you need it",
    icon: <HelpCircle className="size-5" />,
    children: [
      {
        id: "support-help",
        title: "Help Center",
        description: "FAQs and troubleshooting",
        icon: <HelpCircle className="size-5" />,
        onClick: () => console.log("Help Center clicked"),
      },
      {
        id: "support-contact",
        title: "Contact Support",
        description: "Reach out to our team",
        icon: <Mail className="size-5" />,
        onClick: () => console.log("Contact Support clicked"),
      },
      {
        id: "support-status",
        title: "System Status",
        description: "Service availability",
        icon: <Zap className="size-5" />,
        onClick: () => console.log("System Status clicked"),
      },
    ],
  },
  {
    id: "research",
    title: "Research & Innovation",
    description: "Cutting-edge research and innovation initiatives",
    icon: <Lightbulb className="size-5" />,
    children: [
      {
        id: "research-labs",
        title: "Research Labs",
        description: "Our research facilities",
        icon: <Building2 className="size-5" />,
        onClick: () => console.log("Research Labs clicked"),
      },
      {
        id: "research-projects",
        title: "Active Projects",
        description: "Current research initiatives",
        icon: <Lightbulb className="size-5" />,
        onClick: () => console.log("Active Projects clicked"),
      },
      {
        id: "research-publications",
        title: "Publications",
        description: "Research papers and findings",
        icon: <FileText className="size-5" />,
        onClick: () => console.log("Publications clicked"),
      },
    ],
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description: "Environmental responsibility and sustainable technology",
    icon: <Leaf className="size-5" />,
    children: [
      {
        id: "sustainability-goals",
        title: "Sustainability Goals",
        description: "Our environmental commitments",
        icon: <TrendingUp className="size-5" />,
        onClick: () => console.log("Sustainability Goals clicked"),
      },
      {
        id: "sustainability-green",
        title: "Green Technology",
        description: "Eco-friendly solutions",
        icon: <Leaf className="size-5" />,
        onClick: () => console.log("Green Technology clicked"),
      },
      {
        id: "sustainability-reports",
        title: "Impact Reports",
        description: "Environmental impact data",
        icon: <BarChart3 className="size-5" />,
        onClick: () => console.log("Impact Reports clicked"),
      },
    ],
  },
  {
    id: "investors",
    title: "Investor Relations",
    description: "Financial information and investor resources",
    icon: <TrendingUp className="size-5" />,
    children: [
      {
        id: "investors-reports",
        title: "Financial Reports",
        description: "Quarterly and annual reports",
        icon: <FileText className="size-5" />,
        onClick: () => console.log("Financial Reports clicked"),
      },
      {
        id: "investors-events",
        title: "Investor Events",
        description: "Earnings calls and presentations",
        icon: <Calendar className="size-5" />,
        onClick: () => console.log("Investor Events clicked"),
      },
      {
        id: "investors-stock",
        title: "Stock Information",
        description: "Share price and performance",
        icon: <TrendingUp className="size-5" />,
        onClick: () => console.log("Stock Information clicked"),
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch with our team",
    icon: <Mail className="size-5" />,
    onClick: () => console.log("Contact clicked"),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-background to-muted/20 p-4 pt-20 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">
            Nested Menu Drawer
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            A fully accessible, animated drawer component with direction-aware
            navigation and smooth height transitions.
          </p>
        </div>

        <div className="flex justify-center">
          <NestedDrawer initialMenu={menuData}>
            <NestedDrawer.Trigger>
              <span>Open Menu</span>
              <div className="flex items-center gap-0.5 text-xs">
                <Kbd className="text-[10px]">⌘</Kbd>
                <Kbd className="text-xs">K</Kbd>
              </div>
            </NestedDrawer.Trigger>
            <NestedDrawer.Content title="Main Menu">
              <NestedDrawer.Menu />
            </NestedDrawer.Content>
          </NestedDrawer>
        </div>

        <div className="text-xs text-muted-foreground space-y-1">
          <p>Try navigating through multiple levels</p>
          <p>Use Escape key to go back or close</p>
          <p>
            Fully keyboard accessible <Kbd>tab</Kbd> & <Kbd>shift + tab</Kbd>
          </p>
        </div>

        <div className="text-xs text-muted-foreground">
          <p>
            Built by{" "}
            <Link
              href="https://milindmishra.com"
              target="_blank"
              className="underline hover:text-primary"
            >
              Milind Mishra
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
