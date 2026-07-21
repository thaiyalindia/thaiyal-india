import React from 'react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyTab() {
  return (
    <div className="animate-fade-in py-16 px-5 md:px-16 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
          <Shield className="w-6 h-6" />
        </div>
        <h1 className="serif-heading text-3xl md:text-4xl text-brand-primary">Privacy Policy</h1>
      </div>
      <p className="text-brand-charcoal/50 text-sm mb-8">Last Updated: June 27, 2026</p>

      <div className="space-y-6 text-brand-charcoal/80 leading-relaxed">
        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">1. Introduction</h2>
          <p>
            At Thaiyal India, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the steps we take to keep it safe.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">2. Information We Collect</h2>
          <p className="mb-2">When you place an order or contact us, we may collect the following information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Shipping address</li>
            <li>Photos and clothing images uploaded for customization</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">3. How We Use Your Information</h2>
          <p className="mb-2">We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Process and fulfil your orders</li>
            <li>Create your customized products</li>
            <li>Communicate with you about your order</li>
            <li>Improve our customer service and overall experience</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">4. Photos &amp; Uploaded Materials</h2>
          <p>
            Any photos, clothing images, or other materials you upload are used solely to create the product you have ordered. We do not use your uploaded photos or materials for any other purpose without your consent.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">5. Sharing Information</h2>
          <p>
            We do not sell your personal information to anyone. We only share the necessary details with trusted payment providers and shipping partners so that we can process your order and deliver your product to you.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">6. Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access, loss, or misuse. While no method of storage or transmission is completely secure, we do our best to keep your information safe.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">7. Contact Information</h2>
          <p className="mb-2">If you have any questions about this Privacy Policy or how we handle your information, please contact us:</p>
          <p>
            Email: <a href="mailto:thaiyalindia@gmail.com" className="text-brand-secondary hover:underline">thaiyalindia@gmail.com</a>
            <br />
            Phone: <a href="tel:+918825648043" className="text-brand-secondary hover:underline">+91 88256 48043</a>
          </p>
        </div>
      </div>
    </div>
  );
}
