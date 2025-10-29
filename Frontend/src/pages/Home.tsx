import { Link } from 'react-router-dom';
import { Server, Settings, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-[#673AB7] to-[#9575CD] text-white py-32 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Based Career Guidance System
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            An intelligent web platform that guides students toward the right career path
            using AI and integrates DevOps tools like Jenkins, Puppet, and Nagios for
            automation and monitoring.
          </p>
          <Link
            to="/career"
            className="inline-block bg-white text-[#673AB7] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="py-20 px-4 bg-[#F3E5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#673AB7]">
            DevOps Integration
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-[#673AB7] p-4 rounded-full">
                  <Server className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 text-[#673AB7]">
                Jenkins
              </h3>
              <p className="text-gray-700 text-center">
                Automates deployment and continuous integration for seamless delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-[#673AB7] p-4 rounded-full">
                  <Settings className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 text-[#673AB7]">
                Puppet
              </h3>
              <p className="text-gray-700 text-center">
                Manages configurations across the infrastructure efficiently.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-[#673AB7] p-4 rounded-full">
                  <Activity className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 text-[#673AB7]">
                Nagios
              </h3>
              <p className="text-gray-700 text-center">
                Monitors performance and ensures system reliability in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
