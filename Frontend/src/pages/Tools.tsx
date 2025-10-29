import { Code, Database, Cloud, Shield, Cpu, GitBranch } from 'lucide-react';

export default function Tools() {
  const technologies = [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      icon: Code,
      color: 'bg-[#673AB7]',
    },
    {
      category: 'Backend',
      items: ['Python (Flask)', 'Node.js', 'REST APIs'],
      icon: Cpu,
      color: 'bg-[#9575CD]',
    },
    {
      category: 'AI & Analytics',
      items: ['scikit-learn', 'pandas', 'NumPy', 'Machine Learning'],
      icon: Database,
      color: 'bg-[#673AB7]',
    },
    {
      category: 'DevOps',
      items: ['Jenkins', 'Puppet', 'Nagios', 'Docker'],
      icon: GitBranch,
      color: 'bg-[#9575CD]',
    },
    {
      category: 'Database',
      items: ['Supabase', 'PostgreSQL', 'SQLite'],
      icon: Database,
      color: 'bg-[#673AB7]',
    },
    {
      category: 'Security',
      items: ['SSH', 'SSL/TLS', 'Authentication', 'Encryption'],
      icon: Shield,
      color: 'bg-[#9575CD]',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3E5F5] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-[#673AB7] mb-6">
            Tools & Technologies
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            This project leverages cutting-edge technologies and industry-standard tools
            to deliver a robust, scalable career guidance platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <div className={`${tech.color} p-4 rounded-full`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-[#673AB7]">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 text-center">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-[#673AB7] mb-8 text-center">
            System Architecture
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <div className="bg-[#F3E5F5] rounded-lg p-6 w-full md:w-auto">
              <h3 className="font-bold text-[#673AB7] mb-2">Frontend</h3>
              <p className="text-gray-700">React + TypeScript</p>
            </div>
            <div className="text-[#673AB7] text-2xl">→</div>
            <div className="bg-[#F3E5F5] rounded-lg p-6 w-full md:w-auto">
              <h3 className="font-bold text-[#673AB7] mb-2">Backend</h3>
              <p className="text-gray-700">Python Flask</p>
            </div>
            <div className="text-[#673AB7] text-2xl">→</div>
            <div className="bg-[#F3E5F5] rounded-lg p-6 w-full md:w-auto">
              <h3 className="font-bold text-[#673AB7] mb-2">Database</h3>
              <p className="text-gray-700">Supabase</p>
            </div>
            <div className="text-[#673AB7] text-2xl">→</div>
            <div className="bg-[#F3E5F5] rounded-lg p-6 w-full md:w-auto">
              <h3 className="font-bold text-[#673AB7] mb-2">DevOps</h3>
              <p className="text-gray-700">CI/CD & Monitoring</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#673AB7] to-[#9575CD] rounded-xl shadow-lg p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Security Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                SSH (Secure Shell)
              </h3>
              <p className="text-gray-100">
                Provides secure remote access to servers and encrypted communication
                channels for system administration and deployment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                SSL/TLS
              </h3>
              <p className="text-gray-100">
                Ensures all data transmitted between the client and server is encrypted,
                protecting user information and maintaining privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
