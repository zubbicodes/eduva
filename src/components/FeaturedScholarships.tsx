import ScholarshipCard from "./ScholarshipCard";

const FeaturedScholarships = () => {
  const scholarships = [
    {
      title: "Merit Excellence Scholarship",
      amount: "$5,000",
      deadline: "May 30, 2024",
      eligibility: "Undergraduate students with GPA 3.5+"
    },
    {
      title: "STEM Innovation Grant",
      amount: "$7,500",
      deadline: "June 15, 2024",
      eligibility: "Engineering & Science majors"
    },
    {
      title: "Global Leaders Fund",
      amount: "$10,000",
      deadline: "July 1, 2024",
      eligibility: "International students"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Featured Scholarships
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <ScholarshipCard key={index} {...scholarship} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedScholarships;