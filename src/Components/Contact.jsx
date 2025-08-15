export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#000021] py-12 mt-0.5">
      <h1 className="text-4xl text-orange-400 font-bold mb-5" >Contact Us</h1>
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">

        {/* Left Side - Contact Form */}
        <div className="bg-amber-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-orange-400">Get In Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Google Map */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7006.566709632943!2d77.30093199330463!3d28.59127510274882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59cfb2afc81%3A0xe56f13e6d57960c2!2sPREFECT%20GIRLS%20PG%20NEW%20ASHOK%20NAGAR!5e0!3m2!1sen!2sin!4v1755181315765!5m2!1sen!2sin" width="100%"
            height="100%"
            style={{ minHeight: "400px", border: "0" }}
            allowFullScreen=""
            loading="lazy"></iframe>
        </div>

      </div>
    </section>
  );
}
