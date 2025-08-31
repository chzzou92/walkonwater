// Fix for the volume control issue
const volumeControlFix = `
  // Control volume based on scroll position
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const maxScroll = 800;
      const expansionProgress = Math.min(scrollY / maxScroll, 1);
      
      // Volume ramps from 0 to 1 (0% to 100%)
      const volume = expansionProgress;
      
      // Only set volume if video is not muted, otherwise keep it at 0
      if (!video.muted) {
        video.volume = volume;
      } else {
        video.volume = 0;
      }
    }
  }, [scrollY]);
`;

console.log(volumeControlFix);
