import { DisplayTextProps } from '@/components/DisplayText/DisplayText.types';

export const displayTextFixtures: Record<string, Omit<DisplayTextProps, 'children'>> = {
  default: {},
  primary: {
    color: 'primary',
  },
  large: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  centered: {
    align: 'center',
  },
}; 