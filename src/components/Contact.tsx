import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              Whether you have a question about our services, need a quote, or want to discuss your next project, our team is ready to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg group-hover:shadow-lg transition-all group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-blue-100 group-hover:text-white transition-colors">contact@techforge.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-lg group-hover:shadow-lg transition-all group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <p className="text-blue-100 group-hover:text-white transition-colors">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg group-hover:shadow-lg transition-all group-hover:scale-110">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Office</h4>
                  <p className="text-blue-100 group-hover:text-white transition-colors">
                    123 Innovation Drive<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/40 text-white focus:border-cyan-400 focus:bg-white/20 focus:outline-none transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/40 text-white focus:border-cyan-400 focus:bg-white/20 focus:outline-none transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/40 text-white focus:border-cyan-400 focus:bg-white/20 focus:outline-none transition-all"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/40 text-white focus:border-cyan-400 focus:bg-white/20 focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all font-semibold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                {submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
