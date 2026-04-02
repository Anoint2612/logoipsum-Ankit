'use client';

import React from 'react';
import type { TabId, StatusFilter, SortOption } from '@/src/data/creatorsData';
import { TAB_OPTIONS, STATUS_OPTIONS, SORT_OPTIONS } from '@/src/data/creatorsData';
import { SlidersHorizontal } from 'lucide-react';

interface TableFiltersProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  statusFilter: StatusFilter;
  sortFilter: SortOption;
  onStatusChange: (s: StatusFilter) => void;
  onSortChange: (s: SortOption) => void;
}

export function TableFilters({ activeTab, onTabChange, statusFilter, sortFilter, onStatusChange, onSortChange }: TableFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
      {/* Tab group */}
      <div className="flex gap-0" role="tablist">
        {TAB_OPTIONS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
            style={{
              fontSize: 13,
              fontWeight: activeTab === tab.id ? 700 : 500,
              padding: '8px 16px',
              background: activeTab === tab.id ? '#111827' : 'transparent',
              color: activeTab === tab.id ? 'white' : '#6B7280',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 500 }}>Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value as StatusFilter)}
            aria-label="Filter by status"
            style={{
              fontSize: 12, fontWeight: 600, color: '#111827', border: '1px solid #E5E7EB',
              borderRadius: 6, padding: '5px 8px', background: 'white', cursor: 'pointer', outline: 'none',
            }}
          >
            {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-1.5">
          <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 500 }}>Sort:</span>
          <select
            value={sortFilter}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            aria-label="Sort creators"
            style={{
              fontSize: 12, fontWeight: 600, color: '#111827', border: '1px solid #E5E7EB',
              borderRadius: 6, padding: '5px 8px', background: 'white', cursor: 'pointer', outline: 'none',
            }}
          >
            {SORT_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <button
          aria-label="Additional filters"
          style={{
            width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid #E5E7EB', borderRadius: 6, background: 'white', cursor: 'pointer',
          }}
        >
          <SlidersHorizontal size={14} color="#6B7280" />
        </button>
      </div>
    </div>
  );
}
