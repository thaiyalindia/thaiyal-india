import React from 'react';
import { Heart as HeartIcon, Users, BookOpen, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../whatsapp';
import aboutBackground from '../assets/about/about_background.jpg';
import aboutImage from '../assets/about/about.jpg';

export default function AboutTab() {
  const values = [
    {
      icon: HeartIcon,
      title: 'Made with Love',
      desc: 'We treat every piece of fabric as a treasure. Every stitch is placed with care, knowing it holds a piece of your heart within the seams.'
    },
    {
      icon: Users,
      title: 'Women Artisans',
      desc: 'Empowering local skill and financial independence. Our studio is a space of dignity, creativity, and shared stories among women.'
    },
    {
      icon: BookOpen,
      title: 'Your Story, Preserved',
      desc: 'Your clothes hold real memories, and we want that to show in every piece we make. We work closely with you so the final keepsake truly feels like yours.'
    }
  ];

  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutBackground}
            alt="Thaiyal India artisan at work"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay keeps text readable while letting the image show clearly */}
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/10" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="label-caps text-brand-primary bg-white/90 px-4 py-2 rounded-full mb-6 inline-block shadow-sm">Since Thaiyal India</span>
          <h1 className="serif-heading text-4xl md:text-7xl text-brand-primary drop-shadow-lg">Our Story</h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-5 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6 text-brand-charcoal/70 text-lg leading-relaxed">
            <p>
              Thaiyal India was not created in a boardroom or with a business plan. It started with a simple belief that some clothes are impossible to throw away. A baby's tiny outfits. A mother's favourite saree. A father's cherished shirt. A school uniform filled with memories.
            </p>
            <p>
              Most of us keep these garments safely tucked away, unable to part with them, yet unsure of what to do with them. That is where Thaiyal India began. What started as a love for sewing slowly became a way of helping families preserve their most treasured memories.
            </p>
            <div className="py-8 my-8 border-y border-brand-primary/10">
              <blockquote className="serif-heading text-2xl text-brand-primary italic text-center md:text-left">
                &quot;Some memories deserve more than a place in the cupboard.&quot;
              </blockquote>
            </div>
            <p>
              Today, we transform cherished clothing into memory quilts, toys, pillows and keepsakes that can be seen, held and cherished every day. Every order that reaches us carries a story. Some celebrate childhood memories. Some honour loved ones. Some mark milestones that families never want to forget.
            </p>
            <p>
              Behind every quilt is a family, a memory and an emotion. We consider it a privilege to be trusted with those stories. Because some memories deserve more than a place in the cupboard. Proudly handcrafted by skilled women artisans in Tuticorin, Tamil Nadu.
            </p>
          </div>

          {/* Asymmetric Floating Image */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                alt="Artisan at work"
                className="w-full aspect-[4/5] object-cover"
                src={aboutImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Foundations */}
      <section className="py-24 bg-brand-sand/30 px-5 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="serif-heading text-2xl md:text-3xl text-brand-primary mb-4">Our Foundations</h2>
            <div className="w-16 h-1 bg-brand-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white p-10 rounded-xl border border-brand-primary/5 hover:border-brand-secondary/30 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-brand-secondary/5 rounded-full flex items-center justify-center mb-6 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="serif-heading text-xl text-brand-primary mb-4">{val.title}</h3>
                  <p className="text-brand-charcoal/70">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-5 md:px-16">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-brand-primary relative">
          <div className="relative z-10 p-12 md:p-24 text-center">
            <h2 className="serif-heading text-2xl md:text-4xl text-white mb-6">Want to be part of the story?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let us help you transform your cherished memories into a tangible keepsake that will last for generations.
            </p>
            <a
              href={getWhatsAppLink("Hi Thaiyal India! I'd love to be part of your story and create a keepsake from my own memories. How can I get started?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-4 rounded-lg label-caps hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Create Your Keepsake
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
