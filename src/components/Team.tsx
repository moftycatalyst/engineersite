import { Linkedin, Twitter, Github } from 'lucide-react';

const team = [
  {
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: '15+ years building scalable systems',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Software Architect',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Specialist in distributed systems',
  },
  {
    name: 'Emily Watson',
    role: 'Head of AI/ML',
    image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'PhD in Machine Learning from MIT',
  },
  {
    name: 'David Kim',
    role: 'DevOps Director',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Cloud infrastructure expert',
  },
  {
    name: 'Priya Sharma',
    role: 'Security Lead',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Certified ethical hacker & architect',
  },
  {
    name: 'James Taylor',
    role: 'Data Engineering Lead',
    image: 'https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Big data & analytics specialist',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class engineers and innovators dedicated to transforming your vision into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="relative mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-32 h-32 rounded-full object-cover ring-4 ring-white group-hover:ring-blue-200 transition-all shadow-lg"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mb-3 inline-block px-3 py-1 bg-blue-50 rounded-full">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-2 pt-4 border-t border-gray-100">
                  <button className="p-2 bg-gray-50 rounded-lg text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all hover:scale-110">
                    <Linkedin size={18} />
                  </button>
                  <button className="p-2 bg-gray-50 rounded-lg text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all hover:scale-110">
                    <Twitter size={18} />
                  </button>
                  <button className="p-2 bg-gray-50 rounded-lg text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all hover:scale-110">
                    <Github size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
