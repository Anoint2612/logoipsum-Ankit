'use client';

import React, { useState, useEffect } from 'react';
import { SubscriptionPlanCard } from '@/src/components/admin/platform/SubscriptionPlanCard';
import { FeatureToggleRow } from '@/src/components/admin/platform/FeatureToggleRow';
import { subscriptionPlansData, featureTogglesData } from '@/src/data/platformData';

export default function PlatformPage() {
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
        @keyframes cardFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .detail-animate { opacity: 0; }
        .detail-animate.visible { animation: detailFadeUp 0.6s ease-out forwards; }
      `}</style>

      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", padding: 24, background: '#F5F5F8', minHeight: 'calc(100vh - 64px)' }}>
        
        {/* Header */}
        <div className={`detail-animate mb-8 ${mounted ? 'visible' : ''}`} style={{ animationDelay: '0ms' }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', marginBottom: 6 }}>
            Platform
          </h1>
          <p style={{ fontSize: 13, color: '#6B7280' }}>
            Manage monetization, templates, and feature configuration across the platform ecosystem.
          </p>
        </div>

        {/* 01 / Subscription Plans */}
        <div className="mb-10">
          <h2
            className={`detail-animate ${mounted ? 'visible' : ''}`}
            style={{ fontSize: 16, fontWeight: 700, color: '#4B5563', marginBottom: 20, animationDelay: '50ms' }}
          >
            01 / Subscription Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {subscriptionPlansData.map((plan, index) => (
              <SubscriptionPlanCard
                key={plan.id}
                plan={plan}
                delay={100 + index * 50}
              />
            ))}
          </div>
        </div>

        {/* Feature Toggles */}
        <div>
          <h2
            className={`detail-animate ${mounted ? 'visible' : ''}`}
            style={{ fontSize: 16, fontWeight: 700, color: '#4B5563', marginBottom: 20, animationDelay: '250ms' }}
          >
            Feature Toggles
          </h2>
          <div
            className={`bg-white rounded-xl p-8 detail-animate ${mounted ? 'visible' : ''}`}
            style={{
              boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
              animationDelay: '300ms',
            }}
          >
            <div className="flex flex-col -my-6">
              {featureTogglesData.map((feature, index) => (
                <FeatureToggleRow
                  key={feature.id}
                  feature={feature}
                  delay={350 + index * 50}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
