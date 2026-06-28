import React, { useState } from 'react';
import { Tab } from '../types';
import { ThaiyalLogo } from './Icons';
import { Send, MapPin, Phone, Mail, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../whatsapp';

interface FooterProps {
  setActiveTab: (tab: Tab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleLinkClick = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-sand/30 border-t border-brand-charcoal/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-5 md:px-16 py-20 max-w-7xl mx-auto">

        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center cursor-pointer" onClick={() => handleLinkClick(Tab.Home)}>
            <ThaiyalLogo className="h-12 w-auto" />
          </div>
          <p className="text-brand-charcoal/70 text-sm">
            Handcrafting memories and empowering women artisans across India, one stitch at a time.
          </p>
          <div className="space-y-3 text-brand-charcoal/70 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand-secondary mt-1 shrink-0" />
              <span>Thaiyal India, 102G/15, Kurinji Nagar 7th Street, Polepettai West, Tuticorin - 628002</span>
            </p>
            <a
              href="tel:+918825648043"
              className="flex items-center gap-2 hover:text-brand-secondary transition-colors w-fit"
            >
              <Phone className="w-4 h-4 text-brand-secondary shrink-0" />
              <span>8825648043</span>
            </a>
            <a
              href="mailto:thaiyalindia@gmail.com"
              className="flex items-center gap-2 hover:text-brand-secondary transition-colors w-fit"
            >
              <Mail className="w-4 h-4 text-brand-secondary shrink-0" />
              <span>thaiyalindia@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Quick Links + Customer Care */}
        <div className="grid grid-cols-2 gap-8 md:col-span-1 lg:col-span-2">
          <div>
            <h4 className="label-caps text-brand-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', tab: Tab.Home },
                { label: 'All Products', tab: Tab.Products },
                { label: 'The Gallery', tab: Tab.Gallery },
                { label: 'Our Story', tab: Tab.About },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.tab)}
                    className="text-brand-charcoal/70 hover:text-brand-secondary transition-all cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="label-caps text-brand-primary mb-6">Customer Care</h4>
            <ul className="space-y-4">
              {[
                { label: 'Shipping Policy', tab: Tab.Shipping },
                { label: 'Refunds & Returns', tab: Tab.Returns },
                { label: 'Privacy Policy', tab: Tab.Privacy },
                { label: 'Support', tab: Tab.Contact },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.tab)}
                    className="text-brand-charcoal/70 hover:text-brand-secondary transition-all cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="label-caps text-brand-primary mb-6">Join Our Community</h4>
          <p className="text-brand-charcoal/70 mb-4 text-sm">Sign up for stories and memory-making tips.</p>
          {subscribed ? (
            <div className="p-3 bg-brand-secondary/10 border border-brand-secondary/30 rounded-lg text-brand-secondary text-xs font-medium">
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border border-brand-charcoal/20 rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-brand-secondary focus:border-brand-secondary outline-none text-sm"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-brand-secondary text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <a
              href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-brand-charcoal/70 hover:bg-brand-secondary hover:text-white transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/thaiyal.india?igsh=Y2g4d2hjMTY2cTFz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-brand-charcoal/70 hover:bg-brand-secondary hover:text-white transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/share/18CetMxjg1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-brand-charcoal/70 hover:bg-brand-secondary hover:text-white transition-all shadow-sm"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com/@thaiyalindia?si=Qii-4GM1Bila9ts9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-brand-charcoal/70 hover:bg-brand-secondary hover:text-white transition-all shadow-sm"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-charcoal/10 py-8 px-5 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-brand-charcoal/60 text-sm">© {new Date().getFullYear()} Thaiyal India. Crafted with love.</p>
      </div>
    </footer>
  );
}
