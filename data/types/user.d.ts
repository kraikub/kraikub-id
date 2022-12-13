interface User {
  appQuota: number;
  appOwned: number;
  uid: string;
  signinSignature: string;
  universityEmail: string;
  personalEmail: string;
  profileImageUrl: string;
  shouldUpdate: boolean;
  createdAt: string;
  updatedAt: string;
  settings: {
    email: {
      signin: boolean;
      news: boolean;
    },
    tfa: {
      enable: boolean;
    },
  }
}