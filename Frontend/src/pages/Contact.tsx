import { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9575CD] to-[#673AB7] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-[#673AB7] mb-6">Send a Message</h2>
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 animate-fadeIn">
                Message Sent Successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  <User className="inline w-5 h-5 mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#673AB7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9575CD]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  <Mail className="inline w-5 h-5 mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#673AB7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9575CD]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  <MessageSquare className="inline w-5 h-5 mr-2" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-[#673AB7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9575CD] resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#673AB7] text-white py-4 rounded-lg font-semibold hover:bg-[#9575CD] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-[#673AB7] mb-6">
              Project Information
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#673AB7] pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Student Name</h3>
                <p className="text-gray-700">Midatha Chandini</p>
              </div>

              <div className="border-l-4 border-[#673AB7] pl-4">
                <h3 className="font-bold text-gray-800 mb-2">College Name</h3>
                <p className="text-gray-700">
                  Lovely Professional University 
                </p>
              </div>

              <div className="border-l-4 border-[#673AB7] pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Project Guide</h3>
                <p className="text-gray-700">Arshiya Pathania</p>
              </div>

              <div className="border-l-4 border-[#673AB7] pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Project Title</h3>
                <p className="text-gray-700">
                  AI-Based Career Guidance System with DevOps Integration
                </p>
              </div>

              <div className="border-l-4 border-[#673AB7] pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Department</h3>
                <p className="text-gray-700">Computer Science & Engineering</p>
              </div>

              <div className="border-l-4 border-[#673AB7] pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Year</h3>
                <p className="text-gray-700">2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
