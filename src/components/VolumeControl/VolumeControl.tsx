import * as React from 'react';

import { Button } from '../Button';
import { MuteSvg } from '../svg/MuteSvg';
import { SpeakerSvg } from '../svg/SpeakerSvg';

import s from './VolumeControl.module.scss';

interface VolumeControlProps {
  onVolumeChange: (value: string) => void;
}

export const VolumeControl = ({ onVolumeChange }: VolumeControlProps) => {
  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(event.target.value);
  };

  return (
    <div className={s.volumeControl}>
      <Button theme="ghost" onClick={() => onVolumeChange('0')}>
        <MuteSvg />
      </Button>
      <input className={s.rangeSlider} type="range" onChange={handleVolume} />
      <Button theme="ghost" onClick={() => onVolumeChange('100')}>
        <SpeakerSvg />
      </Button>
    </div>
  );
};
