import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Career() {
  const navigate = useNavigate();
  const [skillLevel, setSkillLevel] = useState('5');
  const [interest, setInterest] = useState('Coding');

  const interests = [
    'Coding',
    'AI / Machine Learning',
    'Data Science',
    'Cybersecurity',
    'Cloud Computing',
    'Design',
    'Teaching / Education',
    'Management',
    'Finance',
    'Marketing',
    'Communication',
    'Research',
    'Networking',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/result', { state: { skillLevel: parseInt(skillLevel), interest } });
  };

  return (
    <div className="min-h-screen bg-[#F3E5F5] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-[#673AB7] mb-4">
            Career Recommendation System
          </h1>
          <p className="text-xl text-gray-700">
            Enter your details to find your ideal career path
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-slideUp">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="skillLevel"
                className="block text-lg font-semibold text-gray-800 mb-3"
              >
                Skill Level (1-10)
              </label>
              <input
                type="number"
                id="skillLevel"
                min="1"
                max="10"
                value={skillLevel}
                onChange={(e) => setSkillLevel(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#673AB7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9575CD] text-lg"
                required
              />
              <p className="text-sm text-gray-600 mt-2">
                Rate your skill level from 1 (beginner) to 10 (expert)
              </p>
            </div>

            <div>
              <label
                htmlFor="interest"
                className="block text-lg font-semibold text-gray-800 mb-3"
              >
                Area of Interest
              </label>
              <select
                id="interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#673AB7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9575CD] text-lg"
                required
              >
                {interests.map((int) => (
                  <option key={int} value={int}>
                    {int}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#673AB7] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#9575CD] transition-all transform hover:scale-105 shadow-lg"
            >
              Get Career Recommendation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
