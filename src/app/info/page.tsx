export default function InfoPage() {
  return (
    <div className="min-h-[150vh] bg-white flex items-center justify-center relative">
      <a 
        href="/index" 
        className="absolute top-8 left-8 text-black font-['AppleGaramond'] text-xl hover:underline"
      >
        Walk on Water
      </a>
      <div className="text-black text-center">
        <h1 className="text-md mb-4 -mt-[20%] font-['AppleGaramond']">Info: On the Festival Circuit</h1>
        <img 
          src="/WalkOnWaterInfoPicture.PNG" 
          alt="Screenshot" 
          className="mx-auto mb-8 w-[600px] h-auto max-w-full"
        />
        <p className="text-l font-['AppleGaramond'] max-w-4xl mx-auto leading-relaxed mb-8">
          Jeffrey, a rising Division I track star, spends his final summer before college training with Charlie, a devoted swim recruit, by the lake they've always called home. One afternoon, Jeffrey stumbles upon a weathered pistol buried in the brush—its discovery igniting a slow unraveling. When the emotional pressure reaches a breaking point, Charlie races against something unseen—toward a moment that could change everything.
        </p>
        <ul className="text-l font-['AppleGaramond'] max-w-4xl mx-auto space-y-2 text-left pl-8 mb-8">
          <li>• Asian American International Film Festival 2025 - Official Selection (World Premiere in August)</li>
          <li>• Ivy Film Festival 2025 - Official Selection</li>
        </ul>
        <img 
          src="/54716451718_08d632a4b9_o 2.JPG" 
          alt="Additional Image" 
          className="mx-auto w-[600px] h-auto max-w-full"
        />
      </div>
    </div>
  );
} 