'use client';

import React, { useState } from 'react';

export function SecuritySection() {
  const [twoFactor, setTwoFactor] = useState(true);
  const [botProtection, setBotProtection] = useState(false);

  return (
    <div className="mb-12">
      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#4B5563', marginBottom: 20 }}>
        Security
      </h3>

      {/* 2FA Toggle */}
      <div style={toggleBoxStyle} className="mb-6 outline-none hover:border-gray-300 cursor-pointer" onClick={() => setTwoFactor(!twoFactor)}>
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: '#111827', marginBottom: 2 }}>Two-Factor Authentication</h4>
          <p style={{ fontSize: 12, color: '#6B7280' }}>Add an extra layer of security</p>
        </div>
        <CSSSwitch enabled={twoFactor} />
      </div>

      <div className="flex flex-col gap-6 mb-6">
        {/* Session Timeout */}
        <div className="flex flex-col gap-2">
          <label style={{ fontSize: 12, fontWeight: 600, color: '#6B7280' }}>Session Timeout</label>
          <div className="relative">
            <select style={inputStyle}>
              <option>30 Minutes</option>
              <option>1 Hour</option>
              <option>12 Hours</option>
            </select>
            <div style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
        </div>

        {/* Password Length */}
        <div className="flex flex-col gap-2">
          <label style={{ fontSize: 12, fontWeight: 600, color: '#6B7280' }}>Minimum Password Length</label>
          <input type="text" defaultValue="12" style={inputStyle} />
        </div>
      </div>

      {/* Bot Protection Toggle */}
      <div style={toggleBoxStyle} className="mb-8 outline-none hover:border-gray-300 cursor-pointer" onClick={() => setBotProtection(!botProtection)}>
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 600, color: '#4B5563' }}>Bot Protection (CAPTCHA)</h4>
        </div>
        <CSSSwitch enabled={botProtection} />
      </div>

      {/* Active Sessions */}
      <div className="mb-6">
        <label style={{ fontSize: 12, fontWeight: 700, color: '#4B5563', marginBottom: 16, display: 'block' }}>Active Sessions</label>
        
        <div style={{ border: '1px solid #E5E7EB', borderRadius: 8, background: 'white' }}>
          {/* Current Session */}
          <div style={{ padding: '20px', borderBottom: '1px solid #F3F4F6' }}>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#4B5563', marginBottom: 4 }}>Chrome on MacOS (Current)</h4>
            <p style={{ fontSize: 11, color: '#9CA3AF' }}>103.45.12.1 • London, UK</p>
          </div>
          
          {/* Other Session */}
          <div style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: '#4B5563', marginBottom: 4 }}>Safari on iPhone 15</h4>
              <p style={{ fontSize: 11, color: '#9CA3AF' }}>92.11.0.4 • Mumbai, IN</p>
            </div>
            <button style={{ background: 'none', border: 'none', fontSize: 11, fontWeight: 700, color: '#EF4444', cursor: 'pointer' }}>
              Revoke
            </button>
          </div>
        </div>
      </div>

      {/* Log out all */}
      <button
        style={{
          width: '100%',
          padding: '12px 0',
          background: '#FEF2F2',
          border: '1px solid #FECACA',
          borderRadius: 8,
          color: '#EF4444',
          fontSize: 13,
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        Log out all sessions
      </button>

    </div>
  );
}

// Reusable micro switch
function CSSSwitch({ enabled }: { enabled: boolean }) {
  return (
    <div
      style={{
        width: 44,
        height: 24,
        borderRadius: 12,
        background: enabled ? '#111827' : '#E5E7EB',
        position: 'relative',
        transition: 'all 0.2s ease-in-out',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          background: 'white',
          borderRadius: '50%',
          position: 'absolute',
          top: 2,
          left: enabled ? 22 : 2,
          transition: 'all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
        }}
      />
    </div>
  );
}

const toggleBoxStyle: React.CSSProperties = {
  border: '1px solid #E5E7EB',
  borderRadius: 8,
  padding: '20px 24px',
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 8,
  border: '1px solid #E5E7EB',
  background: 'white',
  fontSize: 13,
  color: '#111827',
  fontWeight: 600,
  outline: 'none',
  appearance: 'none',
};
