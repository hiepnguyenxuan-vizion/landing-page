export interface LanguageOptsProps {
  title: string;
  code: string;
  img: string;
}

export const LANGUAGE_OPTIONS : Array<LanguageOptsProps> = [
  {
    title: 'English',
    code: 'en',
    img: '/assets/images/flag/uk.png',
  },
  {
    title: `Vietnamese`,
    code: 'vi',
    img: '/assets/images/flag/vietnam.png',
  },
]

