const faqs = [
  { q: "How long does shipping take?", a: "3-5 business days." },
  { q: "Can I return a product?", a: "Yes, within 14 days." },
  { q: "Is payment secure?", a: "All payments are encrypted." },
];

const FAQs = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">FAQs</h1>

      <div className="space-y-6">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-gray-100 p-6 rounded-xl border hover:border-blue-500 transition-colors duration-300 group"
          >
            <h4 className="font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">
              {item.q}
            </h4>
            <p className="text-gray-600">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
