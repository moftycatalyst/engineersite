import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'FinTech Platform',
    category: 'Financial Services',
    description: 'Real-time trading platform processing millions of transactions daily with 99.99% uptime.',
    image: 'https://images.pexels.com/photos/8872429/pexels-photo-8872429.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
  },
  {
    title: 'Smart City IoT',
    category: 'Internet of Things',
    description: 'Connected infrastructure managing traffic flow, energy consumption, and public services.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['IoT', 'Python', 'AWS', 'Machine Learning'],
  },
  {
    title: 'Healthcare Analytics',
    category: 'Healthcare Tech',
    description: 'AI-powered diagnostics platform helping doctors make faster, more accurate decisions.',
    image: 'https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['AI/ML', 'TensorFlow', 'React', 'FastAPI'],
  },
  {
    title: 'E-Commerce Platform',
    category: 'Retail Technology',
    description: 'Scalable marketplace serving 1M+ daily users with personalized recommendations.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Microservices', 'Kubernetes', 'Redis', 'GraphQL'],
  },
  {
    title: 'Supply Chain Optimizer',
    category: 'Logistics',
    description: 'Route optimization system reducing delivery times by 35% and costs by 20%.',
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Optimization', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'EdTech Learning Hub',
    category: 'Education',
    description: 'Interactive learning platform with adaptive curricula reaching 500K+ students.',
    image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Django', 'WebRTC', 'MongoDB'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our commitment to excellence through real-world solutions that drive measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <button className="bg-white text-blue-600 p-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
                    <ExternalLink size={22} />
                  </button>
                  <button className="bg-white text-blue-600 p-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
                    <Github size={22} />
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-3 w-fit">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-700 text-xs font-medium rounded-full border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
