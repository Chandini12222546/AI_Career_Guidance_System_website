import { useLocation, Link, Navigate } from 'react-router-dom';
import { predictCareer } from '../utils/careerLogic';
import { Sparkles } from 'lucide-react';

export default function Result() {
  const location = useLocation();
  const state = location.state as { skillLevel: number; interest: string } | null;

  if (!state) {
    return <Navigate to="/career" replace />;
  }

  const { career, message } = predictCareer(state.skillLevel, state.interest);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9575CD] to-[#673AB7] py-16 px-4 flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center animate-zoomIn">
          <div className="flex justify-center mb-6">
            <div className="bg-[#673AB7] p-4 rounded-full">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-6">
            Your Career Recommendation
          </h1>

          <div className="bg-[#F3E5F5] rounded-lg p-8 mb-6">
            <p className="text-lg text-gray-700 mb-4">
              Based on your skill level and interest, your ideal career path is:
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#673AB7] mb-4">
              {career}
            </h2>
            <p className="text-xl text-gray-700">{message}</p>
          </div>

          <Link
            to="/career"
            className="inline-block bg-[#673AB7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9575CD] transition-all transform hover:scale-105 shadow-lg"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
}
