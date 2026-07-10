import React, { useEffect } from 'react';
import { Tab } from '../types';
import { ThaiyalLogo } from './Icons';
import { Heart, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../whatsapp';

interface ThankYouTabProps {
  setActiveTab: (tab: Tab) => void;
}

export default function ThankYouTab({ setActiveTab }: ThankYouTabProps) {
  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5 py-24">
      <div className="max-w-xl w-full text-center space-y-8">

        {/* Logo */}
        <div className="flex justify-center">
          <ThaiyalLogo className="h-16 w-auto" />
        </div>

        {/* Heart icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center">
            <Heart className="w-10 h-10 text-brand-primary fill-brand-primary/30" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="serif-heading text-3xl md:text-4xl text-brand-primary">
            Thank You!
          </h1>
          <p className="text-xl text-brand-charcoal/70">
            We've received your message and will get back to you shortly.
          </p>
          <p className="text-brand-charcoal/60 leading-relaxed">
            Every memory you've shared with us is precious. Our team at Thaiyal India will reach out to you soon to help bring your keepsake to life.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-brand-secondary mx-auto rounded-full" />

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getWhatsAppLink("Hi Thaiyal India! I just filled out your contact form and I'm excited to get started on my memory keepsake!")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-lg label-caps hover:opacity-90 transition-opacity shadow-md"
          >
            Chat on WhatsApp
          </a>
          <button
            onClick={() => { setActiveTab(Tab.Home); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-lg label-caps hover:bg-brand-primary hover:text-white transition-all"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Warm closing note */}
        <p className="text-sm text-brand-charcoal/40 italic">
          "Some memories deserve more than a place in the cupboard."
        </p>

      </div>
    </div>
  );
}
