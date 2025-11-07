import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [{
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    longDescription: "This comprehensive e-commerce platform was built to handle thousands of concurrent users with a focus on performance and user experience. The platform includes advanced features such as real-time inventory tracking, multiple payment gateway integrations, automated email notifications, and detailed analytics dashboards for both customers and administrators.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    features: [
      "Secure payment processing with Stripe integration",
      "Real-time inventory management system",
      "Advanced product filtering and search",
      "Customer reviews and ratings",
      "Admin dashboard with analytics",
      "Email notifications for orders and shipping"
    ],
    challenges: "One of the main challenges was implementing a robust inventory system that could handle concurrent purchases without overselling. We solved this using MongoDB transactions and optimistic locking.",
    outcome: "The platform now serves over 10,000 active users and processes hundreds of transactions daily with 99.9% uptime."
  }, {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workspaces, and deadline tracking.",
    longDescription: "A powerful task management application designed for teams of all sizes. Built with real-time collaboration in mind, this app allows teams to create workspaces, assign tasks, set priorities, and track progress in real-time. The application uses WebSocket technology to ensure all team members see updates instantly.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    features: [
      "Real-time collaboration with WebSocket integration",
      "Drag-and-drop task organization",
      "Team workspaces with role-based permissions",
      "Advanced deadline tracking and reminders",
      "Task dependencies and subtasks",
      "Activity timeline and audit logs"
    ],
    challenges: "Implementing real-time synchronization across multiple users while maintaining data consistency was complex. We used operational transformation techniques to resolve conflicts.",
    outcome: "Successfully deployed to 50+ teams with average daily active users of 500+. Reduced project management overhead by 40% for early adopters."
  }, {
    id: 3,
    title: "Portfolio Website",
    description: "Modern portfolio website with blog functionality, project showcase, and contact form integration.",
    longDescription: "A stunning portfolio website built with modern web technologies, featuring a headless CMS for easy content management. The site includes a fully-functional blog, project showcase with filtering capabilities, and an integrated contact form with email notifications.",
    tech: ["React", "Tailwind CSS", "Sanity CMS"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    features: [
      "Headless CMS integration with Sanity",
      "Dynamic blog with markdown support",
      "Project showcase with filtering",
      "Contact form with email notifications",
      "SEO optimized with meta tags",
      "Fully responsive design"
    ],
    challenges: "Creating a performant, SEO-friendly site while maintaining a rich, interactive user experience required careful optimization and server-side rendering strategies.",
    outcome: "Achieved 95+ Lighthouse scores across all categories and increased client inquiries by 200%."
  }, {
    id: 4,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, transaction history, and bill payments.",
    longDescription: "A secure mobile banking application that prioritizes user security and convenience. Features include biometric authentication, real-time transaction alerts, bill payment scheduling, and detailed transaction history with advanced filtering options. Built with React Native for cross-platform compatibility.",
    tech: ["React Native", "Firebase", "Redux", "Plaid API"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    features: [
      "Biometric authentication (fingerprint/face ID)",
      "Real-time transaction notifications",
      "Bill payment scheduling",
      "Account linking with Plaid API",
      "Transaction categorization and budgeting",
      "Push notifications for important events"
    ],
    challenges: "Ensuring bank-level security while maintaining a smooth user experience was critical. We implemented multiple layers of security including encryption, secure storage, and session management.",
    outcome: "Successfully launched with 5,000+ downloads in the first month. Maintains a 4.8-star rating on app stores."
  }, {
    id: 5,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with scheduling, insights, and engagement tracking.",
    longDescription: "A comprehensive social media management dashboard that helps businesses and influencers manage multiple social media accounts from one place. Features include post scheduling, advanced analytics, engagement tracking, and competitor analysis. Built with Vue.js for a reactive and performant user interface.",
    tech: ["Vue.js", "Express", "MongoDB", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    features: [
      "Multi-account management",
      "Post scheduling and automation",
      "Advanced analytics and insights",
      "Engagement tracking and reporting",
      "Competitor analysis tools",
      "Custom reports and exports"
    ],
    challenges: "Integrating with multiple social media APIs while handling rate limits and different data formats required careful architecture and error handling.",
    outcome: "Currently managing 1,000+ social media accounts with 99.5% uptime. Helped clients increase engagement by an average of 150%."
  }];

  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 border-b border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-primary font-mono text-sm mb-4">[PROJECT DETAILS]</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">{project.title}</h1>
              <p className="text-muted-foreground text-lg mb-8">{project.longDescription}</p>
              <div className="flex gap-4">
                <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View Live
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden border border-border">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 border-b border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
          <div className="flex flex-wrap gap-4">
            {project.tech.map((tech, index) => (
              <div 
                key={index}
                className="px-6 py-3 border border-primary/30 bg-primary/5 text-primary font-mono text-lg"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-b border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 border border-border bg-card">
                <div className="text-primary font-mono text-sm flex-shrink-0">
                  [{String(index + 1).padStart(2, '0')}]
                </div>
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Outcome */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Challenges</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{project.challenges}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Outcome</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{project.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectDetail;
