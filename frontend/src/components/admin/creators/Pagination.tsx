'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPages = () => {
    const pages: (number | '...')[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1 mt-5 pt-4" style={{ borderTop: '1px solid #F3F4F6' }}>
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
        style={{
          ...btnBase,
          opacity: currentPage <= 1 ? 0.3 : 1,
          cursor: currentPage <= 1 ? 'default' : 'pointer',
        }}
      >
        <ChevronLeft size={14} />
      </button>

      {getPages().map((p, i) =>
        p === '...' ? (
          <span key={`dots-${i}`} style={{ ...btnBase, cursor: 'default', color: '#9CA3AF' }}>…</span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            aria-current={p === currentPage ? 'page' : undefined}
            style={{
              ...btnBase,
              background: p === currentPage ? '#111827' : 'transparent',
              color: p === currentPage ? 'white' : '#6B7280',
              fontWeight: p === currentPage ? 700 : 500,
              cursor: 'pointer',
            }}
          >
            {p}
          </button>
        )
      )}

      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
        style={{
          ...btnBase,
          opacity: currentPage >= totalPages ? 0.3 : 1,
          cursor: currentPage >= totalPages ? 'default' : 'pointer',
        }}
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

const btnBase: React.CSSProperties = {
  width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
  border: 'none', borderRadius: '50%', fontSize: 13, background: 'transparent', color: '#6B7280',
};
