import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Contact = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl mb-6">Contact Us</h1>
          <div className="w-20 h-1.5 bg-brand-red mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg">
            Have questions about a part or shipping? Our expert team is ready to help 
            you get back on the road.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Info Column */}
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-brand-blue/5 p-4 rounded-xl shrink-0 h-fit">
                    <Mail className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Email Us</h3>
                    <p className="text-slate-500 text-sm mb-2">General inquiries & support</p>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-brand-blue font-bold text-lg hover:text-brand-accent transition-colors">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-brand-blue/5 p-4 rounded-xl shrink-0 h-fit">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Sales Office</h3>
                    <p className="text-slate-500 text-sm mb-2">Main headquarters</p>
                    <p className="text-slate-900 font-bold">{BUSINESS_INFO.address}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-brand-blue/5 p-4 rounded-xl shrink-0 h-fit">
                    <Clock className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Business Hours</h3>
                    <p className="text-slate-900 font-medium text-sm leading-relaxed whitespace-pre-line">
                      {BUSINESS_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative group">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-linear-to-b from-transparent to-slate-200">
                  <MapPin className="w-12 h-12 text-slate-400 mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-slate-500 font-bold">Interactive Map Component Placeholder</p>
                  <p className="text-xs text-slate-400 mt-2">{BUSINESS_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue opacity-5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-brand-red/10 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Send a Message</h2>
                    <p className="text-sm text-slate-500">We respond to all inquiries within 24 hours.</p>
                  </div>
                </div>

                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-brand-blue/10 focus:bg-white transition-all" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                      <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-brand-blue/10 focus:bg-white transition-all" placeholder="Enter your email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Subject</label>
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-brand-blue/10 focus:bg-white transition-all appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Part Search Request</option>
                      <option>Shipping Status</option>
                      <option>Warranty Claim</option>
                      <option>Bulk Order Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Message Body</label>
                    <textarea rows={6} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-brand-blue/10 focus:bg-white transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-dark text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-brand-blue transition-all shadow-xl shadow-brand-dark/10 group">
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Submit Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
