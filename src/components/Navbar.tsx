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
    <nav className="bg-brand-cream/80 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center w-full px-5 md:px-16 max-w-7xl mx-auto py-4">

        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleTabClick(Tab.Home)}
          id="nav-logo"
        >
          <ThaiyalLogo className="h-10 md:h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleTabClick(item.id)}
              className={`label-caps pb-1 transition-colors duration-300 cursor-pointer ${
                activeTab === item.id
                  ? 'text-brand-secondary border-b-2 border-brand-secondary'
                  : 'text-brand-charcoal/60 hover:text-brand-secondary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a
            href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-cta"
            className="hidden sm:inline-flex bg-brand-primary text-white px-6 py-2 rounded-lg label-caps hover:opacity-90 transition-opacity"
          >
            WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-toggle"
            className="md:hidden text-brand-charcoal p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-brand-cream shadow-2xl z-50 p-6 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-menu"
      >
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsOpen(false)} className="text-brand-charcoal" aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`label-caps text-left ${
                activeTab === item.id ? 'text-brand-secondary' : 'text-brand-charcoal/60'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-white px-6 py-2 rounded-lg label-caps text-center hover:opacity-90 transition-opacity mt-2"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
