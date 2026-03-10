import { ArrowRight, Code, Cpu, Zap } from 'lucide-react';
import ImageSlider from './ImageSlider';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Zap size={16} className="mr-2" />
            Next-Gen Engineering Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building The Future of{' '}
            <span className="text-blue-600">Technology</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
            We transform complex challenges into elegant solutions through cutting-edge engineering, innovative design, and unparalleled expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center font-medium shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
            >
              View Our Work
            </button>
          </div>
        </div>

        <ImageSlider />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-blue-600" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Software Development</h3>
            <p className="text-gray-600 text-sm">Custom solutions built with precision</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Cpu className="text-green-600" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">AI Integration</h3>
            <p className="text-gray-600 text-sm">Intelligent automation systems</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-orange-600" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">IoT Solutions</h3>
            <p className="text-gray-600 text-sm">Connected device ecosystems</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-cyan-600" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud Architecture</h3>
            <p className="text-gray-600 text-sm">Scalable infrastructure design</p>
          </div>
        </div>
      </div>
    </section>
  );
}
