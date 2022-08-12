import iconFacebook from 'assets/icon/icon-fb.svg';
import iconLinkedin from 'assets/icon/icon-linkedin.svg';

import iconPhone from 'assets/icon/phone-solid.svg';
import iconAddress from 'assets/icon/location-dot-solid.svg';
import iconEmail from 'assets/icon/envelope-solid.svg';

interface Social {
  icon: string;
  to: string;
  name: string;
}

export const SOCIALS_LIST: Array<Social> = [
  {
    icon: iconFacebook,
    to: 'https://facebook.com/vizion.tech.llc',
    name: 'Facebook',
  },
  {
    icon: iconLinkedin,
    to: 'https://www.linkedin.com/company/vizion-space',
    name: 'Linkedin',
  },
];

interface Contact extends Social {
  name: string;
  icon: string;
  to: string;
  content: string;
}

export const PHONE_CONTACT: Contact = {
  name: 'Phone',
  icon: iconPhone,
  to: 'tel:+842839483800',
  content: '(+84) 2839 483 800',
};

export const EMAIL_CONTACT: Contact = {
  name: 'Email',
  icon: iconEmail,
  to: '',
  content: 'info@vizion.space',
};

export const ADDRESS_CONTACT: Contact = {
  name: 'Address',
  icon: iconAddress,
  to: '',
  content: 'address',
};
