'use client';

import React, { useState, useEffect } from 'react';
import { SettingsHeader } from '@/src/components/admin/settings/SettingsHeader';
import { GeneralSettingsSection } from '@/src/components/admin/settings/GeneralSettingsSection';
import { LegalComplianceSection } from '@/src/components/admin/settings/LegalComplianceSection';
import { PaymentsSection } from '@/src/components/admin/settings/PaymentsSection';
import { SecuritySection } from '@/src/components/admin/settings/SecuritySection';

export default function SettingsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes detailFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .detail-animate { opacity: 0; }
        .detail-animate.visible { animation: detailFadeUp 0.6s ease-out forwards; }
      `}</style>

      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", padding: 24, background: '#F5F5F8', minHeight: 'calc(100vh - 64px)' }}>
        <div className="max-w-[700px] mx-auto">
          
          <div className={`detail-animate ${mounted ? 'visible' : ''}`} style={{ animationDelay: '0ms' }}>
            <SettingsHeader />
          </div>

          <div className={`detail-animate ${mounted ? 'visible' : ''}`} style={{ animationDelay: '100ms' }}>
            <GeneralSettingsSection />
          </div>

          <div className={`detail-animate ${mounted ? 'visible' : ''}`} style={{ animationDelay: '200ms' }}>
            <LegalComplianceSection />
          </div>

          <div className={`detail-animate ${mounted ? 'visible' : ''}`} style={{ animationDelay: '300ms' }}>
            <PaymentsSection />
          </div>

          <div className={`detail-animate ${mounted ? 'visible' : ''}`} style={{ animationDelay: '400ms' }}>
            <SecuritySection />
          </div>

        </div>
      </div>
    </>
  );
}
