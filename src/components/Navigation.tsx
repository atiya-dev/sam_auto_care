import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Truck, Search, Phone } from 'lucide-react';
import { NAV_ITEMS, BUSINESS_INFO } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-slate-100">
      {/* Top bar */}
      <div className="bg-brand-dark text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium uppercase tracking-wider">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-brand-red" />
              Nationwide Shipping Across USA
            </span>
          </div>
          <div>
            <span>Official Dealer: {BUSINESS_INFO.operator}</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex flex-col">
              <span className="text-2xl font-bold font-display text-brand-blue tracking-tighter leading-none">
                SAMS<span className="text-brand-red">AUTO</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-0.5">
                Wrecking & Recycling
              </span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors hover:text-brand-red ${
                    isActive ? 'text-brand-red' : 'text-slate-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/inventory"
              className="bg-brand-blue text-white px-5 py-2.5 rounded-md text-sm font-bold flex items-center gap-2 hover:bg-brand-dark transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-brand-blue/20"
            >
              <Search className="w-4 h-4" />
              Find Your Part
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-brand-blue p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 text-base font-semibold ${
                      isActive ? 'text-brand-red bg-slate-50' : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4 px-3 flex flex-col gap-3">
                <NavLink
                  to="/inventory"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-brand-blue text-white py-3 rounded-md font-bold text-center flex justify-center items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Find Your Part
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
