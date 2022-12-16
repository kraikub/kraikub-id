interface ReducedLog {
  clientId: string;
  scope: string;
  timestamp: string;
  userAgentPlatform: string;
  userAgentMobile: string;
  userAgent: string;
  ip: string;
  ssid: string;
  createdAt: string;
  updatedAt: string;
}

interface ReducedAccess {
  accessId: string;
  clientId: string;
  createdAt: string;
  uid: string;
  updatedAt: string;
  application: {
    appName: string;
    appDescription: string;
    appType: string;
    creatorName: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

interface OAuthActivitiesProps {
  accesses: ReducedAccess[]
  logs: ReducedLog[]
}
