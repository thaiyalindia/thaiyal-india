import React from 'react';
import { products } from '../data';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../whatsapp';

export default function ProductsTab() {
  const getProductWhatsAppLink = (productName: string) => {
    const message = `Hi Thaiyal India! I'm interested in ordering the "${productName}". Could you please guide me on how to send my clothes and complete the order?`;
    return `https://wa.me/918825648043?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-16 text-center relative z-10">
          <h1 className="serif-heading text-4xl md:text-5xl mb-6 text-brand-primary">Our Handcrafted Keepsakes</h1>
          <p className="text-lg max-w-2xl mx-auto text-brand-charcoal/70">
            Every piece is made by hand from clothes you love. We turn your old, special outfits into something cozy and meaningful that you can keep forever.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-secondary/10 text-brand-secondary rounded-full label-caps">
              <span className="w-2 h-2 rounded-full bg-brand-secondary" />
              Handmade in India
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full label-caps">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              Custom Made
            </span>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, idx) => {
        const reversed = idx % 2 === 1;
        return (
          <section
            key={product.id}
            className={`py-24 px-5 md:px-16 max-w-7xl mx-auto ${idx % 2 === 1 ? 'bg-brand-sand/30' : ''}`}
          >
            <div className={`${idx % 2 === 1 ? 'max-w-7xl mx-auto' : ''} grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
              <div className={reversed ? 'order-2 lg:order-1 space-y-8' : 'space-y-8'}>
                {!reversed && (
                  <div className="relative group">
                    <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500">
                      <img
                        src={product.mainImage}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                {reversed && (
                  <>
                    <h2 className="serif-heading text-2xl md:text-3xl text-brand-primary">{product.name}</h2>
                    <p className="text-lg text-brand-charcoal/70 leading-relaxed">{product.longDescription}</p>
                    <div className="pt-4">
                      <a
                        href={getProductWhatsAppLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary text-white rounded font-semibold hover:opacity-90 transition-opacity shadow-md"
                      >
                        <MessageCircle className="w-5 h-5 text-brand-secondary" />
                        Enquire via WhatsApp
                      </a>
                    </div>
                  </>
                )}
              </div>

              <div className={reversed ? 'order-1 lg:order-2' : 'space-y-8'}>
                {reversed && (
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg relative bg-white p-8 group">
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                {!reversed && (
                  <>
                    <h2 className="serif-heading text-2xl md:text-3xl text-brand-primary">{product.name}</h2>
                    <p className="text-lg text-brand-charcoal/70 leading-relaxed">{product.longDescription}</p>
                    <div className="pt-4">
                      <a
                        href={getProductWhatsAppLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary text-white rounded font-semibold hover:opacity-90 transition-opacity shadow-md"
                      >
                        <MessageCircle className="w-5 h-5 text-brand-secondary" />
                        Enquire via WhatsApp
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom Enquiry Banner */}
      <section className="py-24 bg-brand-primary text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-16 relative z-10">
          <h2 className="serif-heading text-2xl md:text-3xl mb-6">Not sure which product is right for you?</h2>
          <p className="text-lg mb-10 opacity-90 max-w-xl mx-auto">
            Every memory is unique. Chat with our designers to find the perfect way to preserve your story. We'll help you decide based on your fabric and vision.
          </p>
          <a
            href={getWhatsAppLink("Hi Thaiyal India! I'm not sure which product is right for me. Could you help me decide?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 border-2 border-white text-white rounded font-semibold hover:bg-white hover:text-brand-primary transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with Us on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
