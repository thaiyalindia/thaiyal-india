import React, { useState } from 'react';
import { Tab } from '../types';
import { ThaiyalLogo } from './Icons';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../whatsapp';

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: Tab.Home, label: 'Home' },
    { id: Tab.Products, label: 'Products' },
    { id: Tab.Gallery, label: 'Gallery' },
    { id: Tab.About, label: 'About' },
    { id: Tab.Contact, label: 'Contact' },
  ];

  const handleTabClick = (tabId: Tab) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="bg-brand-cream/95 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="flex justify-between items-center w-full px-5 lg:px-16 max-w-7xl mx-auto py-4">

          {/* Logo */}
          <div
            className="flex items-center cursor-pointer shrink-0"
            onClick={() => handleTabClick(Tab.Home)}
          >
            <ThaiyalLogo className="h-10 lg:h-12 w-auto" />
          </div>

          {/* Desktop Navigation — only shows at lg+ so it never squashes */}
          <div className="hidden lg:flex gap-6 xl:gap-10 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`label-caps pb-1 transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === item.id
                    ? 'text-brand-secondary border-b-2 border-brand-secondary'
                    : 'text-brand-charcoal hover:text-brand-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side: WhatsApp button + hamburger */}
          <div className="flex items-center gap-3">
            {/* WhatsApp button — visible from lg+ on desktop, hidden below that (it's in mobile drawer) */}
            <a
              href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex bg-brand-primary text-white px-6 py-2 rounded-lg label-caps hover:opacity-90 transition-opacity"
            >
              WhatsApp
            </a>

            {/* Hamburger — shows on everything below lg */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-brand-charcoal p-1"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile/tablet menu overlay — separate from nav so z-index stack is clean */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Dark backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer — full height, slides from right */}
          <div className="absolute inset-y-0 right-0 w-72 bg-brand-cream shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-brand-charcoal/10">
              <ThaiyalLogo className="h-10 w-auto" />
              <button
                onClick={() => setIsOpen(false)}
                className="text-brand-charcoal p-1"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col px-6 py-8 gap-2 flex-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`label-caps text-left py-3 border-b border-brand-charcoal/8 transition-colors ${
                    activeTab === item.id
                      ? 'text-brand-secondary'
                      : 'text-brand-charcoal hover:text-brand-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* WhatsApp CTA at bottom of drawer */}
            <div className="px-6 pb-8">
              <a
                href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-primary text-white px-6 py-3 rounded-lg label-caps text-center hover:opacity-90 transition-opacity flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
