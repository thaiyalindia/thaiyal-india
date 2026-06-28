import React from 'react';
import { RotateCcw } from 'lucide-react';

export default function ReturnsPolicyTab() {
  return (
    <div className="animate-fade-in py-16 px-5 md:px-16 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
          <RotateCcw className="w-6 h-6" />
        </div>
        <h1 className="serif-heading text-3xl md:text-4xl text-brand-primary">Return &amp; Refund Policy</h1>
      </div>
      <p className="text-brand-charcoal/50 text-sm mb-8">Last Updated: June 27, 2026</p>

      <div className="space-y-6 text-brand-charcoal/80 leading-relaxed">
        <p>
          At Thaiyal India, every product is handcrafted and made specifically for you based on the customization details you provide. As each order is unique and cannot be resold, we do not accept returns or offer refunds for customized products.
        </p>
        <p>
          By placing an order with Thaiyal India, you acknowledge that you have read and agreed to this Return &amp; Refund Policy.
        </p>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">1. Customized Products</h2>
          <p className="mb-3">
            All products sold by Thaiyal India are made-to-order and personalized using customer-provided photos, names, messages, artwork, or other customization details.
          </p>
          <p className="mb-2">Because each product is created exclusively for you:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Returns are not accepted.</li>
            <li>Refunds are not provided.</li>
            <li>Exchanges are not available.</li>
          </ul>
          <p className="mb-2">Orders cannot be returned due to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Change of mind</li>
            <li>Incorrect product selection</li>
            <li>Incorrect customization details submitted by the customer</li>
            <li>Minor color or design variations due to screen settings or the handmade nature of the product</li>
            <li>Delivery delays caused by courier partners</li>
          </ul>
          <p className="mt-3">Please review all customization details carefully before placing your order.</p>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">2. Damaged, Defective, or Incorrect Items</h2>
          <p className="mb-2">We take great care in preparing every order. If you receive:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>A damaged product</li>
            <li>A manufacturing defect</li>
            <li>An incorrect item sent by Thaiyal India</li>
          </ul>
          <p className="mb-3">please contact us within 48 hours of receiving your order.</p>
          <p className="mb-2">To help us review your request, please provide:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Your Order ID</li>
            <li>Clear photographs of the product</li>
            <li>Photographs of the outer packaging</li>
            <li>An unboxing video (recommended for verification)</li>
          </ul>
          <p className="mb-3">
            All requests will be reviewed on a case-by-case basis. Thaiyal India reserves the right to determine whether the issue is eligible for resolution. We do not guarantee a replacement, refund, exchange, or any specific outcome.
          </p>
          <p>Requests submitted after 48 hours of delivery may not be considered.</p>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">3. Order Cancellation</h2>
          <p className="mb-3">Orders may be cancelled only before production has started.</p>
          <p className="mb-3">Once production of a customized product has begun, the order cannot be cancelled, modified, or refunded.</p>
          <p>
            If you need to make changes to your order, please contact us as soon as possible after placing your order. While we will try our best to accommodate your request, changes cannot be guaranteed once production has commenced.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">4. Color &amp; Design Variations</h2>
          <p className="mb-3">
            Our products are handcrafted and personalized. Slight variations in color, stitching, fabric texture, print placement, or overall appearance may occur.
          </p>
          <p className="mb-3">Additionally, product colors may appear slightly different due to variations in screen and monitor settings.</p>
          <p>These minor variations are normal and are not considered manufacturing defects.</p>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">5. Customer Responsibility</h2>
          <p className="mb-3">Customers are responsible for ensuring that all information submitted during the ordering process is accurate.</p>
          <p className="mb-2">
            Thaiyal India is not responsible for issues arising from incorrect information provided by the customer, including but not limited to:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Incorrect spelling</li>
            <li>Wrong names or dates</li>
            <li>Incorrect or low-quality photos uploaded</li>
            <li>Incorrect shipping address</li>
            <li>Incorrect customization instructions</li>
          </ul>
          <p>Please carefully review all details before confirming your order.</p>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">6. Shipping &amp; Delivery</h2>
          <p className="mb-3">Once an order has been shipped, delivery timelines are managed by our courier partners.</p>
          <p className="mb-3">
            Thaiyal India is not responsible for delays caused by courier services, weather conditions, public holidays, or other circumstances beyond our control.
          </p>
          <p>Delivery delays do not qualify for cancellations, returns, or refunds.</p>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">7. Contact Us</h2>
          <p className="mb-2">If you have any questions regarding your order or this Return &amp; Refund Policy, please contact us:</p>
          <p>
            Phone: <a href="tel:+918825648043" className="text-brand-secondary hover:underline">+91 88256 48043</a>
            <br />
            Email: <a href="mailto:thaiyalindia@gmail.com" className="text-brand-secondary hover:underline">thaiyalindia@gmail.com</a>
          </p>
        </div>

        <div>
          <h2 className="font-bold text-brand-primary text-lg mb-3">8. Acceptance of This Policy</h2>
          <p>
            By placing an order with Thaiyal India, you confirm that you have read, understood, and agreed to this Return &amp; Refund Policy. Since every item is custom-made exclusively for you, all sales are considered final, subject to the terms outlined above.
          </p>
        </div>
      </div>
    </div>
  );
}
