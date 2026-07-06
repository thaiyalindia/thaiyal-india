import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { getWhatsAppLink } from '../whatsapp';

const FORMSPREE_URL = 'https://formspree.io/f/xpqgjwvy';

export default function ContactTab() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productInterest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const getWhatsAppMessageUrl = () => {
    const text = `Hi Thaiyal India! My name is ${formData.name}.
Phone: ${formData.phone}
Product Interest: ${formData.productInterest || 'N/A'}
Message: ${formData.message}`;
    return `https://wa.me/918825648043?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to Formspree so you receive an email notification
    try {
      await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          productInterest: formData.productInterest,
          message: formData.message,
        }),
      });
    } catch (_) {
      // Silent fail — WhatsApp fallback below always opens regardless
    }
    setSubmitted(true);
    // Also open WhatsApp so the customer can chat directly
    window.open(getWhatsAppMessageUrl(), '_blank');
  };

  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <section className="px-5 md:px-16 max-w-7xl mx-auto mb-24 text-center pt-8">
        <h1 className="serif-heading text-4xl md:text-5xl mb-6 text-brand-primary">Let&apos;s Create Something Together</h1>
        <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
          We&apos;d love to hear about your memories. Every stitch we place is a tribute to a story shared by you.
        </p>
      </section>

      {/* Contact Grid */}
      <section className="px-5 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

        {/* Left Column: Contact Info */}
        <div className="flex flex-col space-y-12">
          <div>
            <h3 className="serif-heading text-2xl text-brand-primary mb-8">Get in Touch</h3>
            <div className="space-y-8">
              <a href="tel:+918825648043" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 bg-brand-sand/40 flex items-center justify-center rounded-xl text-brand-secondary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="label-caps text-brand-charcoal/60 mb-1">Phone</p>
                  <p className="text-brand-charcoal font-medium">8825648043</p>
                </div>
              </a>
              <a href="mailto:thaiyalindia@gmail.com" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 bg-brand-sand/40 flex items-center justify-center rounded-xl text-brand-secondary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="label-caps text-brand-charcoal/60 mb-1">Email</p>
                  <p className="text-brand-charcoal font-medium">thaiyalindia@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-sand/40 flex items-center justify-center rounded-xl text-brand-secondary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="label-caps text-brand-charcoal/60 mb-1">Address</p>
                  <p className="text-brand-charcoal font-medium">
                    Thaiyal India<br />
                    102G/15,<br />
                    Kurinji Nagar 7th Street,<br />
                    Polepettai West, Tuticorin - 628002
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="label-caps text-brand-charcoal/60 mb-6">Direct Support</h4>
            <a
              href={getWhatsAppLink("Hi Thaiyal India! I have a question and would love to chat with your team directly.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              WhatsApp Us Directly
            </a>

            {/* Our Presence — moved here from below the map */}
            <div className="mt-8">
              <h4 className="label-caps text-brand-charcoal/60 mb-4">Our Presence</h4>
              <div className="flex items-center gap-6">
                <a
                  href="https://www.instagram.com/thaiyal.india?igsh=Y2g4d2hjMTY2cTFz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-charcoal/70 hover:text-brand-secondary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/18CetMxjg1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-charcoal/70 hover:text-brand-secondary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-brand-primary/5 border border-brand-charcoal/5">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-brand-secondary" />
              </div>
              <h3 className="serif-heading text-xl text-brand-primary">Message Sent!</h3>
              <p className="text-brand-charcoal/70">We've received your message and WhatsApp should have opened for a quick chat. We'll be in touch soon.</p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', productInterest: '', message: '' }); }}
                className="label-caps text-brand-secondary border-b border-brand-secondary pb-1 hover:opacity-70 transition-opacity cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="label-caps text-brand-charcoal/60 mb-2 block">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-transparent border border-brand-charcoal/15 rounded-lg p-4 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all"
              />
            </div>
            <div>
              <label className="label-caps text-brand-charcoal/60 mb-2 block">Phone / WhatsApp</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Mobile number"
                className="w-full bg-transparent border border-brand-charcoal/15 rounded-lg p-4 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all"
              />
            </div>
            <div>
              <label className="label-caps text-brand-charcoal/60 mb-2 block">Product Interest</label>
              <select
                value={formData.productInterest}
                onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                className="w-full bg-transparent border border-brand-charcoal/15 rounded-lg p-4 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all appearance-none cursor-pointer"
              >
                <option value="">Select a keepsake type</option>
                <option value="Memory Quilts">Memory Quilts</option>
                <option value="Memory Toys">Memory Toys</option>
                <option value="Memory Pillows">Memory Pillows</option>
                <option value="Custom T-Shirts">Custom T-Shirts</option>
              </select>
            </div>
            <div>
              <label className="label-caps text-brand-charcoal/60 mb-2 block">Your Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about the memory you'd like to preserve..."
                className="w-full bg-transparent border border-brand-charcoal/15 rounded-lg p-4 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-primary text-white font-semibold py-5 rounded-lg hover:opacity-90 transition-all shadow-md cursor-pointer"
            >
              Send Message
            </button>
          </form>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] relative">
        <iframe
          title="Thaiyal India location on Google Maps"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Kurinji+Nagar+7th+Street,+Polepettai+West,+Tuticorin+628002&output=embed"
        />
      </section>

    </div>
  );
}
