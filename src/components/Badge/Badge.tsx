import { default as MuiBadge } from '@mui/material/Badge';
import { ComponentProps, ReactNode } from 'react';

type Props = ComponentProps<typeof MuiBadge> & {
  count: number;
  Icon: ReactNode;
};

const MAX_COUNT = 99;

const Badge = ({ count, Icon, ...badgeProps }: Props) => (
  <MuiBadge
    color="primary"
    badgeContent={count}
    showZero
    max={badgeProps.max ?? MAX_COUNT}
  >
    {Icon}
  </MuiBadge>
);

export default Badge;
