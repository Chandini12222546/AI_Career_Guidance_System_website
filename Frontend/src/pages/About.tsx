import { Server, Settings, Activity } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#F3E5F5] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-[#673AB7] mb-6">
            About the Project
          </h1>
          <p className="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
            This system uses AI to guide students toward careers aligned with their
            interests and skills. It integrates DevOps tools such as Jenkins for CI/CD,
            Puppet for configuration management, and Nagios for monitoring to ensure a
            robust, scalable, and reliable platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="bg-[#673AB7] p-6 rounded-full">
                <Server className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-[#673AB7]">
              Jenkins
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Jenkins automates the build, test, and deployment processes, enabling
              continuous integration and continuous delivery. It ensures that code
              changes are automatically tested and deployed, reducing manual effort and
              minimizing errors.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="bg-[#673AB7] p-6 rounded-full">
                <Settings className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-[#673AB7]">
              Puppet
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Puppet manages configuration across all infrastructure components,
              ensuring consistency and compliance. It automates the provisioning and
              configuration of servers, making infrastructure management efficient and
              reliable.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="bg-[#673AB7] p-6 rounded-full">
                <Activity className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-[#673AB7]">
              Nagios
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Nagios monitors the entire infrastructure in real-time, detecting issues
              before they impact users. It provides alerts and comprehensive reports,
              ensuring high availability and optimal performance of all system
              components.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#673AB7] mb-6 text-center">
            Project Goals
          </h2>
          <ul className="space-y-4 text-gray-800 text-lg">
            <li className="flex items-start">
              <span className="text-[#673AB7] font-bold mr-3">•</span>
              <span>
                Provide intelligent career recommendations based on student skills and
                interests
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#673AB7] font-bold mr-3">•</span>
              <span>
                Demonstrate practical integration of DevOps tools in real-world
                applications
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#673AB7] font-bold mr-3">•</span>
              <span>
                Create a scalable and maintainable platform using modern technologies
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#673AB7] font-bold mr-3">•</span>
              <span>
                Help students make informed decisions about their career paths
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#673AB7] font-bold mr-3">•</span>
              <span>
                Showcase the importance of automation and monitoring in software
                development
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
