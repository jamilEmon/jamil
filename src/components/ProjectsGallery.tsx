import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  accuracy?: string;
}

const ProjectsGallery = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => {
  return (
    <section id="work" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">WORK</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="bg-gray-900 border-blue-500 overflow-hidden group h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={24} />
          </a>
        </div>
      </div>

      <CardContent className="flex-grow flex flex-col p-5">
        <h3 className="text-xl font-semibold mb-2 text-blue-300">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">
          {project.description}
        </p>

        {project.accuracy && (
          <div className="mb-3">
            <span className="text-green-400 font-medium">
              {project.accuracy} accuracy
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-gray-800 text-blue-200 border-blue-500"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const defaultProjects: Project[] = [
  {
    id: 1,
    title: "Heart Disease Prediction Using ML and Deep Learning",
    description:
      "Developed a model using CNN and feature engineering for heart disease prediction with multiple ML algorithms.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    technologies: ["Python", "TensorFlow", "XGBoost", "CNN", "SVM"],
    githubUrl:
      "https://github.com/jamilEmon/Heart-Disease-Prediction-Using-ML-and-Deep-Learning",
    accuracy: "96.36%",
  },
  {
    id: 2,
    title: "Hybrid Deep Ensemble for Sentiment Analysis",
    description:
      "Created a BERT + CNN-BiGRU-Attention network with Optuna tuning for Amazon reviews sentiment analysis.",
    image:
      "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&q=80",
    technologies: ["BERT", "CNN", "BiGRU", "Optuna", "NLP"],
    githubUrl:
      "https://github.com/jamilEmon/Hybrid-Deep-Ensemble-for-Sentiment-Analysis",
    accuracy: "91.15%",
  },
  {
    id: 3,
    title: "Brain Tumor Classification Using Deep Learning",
    description:
      "Implemented a CNN pipeline with VGG16, ResNet50, InceptionV3, and EfficientNetB0 for tumor classification.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    technologies: ["CNN", "VGG16", "ResNet50", "InceptionV3", "EfficientNetB0"],
    githubUrl:
      "https://github.com/jamilEmon/Brain-Tumor-Classification-using-Deep-Learning",
    accuracy: "97%",
  },
];

export default ProjectsGallery;
