import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import FlowingMenu from "@/components/FlowingMenu";
import CircularNextButton from "@/components/CircularNextButton";
import project2DAnimation from "@/assets/fearflix-door.jpg";
import fearflixHeroEyes from "@/assets/fearflix-hero-eyes.jpg";
import fearflixNetflixBg from "@/assets/fearflix-netflix-bg.jpg";
import projectVideoEditing from "@/assets/project-video-editing.jpg";
import projectUIUXDesign from "@/assets/project-uiux-design.jpg";
import project3DModeling from "@/assets/project-3d-modeling.jpg";
import projectInstallations from "@/assets/project-installations.jpg";
import fearflixNetflix from "@/assets/fearflix-netflix.jpg";
import fearflixStyleframe1 from "@/assets/fearflix-styleframe-1.jpg";
import fearflixStyleframe2 from "@/assets/fearflix-styleframe-2.jpg";
import fearflixStyleframe3 from "@/assets/fearflix-styleframe-3.jpg";
import fearflixStyleframe4 from "@/assets/fearflix-styleframe-4.jpg";
import fearflixStyleframe5 from "@/assets/fearflix-styleframe-5.jpg";
import fearflixStyleframe6 from "@/assets/fearflix-styleframe-6.jpg";
import fearflixStyleframe7 from "@/assets/fearflix-styleframe-7.jpg";
import photoshopLogo from "@/assets/photoshop-logo.png";
import illustratorLogo from "@/assets/illustrator-logo.png";
import aftereffectsLogo from "@/assets/aftereffects-logo.png";
import premiereLogo from "@/assets/premiere-logo.png";
import figmaLogo from "@/assets/figma-logo.png";
import framerLogo from "@/assets/framer-logo.png";
import blenderLogo from "@/assets/blender-logo.png";
import unityLogo from "@/assets/unity-logo.png";
import treasureChestReference from "@/assets/treasure-chest-reference.jpg";
import treasureChestOutcome from "@/assets/treasure-chest-outcome.jpg";
import nologramInstallation from "@/assets/nologram-installation.png";
import imperfectionStoryboard from "@/assets/imperfection-storyboard.png";
import timelinePast from "@/assets/timeline-past.jpg";
import timelineNow from "@/assets/timeline-now.jpg";
import timelineFuture from "@/assets/timeline-future.jpg";
import imperfectionPhysicalPhoto from "@/assets/imperfection-physical-photo.png";
import disquietDesign1 from "@/assets/disquiet-design-1.png";
import disquietDesign2 from "@/assets/disquiet-design-2.png";
import disquietDesign3 from "@/assets/disquiet-design-3.png";
import disquietDesign4 from "@/assets/disquiet-design-4.png";
import disquietDesign5 from "@/assets/disquiet-design-5.png";
import disquietDesign6 from "@/assets/disquiet-design-6.png";
import disquietDesign7 from "@/assets/disquiet-design-7.png";
import disquietDesign8 from "@/assets/disquiet-design-8.png";
import disquietAnatomyBg from "@/assets/disquiet-anatomy-bg.png";
import interiorStillLifeBg from "@/assets/interior-still-life-bg.jpg";
import interiorRendered1 from "@/assets/interior-rendered-1.jpg";
import interiorRendered2 from "@/assets/interior-rendered-2.jpg";
import interiorRendered3 from "@/assets/interior-rendered-3.jpg";
import interiorShaded1 from "@/assets/interior-shaded-1.jpg";
import interiorShaded2 from "@/assets/interior-shaded-2.jpg";
import interiorShaded3 from "@/assets/interior-shaded-3.jpg";
import interiorWireframe1 from "@/assets/interior-wireframe-1.jpg";
import interiorWireframe2 from "@/assets/interior-wireframe-2.jpg";
import interiorWireframe3 from "@/assets/interior-wireframe-3.jpg";
import stillLifeRendered1 from "@/assets/still-life-rendered-1.jpg";
import stillLifeShaded1 from "@/assets/still-life-shaded-1.jpg";
import stillLifeShaded2 from "@/assets/still-life-shaded-2.jpg";
import stillLifeShaded3 from "@/assets/still-life-shaded-3.jpg";
import stillLifeWireframe1 from "@/assets/still-life-wireframe-1.jpg";
import stillLifeWireframe2 from "@/assets/still-life-wireframe-2.jpg";
import stillLifeWireframe3 from "@/assets/still-life-wireframe-3.jpg";
import uturonLogo from "@/assets/uturon-logo.png";
import uturonInstagram from "@/assets/uturon-instagram.png";
import growtopiaLogo from "@/assets/growtopia-logo.png";
import growtopiaFiles from "@/assets/growtopia-files.png";
import growtopiaWorkspace from "@/assets/growtopia-workspace.png";
import unspokenPainBg from "@/assets/unspoken-pain-bg.png";
import unspokenPainStoryboard1 from "@/assets/unspoken-pain-storyboard-1.png";
import unspokenPainStoryboard2 from "@/assets/unspoken-pain-storyboard-2.png";
import unspokenPainStoryboard3 from "@/assets/unspoken-pain-storyboard-3.png";
import unspokenPainStoryboard4 from "@/assets/unspoken-pain-storyboard-4.png";
import unspokenPainPresentation from "@/assets/unspoken-pain-presentation.jpg";
import butterflySinsVerticalPoster from "@/assets/butterfly-sins-vertical-poster.jpg";
import butterflySinsHorizontalPoster from "@/assets/butterfly-sins-horizontal-poster.jpg";
import butterflySinsGroupPhoto from "@/assets/butterfly-sins-group-photo.jpg";
import butterflySinsStoryboard1 from "@/assets/butterfly-sins-storyboard-1.png";
import butterflySinsStoryboard2 from "@/assets/butterfly-sins-storyboard-2.png";
import butterflySinsStoryboard3 from "@/assets/butterfly-sins-storyboard-3.png";
import butterflySinsProduction from "@/assets/butterfly-sins-production.png";
import butterflySinsCrewList from "@/assets/butterfly-sins-crew-list.png";
import butterflySinsCast1 from "@/assets/butterfly-sins-cast-1.png";
import butterflySinsCast2 from "@/assets/butterfly-sins-cast-2.png";
import butterflySinsCast3 from "@/assets/butterfly-sins-cast-3.png";
import butterflySinsRecce1 from "@/assets/butterfly-sins-recce-1.png";
import butterflySinsRecce2 from "@/assets/butterfly-sins-recce-2.png";
import butterflySinsTimeline from "@/assets/butterfly-sins-timeline.png";
import butterflySinsCastSchedule from "@/assets/butterfly-sins-cast-schedule.png";
import butterflySinsTimeShotSchedule from "@/assets/butterfly-sins-time-shot-schedule.png";
import butterflySinsTimeShotSchedule2 from "@/assets/butterfly-sins-time-shot-schedule-2.png";
import butterflySinsTimeShotSchedule3 from "@/assets/butterfly-sins-time-shot-schedule-3.png";
import tongAhTitleBg from "@/assets/tong-ah-title-bg.png";
import tongAhMooncake1 from "@/assets/tong-ah-mooncake-1.jpg";
import tongAhMooncake2 from "@/assets/tong-ah-mooncake-2.jpg";
import tongAhFootage1 from "@/assets/tong-ah-footage-1.png";
import tongAhFootage2 from "@/assets/tong-ah-footage-2.png";
import daseinKopitiamTitle from "@/assets/dasein-kopitiam-title.png";
import equinovaTitle from "@/assets/equinova-title.png";
import equinovaPoster from "@/assets/equinova-poster.png";
import fourKEditingTitle from "@/assets/4k-editing-title.png";
import tiktokTitle from "@/assets/tiktok-title.png";

interface SubProject {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
  overview?: string;
  styleframes?: Array<{ id: number; image: string }>;
  videoPath?: string;
  isHorror?: boolean;
  referenceImages?: Array<{ id: number; title: string; image: string }>;
  timelineImages?: Array<{ id: number; title: string; image: string }>;
  physicalPhoto?: string;
  designStylings?: Array<{ id: number; image: string }>;
  renderingStages?: {
    rendered?: Array<{ id: number; image: string }>;
    shaded?: Array<{ id: number; image: string }>;
    wireframe?: Array<{ id: number; image: string }>;
  };
  categorizedRenderingStages?: Array<{
    categoryTitle: string;
    rendered?: Array<{ id: number; image: string }>;
    shaded?: Array<{ id: number; image: string }>;
    wireframe?: Array<{ id: number; image: string }>;
  }>;
  marketingContent?: {
    instagramImage: string;
    videoPath: string;
  };
  workspaceImage?: string;
  filesImage?: string;
  storyboardImages?: Array<{ id: number; image: string }>;
  presentationBoard?: string;
  btsVideoPath?: string;
  posters?: {
    vertical?: string;
    horizontal?: string;
  };
  castImages?: string[];
  recceImages?: string[];
  timeline?: string;
  castSchedule?: string;
  timeShotSchedule?: string[];
  groupPhoto?: string;
  production?: string;
  crewList?: string;
  externalLink?: {
    url: string;
    title: string;
  };
  mooncakePhotography?: string[];
  footageFiles?: string[];
  equinovaPoster?: string;
  trailerVideo?: string;
  instagramReels?: Array<{ name: string; video: string }>;
  tiktokVideos?: Array<{ name: string; video: string }>;
}

const ProjectDetail = () => {
  const { id, subId } = useParams();
  const navigate = useNavigate();

  const projects = [{
    id: 1,
    title: "2D Animation",
    year: "2024",
    description: "Motion story that made with 2D and smooth animation to show feelings and rhythm.",
    apps: [
      { name: "After Effects", icon: aftereffectsLogo },
      { name: "Illustrator", icon: illustratorLogo },
      { name: "Photoshop", icon: photoshopLogo }
    ],
    image: project2DAnimation,
    subProjects: [
      { 
        id: 1, 
        title: "The Fearflix", 
        year: "2024", 
        description: "This is a Netflix horror series 2d animation ads", 
        image: fearflixNetflixBg,
        overview: "A chilling Netflix horror series brought to life through compelling 2D animation. This project combines dark atmospheric visuals with smooth motion design to create an engaging promotional campaign that captures the essence of fear and suspense. Each frame was meticulously crafted to build tension and intrigue, drawing viewers into a world of supernatural terror.",
        styleframes: [
          { id: 1, image: fearflixStyleframe1 },
          { id: 2, image: fearflixStyleframe2 },
          { id: 3, image: fearflixStyleframe3 },
          { id: 4, image: fearflixStyleframe4 },
          { id: 5, image: fearflixStyleframe5 },
          { id: 6, image: fearflixStyleframe6 },
          { id: 7, image: fearflixStyleframe7 }
        ],
        videoPath: "/videos/fearflix-final.mp4",
        isHorror: true
      },
      { 
        id: 2, 
        title: "Growtopia Ads Animations",
        year: "2024", 
        description: "2D Animation video ads for Growtopia game", 
        image: growtopiaLogo,
        overview: "This is a project where I helped my online friend create 2D animation video ads for the game Growtopia to promote his website. Since there was no storyboard phase, I went straight into After Effects to create the animations, working directly with the vision and requirements provided.",
        workspaceImage: growtopiaWorkspace,
        filesImage: growtopiaFiles,
        videoPath: "/videos/growtopia-outcome.mp4"
      },
      { 
        id: 3, 
        title: "Unspoken Pain",
        year: "2024", 
        description: "Motion graphic animation exploring bullying and emotional isolation", 
        image: unspokenPainBg,
        overview: "This deeply personal project explores my own experience with bullying during my school years. Through dark, surreal visuals and symbolic storytelling, the animation depicts the emotional journey of isolation, verbal abuse, and the struggle to maintain one's sense of self in the face of relentless negativity. The project aims to raise awareness about how toxic masculinity contributes to bullying among adolescent boys and promote conversations around emotional well-being and mental health.",
        storyboardImages: [
          { id: 1, image: unspokenPainStoryboard1 },
          { id: 2, image: unspokenPainStoryboard2 },
          { id: 3, image: unspokenPainStoryboard3 },
          { id: 4, image: unspokenPainStoryboard4 }
        ],
        presentationBoard: unspokenPainPresentation,
        videoPath: "/videos/unspoken-pain-final.mp4",
        btsVideoPath: "/videos/unspoken-pain-bts.mp4"
      }
    ] as SubProject[]
  }, {
    id: 2,
    title: "Video Editing",
    year: "2024",
    description: "Cut and mix videos with music and mood to make the story feel alive.",
    apps: [
      { name: "After Effects", icon: aftereffectsLogo },
      { name: "Premiere Pro", icon: premiereLogo },
      { name: "DaVinci Resolve", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png" }
    ],
    image: projectVideoEditing,
    subProjects: [
      { 
        id: 1, 
        title: "Short Film: Butterfly Sin's", 
        year: "2024", 
        description: "Narrative-driven short film", 
        image: projectVideoEditing,
        overview: "This short film was our semester 6 project in college, an intensive 7-week production that challenged us to execute every aspect of filmmaking from conception to completion. Within this compressed timeline, we handled all creative and logistical responsibilities including drawing storyboards, designing the production logo, casting actors, location scouting (recce), creating detailed shooting schedules, distributing crew responsibilities, managing props and costumes, and coordinating the entire production workflow. This project tested our ability to work under tight deadlines while maintaining creative vision and professional production standards, ultimately delivering a compelling narrative about transformation, identity, and the consequences of our choices.",
        posters: {
          vertical: butterflySinsVerticalPoster,
          horizontal: butterflySinsHorizontalPoster
        },
        castImages: [butterflySinsCast1, butterflySinsCast2, butterflySinsCast3],
        recceImages: [butterflySinsRecce1, butterflySinsRecce2],
        timeline: butterflySinsTimeline,
        castSchedule: butterflySinsCastSchedule,
        timeShotSchedule: [butterflySinsTimeShotSchedule, butterflySinsTimeShotSchedule2, butterflySinsTimeShotSchedule3],
        btsVideoPath: "/videos/butterfly-sins-bts.mp4",
        externalLink: {
          url: "https://drive.google.com/drive/folders/1XrrAr_q5b12kdGm8Yok2YQRAcZ_9aQnL?usp=sharing",
          title: "Final Outcome (10 minutes)"
        },
        groupPhoto: butterflySinsGroupPhoto,
        storyboardImages: [
          { id: 1, image: butterflySinsStoryboard1 },
          { id: 2, image: butterflySinsStoryboard2 },
          { id: 3, image: butterflySinsStoryboard3 }
        ],
        production: butterflySinsProduction,
        crewList: butterflySinsCrewList
      },
      { 
        id: 2, 
        title: "Tong Ah Commercial Ads", 
        year: "2024", 
        description: "Commercial advertising campaign", 
        image: tongAhTitleBg,
        mooncakePhotography: [tongAhMooncake1, tongAhMooncake2],
        videoPath: "/videos/tong-ah-final.mp4"
      },
      { 
        id: 3, 
        title: "Dasein Kopitiam Event", 
        year: "", 
        description: "Event coverage and highlights", 
        image: daseinKopitiamTitle,
        videoPath: "/videos/dasein-kopitiam-outcome.mp4"
      },
      { 
        id: 4, 
        title: "Equinova Event", 
        year: "", 
        description: "Event documentation", 
        image: equinovaTitle,
        equinovaPoster: equinovaPoster,
        trailerVideo: "/videos/equinova-trailer.mp4"
      },
      { 
        id: 5, 
        title: "Instagram 4k Edits", 
        year: "", 
        description: "High-quality social media content", 
        image: fourKEditingTitle,
        instagramReels: [
          { name: "BlackMyth Edit", video: "/videos/blackmyth-edit.mp4" },
          { name: "Rengoku Edit", video: "/videos/rengoku-edit.mp4" },
          { name: "Gachiakuta Edit", video: "/videos/gachiakuta-edit.mp4" },
          { name: "Villains Edit", video: "/videos/villains-edit.mp4" },
          { name: "Stranger Things Edit", video: "/videos/stranger-things-edit.mp4" }
        ]
      },
      { 
        id: 6, 
        title: "Tiktok Video", 
        year: "2024", 
        description: "Short-form video content", 
        image: tiktokTitle,
        tiktokVideos: [
          { name: "Bumbung Kaca Putih", video: "/videos/bumbung-kaca-putih.mp4" },
          { name: "Nako Tingkap", video: "/videos/nako-tingkap.mp4" },
          { name: "Bumbung Kaca", video: "/videos/bumbung-kaca.mp4" }
        ]
      }
    ] as SubProject[]
  }, {
    id: 3,
    title: "UI/UX Design",
    year: "2024",
    description: "User Friendly and convenient design that looks nice and feels simple to use.",
    apps: [
      { name: "Figma", icon: figmaLogo },
      { name: "Framer", icon: framerLogo },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
    ],
    image: projectUIUXDesign,
    subProjects: [
      { id: 1, title: "E-commerce Platform", year: "2024", description: "Seamless shopping experience design", image: projectUIUXDesign },
      { id: 2, title: "Mobile App Interface", year: "2024", description: "Intuitive mobile-first design", image: projectUIUXDesign },
      { id: 3, title: "Dashboard Design", year: "2024", description: "Data visualization and analytics", image: projectUIUXDesign }
    ] as SubProject[]
  }, {
    id: 4,
    title: "3D Modeling",
    year: "2024",
    description: "Detailed 3D models with nice light and smooth shape.",
    apps: [
      { name: "Blender", icon: blenderLogo },
      { name: "Photoshop", icon: photoshopLogo }
    ],
    image: project3DModeling,
    subProjects: [
      { 
        id: 1, 
        title: "Treasure Chest 3D Modeling", 
        year: "2024", 
        description: "", 
        image: project3DModeling,
        overview: "This is a practice in college",
        referenceImages: [
          { id: 1, title: "Reference", image: treasureChestReference },
          { id: 2, title: "Outcome", image: treasureChestOutcome }
        ]
      },
      { 
        id: 2, 
        title: "DISQUIET ANATOMY", 
        year: "", 
        description: "Stylized 3D character creation", 
        image: disquietAnatomyBg,
        overview: "An exploration of anatomical design through stylized 3D character modeling.",
        designStylings: [
          { id: 1, image: disquietDesign1 },
          { id: 2, image: disquietDesign2 },
          { id: 3, image: disquietDesign3 },
          { id: 4, image: disquietDesign4 },
          { id: 5, image: disquietDesign5 },
          { id: 6, image: disquietDesign6 },
          { id: 7, image: disquietDesign7 },
          { id: 8, image: disquietDesign8 }
        ],
        videoPath: "/videos/disquiet-anatomy-outcome.mp4"
      },
      { 
        id: 3, 
        title: "Interior & Still Life", 
        year: "2024", 
        description: "Immersive 3D environments", 
        image: interiorStillLifeBg,
        categorizedRenderingStages: [
          {
            categoryTitle: "Interior",
            rendered: [
              { id: 1, image: interiorRendered1 },
              { id: 2, image: interiorRendered2 },
              { id: 3, image: interiorRendered3 }
            ],
            shaded: [
              { id: 1, image: interiorShaded1 },
              { id: 2, image: interiorShaded2 },
              { id: 3, image: interiorShaded3 }
            ],
            wireframe: [
              { id: 1, image: interiorWireframe1 },
              { id: 2, image: interiorWireframe2 },
              { id: 3, image: interiorWireframe3 }
            ]
          },
          {
            categoryTitle: "Still Life",
            rendered: [
              { id: 1, image: stillLifeRendered1 }
            ],
            shaded: [
              { id: 1, image: stillLifeShaded1 },
              { id: 2, image: stillLifeShaded2 },
              { id: 3, image: stillLifeShaded3 }
            ],
            wireframe: [
              { id: 1, image: stillLifeWireframe1 },
              { id: 2, image: stillLifeWireframe2 },
              { id: 3, image: stillLifeWireframe3 }
            ]
          }
        ]
      },
      { 
        id: 4, 
        title: "Uturon Box Animations", 
        year: "2024", 
        description: "Online Marketing lesson - Brand creation and marketing", 
        image: uturonLogo,
        overview: "This project is part of an Online Marketing lesson where we created and marketed our own brand 'Uturon'. The project showcases brand development, social media presence, and marketing strategies through Instagram and promotional video content.",
        marketingContent: {
          instagramImage: uturonInstagram,
          videoPath: "/videos/uturon-marketing.mp4"
        }
      }
    ] as SubProject[]
  }, {
    id: 5,
    title: "Installations",
    year: "2024",
    description: "Interactive project that i made on physical",
    apps: [
      { name: "Unity", icon: unityLogo }
    ],
    image: projectInstallations,
    subProjects: [
      { 
        id: 1, 
        title: "Nologram", 
        year: "", 
        description: "This project used Sipa Projector, Stage Fogging machine LED, Unity and Kinect Sensor", 
        image: nologramInstallation,
        videoPath: "/videos/nologram-outcome.mp4"
      },
      { 
        id: 2, 
        title: "imperfection", 
        year: "", 
        description: "Time Reflection: A Journey to Self-Acceptance", 
        image: imperfectionStoryboard,
        overview: "A journey exploring self-acceptance and character evolution through different stages of time.",
        videoPath: "/videos/imperfection-outcome.mp4",
        physicalPhoto: imperfectionPhysicalPhoto,
        timelineImages: [
          { id: 1, title: "Past", image: timelinePast },
          { id: 2, title: "Now", image: timelineNow },
          { id: 3, title: "Future", image: timelineFuture }
        ]
      }
    ] as SubProject[]
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

  // If subId is provided, show individual sub-project detail
  if (subId) {
    const subProject = project.subProjects.find(sp => sp.id === Number(subId));
    
    if (!subProject) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Button onClick={() => navigate(`/project/${id}`)}>
              <ArrowLeft className="h-4 w-4" />
              Back to Category
            </Button>
          </div>
        </div>
      );
    }

    return (
      <main className="min-h-screen bg-background">
        {/* Hero Image - Full Width */}
        <div className="relative h-screen w-full overflow-hidden">
          <img 
            src={subProject.image} 
            alt={subProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Back Button Overlay */}
          <div className="absolute top-8 left-8 z-10">
            <Button 
              variant="ghost" 
              onClick={() => navigate(`/project/${id}`)}
              className="bg-background/10 backdrop-blur-sm hover:bg-background/20 text-white border border-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {project.title}
            </Button>
          </div>
          
          {/* Title Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <div className="container max-w-7xl mx-auto">
              <div className="text-white/60 font-mono text-sm mb-2">{project.title}</div>
              <h1 className={`text-6xl md:text-8xl font-bold text-white tracking-tight mb-4 ${subProject.isHorror ? 'font-horror' : ''}`}>
                {subProject.title}
              </h1>
              {subProject.year && <div className="text-white/80 text-lg md:text-xl mb-2">{subProject.year}</div>}
              {subProject.description && (
                <p className="text-white/90 text-xl md:text-2xl max-w-3xl">
                  {subProject.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Project Content Sections */}
        <section className="py-32 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-24">
              <div>
                <div className="text-primary font-mono text-sm mb-6">[OVERVIEW]</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  Project Overview
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {subProject.overview || `This project showcases expertise in ${project.title.toLowerCase()}, utilizing industry-standard tools and techniques to deliver exceptional results. Every detail has been carefully crafted to achieve the desired impact.`}
                </p>
              </div>

              <div>
                <div className="text-primary font-mono text-sm mb-6">[TOOLS]</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  Software Used
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.apps.map((app, index) => (
                    <div 
                      key={index}
                      className="group flex items-center gap-3 px-6 py-3 border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        animation: `float 3s ease-in-out infinite ${index * 0.2}s`
                      }}
                    >
                      <img 
                        src={app.icon} 
                        alt={app.name}
                        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-sm font-medium">{app.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>

        {/* Reference Images Section - Only show if referenceImages exist */}
        {subProject.referenceImages && subProject.referenceImages.length > 0 && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[REFERENCE & OUTCOME]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Project Images
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {subProject.referenceImages.map((ref) => (
                  <div key={ref.id} className="relative cursor-pointer group" onClick={() => window.open(ref.image, '_blank')}>
                    <div className="text-primary font-mono text-sm mb-4">
                      {ref.title}
                    </div>
                    <img 
                      src={ref.image} 
                      alt={ref.title}
                      className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Timeline Images Section - Only show if timelineImages exist */}
        {subProject.timelineImages && subProject.timelineImages.length > 0 && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[TIME REFLECTION]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Journey Through Time
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {subProject.timelineImages.map((timeline) => (
                  <div key={timeline.id} className="relative cursor-pointer group" onClick={() => window.open(timeline.image, '_blank')}>
                    <div className="text-primary font-mono text-sm mb-4">
                      {timeline.title}
                    </div>
                    <img 
                      src={timeline.image} 
                      alt={timeline.title}
                      className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Physical Photo Section - Only show if physicalPhoto exists */}
        {subProject.physicalPhoto && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[PHYSICAL PHOTO]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Physical Photo
              </h2>
              <div className="relative cursor-pointer group" onClick={() => window.open(subProject.physicalPhoto, '_blank')}>
                <img 
                  src={subProject.physicalPhoto} 
                  alt="Physical Photo"
                  className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </section>
        )}

        {/* Design Stylings Section - Only show if designStylings exist */}
        {subProject.designStylings && subProject.designStylings.length > 0 && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[DESIGN STYLINGS]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Design Stylings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {subProject.designStylings.map((design) => (
                  <div key={design.id} className="relative cursor-pointer group" onClick={() => window.open(design.image, '_blank')}>
                    <div className="absolute -top-6 left-0 text-primary font-mono text-xs">
                      Design {design.id}
                    </div>
                    <img 
                      src={design.image} 
                      alt={`Design Styling ${design.id}`}
                      className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Rendering Stages Section - Only show if renderingStages exist */}
        {subProject.renderingStages && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[RENDERING STAGES]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Production Process
              </h2>
              
              {/* Rendered Section */}
              {subProject.renderingStages.rendered && (
                <div className="mb-24">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Rendered</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {subProject.renderingStages.rendered.map((item) => (
                      <div key={item.id} className="relative cursor-pointer group" onClick={() => window.open(item.image, '_blank')}>
                        <img 
                          src={item.image} 
                          alt={`Rendered ${item.id}`}
                          className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Shaded Section */}
              {subProject.renderingStages.shaded && (
                <div className="mb-24">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Shaded</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {subProject.renderingStages.shaded.map((item) => (
                      <div key={item.id} className="relative cursor-pointer group" onClick={() => window.open(item.image, '_blank')}>
                        <img 
                          src={item.image} 
                          alt={`Shaded ${item.id}`}
                          className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wireframe Section */}
              {subProject.renderingStages.wireframe && (
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Wireframe</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {subProject.renderingStages.wireframe.map((item) => (
                      <div key={item.id} className="relative cursor-pointer group" onClick={() => window.open(item.image, '_blank')}>
                        <img 
                          src={item.image} 
                          alt={`Wireframe ${item.id}`}
                          className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Categorized Rendering Stages Section - Only show if categorizedRenderingStages exist */}
        {subProject.categorizedRenderingStages && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[RENDERING STAGES]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Production Process
              </h2>
              
              {subProject.categorizedRenderingStages.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-32 last:mb-0">
                  <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-primary">
                    {category.categoryTitle}
                  </h2>
                  
                  {/* Rendered Section */}
                  {category.rendered && (
                    <div className="mb-24">
                      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Rendered</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {category.rendered.map((item) => (
                          <div key={item.id} className="relative cursor-pointer group" onClick={() => window.open(item.image, '_blank')}>
                            <img 
                              src={item.image} 
                              alt={`${category.categoryTitle} Rendered ${item.id}`}
                              className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Shaded Section */}
                  {category.shaded && (
                    <div className="mb-24">
                      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Shaded</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {category.shaded.map((item) => (
                          <div key={item.id} className="relative cursor-pointer group" onClick={() => window.open(item.image, '_blank')}>
                            <img 
                              src={item.image} 
                              alt={`${category.categoryTitle} Shaded ${item.id}`}
                              className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Wireframe Section */}
                  {category.wireframe && (
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Wireframe</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {category.wireframe.map((item) => (
                          <div key={item.id} className="relative cursor-pointer group" onClick={() => window.open(item.image, '_blank')}>
                            <img 
                              src={item.image} 
                              alt={`${category.categoryTitle} Wireframe ${item.id}`}
                              className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Marketing Content Section - Only show if marketingContent exists */}
        {subProject.marketingContent && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[MARKETING CONTENT]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Marketing Brand
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Instagram Image on Left */}
                <div className="relative">
                  <div className="text-primary font-mono text-sm mb-4">Instagram Presence</div>
                  <img 
                    src={subProject.marketingContent.instagramImage} 
                    alt="Instagram Marketing"
                    className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300"
                  />
                </div>
                
                {/* Marketing Video on Right */}
                <div className="relative">
                  <div className="text-primary font-mono text-sm mb-4">Promotional Video</div>
                  <div className="relative w-full aspect-video bg-black border border-border">
                    <video 
                      controls
                      className="w-full h-full"
                    >
                      <source src={subProject.marketingContent.videoPath} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Workspace & Files Section - Only show if workspace or files exist */}
        {(subProject.workspaceImage || subProject.filesImage) && (
          <section className="py-32 bg-card">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[PRODUCTION PROCESS]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Behind The Scenes
              </h2>
              
              {/* Workspace */}
              {subProject.workspaceImage && (
                <div className="mb-16">
                  <div className="text-primary font-mono text-sm mb-4">After Effects Workspace</div>
                  <p className="text-muted-foreground mb-6">
                    This project was created directly in After Effects without a storyboard phase. The workspace shows the composition timeline and layers used to create the animation.
                  </p>
                  <img 
                    src={subProject.workspaceImage} 
                    alt="After Effects Workspace"
                    className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300"
                  />
                </div>
              )}
              
              {/* Files */}
              {subProject.filesImage && (
                <div>
                  <div className="text-primary font-mono text-sm mb-4">Project Files</div>
                  <p className="text-muted-foreground mb-6">
                    The complete file structure and assets used in the animation production, including compositions, audio files, and exported renders.
                  </p>
                  <img 
                    src={subProject.filesImage} 
                    alt="Project Files"
                    className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Storyboard Section - Only show if storyboardImages exist */}
        {subProject.storyboardImages && subProject.storyboardImages.length > 0 && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[STORYBOARD]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Storyboard
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {subProject.storyboardImages.map((board) => (
                  <div key={board.id} className="relative cursor-pointer group" onClick={() => window.open(board.image, '_blank')}>
                    <img 
                      src={board.image} 
                      alt={`Storyboard ${board.id}`}
                      className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 2. Recce Images Section */}
        {subProject.recceImages && subProject.recceImages.length > 0 && (
          <section className="py-32 bg-card">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[LOCATION SCOUTING]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Recce Images
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {subProject.recceImages.map((image, index) => (
                  <div key={index} className="relative cursor-pointer group" onClick={() => window.open(image, '_blank')}>
                    <img 
                      src={image} 
                      alt={`Recce ${index + 1}`}
                      className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 3. Crew List Section */}
        {subProject.crewList && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[PRODUCTION CREW]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Production Crew
              </h2>
              <div className="flex justify-center">
                <div className="relative cursor-pointer group w-full md:w-2/3 lg:w-1/2" onClick={() => window.open(subProject.crewList, '_blank')}>
                  <img 
                    src={subProject.crewList} 
                    alt="Crew List"
                    className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. Cast Images Section */}
        {subProject.castImages && subProject.castImages.length > 0 && (
          <section className="py-32 bg-card">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[CAST]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Cast
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {subProject.castImages.map((image, index) => (
                  <div key={index} className="relative cursor-pointer group" onClick={() => window.open(image, '_blank')}>
                    <img 
                      src={image} 
                      alt={`Cast ${index + 1}`}
                      className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. Production Section */}
        {subProject.production && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[PRODUCTION]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Production
              </h2>
              <div className="flex justify-center">
                <img 
                  src={subProject.production} 
                  alt="Production Company"
                  className="max-w-md h-auto object-contain"
                />
              </div>
            </div>
          </section>
        )}

        {/* 6. Timeline Section */}
        {subProject.timeline && (
          <section className="py-32 bg-card">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[PRODUCTION TIMELINE]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                7-Week Production Timeline
              </h2>
              <div className="flex justify-center">
                <div className="relative cursor-pointer group w-full md:w-2/3 lg:w-1/2" onClick={() => window.open(subProject.timeline, '_blank')}>
                  <img 
                    src={subProject.timeline} 
                    alt="Production Timeline"
                    className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 7. Cast Schedule Section */}
        {subProject.castSchedule && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[SCHEDULING]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Cast Schedule
              </h2>
              <div className="flex justify-center">
                <div className="relative cursor-pointer group w-full md:w-2/3 lg:w-1/2" onClick={() => window.open(subProject.castSchedule, '_blank')}>
                  <img 
                    src={subProject.castSchedule} 
                    alt="Cast Schedule"
                    className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 8. Time Shot Schedule Section */}
        {subProject.timeShotSchedule && subProject.timeShotSchedule.length > 0 && (
          <section className="py-32 bg-card">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[SHOOTING SCHEDULE]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Time Shot Schedule
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {subProject.timeShotSchedule.map((image, index) => (
                  <div key={index} className="relative cursor-pointer group" onClick={() => window.open(image, '_blank')}>
                    <img 
                      src={image} 
                      alt={`Time Shot Schedule ${index + 1}`}
                      className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 9. Posters Section */}
        {subProject.posters && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[POSTERS]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Film Posters
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {subProject.posters.vertical && (
                  <div className="relative cursor-pointer group" onClick={() => window.open(subProject.posters.vertical, '_blank')}>
                    <div className="text-primary font-mono text-sm mb-4">Vertical Poster</div>
                    <img 
                      src={subProject.posters.vertical} 
                      alt="Vertical Poster"
                      className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                    />
                  </div>
                )}
                {subProject.posters.horizontal && (
                  <div className="relative cursor-pointer group" onClick={() => window.open(subProject.posters.horizontal, '_blank')}>
                    <div className="text-primary font-mono text-sm mb-4">Horizontal Poster</div>
                    <img 
                      src={subProject.posters.horizontal} 
                      alt="Horizontal Poster"
                      className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* 10. External Link Section */}
        {subProject.externalLink && (
          <section className="py-32 bg-card">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[FINAL OUTCOME]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Final Outcome
              </h2>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                The final video is 10 minutes long. Due to file size constraints, you can view it through the link below.
              </p>
              <a 
                href={subProject.externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 border border-primary"
              >
                <span className="font-mono">{subProject.externalLink.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </section>
        )}

        {/* 11. Behind The Scenes Video Section */}
        {subProject.btsVideoPath && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[BEHIND THE SCENES]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Behind The Scenes with Narrator
              </h2>
              <div className="relative w-full aspect-video bg-black">
                <video 
                  controls
                  className="w-full h-full"
                >
                  <source src={subProject.btsVideoPath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        )}

        {/* 12. Group Photo Section */}
        {subProject.groupPhoto && (
          <section className="py-32 bg-card">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[GROUP PHOTOS]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Group Photos
              </h2>
              <div className="relative cursor-pointer group" onClick={() => window.open(subProject.groupPhoto, '_blank')}>
                <img 
                  src={subProject.groupPhoto} 
                  alt="Group Photo"
                  className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </section>
        )}

        {/* Presentation Board Section - Only show if presentationBoard exists */}
        {subProject.presentationBoard && (
          <section className="py-32 bg-card">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[PRESENTATION]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Presentation Board
              </h2>
              <img 
                src={subProject.presentationBoard} 
                alt="Presentation Board"
                className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300"
              />
            </div>
          </section>
        )}

        {/* Design Styleframes Section - Only show if styleframes exist */}
        {subProject.styleframes && subProject.styleframes.length > 0 && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[DESIGN STYLEFRAMES]</div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-16 tracking-tight ${subProject.isHorror ? 'font-horror' : ''}`}>
                Design Styleframes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {subProject.styleframes.map((frame) => (
                  <div key={frame.id} className="relative cursor-pointer group">
                    <div className="absolute -top-6 left-0 text-primary font-mono text-xs">
                      Styleframe {frame.id}
                    </div>
                    <img 
                      src={frame.image} 
                      alt={`Styleframe ${frame.id}`}
                      className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Mooncake Photography Section - Only show if mooncakePhotography exists */}
        {subProject.mooncakePhotography && subProject.mooncakePhotography.length > 0 && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[PRODUCT PHOTOGRAPHY]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Mooncake Photography
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {subProject.mooncakePhotography.map((image, index) => (
                  <div key={index} className="relative cursor-pointer group" onClick={() => window.open(image, '_blank')}>
                    <img 
                      src={image} 
                      alt={`Mooncake Photography ${index + 1}`}
                      className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Equinova Posters Section */}
        {subProject.equinovaPoster && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[EVENT POSTERS]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Equinova Posters
              </h2>
              <div className="relative cursor-pointer group" onClick={() => window.open(subProject.equinovaPoster, '_blank')}>
                <img 
                  src={subProject.equinovaPoster} 
                  alt="Equinova Poster"
                  className="w-full h-auto object-cover border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </section>
        )}

        {/* Equinova Trailer Peak Video Section */}
        {subProject.trailerVideo && (
          <section className="py-32 bg-muted/30">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[TRAILER PREVIEW]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Equinova Trailer Peak Video
              </h2>
              <div className="relative w-full aspect-video bg-black">
                <video 
                  controls
                  className="w-full h-full"
                >
                  <source src={subProject.trailerVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        )}

        {/* Instagram Reels Section */}
        {subProject.instagramReels && subProject.instagramReels.length > 0 && (
          <section className="py-32 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[SOCIAL MEDIA CONTENT]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                Instagram Reels
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {subProject.instagramReels.map((reel, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold text-center">{reel.name}</h3>
                    <div className="relative w-full aspect-[9/16] bg-black">
                      <video 
                        controls
                        className="w-full h-full"
                      >
                        <source src={reel.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TikTok Videos Section */}
        {subProject.tiktokVideos && subProject.tiktokVideos.length > 0 && (
          <section className="py-32 bg-muted/30">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[TIKTOK CONTENT]</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                TikTok Videos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {subProject.tiktokVideos.map((video, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold text-center">{video.name}</h3>
                    <div className="relative w-full aspect-[9/16] bg-black">
                      <video 
                        controls
                        className="w-full h-full"
                      >
                        <source src={video.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final Outcome Video Section - Only show if video exists */}
        {subProject.videoPath && (
          <section className="py-32 bg-muted/30">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-primary font-mono text-sm mb-6">[FINAL OUTCOME]</div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-16 tracking-tight ${subProject.isHorror ? 'font-horror' : ''}`}>
                Final Outcome
              </h2>
              <div className="relative w-full aspect-video bg-black">
                <video 
                  controls
                  className="w-full h-full"
                >
                  <source src={subProject.videoPath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-16 border-t border-border">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <Button 
                variant="outline" 
                onClick={() => navigate(`/project/${id}`)}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to {project.title}
              </Button>
              
              {Number(subId) < project.subProjects.length && (
                <Button 
                  onClick={() => navigate(`/project/${id}/${Number(subId) + 1}`)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Next Project
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Button>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  // Category overview showing sub-projects
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Image - Full Width */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Back Button Overlay */}
        <div className="absolute top-8 left-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="bg-background/10 backdrop-blur-sm hover:bg-background/20 text-white border border-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 bg-gradient-to-t from-black/80 to-transparent">
          <div className="container max-w-7xl mx-auto">
            <div className="text-white/60 font-mono text-sm mb-2">{project.year}</div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-white/90 text-xl md:text-2xl max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Apps Used Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-primary font-mono text-sm mb-6">[TOOLS & SOFTWARE]</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            Apps Used
          </h2>
          <div className="flex flex-wrap gap-6">
            {project.apps.map((app, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 px-8 py-4 border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src={app.icon} 
                    alt={`${app.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-base font-medium">{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Projects List with FlowingMenu */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-primary font-mono text-sm mb-6">[PROJECTS]</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
            Featured Work
          </h2>
          
          <div className="h-[600px]">
            <FlowingMenu 
              items={project.subProjects.map((subProject) => ({
                link: `/project/${id}/${subProject.id}`,
                text: subProject.title,
                image: subProject.image
              }))}
            />
          </div>
        </div>
      </section>

      {/* Category Navigation - Hidden */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-muted-foreground font-mono text-sm text-center">
            [CATEGORY {id} / {projects.length}]
          </div>
        </div>
      </section>

      {/* Circular Next Category Button */}
      {Number(id) < projects.length && (
        <CircularNextButton 
          nextCategoryName={projects[Number(id)]?.title || "Next Category"}
          onClick={() => navigate(`/project/${Number(id) + 1}`)}
        />
      )}

      <Footer />
    </main>
  );
};

export default ProjectDetail;
