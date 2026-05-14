import React, { useState } from 'react';
import { Search, Filter, Warehouse, Package, Truck, Info, Mail, PhoneCall, ChevronRight, Tags } from 'lucide-react';
import { CATEGORIES, BUSINESS_INFO, PARTS } from '../constants';

export const Inventory = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredParts = PARTS.filter(part => {
    const matchesCategory = selectedCategory === 'all' || part.categoryId === selectedCategory;
    const matchesSearch = part.name.toLowerCase().includes(search.toLowerCase()) ||
                         part.make.toLowerCase().includes(search.toLowerCase()) ||
                         part.model.toLowerCase().includes(search.toLowerCase()) ||
                         part.year.includes(search);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl text-white mb-6">Parts Inventory Catalog</h1>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10">
            Search millions of tested, recycled OEM auto parts. We ship nationwide from our 
            professional salvage facility.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-2 flex flex-col md:flex-row gap-2">
            <div className="flex-grow flex items-center px-4 gap-3 bg-slate-50 rounded-lg">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by part name, year, make, or model..."
                className="w-full py-4 bg-transparent outline-none text-slate-900 font-medium placeholder:text-slate-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 rounded-lg font-bold transition-all shrink-0">
              Search Parts
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Filter className="w-5 h-5 text-brand-red" />
                Categories
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                    selectedCategory === 'all' ? 'bg-brand-blue text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  All Categories
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                      selectedCategory === cat.id ? 'bg-brand-blue text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-brand-dark rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 leading-tight">Can't find a specific part?</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Our yard receives new vehicles daily. Let us locate it for you.
                </p>
                <div className="space-y-4">
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-3 text-sm font-bold text-white hover:text-brand-accent transition-colors">
                    <Mail className="w-5 h-5 text-brand-red" /> Email Us
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </aside>

          {/* Grid Views */}
          <main className="lg:col-span-3">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold">Catalogue Overview</h2>
              <div className="hidden sm:flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-1"><Warehouse className="w-3.5 h-3.5" /> 15k+ In Yard</span>
                <span className="flex items-center gap-1"><Package className="w-3.5 h-3.5" /> Tested Stock</span>
                <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5" /> Shipping Ready</span>
              </div>
            </div>

            {filteredParts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredParts.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-brand-blue text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                        {item.condition}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-lg font-bold text-brand-blue shadow-sm">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-xs font-bold text-brand-red uppercase tracking-widest mb-1">{item.year} {item.make} {item.model}</p>
                          <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                          <p className="text-sm text-slate-500 line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                          <Tags className="w-4 h-4" /> SKU: {item.id}
                        </div>
                        <button className="bg-brand-blue hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-brand-blue/10">
                          Inquire
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-20 text-center border-2 border-dashed border-slate-200">
                <Warehouse className="w-16 h-16 text-slate-200 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Part Not Found in Online Listings</h3>
                <p className="text-slate-500 max-w-sm mx-auto mb-8">
                  We have thousands of unlisted parts in our yard. Submit a quote request and we'll check our live inventory.
                </p>
                <button 
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-brand-blue text-white px-8 py-3 rounded-lg font-bold"
                >
                  Request a Quote
                </button>
              </div>
            )}

            {/* Inquiry Form */}
            <div id="quote-form" className="mt-20 bg-white rounded-2xl shadow-lg border border-slate-100 p-10">
              <div className="text-center mb-12">
                <span className="text-brand-red font-bold uppercase tracking-widest text-xs mb-3 block">Part Locator</span>
                <h3 className="text-3xl font-bold mb-4">Submit a Quote Request</h3>
                <p className="text-slate-500 max-w-xl mx-auto">
                  Provide your vehicle and part details below. Our specialist team will check our live 
                  inventory and respond within 2 business hours.
                </p>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name *</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address *</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Vehicle Year, Make, Model *</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="2018 Ford F-150" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full VIN (Optional)</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="17-digit VIN" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Part Description & Request *</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none" placeholder="e.g. 5.0L Coyote Engine, complete with accessories..." required></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full bg-brand-blue hover:bg-brand-dark text-white py-5 rounded-lg font-bold text-lg shadow-xl shadow-brand-blue/20 transition-all">
                    Send Quote Request
                  </button>
                  <p className="mt-4 text-center text-xs text-slate-400 font-medium">
                    By submitting, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
