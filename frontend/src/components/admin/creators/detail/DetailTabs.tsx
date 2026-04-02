'use client';

import React from 'react';

type Tab = 'overview' | 'content' | 'earnings' | 'payouts';

interface Props {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const TABS: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'content', label: 'Content' },
  { id: 'earnings', label: 'Earnings' },
  { id: 'payouts', label: 'Payouts' },
];

export function DetailTabs({ activeTab, onTabChange }: Props) {
  return (
    <div className="flex gap-0 mb-6" style={{ borderBottom: '1px solid #E5E7EB' }} role="tablist">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
          style={{
            padding: '10px 20px',
            fontSize: 14,
            fontWeight: activeTab === tab.id ? 600 : 400,
            color: activeTab === tab.id ? '#111827' : '#6B7280',
            background: 'transparent',
            border: 'none',
            borderBottom: activeTab === tab.id ? '2px solid #111827' : '2px solid transparent',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            marginBottom: -1,
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export type { Tab as DetailTabId };
