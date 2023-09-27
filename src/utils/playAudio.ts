export const playAudio = (
  audio: HTMLAudioElement,
  isPlaying: boolean,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
  updateProgress: () => void,
  animation?: number
) => {
  if (isPlaying) {
    audio.pause();
    setIsPlaying(false);
    if (animation) cancelAnimationFrame(animation);
    return;
  }

  audio.play();
  setIsPlaying(true);
  animation = requestAnimationFrame(updateProgress);

  audio.onended = () => {
    setIsPlaying(false);

    audio.currentTime = 0;
  };
};
