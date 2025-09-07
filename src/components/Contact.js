import React, { useEffect, useState } from "react";

const Contact = () => {
  // Inline SVG Icons for a single-file approach
  const IconArrowRight = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );

  const IconGithub = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.75c3.25 0 6.8-.7 6.8-7.5A5.5 5.5 0 0 0 20 5.7c-.5-1.12-2.13-1.07-3.66-1.02a6.3 6.3 0 0 0-1.84.5C12.95 3.5 11.5 3 10 3a5.5 5.5 0 0 0-5.32 5.15c0 6.8 3.55 7.5 6.8 7.5a4.8 4.8 0 0 0-1 3.75v4" />
      <path d="M12 2a1 1 0 0 0-1 1" />
    </svg>
  );

  const IconLinkedin = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const IconFacebook = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  // Use useEffect to load and initialize the EmailJS SDK after the component mounts
  useEffect(() => {
    // Check if the script has already been added to avoid duplicates
    if (!window.emailjs) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
      script.async = true; // Load asynchronously
      script.onload = () => {
        // Initialize EmailJS after the script has loaded
        console.log(
          "EmailJS SDK loaded. Please replace 'YOUR_PUBLIC_KEY' with your actual key from the EmailJS dashboard."
        );
        window.emailjs.init("E7eqfCXSVuvpzw9f3"); // Replace with your Public Key
      };
      document.body.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    const serviceID = "service_oeb24ab"; // Replace with your Service ID
    const templateID = "template_6l01bem"; // Replace with your Template ID

    // Ensure the EmailJS object is available before trying to use it
    if (!window.emailjs) {
      setFormStatus("Error: Email service not loaded. Please try again.");
      console.error("EmailJS SDK not loaded.");
      setTimeout(() => setFormStatus(""), 5000);
      return;
    }

    // Check for placeholder credentials
    if (
      serviceID === "YOUR_SERVICE_ID" ||
      templateID === "YOUR_TEMPLATE_ID" ||
      window.emailjs.init === "YOUR_PUBLIC_KEY"
    ) {
      setFormStatus("Error: Please configure your EmailJS credentials.");
      console.error(
        "EmailJS credentials are not configured. Please replace the placeholder values with your actual Service ID, Template ID, and Public Key from the EmailJS dashboard."
      );
      setTimeout(() => setFormStatus(""), 5000);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      const response = await window.emailjs.send(
        serviceID,
        templateID,
        templateParams
      );

      if (response.status === 200) {
        setFormStatus("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus(
          "Error: Failed to send message. Check the console for details."
        );
        console.error("EmailJS Error:", response);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus("An error occurred. Please try again later.");
    }

    // Clear the status message after a few seconds
    setTimeout(() => {
      setFormStatus("");
    }, 5000);
  };
  const SectionHeading = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12 relative z-10">
      <span className="relative">
        {children}
        <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-red-500 rounded-full transform -translate-x-1/2"></span>
      </span>
    </h2>
  );

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24">
        <SectionHeading>Get In Touch</SectionHeading>
        <div className="bg-neutral-900 rounded-3xl p-8 md:p-16 max-w-2xl mx-auto border border-neutral-800 animate-fade-in-up">
          <p className="text-neutral-300 text-lg mb-8 text-center">
            I'm actively looking for a junior software developer role and am
            always open to new opportunities. Please feel free to reach out
            using the form below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                required
                className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition-colors text-white font-bold py-3 px-6 rounded-full transform hover:scale-105"
            >
              Send Message
              <IconArrowRight />
            </button>
          </form>

          {formStatus && (
            <p className="text-center mt-6 text-green-400 font-semibold">
              {formStatus}
            </p>
          )}

          <div className="flex items-center justify-center gap-6 text-red-500 mt-8">
            <a
              href="https://github.com/ThomaxMerlin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors transform hover:scale-110"
            >
              <IconGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/min-thu-kywal-49324b244/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors transform hover:scale-110"
            >
              <IconLinkedin />
            </a>
            <a
              href="https://www.facebook.com/share/1Cc61ShaLQ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors transform hover:scale-110"
            >
              <IconFacebook />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
