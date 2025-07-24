import React from 'react';

export default function TermsOfService() {
  return (
    <main className="container-custom py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="mb-6">Welcome to Dent Pilot. By using our website and services, you agree to the following terms and conditions. Please read them carefully.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Service Description</h2>
      <p className="mb-4">Dent Pilot provides AI automation and related services for dental clinics and business owners, including appointment booking, patient followup, onboarding, and workflow management.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">2. User Obligations</h2>
      <p className="mb-4">You agree to use our services responsibly and not for unnecessary or abusive purposes. All AI-powered services require credits and significant computing resources; please conserve usage to minimize environmental impact. You are responsible for providing accurate information. If inaccurate information leads to errors in patient communication or workflow, you accept responsibility for those outcomes.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Payment & Refunds</h2>
      <p className="mb-4">All services require payment of a setup fee and/or monthly retainer. You may request a refund within 7 days of payment for either the setup fee or monthly retainer. After 7 days, all payments are non-refundable. You may cancel the service at any time.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Integrations</h2>
      <p className="mb-4">Our services may integrate with third-party platforms including ElevenLabs, n8n, Google Sheets, WhatsApp, Gmail, OpenAI, and Google Gemini. By using these integrations, you agree to their respective terms and privacy policies.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
      <p className="mb-4">Dent Pilot is not liable for any indirect, incidental, or consequential damages arising from the use of our services. We do not guarantee uninterrupted or error-free service. While we follow HIPAA compliance and take reasonable security measures, we cannot guarantee absolute protection against cyber attacks.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Dispute Resolution</h2>
      <p className="mb-4">In the event of a dispute, you agree to work in good faith with our support team to resolve the issue, with reference to the initial agreement document. We always prioritize our clients and strive for fair solutions.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to These Terms</h2>
      <p className="mb-4">We may update these Terms of Service from time to time. The latest version will always be posted on this page.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Information</h2>
      <ul className="mb-4 ml-6">
        <li>Dent Pilot</li>
        <li>1 Mohamed Sebaee St, New Nozha, El Nozha, Cairo Governorate 11843, Egypt</li>
        <li>Email: <a href="mailto:support@dentpilot.dev" className="text-accent-blue underline">support@dentpilot.dev</a> or <a href="mailto:hello@dentpilot.dev" className="text-accent-blue underline">hello@dentpilot.dev</a></li>
      </ul>
      <p className="text-sm text-muted-foreground mt-8">Last updated: {new Date().toLocaleDateString('en-US')}</p>
    </main>
  );
}
