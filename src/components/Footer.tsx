import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TF</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">TechForge</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Engineering excellence through innovation, dedication, and cutting-edge technology solutions for businesses worldwide.
            </p>
            <div className="flex gap-3">
              <button className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition-all hover:scale-110 group">
                <Github size={20} className="group-hover:text-white" />
              </button>
              <button className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition-all hover:scale-110 group">
                <Linkedin size={20} className="group-hover:text-white" />
              </button>
              <button className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition-all hover:scale-110 group">
                <Twitter size={20} className="group-hover:text-white" />
              </button>
              <button className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition-all hover:scale-110 group">
                <Mail size={20} className="group-hover:text-white" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Software Development</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Cloud Solutions</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">AI Integration</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Security Engineering</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">About Us</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Careers</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Blog</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer font-medium">Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 TechForge. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <button className="hover:text-cyan-400 transition-colors font-medium">Privacy Policy</button>
            <button className="hover:text-cyan-400 transition-colors font-medium">Terms of Service</button>
            <button className="hover:text-cyan-400 transition-colors font-medium">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
