import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start sm:py-12">
      {/* Mobile-optimized Card Wrapper */}
      <div className="w-full max-w-md bg-white shadow-sm sm:rounded-2xl overflow-hidden min-h-screen sm:min-h-0 border border-gray-100">
        
        {/* Header Image Banner Section */}
        <div className="relative h-64 w-full bg-sky-100">
          <Image
            src="/banner.jpg" 
            alt="TheRetiredWealthyGuides"
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlapping Profile Avatar */}
          <div className="absolute -bottom-12 left-6 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-md bg-white">
            <Image
              src="/profile.jpg"
              alt="Profile Avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text and Links Content Section */}
        <div className="pt-16 px-6 pb-12">
          
          {/* Main Headline */}
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
            The Retired Wealthy Guides
          </h1>
          
          {/* Subtext */}
          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            For more info about the membership and joining the trading channel, click below to reach out on:
          </p>

          {/* Inline Raw Text Links */}
          <div className="space-y-3 mb-8 text-sm break-words">
            <p className="text-gray-800">
              <span className="font-semibold text-base block sm:inline mr-1">WhatsApp.</span>
              <Link 
                href="https://wa.link/26glqx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline break-all"
              >
                https://wa.link/26glqx
              </Link>
            </p>
            <p className="text-gray-800">
              <span className="font-semibold text-base block sm:inline mr-1">Telegram.</span>
              <Link 
                href="https://t.me/Frugal_Living_Budget_Mastery" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline break-all"
              >
                https://t.me/RW_Trade_Guides
              </Link>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link 
              href="https://wa.me/+13478149594"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-[#111111] text-white py-3.5 px-5 rounded-xl font-medium transition-all duration-200 hover:bg-gray-800 active:scale-[0.99]"
            >
              <span>Chat on WhatsApp</span>
              <span className="text-lg font-light">→</span>
            </Link>
            
            <Link 
              href="https://t.me/Frugal_Living_Budget_Mastery"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-[#111111] text-white py-3.5 px-5 rounded-xl font-medium transition-all duration-200 hover:bg-gray-800 active:scale-[0.99]"
            >
              <span>Chat on Telegram</span>
              <span className="text-lg font-light">→</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
