/* ─── Mock data for Creator Detail page ─── */

export interface CreatorDetail {
  id: number;
  name: string;
  email: string;
  avatar: string | null;
  status: 'Active' | 'Inactive';
  memberId: string;
  memberSince: string;
  totalEarnings: number;
  subscribers: string;
  subscriberGrowth: string;
  contentCount: number;
  uploadsThisMonth: number;
  monthlyGrowth: string;
  growthLabel: string;
  profileSummary: string;
  joinedDate: string;
  accountStatus: string;
  topCategory: string;
  socialMedia: { website: boolean; share: boolean; instagram: boolean };
}

export interface ActivityItem {
  icon: 'star' | 'content' | 'payout' | 'edit';
  title: string;
  description: string;
  time: string;
}

export interface ContentPerformancePoint {
  name: string;
  views: number;
  engagement: number;
}

/* ─── Per-creator detail data (keyed by creator id from table) ─── */

const defaultSummary = `Digital storyteller and visual artist focused on architectural photography and urban exploration. Ananya has been a leading voice in the creative community, consistently delivering high-quality educational content for aspiring photographers. Her recent series 'Steel & Glass' has garnered over 400k unique views.`;

export const creatorDetails: Record<number, CreatorDetail> = {
  1: {
    id: 1, name: 'Ananya Sharma', email: 'ananya.sharma@creatorhub.com', avatar: null,
    status: 'Active', memberId: '88291', memberSince: 'Dec 12, 2024',
    totalEarnings: 425000, subscribers: '1.2M', subscriberGrowth: '+4%',
    contentCount: 432, uploadsThisMonth: 24, monthlyGrowth: '+12%',
    growthLabel: 'OUTPERFORMING PEERS', profileSummary: defaultSummary,
    joinedDate: 'Dec 12, 2024', accountStatus: 'Verified Professional',
    topCategory: 'Creative Arts / Design',
    socialMedia: { website: true, share: true, instagram: true },
  },
  2: {
    id: 2, name: 'Karan Singh', email: 'karan.singh@creatorhub.com', avatar: null,
    status: 'Active', memberId: '88302', memberSince: 'Nov 5, 2024',
    totalEarnings: 550000, subscribers: '1.5M', subscriberGrowth: '+6%',
    contentCount: 642, uploadsThisMonth: 31, monthlyGrowth: '+18%',
    growthLabel: 'OUTPERFORMING PEERS', profileSummary: 'Tech educator and coding instructor with 5 years of experience in full-stack development. Known for making complex topics accessible through hands-on tutorials and project-based learning.',
    joinedDate: 'Nov 5, 2024', accountStatus: 'Verified Professional',
    topCategory: 'Technology & Coding',
    socialMedia: { website: true, share: true, instagram: true },
  },
  3: {
    id: 3, name: 'Meera Joshi', email: 'meera.joshi@creatorhub.com', avatar: null,
    status: 'Active', memberId: '88415', memberSince: 'Oct 22, 2024',
    totalEarnings: 320000, subscribers: '800K', subscriberGrowth: '+3%',
    contentCount: 298, uploadsThisMonth: 18, monthlyGrowth: '+8%',
    growthLabel: 'STEADY GROWTH', profileSummary: 'Fitness coach and wellness advocate specializing in yoga and mindful movement. Creates holistic health content combining traditional practices with modern fitness science.',
    joinedDate: 'Oct 22, 2024', accountStatus: 'Verified Professional',
    topCategory: 'Fitness & Health',
    socialMedia: { website: true, share: false, instagram: true },
  },
  4: {
    id: 4, name: 'Sneha Patel', email: 'sneha.patel@creatorhub.com', avatar: null,
    status: 'Inactive', memberId: '88520', memberSince: 'Sep 15, 2024',
    totalEarnings: 285000, subscribers: '750K', subscriberGrowth: '+1%',
    contentCount: 312, uploadsThisMonth: 5, monthlyGrowth: '-3%',
    growthLabel: 'BELOW AVERAGE', profileSummary: 'Lifestyle and productivity content creator focusing on minimalism and intentional living. Known for practical guides on decluttering and organizing both physical and digital spaces.',
    joinedDate: 'Sep 15, 2024', accountStatus: 'Verified',
    topCategory: 'Lifestyle & Productivity',
    socialMedia: { website: true, share: true, instagram: true },
  },
  5: {
    id: 5, name: 'Vikram Rao', email: 'vikram.rao@creatorhub.com', avatar: null,
    status: 'Inactive', memberId: '88633', memberSince: 'Aug 28, 2024',
    totalEarnings: 400000, subscribers: '1.0M', subscriberGrowth: '+2%',
    contentCount: 410, uploadsThisMonth: 8, monthlyGrowth: '-1%',
    growthLabel: 'BELOW AVERAGE', profileSummary: 'Music producer and audio engineer with expertise in electronic music production. Creates in-depth tutorials on DAWs, mixing techniques, and sound design.',
    joinedDate: 'Aug 28, 2024', accountStatus: 'Verified Professional',
    topCategory: 'Music & Audio',
    socialMedia: { website: true, share: true, instagram: false },
  },
  6: {
    id: 6, name: 'Rajiv Mehta', email: 'rajiv.mehta@creatorhub.com', avatar: null,
    status: 'Active', memberId: '88744', memberSince: 'Jul 10, 2024',
    totalEarnings: 360000, subscribers: '950K', subscriberGrowth: '+5%',
    contentCount: 521, uploadsThisMonth: 22, monthlyGrowth: '+10%',
    growthLabel: 'OUTPERFORMING PEERS', profileSummary: 'Digital illustrator and concept artist working in the gaming industry. Shares professional workflows, character design processes, and industry insights.',
    joinedDate: 'Jul 10, 2024', accountStatus: 'Verified Professional',
    topCategory: 'Art & Illustration',
    socialMedia: { website: true, share: true, instagram: true },
  },
  7: {
    id: 7, name: 'Riya Kapoor', email: 'riya.kapoor@creatorhub.com', avatar: null,
    status: 'Active', memberId: '88855', memberSince: 'Jun 3, 2024',
    totalEarnings: 295000, subscribers: '720K', subscriberGrowth: '+3%',
    contentCount: 312, uploadsThisMonth: 15, monthlyGrowth: '+7%',
    growthLabel: 'STEADY GROWTH', profileSummary: 'Education technology specialist creating courses on data science and machine learning. Focuses on practical, project-based learning with real-world datasets.',
    joinedDate: 'Jun 3, 2024', accountStatus: 'Verified',
    topCategory: 'Education & Learning',
    socialMedia: { website: true, share: false, instagram: true },
  },
};

export const activityItems: ActivityItem[] = [
  { icon: 'star', title: 'Reached 1.2M Subscribers', description: 'Milestone achievement unlocked.', time: '2 HOURS AGO' },
  { icon: 'content', title: 'New Content Uploaded', description: '"The Geometry of Paris" video series.', time: 'YESTERDAY' },
  { icon: 'payout', title: 'Payout Processed', description: 'Earnings of ₹ 84,200 settled successfully.', time: '3 DAYS AGO' },
  { icon: 'edit', title: 'Profile Bio Updated', description: 'Refined professional summary and links.', time: 'DEC 18, 2024' },
  { icon: 'edit', title: 'Project Milestone Achieved', description: 'Completed the design phase ahead of schedule.', time: 'JAN 10, 2025' },
];

export const contentPerformance: ContentPerformancePoint[] = [
  { name: 'MON', views: 40, engagement: 30 },
  { name: 'TUE', views: 55, engagement: 45 },
  { name: 'WED', views: 50, engagement: 38 },
  { name: 'THU', views: 65, engagement: 50 },
  { name: 'FRI', views: 80, engagement: 65 },
  { name: 'SAT', views: 90, engagement: 75 },
  { name: 'SUN', views: 95, engagement: 80 },
];

export interface CreatorContent {
  id: string;
  title: string;
  type: string;
  access: 'Free' | 'Paid';
  views: string;
  likes: string;
  status: 'Active' | 'Flagged';
  date: string;
  thumbnailColor: string;
}

export const creatorContentData: CreatorContent[] = [
  {
    id: 'c1',
    title: 'Summer Lifestyle...',
    type: 'Video',
    access: 'Free',
    views: '12.4k',
    likes: '2.1k',
    status: 'Active',
    date: 'Oct 24, 2023',
    thumbnailColor: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
  },
  {
    id: 'c2',
    title: 'Exclusive Behind...',
    type: 'Post',
    access: 'Paid',
    views: '852',
    likes: '42',
    status: 'Flagged',
    date: 'Oct 21, 2023',
    thumbnailColor: 'linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)',
  },
  {
    id: 'c3',
    title: 'Setup Tour 2023...',
    type: 'Video',
    access: 'Free',
    views: '45.2k',
    likes: '8.9k',
    status: 'Active',
    date: 'Oct 18, 2023',
    thumbnailColor: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  },
  {
    id: 'c4',
    title: 'Weekly Update: Q...',
    type: 'Post',
    access: 'Paid',
    views: '2.3k',
    likes: '312',
    status: 'Active',
    date: 'Oct 15, 2023',
    thumbnailColor: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)',
  },
];

export interface CreatorEarnings {
  id: string;
  transactionId: string;
  type: 'Subscription' | 'Tip' | 'Paid Content';
  amount: number;
  status: 'Completed' | 'Pending';
  date: string;
}

export const creatorEarningsData: CreatorEarnings[] = [
  {
    id: 'e1',
    transactionId: '#TXN-1024',
    type: 'Subscription',
    amount: 499,
    status: 'Completed',
    date: 'Oct 24, 2023',
  },
  {
    id: 'e2',
    transactionId: '#TXN-1023',
    type: 'Tip',
    amount: 1250,
    status: 'Completed',
    date: 'Oct 23, 2023',
  },
  {
    id: 'e3',
    transactionId: '#TXN-1022',
    type: 'Paid Content',
    amount: 2999,
    status: 'Pending',
    date: 'Oct 22, 2023',
  },
  {
    id: 'e4',
    transactionId: '#TXN-1021',
    type: 'Subscription',
    amount: 499,
    status: 'Completed',
    date: 'Oct 20, 2023',
  },
  {
    id: 'e5',
    transactionId: '#TXN-1020',
    type: 'Subscription',
    amount: 499,
    status: 'Completed',
    date: 'Oct 20, 2023',
  },
  {
    id: 'e6',
    transactionId: '#TXN-1019',
    type: 'Subscription',
    amount: 499,
    status: 'Completed',
    date: 'Oct 20, 2023',
  },
];

export interface CreatorPayout {
  id: string;
  payoutId: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  settlementDate: string;
  method: string;
}

export const creatorPayoutsData: CreatorPayout[] = [
  {
    id: 'p1',
    payoutId: '#PAY-9921',
    amount: 25000,
    status: 'Completed',
    settlementDate: 'Jan 10, 2026',
    method: 'Bank Transfer',
  },
  {
    id: 'p2',
    payoutId: '#PAY-9840',
    amount: 42500,
    status: 'Completed',
    settlementDate: 'Dec 24, 2025',
    method: 'UPI (phonepe)',
  },
  {
    id: 'p3',
    payoutId: '#PAY-9712',
    amount: 18200,
    status: 'Completed',
    settlementDate: 'Dec 15, 2025',
    method: 'Bank Transfer',
  },
  {
    id: 'p4',
    payoutId: '#PAY-9605',
    amount: 18200,
    status: 'Completed',
    settlementDate: 'Dec 15, 2025',
    method: 'Bank Transfer',
  },
  {
    id: 'p5',
    payoutId: '#PAY-9501',
    amount: 18200,
    status: 'Completed',
    settlementDate: 'Dec 15, 2025',
    method: 'Bank Transfer',
  },
  {
    id: 'p6',
    payoutId: '#PAY-9412',
    amount: 18200,
    status: 'Completed',
    settlementDate: 'Dec 15, 2025',
    method: 'Bank Transfer',
  },
];
