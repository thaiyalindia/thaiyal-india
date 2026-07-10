import React, { useState } from 'react';
import { Tab } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeTab from './components/HomeTab';
import ProductsTab from './components/ProductsTab';
import GalleryTab from './components/GalleryTab';
import AboutTab from './components/AboutTab';
import ContactTab from './components/ContactTab';
import ShippingPolicyTab from './components/ShippingPolicyTab';
import ReturnsPolicyTab from './components/ReturnsPolicyTab';
import PrivacyPolicyTab from './components/PrivacyPolicyTab';
import ThankYouTab from './components/ThankYouTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Home);
  const [productFilter, setProductFilter] = useState('All Keepsakes');

  const handleSelectProductCategory = (categoryName: string) => {
    setProductFilter(categoryName);
    setActiveTab(Tab.Products);
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream selection:bg-brand-secondary/20 selection:text-brand-secondary">

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow">
        {activeTab === Tab.Home && (
          <HomeTab
            setActiveTab={setActiveTab}
            setProductFilter={handleSelectProductCategory}
          />
        )}

        {activeTab === Tab.Products && <ProductsTab />}

        {activeTab === Tab.Gallery && <GalleryTab />}

        {activeTab === Tab.About && <AboutTab />}

        {activeTab === Tab.Contact && <ContactTab setActiveTab={setActiveTab} />}

        {activeTab === Tab.Shipping && <ShippingPolicyTab />}

        {activeTab === Tab.Returns && <ReturnsPolicyTab />}

        {activeTab === Tab.Privacy && <PrivacyPolicyTab />}

        {activeTab === Tab.ThankYou && <ThankYouTab setActiveTab={setActiveTab} />}
      </main>

      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
