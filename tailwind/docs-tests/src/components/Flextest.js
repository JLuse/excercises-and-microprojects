// components/Layout.js
import React from 'react';

const Layout = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2 mb-4">
          <div className="bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold">Whats Sentry?</h2>
            <p>Application monitoring and debugging software considered “not bad” by 4 million developers.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-2 mb-4">
          <div className="bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold">Organization Settings</h2>
            <p>Information for setting up your organization’s Sentry account.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-2 mb-4">
          <div className="bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold">Pricing & Billing</h2>
            <p>All about our pricing and billing structure.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-2 mb-4">
          <div className="bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold">API</h2>
            <p>APIs for accessing Sentry programmatically.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-2 mb-4">
          <div className="bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold">CLI</h2>
            <p>How to use ‘sentry-cli’ on the command line.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-2 mb-4">
          <div className="bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold">Security, Legal & PII</h2>
            <p>Security, compliance, and data-scrubbing processes.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-2 mb-4">
          <div className="bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold">Concepts & Reference</h2>
            <p>Core concepts that make Sentry, Sentry.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
