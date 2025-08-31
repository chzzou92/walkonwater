export default function IndexPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center"style={{ aspectRatio: '2160/1080' }}>
        <div className="w-full h-full relative" >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/Walk on Water Index Clip.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Navigation Links */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <a 
              href="/info" 
              className="text-white text-xl mb-8 font-['AppleGaramond'] hover:text-gray-300 transition-colors"
              style={{ top: '15%', left: '38%', position: 'absolute' }}
            >
              Info & Updates
            </a>
            <a 
              href="#" 
              className="text-white text-xl mb-8 font-['AppleGaramond'] hover:text-gray-300 transition-colors"
              style={{ top: '20%',left: '38%', position: 'absolute' }}
            >
              Deleted Scenes
            </a>
            <a 
              href="#" 
              className="text-white text-xl mb-8 font-['AppleGaramond'] hover:text-gray-300 transition-colors"
              style={{ top: '25%', left: '38%',position: 'absolute' }}
            >
              Final Film
            </a>
            <a 
              href="#" 
              className="text-white text-xl mb-8 font-['AppleGaramond'] hover:text-gray-300 transition-colors"
              style={{ top: '30%', left: '38%',position: 'absolute' }}
            >
              Behind the Scenes
            </a>
          </div>
          <div 
            className="absolute text-white text-sm font-['AppleGaramond'] z-10"
            style={{ bottom: '2%', right: '12%' }}
          >
            Contact: chzzou92@gmail.com
          </div>
        </div>
    </div>
  );
} 