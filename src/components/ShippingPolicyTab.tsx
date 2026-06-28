import React from 'react';
import { Truck } from 'lucide-react';

export default function ShippingPolicyTab() {
  return (
    <div className="animate-fade-in py-16 px-5 md:px-16 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
          <Truck className="w-6 h-6" />
        </div>
        <h1 className="serif-heading text-3xl md:text-4xl text-brand-primary">Shipping Policy</h1>
      </div>

      <div className="space-y-6 text-brand-charcoal/80 leading-relaxed">
        <p>Thank you for choosing Thaiyal India.</p>

        <p>
          As every product is custom-made from your cherished clothing, each order is handcrafted with care and attention to detail.
        </p>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">Processing Time</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Our standard production time is <strong>35 working days</strong> from the date we receive your garments and confirm your order.</li>
            <li>Working days exclude Sundays and public holidays.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">Need Your Order Earlier?</h2>
          <p>
            If you have a special occasion, birthday, anniversary, or any specific deadline, please let us know <strong>before placing your order</strong>. We will do our best to accommodate your request whenever possible.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">Shipping</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Once your order is completed, it will be securely packed and shipped to your delivery address.</li>
            <li>You will receive the tracking details once your parcel has been dispatched.</li>
            <li>Delivery timelines may vary depending on your location and the courier service.</li>
          </ul>
        </div>

        <p>
          We truly appreciate your patience and trust. Every keepsake we create is made with care to preserve the memories that matter most.
        </p>
      </div>
    </div>
  );
}
