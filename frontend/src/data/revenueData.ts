export interface ChartDataPoint {
  name: string;
  val: number;
}

export interface TransactionListItem {
  id: string;
  transactionId: string;
  user: { name: string; avatarUrl?: string };
  creator: { name: string; avatarUrl?: string };
  amount: number;
  type: 'Subscription' | 'Tip';
  status: 'Completed' | 'Pending';
  date: string;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const totalRevenueData: ChartDataPoint[] = MONTHS.map((m, i) => ({
  name: m,
  val: [20, 80, 70, 30, 90, 50, 60, 40, 80, 50, 85, 40][i],
}));

export const platformCommissionData: ChartDataPoint[] = MONTHS.map((m, i) => ({
  name: m,
  val: [10, 40, 100, 30, 85, 40, 50, 40, 85, 50, 95, 80][i], // pink line with red dots in Figma
}));

export const refundAmountData: ChartDataPoint[] = MONTHS.map((m, i) => ({
  name: m,
  val: [10, 30, 20, 30, 40, 100, 60, 60, 60, 40, 80, 0][i], // Notice how dec is empty in the design
}));

export const pendingPayoutsData: ChartDataPoint[] = MONTHS.map((m, i) => ({
  name: m,
  val: [60, 70, 90, 20, 20, 40, 100, 50, 40, 50, 70, 40][i],
}));

// We can just reuse totalRevenueData for the "Revenue Trend" full-width chart as it shows a visually identical trajectory

export const recentActivityFeed = [
  { text: '₹100k in lifetime earnings', time: '2 min ago', dotColor: '#EF4444' }, // Red
  { text: 'Server load at 85%', time: '14 min ago', dotColor: '#F59E0B' }, // Yellow
  { text: 'New creator application', time: '1 hour ago', dotColor: '#111827' }, // Black
];

export const revenueTransactionsData: TransactionListItem[] = [
  {
    id: 'tx1',
    transactionId: 'TXN-82910',
    user: { name: 'Arjun Mehta' },
    creator: { name: 'Sarah Jenkins' },
    amount: 2499,
    type: 'Subscription',
    status: 'Completed',
    date: 'Oct 24, 2023',
  },
  {
    id: 'tx2',
    transactionId: 'TXN-82911',
    user: { name: 'Rohan Sharma' },
    creator: { name: 'Elena Rodriguez' },
    amount: 500,
    type: 'Tip',
    status: 'Pending',
    date: 'Oct 24, 2023',
  },
  {
    id: 'tx3',
    transactionId: 'TXN-82912',
    user: { name: 'Kavya Singh' },
    creator: { name: 'Julian Darko' },
    amount: 1499,
    type: 'Subscription',
    status: 'Completed',
    date: 'Oct 23, 2023',
  },
  {
    id: 'tx4',
    transactionId: 'TXN-82913',
    user: { name: 'Amit Kumar' },
    creator: { name: 'Oliver Smith' },
    amount: 2999,
    type: 'Subscription',
    status: 'Completed',
    date: 'Oct 23, 2023',
  },
  {
    id: 'tx5',
    transactionId: 'TXN-82914',
    user: { name: 'Sneha Rao' },
    creator: { name: 'Meera Joshi' },
    amount: 250,
    type: 'Tip',
    status: 'Completed',
    date: 'Oct 22, 2023',
  },
];
