"use client";

import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 1. Replace with the owner's WhatsApp phone number (include country code, without '+' or spaces)
    // Example for India: 919876543210
    const phoneNumber = "917842416166";

    // 2. Format the message text nicely
    const text = `*New Project Inquiry - Studio Website*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Details:* ${encodeURIComponent(formData.message)}`;

    // 3. Open WhatsApp Web / App with the pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="animate-fade-in py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Contact Form Section */}
        <div
          id="contact-form"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Left Column: Direct Contact Details */}
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A880]">
                Get in Touch
              </span>
              <h2 className="text-3xl font-serif text-white mt-1">
                Start Your Transformation
              </h2>
              <p className="text-slate-400 text-sm mt-3 font-light leading-relaxed">
                Have a vision for your space? Send us a message or request a
                site consultation with our principal design directors.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#141414] border border-white/10 text-[#C5A880]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Amma Interiors</h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Door No 51-1-53/1, Dacharala Buildings, Near Swathi Kalyana
                    Mandapam, Padaripuram 1st Line, Pandaripuram, Ongole-523001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#141414] border border-white/10 text-[#C5A880]">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    Consultation Helpline
                  </h4>
                  <p className="text-slate-400 text-xs mt-1">+91 99639 59480</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#141414] border border-white/10 text-[#C5A880]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email Enquiries</h4>
                  <p className="text-slate-400 text-xs mt-1">
                    ammainteriors12@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#141414] border border-white/10 p-8 relative">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="w-16 h-16 bg-[#C5A880]/20 text-[#C5A880] rounded-full flex items-center justify-center mb-4">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">
                  Request Received
                </h3>
                <p className="text-slate-400 text-sm max-w-xs font-light">
                  Thank you! Our senior designer will reach out within 24 hours
                  to schedule your initial consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Priyesh Sharma"
                    className="w-full bg-[#1e1e1e] border border-white/10 text-white p-3 text-sm focus:border-[#C5A880] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@domain.com"
                      className="w-full bg-[#1e1e1e] border border-white/10 text-white p-3 text-sm focus:border-[#C5A880] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98200 00000"
                      className="w-full bg-[#1e1e1e] border border-white/10 text-white p-3 text-sm focus:border-[#C5A880] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2">
                    Project Brief & Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your apartment location, scope, and target completion timeline..."
                    className="w-full bg-[#1e1e1e] border border-white/10 text-white p-3 text-sm focus:border-[#C5A880] outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C5A880] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#b3956d] transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={16} />
                  <span>Submit Consultation Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
