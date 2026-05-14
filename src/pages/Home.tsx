import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ShieldCheck, 
  Truck, 
  Wrench, 
  Settings, 
  ChevronRight, 
  Star, 
  PhoneCall, 
  BarChart, 
  Package,
  ArrowRight
} from 'lucide-react';
import { CATEGORIES, TESTIMONIALS, FAQS, BUSINESS_INFO } from '../constants';
import { motion } from 'motion/react';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center bg-brand-dark">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517520287167-4bda64282b54?auto=format&fit=crop&q=80&w=2070"
            alt="OEM Auto Parts"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-dark/95 via-brand-dark/70 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-6">
                <Truck className="w-4 h-4" /> Nationwide Shipping Across USA
              </span>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
                OEM Used Auto Parts <br />
                <span className="text-brand-accent italic">Tested & Certified</span>
              </h1>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Specializing in engines, transmissions & donor parts for luxury and domestic brands. 
                Guaranteed quality from our yard to your shop.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink
                  to="/inventory"
                  className="bg-brand-blue hover:bg-brand-accent text-white px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-blue/20"
                >
                  Find Your Part <ChevronRight className="w-5 h-5" />
                </NavLink>
                <NavLink
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 transition-all"
                >
                  Request a Quote
                </NavLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Specialized OEM Parts For</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-slate-900 tracking-tighter">LEXUS</span>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">AUDI</span>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">MITSUBISHI</span>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">LINCOLN</span>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 group">
              <div className="bg-brand-blue/5 p-3 rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-6 h-6 text-brand-blue group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold">Tested OEM Parts</h4>
                <p className="text-xs text-slate-500">Quality Guaranteed</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="bg-brand-blue/5 p-3 rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <Truck className="w-6 h-6 text-brand-blue group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold">Fast USA Shipping</h4>
                <p className="text-xs text-slate-500">1-3 Day Processing</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="bg-brand-blue/5 p-3 rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <Settings className="w-6 h-6 text-brand-blue group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold">30-Day Warranty</h4>
                <p className="text-xs text-slate-500">Shop with Confidence</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="bg-brand-blue/5 p-3 rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <Truck className="w-6 h-6 text-brand-blue group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold">Fast USA Shipping</h4>
                <p className="text-xs text-slate-500">1-3 Day Processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Browse by Part Category</h2>
            <div className="w-20 h-1.5 bg-brand-red mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We stock millions of parts from all major makes and models. All parts are inspected 
              and ready for immediate shipping.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => (
              <NavLink
                key={cat.id}
                to={`/inventory?category=${cat.id}`}
                className="group relative h-64 overflow-hidden rounded-xl shadow-md transition-all hover:-translate-y-1"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{cat.name}</h3>
                  <div className="flex items-center gap-2 text-brand-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    View Catalog <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </NavLink>
            ))}
          </div>

          <div className="mt-16 text-center">
            <NavLink
              to="/inventory"
              className="inline-flex items-center gap-2 text-brand-blue font-bold border-b-2 border-brand-blue/20 hover:border-brand-blue transition-all pb-1"
            >
              Browse All Categories <ChevronRight className="w-5 h-5" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* About Section Teaser */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80&w=2070"
                alt="Engine Inspection"
                className="relative rounded-2xl shadow-2xl z-10 w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-dark text-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-brand-red">15k+</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-slate-400">Parts<br />In Stock</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Professional Recycling</span>
              <h2 className="text-3xl md:text-4xl">The Most Reliable Partner for Used Auto Parts</h2>
              <p className="text-slate-600 leading-relaxed">
                SAMs Auto Wrecking, operated by Ernest Solutions LLC, is a leading provider of high-quality 
                recycled automotive components. We specialize in providing mechanics, body shops, and vehicle 
                owners with affordable alternatives to expensive new parts without compromising on reliability.
              </p>
              <ul className="space-y-4">
                {[
                  "Rigorous testing process for all mechanical parts",
                  "Expert team to ensure correct part fitment",
                  "Environmental commitment to sustainable recycling",
                  "Secure packaging for nationwide freight"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <NavLink
                  to="/about"
                  className="bg-brand-dark text-white px-8 py-4 rounded-md font-bold inline-flex items-center gap-2 hover:bg-brand-blue transition-colors"
                >
                  Learn About Our Process <ChevronRight className="w-5 h-5" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-white mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1.5 bg-brand-red mx-auto rounded-full opacity-60"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-red text-brand-red" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-center">Frequently Asked Questions</h2>
            <div className="w-20 h-1.5 bg-brand-red mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <details key={index} className="group border border-slate-100 rounded-lg bg-slate-50 overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-100 transition-colors list-none">
                  <h3 className="text-lg font-bold pr-6">{faq.question}</h3>
                  <div className="w-6 h-6 border-2 border-brand-blue rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ChevronRight className="w-4 h-4 text-brand-blue" />
                  </div>
                </summary>
                <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 bg-white">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="relative py-24 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl text-white mb-8 font-display tracking-tight">
            Ready to find the part you need?
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
            Our inventory updates daily. If you don't see your part online, submit a quote request. 
            Our team will get back to you with availability and pricing immediately.
          </p>
          <div className="flex justify-center">
            <NavLink
              to="/inventory"
              className="bg-white text-brand-blue hover:bg-slate-100 px-10 py-5 rounded-md font-bold text-lg shadow-2xl transition-all"
            >
              Search Inventory
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
