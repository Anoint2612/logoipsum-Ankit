'use client';

import React from 'react';

export function SettingsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', marginBottom: 4 }}>
          Settings
        </h1>
        <p style={{ fontSize: 13, color: '#6B7280' }}>
          Configure platform behavior, security, and system preferences
        </p>
      </div>
      
      <div className="flex items-center gap-3">
        <button
          style={{
            padding: '10px 16px',
            background: 'white',
            color: '#4B5563',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          Reset to Default
        </button>
        <button
          style={{
            padding: '10px 16px',
            background: '#111827',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
