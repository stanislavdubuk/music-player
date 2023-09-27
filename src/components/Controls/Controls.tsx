import { Button } from '../Button';
import { ESongChangeDirection } from '../Player/enums';

import { ArrowsSvg } from '../svg/ArrowsSvg';
import { PlaySvg } from '../svg/PlaySvg';

import s from './Controls.module.scss';

interface ControlsProps {
  isPlaying: boolean;
  onPlay: () => void;
  onSongChange: (direction: ESongChangeDirection) => void;
}

export const Controls = ({
  isPlaying,
  onPlay,
  onSongChange,
}: ControlsProps) => (
  <div className={s.controls}>
    <Button
      className={s.backwardButton}
      onClick={() => onSongChange(ESongChangeDirection.Back)}
      disabled={isPlaying}
    >
      <ArrowsSvg />
    </Button>
    <Button className={s.playButton} onClick={onPlay}>
      <PlaySvg active={isPlaying} />
    </Button>
    <Button
      className={s.forwardButton}
      onClick={() => onSongChange(ESongChangeDirection.Forward)}
      disabled={isPlaying}
    >
      <ArrowsSvg />
    </Button>
  </div>
);
