const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>
      <p className="text-gray-600 mb-12">
        We are a modern e-commerce store focused on quality products and a
        smooth shopping experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["High Quality", "Fast Delivery", "Secure Payments"].map((item) => (
          <div
            key={item}
            className="bg-gray-100 p-8 rounded-2xl border hover:border-blue-500 transition-colors duration-300 group"
          >
            <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors duration-300">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
