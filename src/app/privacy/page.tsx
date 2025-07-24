import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="container-custom py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-6">Dent Pilot ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
      <p className="mb-4">We collect the following information that you provide willingly:
        <ul className="list-disc ml-6">
          <li>Full name</li>
          <li>Email address</li>
          <li>Clinic name</li>
        </ul>
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
      <p className="mb-4">We use your information to:
        <ul className="list-disc ml-6">
          <li>Provide and improve our AI automation services for dental clinics</li>
          <li>Book appointments and manage clinic workflows</li>
          <li>Communicate with you regarding your account or inquiries</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Sharing & Third Parties</h2>
      <p className="mb-4">We only share your data with Google Sheets as our CRM software for the time being. We do not sell or share your personal information with any other third parties except as required by law.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Security</h2>
      <p className="mb-4">We use HTTPS and SSL encryption to protect your data. While we follow HIPAA compliance and take reasonable measures to safeguard your information, no method of transmission or storage is 100% secure. We cannot guarantee absolute security against cyber attacks.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Rights</h2>
      <p className="mb-4">You have the right to request access to, export, or deletion of your personal data. To exercise these rights, contact us at <a href="mailto:support@dentpilot.dev" className="text-accent-blue underline">support@dentpilot.dev</a>.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Compliance</h2>
      <p className="mb-4">We comply with HIPAA regulations and ensure that only authorized parties (the system, the doctor, staff, and the patient) have access to private health information.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children’s Privacy</h2>
      <p className="mb-4">Our services are intended for dental professionals and business owners, not for children or minors.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Information</h2>
      <p className="mb-4">If you have any questions about this Privacy Policy or your data, please contact us at:</p>
      <ul className="mb-4 ml-6">
        <li>Dent Pilot</li>
        <li>Remote</li>
        <li>Email: <a href="mailto:support@dentpilot.dev" className="text-accent-blue underline">support@dentpilot.dev</a> or <a href="mailto:hello@dentpilot.dev" className="text-accent-blue underline">hello@dentpilot.dev</a></li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time. The latest version will always be posted on this page.</p>
      <p className="text-sm text-muted-foreground mt-8">Last updated: {new Date().toLocaleDateString('en-US')}</p>
    </main>
  );
}
