/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/cryptoModern/logo.png';

export const navbar = {
  logo: logo,
  navMenu: [
    {
      id: 1,
      label: 'Home',
      path: '/',
      offset: '84',
    },
    {
      id: 2,
      label: 'Techrate Audit',
      path: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/Uncle%20Doge.pdf',
      offset: '81',
    },
    {
      id: 3,
      label: 'WhitePaper',
      path: '/roadmap',
      offset: '81',
    },
    {
      id: 4,
      label: 'Chart',
      path: 'https://poocoin.app/tokens/0xd2618bc9c9cdc40ff19e200a7d14a09799c0a152',
      offset: '81',
    },
    {
      id: 5,
      label: 'Bsc Scan',
      path: 'https://bscscan.com/token/0xd2618bc9c9cdc40ff19e200a7d14a09799c0a152',
      offset: '81',
    },
  ],
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/cryptoModern/choose(1).gif';
import featureIcon2 from 'common/assets/image/cryptoModern/choose(2).gif';
import featureIcon3 from 'common/assets/image/cryptoModern/choose(3).gif';
import featureIcon4 from 'common/assets/image/cryptoModern/choose(4).gif';

export const Features = [
  {
    id: 1,
    icon: featureIcon1 ,
    
    title: 'Stability',
    
  },
  {
    id: 2,
    icon: featureIcon2,
    title: 'Peace of Mind',
    
  },
  {
    id: 3,
    icon: featureIcon3,
    title: 'Dump Proof*',
    //description:
     // 'Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining.',
  },
  {
    id: 4,
    icon: featureIcon4,
    title: 'Chosen By You',
  //  description:
    //  'You can mine any cryptocurrency available in our catalogue! Switch your mining power.',
  },
];

/* ------------------------------------ */
// Wallet  data section
/* ------------------------------------ */
import walletIcon1 from 'common/assets/image/cryptoModern/wallet1.png';
import walletIcon2 from 'common/assets/image/cryptoModern/wallet2.png';
import walletIcon3 from 'common/assets/image/cryptoModern/wallet3.png';
import { style } from 'styled-system';

export const WalletFeatures = [
  {
    id: 1,
    icon: walletIcon1,
    title: 'Secure transfers with verified Casinos.',
  },
  {
    id: 2,
    icon: walletIcon2,
    title: 'Easily buy and sell CLV within the wallet',
  },
  {
    id: 3,
    icon: walletIcon3,
    title: 'Pay as many as you want',
  },
];

/* ------------------------------------ */
// Faq  data section
/* ------------------------------------ */

export const Faq = [
  {
    id: 1,
    expend: true,
    title: 'How to contact with Customer Service?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    id: 2,
    title: 'App installation failed, how to update system information?',
    description:
      'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
  },
  {
    id: 3,
    title: 'Website reponse taking time, how to improve?',
    description:
      'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
  },
  {
    id: 4,
    title: 'New update fixed all bug and issues?',
    description:
      'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
  },
];

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const Footer_Data = [
  {
    title: 'Socials',
    menuItems: [
      {
        url: '#',
        text: 'Telegram',
      },
      {
        url: '#',
        text: 'Twitter',
      },
      
    ],
  },
  {
    title: 'Charts',
    menuItems: [
      {
        url: '#',
        text: 'Poocoin',
      },
      {
        url: '#',
        text: 'CMC',
      },
      {
        url: '#',
        text: 'Dex Tools',
      },
      
    ],
  },
  {
    title: 'Information',
    menuItems: [
      {
        url: '#',
        text: 'Bsc Scan',
      },
      
    ],
  },
  {
    title: 'Become a $UDoge Holder',
    menuItems: [
      {
        url: '#',
        text: 'Uncle Doge Swap',
      },
      
    ],
  },
];
