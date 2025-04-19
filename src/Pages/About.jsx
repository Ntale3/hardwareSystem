import React from "react";

const employees = [
  {
    name: "Jane Doe",
    role: "Sales Manager",
    image: "https://i.pinimg.com/474x/1d/13/c7/1d13c7f72f9c45c7c7e09d1c38046f9b.jpg",
  },
  {
    name: "John Smith",
    role: "Logistics Supervisor",
    image: "https://i.pinimg.com/474x/d9/b6/1a/d9b61a74e0ca7c64d50d27bb42013b4b.jpg",
  },
  {
    name: "Linda Ray",
    role: "Procurement Officer",
    image: "https://i.pinimg.com/474x/0c/97/bb/0c97bb99376263d664e61e7914df1a8b.jpg",
  },
];

const EmployeeCard = ({ name, role, image }) => (
  <div className=" p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300 ease-in-out">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 mx-auto rounded-full mb-4 border border-black"
    />
    <h4 className="text-xl font-bold text-black">{name}</h4>
    <p className="text-black font-medium">{role}</p>
  </div>
);

export default function About() {
  return (
    <div
      className="bg-cover bg-center text-white min-h-screen p-6"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1607083201441-68e7d37b40b1?auto=format&fit=crop&w=2100&q=80)' }}
    >
      <div className=" backdrop-blur-md rounded-xl max-w-7xl mx-auto p-6 md:p-10">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
            Building Tomorrow, Today
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-black">
            At the heart of every great structure is a foundation built with trust. We supply premium cement, roofing, and materials that guarantee safety, strength, and satisfaction for every build.
          </p>
        </section>

        {/* Company Promise */}
        <section className=" rounded-2xl shadow-md p-8 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-800 mb-4">
            Our Commitment to Quality
          </h2>
          <p className="text-xl md:text-xl max-w-3xl mx-auto text-black ">
            We're not just a supplier — we're your construction partner. From sourcing to delivery, every product is tested and certified to meet and exceed industry standards. Build confidently with us by your side.
          </p>
        </section>

        {/* Employee Cards */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-red-800 mb-8">
            Meet the Experts Behind the Mission
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {employees.map((employee) => (
              <EmployeeCard
                key={employee.name}
                name={employee.name}
                role={employee.role}
                image={employee.image}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
