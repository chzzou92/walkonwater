import Link from "next/link";
import Image from "next/image";

export default function InfoPage() {
  return (
    <div
      className="min-h-screen bg-black flex items-center justify-center"
      style={{ aspectRatio: "2160/1080" }}
    >
      <div className="w-full h-full relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover pointer-events-none"
        >
          <source src="/Walk on Water Info Page.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Link
          href="/index"
          className="absolute top-8 left-8 z-10 text-white font-['AppleGaramond'] text-xl hover:text-gray-300"
        >
          Walk on Water
        </Link>

        <div className="text-white text-center">
          <h1 className="text-md mb-4 -ml-[40%] -mt-[45%] font-['AppleGaramond']">
            Info: On the Festival Circuit
          </h1>
          <p className="text-l font-['AppleGaramond'] -mr-[-44%]  max-w-4xl mx-auto mb-8">
            Jeffrey, a rising Division I track star, spends his final summer before college <br />
            training with Charlie, a devoted swim recruit, by the lake they&apos;ve always <br />
            called home. One afternoon, Jeffrey stumbles upon a weathered pistol buried <br />
            in the brush—its discovery unraveling. When the emotional pressure reaches <br />
            a breaking point, Charlie races against something unseen—toward a moment <br />
            that could change everything.
        </p>
          <ul className="text-l font-['AppleGaramond'] mt-[28%] max-w-4xl mx-auto space-y-2 text-left pl-8 mb-8">
            <li>
              • Asian American International Film Festival 2025 - Official
              Selection (World Premiere in August)
            </li>
            <li>• Ivy Film Festival 2025 - Official Selection</li>
          </ul>

          <Image
            src="/54716451718_08d632a4b9_o 2.JPG"
            alt="Additional Image"
            width={600}
            height={400}
            className="mx-auto w-[600px] h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
