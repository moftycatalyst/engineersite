import { Layers, Shield, Rocket, Settings, Database, Cloud } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Full-Stack Development',
    description: 'End-to-end web and mobile application development with modern frameworks and best practices.',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Security Engineering',
    description: 'Comprehensive security audits, penetration testing, and secure architecture design.',
    color: 'red',
  },
  {
    icon: Rocket,
    title: 'DevOps & CI/CD',
    description: 'Automated deployment pipelines, container orchestration, and infrastructure as code.',
    color: 'green',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Big data processing, ETL pipelines, and real-time analytics solutions.',
    color: 'yellow',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Multi-cloud architecture, migration services, and cloud-native development.',
    color: 'cyan',
  },
  {
    icon: Settings,
    title: 'System Integration',
    description: 'Seamless integration of legacy systems with modern technologies and APIs.',
    color: 'slate',
  },
];

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600',
  red: 'bg-red-100 text-red-600',
  green: 'bg-green-100 text-green-600',
  yellow: 'bg-yellow-100 text-yellow-600',
  cyan: 'bg-cyan-100 text-cyan-600',
  slate: 'bg-slate-100 text-slate-600',
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Engineering Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your unique challenges, delivered by experts who care about your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl hover:border-blue-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${colorClasses[service.color as keyof typeof colorClasses]} group-hover:scale-125 transition-all group-hover:shadow-lg`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#contact" className="text-blue-600 font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
