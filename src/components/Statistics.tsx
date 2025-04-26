import React from 'react';
import { Users, UserCheck } from 'lucide-react';

interface StatCardProps {
  year: string;
  learners: number;
  teachers: number;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ year, learners, teachers, color }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${color}`}>
      <h3 className="text-2xl font-bold text-white mb-6 text-center">{year}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <Users className="w-8 h-8 text-yellow-400 mb-2" />
          <p className="text-white text-sm mb-1">Learners</p>
          <p className="text-3xl font-bold text-white">{learners}</p>
        </div>
        <div className="flex flex-col items-center">
          <UserCheck className="w-8 h-8 text-green-400 mb-2" />
          <p className="text-white text-sm mb-1">Teachers</p>
          <p className="text-3xl font-bold text-white">{teachers}</p>
        </div>
      </div>
    </div>
  );
};

const Statistics: React.FC = () => {
  return (
    <section id="statistics" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">School Statistics</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our school has consistently maintained strong enrollment numbers and an excellent 
            student-teacher ratio to ensure quality education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            year="2023"
            learners={797}
            teachers={37}
            color="bg-navy-700"
          />
          <StatCard
            year="2024"
            learners={828}
            teachers={38}
            color="bg-navy-800"
          />
          <StatCard
            year="2025 (Projected)"
            learners={642}
            teachers={26}
            color="bg-navy-900"
          />
        </div>

        <div className="mt-12 p-8 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold text-navy-900 mb-4">Student-Teacher Ratios</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-navy-800 text-white text-left">Year</th>
                  <th className="py-3 px-4 bg-navy-800 text-white text-left">Students</th>
                  <th className="py-3 px-4 bg-navy-800 text-white text-left">Teachers</th>
                  <th className="py-3 px-4 bg-navy-800 text-white text-left">Ratio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 text-navy-900">2023</td>
                  <td className="py-3 px-4 text-navy-900">797</td>
                  <td className="py-3 px-4 text-navy-900">37</td>
                  <td className="py-3 px-4 text-navy-900">21.5:1</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-4 text-navy-900">2024</td>
                  <td className="py-3 px-4 text-navy-900">828</td>
                  <td className="py-3 px-4 text-navy-900">38</td>
                  <td className="py-3 px-4 text-navy-900">21.8:1</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-navy-900">2025 (Projected)</td>
                  <td className="py-3 px-4 text-navy-900">642</td>
                  <td className="py-3 px-4 text-navy-900">26</td>
                  <td className="py-3 px-4 text-navy-900">24.7:1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;