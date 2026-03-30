import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import api from '@/src/lib/api';
import { useAuthStore } from '@/src/store/useAuthStore';

interface NotificationLike {
  isRead?: boolean;
}

export function useNotifications(role: 'user' | 'creator') {
  const setUnreadCount = useAuthStore((state) => state.setUnreadCount);
  const pathname = usePathname();
  const isViewingNotifications = role === 'creator'
    ? pathname === '/creator/notifications'
    : pathname === '/user/notifications';

  const fetchUnreadCount = useCallback(async () => {
    if (isViewingNotifications) {
      return;
    }

    try {
      const endpoint = role === 'creator' ? '/creator/notifications' : '/user/notifications';
      const res = await api.get(endpoint);
      const list: NotificationLike[] = Array.isArray(res.data) ? res.data : [];
      const unread = list.filter((n) => !n.isRead).length;
      setUnreadCount(unread);
    } catch (err) {
      console.error('Failed to fetch notification count', err);
    }
  }, [isViewingNotifications, role, setUnreadCount]);

  useEffect(() => {
    if (isViewingNotifications) {
      return;
    }

    fetchUnreadCount();

    // Poll every 30 seconds (no Socket.io in this project)
    const interval = window.setInterval(fetchUnreadCount, 30000);
    return () => window.clearInterval(interval);
  }, [fetchUnreadCount, isViewingNotifications]);
}
