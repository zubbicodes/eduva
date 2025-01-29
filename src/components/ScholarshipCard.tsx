import { Calendar, DollarSign, Users } from "lucide-react";

interface ScholarshipCardProps {
  title: string;
  amount: string;
  deadline: string;
  eligibility: string;
}

const ScholarshipCard = ({ title, amount, deadline, eligibility }: ScholarshipCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-600">
          <DollarSign size={20} className="text-secondary" />
          <span>{amount}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={20} className="text-secondary" />
          <span>{deadline}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Users size={20} className="text-secondary" />
          <span>{eligibility}</span>
        </div>
      </div>
      <button className="mt-6 w-full bg-primary text-white py-2 rounded hover:bg-secondary transition-colors">
        Apply Now
      </button>
    </div>
  );
};

export default ScholarshipCard;