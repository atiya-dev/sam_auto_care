import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, MailCheck, Truck } from 'lucide-react';
import { BUSINESS_INFO, POLICY_LINKS } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <NavLink to="/" className="flex flex-col">
              <span className="text-3xl font-bold font-display text-white tracking-tighter leading-none">
                SAMS<span className="text-brand-red">AUTO</span>
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">
                Wrecking & Recycling
              </span>
            </NavLink>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nationwide supplier of quality recycled OEM auto parts. Since 2026, we've committed to eco-friendly 
              salvage and reliable parts distribution across the United States.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-brand-red transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-brand-red transition-colors">
                <Truck className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-brand-red transition-colors">
                <MailCheck className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-red rounded-full"></span>
              Corporate
            </h3>
            <ul className="space-y-4">
              {POLICY_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink to={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-red rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>Nationwide Shipping</li>
              <li>Used Engine Sales</li>
              <li>Transmission Testing</li>
              <li>Body Part Distribution</li>
              <li>OEM Part Sourcing</li>
              <li>Bulk Salvage Buying</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-red rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-sm text-slate-400 leading-relaxed group-hover:text-white transition-colors">
                  {BUSINESS_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-medium whitespace-pre-line text-center md:text-left">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. Operated by {BUSINESS_INFO.operator}. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-slate-500 font-medium">Verified Merchant</span>
            <span className="text-xs text-slate-500 font-medium">Safe Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
