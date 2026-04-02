export interface SubscriptionPlan {
  id: string;
  tierName: string; // e.g. "BASIC ACCESS", "MOST POPULAR", "ENTERPRISE SCALE"
  planName: string; // e.g. "Free", "Pro", "Premium"
  price: number | 'Custom';
  frequency: string; // e.g. "/forever", "/month", ""
  features: string[];
  isRecommended: boolean;
}

export const subscriptionPlansData: SubscriptionPlan[] = [
  {
    id: 'plan_basic',
    tierName: 'BASIC ACCESS',
    planName: 'Free',
    price: 0,
    frequency: '/forever',
    features: [
      'Standard Marketplace Listing',
      '15% Platform Fee',
      'Basic Support',
    ],
    isRecommended: false,
  },
  {
    id: 'plan_pro',
    tierName: 'MOST POPULAR',
    planName: 'Pro',
    price: 499,
    frequency: '/month',
    features: [
      'Priority Search Results',
      '8% Platform Fee',
      'Advanced Analytics',
    ],
    isRecommended: true,
  },
  {
    id: 'plan_enterprise',
    tierName: 'ENTERPRISE SCALE',
    planName: 'Premium',
    price: 'Custom',
    frequency: '',
    features: [
      'White-label Storefront',
      '5% Platform Fee',
      'Dedicated Manager',
    ],
    isRecommended: false,
  },
];

export interface FeatureToggle {
  id: string;
  title: string;
  description: string;
  isEnabled: boolean;
}

export const featureTogglesData: FeatureToggle[] = [
  {
    id: 'feat_livestreaming',
    title: 'Livestreaming',
    description: 'Enable creators to broadcast high-definition video in real-time.',
    isEnabled: true,
  },
  {
    id: 'feat_messaging',
    title: 'Direct Messaging',
    description: 'Allow private communication between creators and their subscribers.',
    isEnabled: true,
  },
  {
    id: 'feat_tips',
    title: 'Tips/Donations',
    description: 'Enable one-time financial support directly on creator profiles.',
    isEnabled: true,
  },
  {
    id: 'feat_content_lock',
    title: 'Paid Content Lock',
    description: 'Allow individual posts to be gated behind a one-time purchase.',
    isEnabled: false,
  },
  {
    id: 'feat_community',
    title: 'Community/Forums',
    description: 'Enable discussion boards and threads for fan interaction.',
    isEnabled: true,
  },
];
