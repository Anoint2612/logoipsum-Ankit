/* ─── All mock data for the Admin Creators page ─── */

export interface Creator {
  id: number;
  name: string;
  email: string;
  avatar: string | null;
  status: 'Active' | 'Inactive';
  verified: boolean;
  revenue: number;
  subscribers: string;
  content: number;
  date: string;
}

export interface ChartDataPoint {
  name: string;
  val: number;
}

export interface DualChartDataPoint {
  name: string;
  users: number;
  creators: number;
}

/* ─── Avatar color map (deterministic by first letter) ─── */
export const AVATAR_COLORS: Record<string, string> = {
  A: '#FCA5A5', B: '#FDBA74', C: '#FCD34D', D: '#86EFAC',
  E: '#6EE7B7', F: '#67E8F9', G: '#7DD3FC', H: '#93C5FD',
  I: '#A5B4FC', J: '#C4B5FD', K: '#86EFAC', L: '#F9A8D4',
  M: '#93C5FD', N: '#FCA5A5', O: '#FDBA74', P: '#FCD34D',
  Q: '#86EFAC', R: '#6EE7B7', S: '#FCD34D', T: '#67E8F9',
  U: '#7DD3FC', V: '#C4B5FD', W: '#A5B4FC', X: '#F9A8D4',
  Y: '#FCA5A5', Z: '#FDBA74',
};

export function getInitials(name: string): string {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

export function getAvatarColor(name: string): string {
  const letter = name.charAt(0).toUpperCase();
  return AVATAR_COLORS[letter] || '#D1D5DB';
}

export function formatIndianCurrency(num: number): string {
  const s = num.toString();
  if (s.length <= 3) return '₹ ' + s;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  const formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return '₹ ' + formatted + ',' + last3;
}

/* ─── Chart Data ─── */

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_UPPER = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export const totalCreatorsChartData: ChartDataPoint[] = MONTHS.map((m, i) => ({
  name: m,
  val: [55, 65, 72, 60, 50, 65, 80, 95, 70, 55, 78, 85][i],
}));

export const activeCreatorsChartData: ChartDataPoint[] = MONTHS.map((m, i) => ({
  name: m,
  val: [40, 55, 35, 70, 45, 60, 50, 75, 65, 80, 55, 85][i],
}));

export const verifiedCreatorsChartData: DualChartDataPoint[] = MONTHS_UPPER.map((m, i) => ({
  name: m,
  users: [20, 35, 30, 50, 45, 60, 55, 70, 65, 80, 75, 90][i],
  creators: [15, 25, 40, 35, 55, 50, 70, 60, 80, 70, 85, 95][i],
}));

export const topRevenueChartData: ChartDataPoint[] = MONTHS.map((m, i) => ({
  name: m,
  val: [85, 55, 20, 90, 30, 100, 65, 55, 60, 45, 80, 75][i],
}));

export const retentionRateChartData: ChartDataPoint[] = MONTHS.map((m, i) => ({
  name: m,
  val: [40, 60, 30, 50, 40, 65, 60, 55, 65, 80, 50, 70][i],
}));

export const analyticsActiveCreatorsData: ChartDataPoint[] = MONTHS.map((m, i) => ({
  name: m,
  val: [45, 65, 30, 55, 85, 45, 60, 35, 75, 45, 75, 55][i],
}));

export interface CreatorGrowthDataPoint {
  name: string;
  free: number;
  paid: number;
}

export const creatorGrowthData: CreatorGrowthDataPoint[] = MONTHS.map((m, i) => ({
  name: m,
  free: [40, 55, 75, 35, 50, 40, 90, 55, 40, 65, 55, 45][i],
  paid: [35, 45, 60, 20, 40, 30, 80, 40, 30, 50, 40, 35][i],
}));


/* ─── Table Data ─── */

export const creatorsTableData: Creator[] = [
  { id: 1, name: 'Ananya Sharma', email: 'ananya.sharma@creator.com', avatar: null, status: 'Active', verified: true, revenue: 425000, subscribers: '1.2M', content: 432, date: 'Dec 14, 2023' },
  { id: 2, name: 'Karan Singh', email: 'karan.singh@creator.com', avatar: null, status: 'Active', verified: true, revenue: 550000, subscribers: '1.5M', content: 642, date: 'Dec 17, 2023' },
  { id: 3, name: 'Meera Joshi', email: 'meera.joshi@creator.com', avatar: null, status: 'Active', verified: true, revenue: 320000, subscribers: '800K', content: 298, date: 'Dec 18, 2023' },
  { id: 4, name: 'Sneha Patel', email: 'sneha.patel@creator.com', avatar: null, status: 'Inactive', verified: true, revenue: 285000, subscribers: '750K', content: 312, date: 'Dec 16, 2023' },
  { id: 5, name: 'Vikram Rao', email: 'vikram.rao@creator.com', avatar: null, status: 'Inactive', verified: true, revenue: 400000, subscribers: '1.0M', content: 410, date: 'Dec 19, 2023' },
  { id: 6, name: 'Rajiv Mehta', email: 'rajiv.mehta@creator.com', avatar: null, status: 'Active', verified: true, revenue: 360000, subscribers: '950K', content: 521, date: 'Dec 15, 2023' },
  { id: 7, name: 'Riya Kapoor', email: 'riya.kapoor@creator.com', avatar: null, status: 'Active', verified: true, revenue: 295000, subscribers: '720K', content: 312, date: 'Dec 20, 2023' },
];

/* ─── Filter / Sort Tabs ─── */
export type TabId = 'all' | 'verified' | 'top' | 'suspended';

export const TAB_OPTIONS: { id: TabId; label: string }[] = [
  { id: 'all', label: 'All Creators' },
  { id: 'verified', label: 'Verified' },
  { id: 'top', label: 'Top Creators' },
  { id: 'suspended', label: 'Suspended' },
];

export type StatusFilter = 'All' | 'Active' | 'Inactive';
export type SortOption = 'Newest' | 'Oldest' | 'Revenue ↑' | 'Revenue ↓';

export const STATUS_OPTIONS: StatusFilter[] = ['All', 'Active', 'Inactive'];
export const SORT_OPTIONS: SortOption[] = ['Newest', 'Oldest', 'Revenue ↑', 'Revenue ↓'];
