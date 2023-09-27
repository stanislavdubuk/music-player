import * as React from 'react';
import cn from 'classnames';

import { playAudio } from '../../utils/playAudio';
import { Controls } from '../Controls';
import { PlayIndicator } from '../PlayIndicator';
import { VolumeControl } from '../VolumeControl';
import { SONGS } from './config';
import { ESongChangeDirection } from './enums';

import s from './Player.module.scss';

export const Player = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentSong, setCurrentSong] = React.useState(0);

  const audioPlayer = React.useRef<HTMLAudioElement | null>(null);
  const progressBar = React.useRef<HTMLInputElement | null>(null);
  const animationRef = React.useRef<number>();

  const handleUpdateTime = () => {
    if (!(progressBar.current && audioPlayer.current)) return;

    audioPlayer.current.currentTime = Number(progressBar.current.value);
  };

  const handleUpdateProgress = () => {
    if (!(progressBar.current && audioPlayer.current)) return;

    progressBar.current.value = String(audioPlayer.current.currentTime);
    animationRef.current = requestAnimationFrame(handleUpdateProgress);
  };

  const handlePlay = () => {
    if (!audioPlayer.current) return;

    playAudio(
      audioPlayer.current,
      isPlaying,
      setIsPlaying,
      handleUpdateProgress,
      animationRef.current
    );
  };

  const handleVolume = (volume: string) => {
    if (!audioPlayer.current) return;

    audioPlayer.current.volume = Number(volume) / 100;
  };

  const handleSongChange = (direction: ESongChangeDirection) => {
    const isForward = direction === ESongChangeDirection.Forward;
    const isEndOfList = Object.keys(SONGS).length - 1 === currentSong;
    const isStartOfList = currentSong === 0;

    if (isEndOfList && isForward) {
      setCurrentSong(0);
      return;
    }

    if (isStartOfList && !isForward) {
      setCurrentSong(Object.keys(SONGS).length - 1);
      return;
    }

    setCurrentSong(isForward ? currentSong + 1 : currentSong - 1);
  };

  React.useEffect(() => {
    audioPlayer.current = new Audio(SONGS[currentSong].source);
  }, [currentSong]);

  return (
    <div className={s.player}>
      <div className={s.container}>
        <Controls
          isPlaying={isPlaying}
          onPlay={handlePlay}
          onSongChange={handleSongChange}
        />
        <div className={s.playback}>
          <VolumeControl onVolumeChange={handleVolume} />
          <span className={s.title}>{SONGS[currentSong].title}</span>
          <input
            ref={progressBar}
            type="range"
            defaultValue={0}
            className={cn(s.progressBar, { [s.inactive]: !isPlaying })}
            onChange={handleUpdateTime}
          />
        </div>
        <PlayIndicator isPlaying={isPlaying} />
      </div>
    </div>
  );
};
