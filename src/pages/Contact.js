const Contact = () => {
  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Contact Us
      </h1>

      <form className="space-y-5">
        <input className="input w-full" placeholder="Your Name" />
        <input className="input w-full" placeholder="Email" />
        <textarea className="input w-full" rows="5" placeholder="Message" />

        <button className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white py-3 rounded-xl">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
