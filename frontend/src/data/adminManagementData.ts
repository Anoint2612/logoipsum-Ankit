export interface AdminRoleStat {
  id: string;
  count: number;
  role: string;
  description: string;
  iconName: 'Shield' | 'ShieldCheck' | 'HelpCircle' | 'DollarSign';
}

export const adminRoleStats: AdminRoleStat[] = [
  {
    id: 'super_admin',
    count: 2,
    role: 'Super Admin',
    description: 'Full system control and oversight.',
    iconName: 'Shield'
  },
  {
    id: 'moderator',
    count: 5,
    role: 'Moderator',
    description: 'Manage content and creator reviews.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'support',
    count: 4,
    role: 'Support',
    description: 'Ticketing and user assistance.',
    iconName: 'HelpCircle'
  },
  {
    id: 'finance',
    count: 3,
    role: 'Finance',
    description: 'Payout management and invoicing.',
    iconName: 'DollarSign'
  }
];

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Moderator' | 'Support' | 'Finance';
  status: 'Active' | 'Inactive';
  lastActive: string;
  addedOn: string;
}

export const teamMembersData: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.c@creatorhub.com',
    role: 'Super Admin',
    status: 'Active',
    lastActive: '2 mins ago',
    addedOn: 'Oct 12, 2023'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    email: 'm.rodriguez@creatorhub.com',
    role: 'Moderator',
    status: 'Active',
    lastActive: '45 mins ago',
    addedOn: 'Jan 05, 2024'
  },
  {
    id: '3',
    name: 'James Wilson',
    email: 'j.wilson@creatorhub.com',
    role: 'Finance',
    status: 'Inactive',
    lastActive: '3 months ago',
    addedOn: 'Mar 22, 2023'
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.d@creatorhub.com',
    role: 'Support',
    status: 'Active',
    lastActive: '1 day ago',
    addedOn: 'Nov 15, 2023'
  },
  {
    id: '5',
    name: 'Michael Chang',
    email: 'michael.c@creatorhub.com',
    role: 'Moderator',
    status: 'Active',
    lastActive: '5 hours ago',
    addedOn: 'Feb 10, 2024'
  }
];
