import cn from 'classnames';

import s from './PlayIndicator.module.scss';

interface PlayIndicatorProps {
  isPlaying: boolean;
}

export const PlayIndicator = ({ isPlaying }: PlayIndicatorProps) => (
  <div className={cn(s.indicator, { [s.active]: isPlaying })} />
);
