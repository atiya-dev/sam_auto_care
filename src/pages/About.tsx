import React from 'react';
import { ShieldCheck, Truck, Recycle, Users, Building2, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=2072"
            alt="Auto Salvage Yard"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl mb-6">About Us</h1>
          <div className="w-20 h-1.5 bg-brand-red mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg">
            Operated by {BUSINESS_INFO.operator}, we are your premier source for professional 
            automotive salvage and high-quality recycled OEM parts.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block p-3 bg-brand-blue/5 rounded-xl">
                <Building2 className="w-8 h-8 text-brand-blue" />
              </div>
              <h2 className="text-3xl font-bold">Driven by Quality, Powered by Reliability</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                SAMs Auto Wrecking was founded with a clear goal: to make high-quality OEM auto parts 
                accessible and affordable for everyone in the USA. We understand that vehicle repairs can be 
                costly, which is why we've built a world-class salvage operation that focuses on part 
                integrity and customer trust, specializing in OEM components for premium and domestic brands including <strong>Lexus, Audi, Mitsubishi, and Lincoln</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As a subsidiary of {BUSINESS_INFO.operator}, we operate with the highest professional standards. 
                Our salvage yard is not just a collection of vehicles; it's a meticulously managed inventory 
                system where every component is cataloged, tested, and stored in a controlled environment 
                until it reaches your doorstep.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="p-3 bg-white shadow-sm rounded-lg w-fit mb-6">
                  <ShieldCheck className="w-6 h-6 text-brand-red" />
                </div>
                <h4 className="font-bold mb-2">Quality First</h4>
                <p className="text-sm text-slate-500">Every mechanical part undergoes rigorous testing before sale.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="p-3 bg-white shadow-sm rounded-lg w-fit mb-6">
                  <Truck className="w-6 h-6 text-brand-red" />
                </div>
                <h4 className="font-bold mb-2">USA Shipping</h4>
                <p className="text-sm text-slate-500">Professional freight services covering all 50 states.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="p-3 bg-white shadow-sm rounded-lg w-fit mb-6">
                  <Recycle className="w-6 h-6 text-brand-red" />
                </div>
                <h4 className="font-bold mb-2">Eco-Friendly</h4>
                <p className="text-sm text-slate-500">Sustainable recycling practices for a cleaner future.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="p-3 bg-white shadow-sm rounded-lg w-fit mb-6">
                  <Users className="w-6 h-6 text-brand-red" />
                </div>
                <h4 className="font-bold mb-2">Expert Team</h4>
                <p className="text-sm text-slate-500">Decades of combined automotive salvage experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 bg-brand-dark text-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Award className="w-16 h-16 text-brand-red mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-4xl text-white mb-8 italic">
            "Our commitment is to prolong the life of every vehicle with OEM parts that are as reliable as they are affordable."
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mb-8"></div>
          <p className="text-brand-accent font-bold uppercase tracking-widest text-sm">
            Operational Excellence Since 2026
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-slate-500">Building trust in the used auto parts industry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-brand-blue">Transparency</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe in complete transparency. Every part listing includes detailed condition 
                reports and fitment verification to ensure no surprises.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-brand-blue">Responsibility</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                As a member of the {BUSINESS_INFO.operator} family, we take our environmental 
                responsibility seriously, recycling 95% of every vehicle that enters our facility.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-brand-blue">Efficiency</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Time is money in the automotive repair world. We've optimized our logistics to get 
                your parts delivered faster than the industry average.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
