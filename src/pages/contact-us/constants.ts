import iconTrial from 'assets/icon/icon-trial.svg';
import iconSilver from 'assets/icon/icon-silver.svg';
import iconGold from 'assets/icon/icon-gold.svg';

export interface Level {
  icon: string;
  name: string;
  benefit: Array<string>;
  commitments: Array<string>;
}

export interface FormData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  subject?: string;
  message?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  companyName?: string;
  reason: string;
}

export const PARTNER_LEVEL: Array<Level> = [
  {
    icon: iconTrial,
    name: 'Trial',
    benefit: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla risus, curabitur sit nibh sociis ipsum.',
      'Senectus ornare vitae quisque aliquam lorem sit sit. Sociis mattis luctus quis at magnis.',
      'Ullamcorper in iaculis ut ante viverra urna. Sed velit, arcu, massa consequat metus.',
    ],
    commitments: [
      'Senectus ornare vitae quisque aliquam lorem sit sit. Sociis mattis luctus quis at magnis.',
      ' Ullamcorper in iaculis ut ante viverra urna. Sed velit, arcu, massa consequat metus.',
    ],
  },
  {
    icon: iconSilver,
    name: 'Silver',
    benefit: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla risus, curabitur sit nibh sociis ipsum.',
      'Senectus ornare vitae quisque aliquam lorem sit sit. Sociis mattis luctus quis at magnis.',
      'Ullamcorper in iaculis ut ante viverra urna. Sed velit, arcu, massa consequat metus.',
    ],
    commitments: [
      'Senectus ornare vitae quisque aliquam lorem sit sit. Sociis mattis luctus quis at magnis.',
      ' Ullamcorper in iaculis ut ante viverra urna. Sed velit, arcu, massa consequat metus.',
    ],
  },
  {
    icon: iconGold,
    name: 'Gold',
    benefit: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla risus, curabitur sit nibh sociis ipsum.',
      'Senectus ornare vitae quisque aliquam lorem sit sit. Sociis mattis luctus quis at magnis.',
      'Ullamcorper in iaculis ut ante viverra urna. Sed velit, arcu, massa consequat metus.',
    ],
    commitments: [
      'Senectus ornare vitae quisque aliquam lorem sit sit. Sociis mattis luctus quis at magnis.',
      ' Ullamcorper in iaculis ut ante viverra urna. Sed velit, arcu, massa consequat metus.',
    ],
  },
];

export const FORM_INITIAL_VALUE: FormData = {
  fullName: '',
  email: '',
  message: '',
  phoneNumber: '',
  subject: '',
};

export const CONTACT_FORM_INITIAL_VALUE: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  reason: '',
  phoneNumber: '',
  companyName: '',
};
