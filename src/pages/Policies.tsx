import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const POLICY_CONTENT = {
  shipping: {
    title: "Shipping & Delivery Policy",
    content: (
      <>
        <h2>Fast and Reliable Nationwide Shipping</h2>
        <p>At SAMs Auto Wrecking, we understand that getting your vehicle back on the road is a priority. We offer professional shipping services across the United States, utilizing top-tier freight and courier networks.</p>
        
        <h3>Shipping Methods & Carriers</h3>
        <ul>
          <li><strong>Small Items:</strong> Shipped via UPS, FedEx, or USPS Ground for reliable porch delivery.</li>
          <li><strong>Large Items (Engines, Transmissions):</strong> Shipped via LTL Freight (Less Than Truckload). We partner with national freight carriers like R+L Carriers, Estes, and SAIA.</li>
        </ul>

        <h3>Delivery to Commercial vs. Residential</h3>
        <p>Shipping to a commercial business address or a repair shop is the most cost-effective and efficient option. Residential deliveries for freight items incur additional surcharges (Liftgate and Residential Delivery fees) and may require an appointment, adding 1-2 days to total transit time.</p>

        <h3>Processing & Lead Times</h3>
        <p>Most parts are shipped within 24-48 business hours of order verification. Engines and transmissions go through a final quality inspection and fluid drainage process before palletizing, which typically takes 2-4 business days.</p>

        <h3>Damage in Transit</h3>
        <p><strong>IMPORTANT:</strong> You must inspect all shipments upon arrival. If an item is damaged, you MUST note it on the Delivery Receipt before the driver departs. Contact our support team immediately. We cannot process damage claims without a noted Exception on the freight bill.</p>
      </>
    )
  },
  warranty: {
    title: "Warranty Policy",
    content: (
      <>
        <h2>Comprehensive Used Part Warranty</h2>
        <p>All items sold by SAMs Auto Wrecking come with a standard 30-day replacement warranty unless otherwise specified at the time of sale. Our warranty covers the part only; no labor, towing, or incidental costs are ever reimbursed.</p>

        <h3>Mechanical Component Coverage</h3>
        <p>Engines and Transmissions are warranted against cracked blocks, head gaskets, and internal mechanical failure. Warranty is valid ONLY if installed by a certified ASE mechanic.</p>

        <h3>Installation Requirements</h3>
        <ul>
          <li><strong>Engines:</strong> You must replace oil, oil filter, thermostat, and all external seals/gaskets. Cooling system must be flushed.</li>
          <li><strong>Transmissions:</strong> You must flush cooling lines, replace the filter, and install the correct OEM-specified fluid.</li>
        </ul>

        <h3>What is NOT Covered</h3>
        <ul>
          <li>Labor costs for installation or removal.</li>
          <li>Damage caused by overheating or lack of lubrication.</li>
          <li>Improper installation or diagnostic errors.</li>
          <li>Items sold "Fixed" or for "Cores".</li>
        </ul>

        <h3>Warranty Claims</h3>
        <p>In the event of a failure, we reserve the right to inspect the part. If a replacement part is available, we will ship it at no charge. If no replacement is found, a full refund of the purchase price will be issued.</p>
      </>
    )
  },
  returns: {
    title: "Refund and Returns Policy",
    content: (
      <>
        <h2>Return Eligibility and Process</h2>
        <p>We want to ensure you receive the correct part for your vehicle. If you need to return an item, please follow our standardized process below.</p>

        <h3>30-Day Return Window</h3>
        <p>Returns are accepted within 30 days of the original purchase date. All returns must be accompanied by the original sales receipt and a Return Merchandise Authorization (RMA) number.</p>

        <h3>Restocking Fees</h3>
        <ul>
          <li>A 25% restocking fee applies to all returns that are not due to a defect or our error (e.g., customer ordered wrong part).</li>
          <li>Delivery and shipping charges are non-refundable.</li>
        </ul>

        <h3>Condition of Returns</h3>
        <p>Parts must be returned in the same condition as when they left our facility. Parts that have been dismantled, modified, or damaged during installation are ineligible for return. All our parts are marked with unique identification stamps; tampering with these marks voids all return rights.</p>

        <h3>Core Returns</h3>
        <p>Core returns must be drained of all fluids and returned within 21 days to receive full core credit. Shipping for core returns is the responsibility of the customer.</p>
      </>
    )
  },
  terms: {
    title: "Terms & Conditions",
    content: (
      <>
        <h2>Legal Agreement & User Terms</h2>
        <p>By purchasing from SAMs Auto Wrecking and {BUSINESS_INFO.operator}, you acknowledge and agree to the following terms of business.</p>

        <h3>Nature of Recycled Parts</h3>
        <p>Purchasers acknowledge that they are buying USED automotive components. While we test and inspect every item, used parts naturally have wear and tear. All body parts are sold by description and photos; color matching is not guaranteed due to paint fading and variations.</p>

        <h3>Limitation of Liability</h3>
        <p>The maximum liability of {BUSINESS_INFO.operator} and its subsidiaries is limited strictly to the purchase price of the part. We are not responsible for any direct, indirect, special, or consequential damages resulting from the use of our products.</p>

        <h3>Choice of Law</h3>
        <p>Any disputes arising from transactions with SAMs Auto Wrecking shall be governed by the laws of the State of Texas, with venue in Washington County.</p>

        <h3>Abandoned Property</h3>
        <p>Items paid for but not picked up or shipped within 14 days will be considered abandoned. A storage fee of $25 per day may apply.</p>
      </>
    )
  },
  privacy: {
    title: "Privacy Policy",
    content: (
      <>
        <h2>Your Privacy Matters</h2>
        <p>SAMs Auto Wrecking is committed to protecting the personal information of our customers. This policy outlines how we handle your data.</p>
        
        <h3>Information Collection</h3>
        <p>We collect information necessary to fulfill your orders, including name, shipping address, email, and vehicle details (VIN). We do not sell or lease your personal information to third parties.</p>

        <h3>Secure Transactions</h3>
        <p>All credit card transactions are processed via secure, encrypted gateways. We do not store sensitive payment data on our internal servers.</p>

        <h3>Communication</h3>
        <p>We may contact you regarding your order status or shipping updates. You may opt-out of marketing communications at any time.</p>

        <h3>Data Retention</h3>
        <p>We retain transaction records only as long as necessary for tax compliance and warranty verification purposes.</p>
      </>
    )
  }
};

export const Policies = () => {
  const { type } = useParams<{ type: string }>();
  const policy = POLICY_CONTENT[type as keyof typeof POLICY_CONTENT];

  if (!policy) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-brand-dark px-10 py-12 text-white">
          <h1 className="text-3xl text-white mb-2">{policy.title}</h1>
          <p className="text-slate-400 text-sm font-medium">Last Updated: May 2026</p>
        </div>
        <div className="p-10 md:p-16 prose prose-slate max-w-none prose-headings:font-display prose-headings:text-brand-blue prose-h2:text-2xl prose-h3:text-lg prose-p:text-slate-600 prose-ul:text-slate-600">
          {policy.content}
        </div>
        <div className="bg-slate-50 p-8 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Questions regarding this policy?</p>
          <a href={`mailto:${BUSINESS_INFO.email}`} className="text-brand-blue font-bold hover:text-brand-red transition-colors inline-block">
            {BUSINESS_INFO.email}
          </a>
        </div>
      </div>
    </div>
  );
};
