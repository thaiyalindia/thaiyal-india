import React, { useState, useMemo } from 'react';
import { galleryItems, galleryReviews } from '../data';
import { Star, MessageCircle } from 'lucide-react';
import { getWhatsAppLink as getGenericWhatsAppLink } from '../whatsapp';

const CATEGORY_CONTENT: Record<string, { title: string; subtitle: string; cta: string; ctaDescription: string }> = {
  All: {
    title: 'Stories Stitched in Every Quilt',
    subtitle: 'A look at some of our most cherished creations. Each piece is a hand-woven tapestry of memories, designed to last for generations.',
    cta: 'Ready to start your keepsake?',
    ctaDescription: 'Send us photos of your clothes and we\u2019ll help you design a masterpiece. Our artisans are ready to bring your memories to life.'
  },
  'Memory Quilts': {
    title: 'Memory Quilts',
    subtitle: 'Transforming your cherished baby clothes and heirloom sarees into functional masterpieces. Each quilt is a hand-stitched narrative of your family\u2019s most precious moments.',
    cta: 'Ready to start your quilt?',
    ctaDescription: 'Send us photos of your clothes and we\u2019ll help you design a masterpiece. Our artisans are ready to bring your memories to life.'
  },
  'Memory Pillows': {
    title: 'Memory Pillows',
    subtitle: 'Transform cherished clothing into beautiful, sentimental additions to your home decor. Our memory pillows and cushion covers are handcrafted to keep your most precious moments close.',
    cta: 'Ready to start your pillow?',
    ctaDescription: 'Send us photos of your clothes and we\u2019ll help you design a masterpiece. Our artisans are ready to bring your memories to life.'
  },
  'Memory Toys': {
    title: 'Memory Toys',
    subtitle: 'Tangible connections to the past, our memory toys like heirloom bears and softies are handcrafted to preserve your most precious moments in a huggable form.',
    cta: 'Custom Memory Toy',
    ctaDescription: 'Have a specific design in mind? Let\u2019s create a unique keepsake together.'
  },
  'Custom T-Shirts': {
    title: 'Custom T-Shirts',
    subtitle: 'Wearable pieces of art featuring expert embroidery and traditional Indian textiles. Each shirt is a unique blend of modern comfort and artisanal heritage.',
    cta: 'Ready to start your custom t-shirt?',
    ctaDescription: 'Send us photos of your clothes and we\u2019ll help you design a masterpiece. Our artisans are ready to bring your memories to life.'
  }
};

export default function GalleryTab() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Memory Quilts', 'Memory Pillows', 'Memory Toys', 'Custom T-Shirts'];

  // Interleave items across categories (round-robin) so "All" shows a mixed feed
  // instead of all quilts, then all pillows, then all toys, etc.
  const mixedAllItems = useMemo(() => {
    const buckets = categories
      .filter((c) => c !== 'All')
      .map((cat) => galleryItems.filter((item) => item.category === cat));

    const mixed: typeof galleryItems = [];
    let added = true;
    let row = 0;
    while (added) {
      added = false;
      for (const bucket of buckets) {
        if (bucket[row]) {
          mixed.push(bucket[row]);
          added = true;
        }
      }
      row++;
    }
    return mixed;
  }, []);

  const filteredItems = activeCategory === 'All'
    ? mixedAllItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const content = CATEGORY_CONTENT[activeCategory];

  const getWhatsAppLink = (title: string) => {
    const message = `Hello Thaiyal India! I was exploring your gallery and absolutely loved the "${title}" style. Could you please guide me on how I can order a custom keepsake with a similar design?`;
    return `https://wa.me/918825648043?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <header className="max-w-7xl mx-auto px-5 md:px-16 text-center mb-16 pt-8">
        <h1 className="serif-heading text-4xl md:text-6xl text-brand-primary mb-6">{content.title}</h1>
        <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
      </header>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 mb-12">
        <div className="flex flex-wrap justify-center gap-4 border-b border-brand-charcoal/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 label-caps rounded-full border-2 transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'border-brand-secondary bg-brand-secondary text-white'
                  : 'border-transparent text-brand-secondary hover:border-brand-secondary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Grid */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative aspect-[4/5] overflow-hidden rounded-xl bg-brand-sand/40 shadow-sm hover:shadow-lg transition-all duration-300 ${
                idx % 3 !== 0 ? 'md:mt-12' : ''
              }`}
              id={`gallery-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-white label-caps mb-2">{item.title}</span>
                <a
                  href={getWhatsAppLink(item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-secondary text-white py-2 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 mb-24">
        <div className="flex flex-col justify-center items-center p-12 rounded-xl bg-brand-secondary/10 border-2 border-dashed border-brand-secondary/30 text-center space-y-6">
          <MessageCircle className="w-12 h-12 text-brand-secondary" />
          <h3 className="serif-heading text-xl md:text-2xl text-brand-primary">{content.cta}</h3>
          <p className="text-brand-charcoal/70 max-w-xl">
            {content.ctaDescription}
          </p>
          <a
            href={getGenericWhatsAppLink(
              activeCategory === 'All'
                ? "Hi Thaiyal India! I'd love to start designing a custom keepsake. Could you help me get started?"
                : `Hi Thaiyal India! I'd love to start designing a custom ${activeCategory.toLowerCase()} keepsake. Could you help me get started?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-white px-8 py-3 rounded-lg label-caps hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* Customer Review Cards */}
      <section className="bg-brand-sand/30 py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          <div className="text-center mb-16">
            <h2 className="serif-heading text-2xl md:text-4xl text-brand-primary mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryReviews.map((review, idx) => (
              <div
                key={review.id}
                className={`bg-white p-8 rounded-xl shadow-sm border border-brand-charcoal/10 flex flex-col h-full ${
                  idx % 2 === 1 ? 'lg:mt-8' : ''
                }`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-secondary fill-current" />
                  ))}
                </div>
                <p className="text-brand-charcoal/70 italic grow mb-4">&quot;{review.text}&quot;</p>
                <h4 className="font-bold text-brand-primary">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
