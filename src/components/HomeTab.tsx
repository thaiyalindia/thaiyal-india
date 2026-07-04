import React from 'react';
import { Tab } from '../types';
import { homeReviews } from '../data';
import { ArrowRight, ShoppingBasket, Truck, Sparkles, Star } from 'lucide-react';
import { getWhatsAppLink } from '../whatsapp';
import homeHero from '../assets/home/hero_background.jpg';
import homeQuilt from '../assets/home/quilt.jpg';
import homePillow from '../assets/home/pillow.jpg';
import homeToys from '../assets/home/toys.jpg';
import homeTshirts from '../assets/home/tshirts.jpg';
import homeOurPurpose from '../assets/home/our_purpose.jpg';

interface HomeTabProps {
  setActiveTab: (tab: Tab) => void;
  setProductFilter: (category: string) => void;
}

export default function HomeTab({ setActiveTab, setProductFilter }: HomeTabProps) {
  const handleCategoryClick = (filterName: string) => {
    setProductFilter(filterName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    {
      title: 'Memory Quilts',
      subtitle: 'Browse Collection',
      image: homeQuilt,
      filter: 'Memory Quilts',
      cols: 'lg:col-span-8',
      height: 'h-[280px] sm:h-[340px] lg:h-[400px]'
    },
    {
      title: 'Memory Pillows',
      subtitle: 'Explore More',
      image: homePillow,
      filter: 'Memory Pillows',
      cols: 'lg:col-span-4',
      height: 'h-[280px] sm:h-[340px] lg:h-[400px]'
    },
    {
      title: 'Memory Toys',
      subtitle: 'See Toys',
      image: homeToys,
      filter: 'Memory Toys',
      cols: 'sm:col-span-1 lg:col-span-6',
      height: 'h-[280px] sm:h-[340px]'
    },
    {
      title: 'Custom T-Shirts',
      subtitle: 'Custom Orders',
      image: homeTshirts,
      filter: 'Custom T-Shirts',
      cols: 'sm:col-span-1 lg:col-span-6',
      height: 'h-[280px] sm:h-[340px]'
    }
  ];

  const steps = [
    { icon: ShoppingBasket, title: '1. Choose your product', desc: 'Select from our collection of quilts, pillows, or toys and place your order.' },
    { icon: Truck, title: '2. Send us the clothes', desc: 'Pack up the items you want transformed and ship them to our studio.' },
    { icon: Sparkles, title: '3. Receive your memory', desc: 'Our artisans work their magic and ship your custom keepsake back to you.' }
  ];

  return (
    <div className="animate-fade-in">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden -mt-8">
        <div className="absolute inset-0 z-0">
          <img
            src={homeHero}
            alt="Cozy memory quilt"
            className="w-full h-full object-cover"
          />
          {/* Mobile: lighter wash than before so the photo doesn't look overexposed/glary, while still keeping enough contrast for the dark heading text */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/30 md:hidden" />
          <div className="absolute inset-0 bg-white/30 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent hidden md:block" />
        </div>

        <div className="relative z-10 px-5 md:px-16 max-w-7xl mx-auto w-full py-16">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="serif-heading text-4xl md:text-5xl text-brand-primary mb-6 leading-[1.1]">
              Turn your clothes into a <br />
              <span className="italic">memory</span>&nbsp;you can hold
            </h1>
            <p className="text-brand-charcoal/70 text-lg mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Handcrafted memory quilts, pillows, toys &amp; more — proudly made by skilled women artisans dedicated to preserving your most precious stories.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href={getWhatsAppLink("Hi Thaiyal India! I'd like to start turning my clothes into a memory keepsake. Can you guide me through the process?")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-white px-8 py-4 rounded-lg label-caps hover:shadow-lg transition-all transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <span>Start Your Memory</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => { setActiveTab(Tab.Gallery); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-white border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-lg label-caps hover:bg-brand-primary hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer font-semibold shadow-sm"
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Keepsakes Bento Grid */}
      <section className="py-24 px-5 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="serif-heading text-2xl md:text-3xl text-brand-primary mb-4">
            Memory Quilts, Pillows &amp; Toys - Handmade from Your Clothes
          </h2>
          <p className="text-brand-charcoal/60 max-w-xl mx-auto">Every piece is unique, telling a story through fabric and thread.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              onClick={() => { handleCategoryClick(cat.filter); setActiveTab(Tab.Products); }}
              className={`${cat.cols} group relative overflow-hidden rounded-2xl bg-brand-sand ${cat.height} cursor-pointer`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                <h3 className="serif-heading text-xl mb-2">{cat.title}</h3>
                <span className="label-caps underline underline-offset-4 decoration-brand-secondary">{cat.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story / Impact Section */}
      <section className="py-24 bg-brand-sand/30">
        <div className="px-5 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 text-center md:text-left">
            <span className="label-caps text-brand-secondary block">Our Purpose</span>
            <h2 className="serif-heading text-2xl md:text-3xl text-brand-primary">Threaded with Love &amp; Empowerment</h2>
            <p className="text-brand-charcoal/70 leading-relaxed">
              Thaiyal India was born from a simple belief: memories shouldn't be tucked away in boxes. We transform baby clothes, sarees, and loved ones' shirts into memory quilts, memorial keepsakes, and custom quilts from old clothes, the clothes that carry your most cherished moments, a baby's first onesie, a wedding sari, or a loved one's favourite shirt, turned into functional keepsakes.
            </p>
            <p className="text-brand-charcoal/70 leading-relaxed">
              Every stitch is made by skilled women artisans from our community, providing them with dignified livelihoods and a platform to showcase their incredible craftsmanship. When you choose Thaiyal, you're not just preserving a memory; you're supporting a woman's dream.
            </p>
            <div className="pt-4">
              <button
                onClick={() => { setActiveTab(Tab.About); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="label-caps text-brand-secondary border-b border-brand-secondary pb-1 hover:opacity-70 transition-opacity cursor-pointer"
              >
                Learn More About Our Impact
              </button>
            </div>
          </div>
          <div className="relative w-full">
            <div className="rounded-2xl overflow-hidden aspect-square relative z-10 shadow-2xl">
              <img
                src={homeOurPurpose}
                alt="Artisan stitching a memory quilt"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -top-10 -left-10 w-full h-full border-2 border-brand-secondary/20 rounded-2xl -z-0" />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-5 md:px-16 bg-brand-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 text-white">
            <h2 className="serif-heading text-2xl md:text-3xl mb-4">How it Works</h2>
            <p>Three simple steps to a lifetime of memories.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between items-start text-center text-white">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center flex-1 w-full relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6 bg-white text-brand-secondary shadow-lg z-10">
                    <Icon className="w-8 h-8 md:w-9 md:h-9" />
                  </div>
                  <h3 className="serif-heading text-xl mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base opacity-90 max-w-xs">{step.desc}</p>
                  {idx < steps.length - 1 && (
                    <>
                      <div className="md:hidden w-px h-12 bg-white/30 my-4" />
                      <div className="hidden md:block absolute top-10 left-[75%] w-1/2 border-t-2 border-dashed border-white/40" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-5 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="serif-heading text-2xl md:text-3xl text-brand-primary mb-4">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {homeReviews.map((review) => (
            <div key={review.id} className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-brand-charcoal/10 space-y-4">
              <div className="flex text-brand-secondary">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-[18px] h-[18px] fill-current" />
                ))}
              </div>
              <p className="text-brand-charcoal/70 italic">&quot;{review.text}&quot;</p>
              <p className="label-caps text-brand-primary">— {review.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16 px-5 md:px-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="serif-heading text-2xl md:text-4xl text-white">
            Have clothes that deserve more than a cupboard? Let&apos;s create something beautiful.
          </h2>
          <a
            href={getWhatsAppLink("Hi Thaiyal India! I have some clothes I'd love to turn into a beautiful keepsake. Could you help me get started?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand-primary px-8 py-4 rounded-lg label-caps hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            WhatsApp Us Now
          </a>
        </div>
      </section>

    </div>
  );
}
