'use client';

import React, { useEffect, useState } from 'react';
import type { Creator, TabId, StatusFilter, SortOption } from '@/src/data/creatorsData';
import { TableFilters } from './TableFilters';
import { CreatorRow } from './CreatorRow';
import { Pagination } from './Pagination';

interface CreatorsTableProps {
  creators: Creator[];
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  statusFilter: StatusFilter;
  sortFilter: SortOption;
  onStatusChange: (s: StatusFilter) => void;
  onSortChange: (s: SortOption) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CreatorsTable(props: CreatorsTableProps) {
  const { creators, activeTab, onTabChange, statusFilter, sortFilter, onStatusChange, onSortChange, currentPage, totalPages, onPageChange } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="bg-white rounded-xl"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        padding: '20px 0',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      <div style={{ padding: '0 20px' }}>
        <TableFilters
          activeTab={activeTab}
          onTabChange={onTabChange}
          statusFilter={statusFilter}
          sortFilter={sortFilter}
          onStatusChange={onStatusChange}
          onSortChange={onSortChange}
        />
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 800 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
              {['Creator', 'Status', 'Verification', 'Total Revenue', 'Sub', 'Content', 'Date', 'Actions'].map((h) => (
                <th
                  key={h}
                  scope="col"
                  style={{
                    padding: '10px 16px',
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#9CA3AF',
                    textAlign: h === 'Verification' ? 'center' : 'left',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {creators.length > 0 ? (
              creators.map((c, i) => (
                <CreatorRow key={c.id} creator={c} delay={i * 30} />
              ))
            ) : (
              <tr>
                <td colSpan={8} style={{ padding: 40, textAlign: 'center', color: '#9CA3AF', fontSize: 14 }}>
                  No creators found matching your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={{ padding: '0 20px' }}>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  );
}
