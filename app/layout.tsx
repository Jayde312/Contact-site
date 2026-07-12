import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex justify-center items-start sm:py-16 px-0 sm:px-4">
      {/* Premium Card Wrapper */}
      <div className="w-full max-w-md bg-white shadow-2xl shadow-slate-300/60 sm:rounded-3xl overflow-hidden min-h-screen sm:min-h-0 border border-slate-100">
        
        {/* Header Image Banner Section */}
        <div className="relative h-64 w-full bg-slate-200">
          <Image
            src="/banner.jpg" 
            alt="The Retired Wealthy Guides Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          
          {/* Overlapping Profile Avatar */}
          <div className="absolute -bottom-14 left-6 w-28 h-28 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white">
            <Image
              src="/profile.jpg"
              alt="The Retired Wealthy Guides Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text and Links Content Section */}
        <div className="pt-16 px-6 pb-12">
          
          {/* Official Channel Badge */}
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Official Channel
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl font-black text-slate-950 tracking-tight mb-1">
            The Retired Wealthy Guides
          </h1>
          
          {/* Subheading pulled directly from your asset */}
          <p className="text-emerald-600 font-bold text-sm tracking-wide uppercase mb-4">
            Investing Today for a Wealthy Tomorrow
          </p>
          
          {/* Detailed Context/Bio Text */}
          <p className="text-slate-600 text-base mb-6 leading-relaxed">
            Welcome to the early retirement blueprint. Ready to take full control of your financial destiny? Secure your membership and gain direct entry to our exclusive trading channels by reaching out below.
          </p>

          {/* Value Proposition Highlights Grid */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs mb-8 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <div className="flex flex-col items-center">
              <span className="text-lg mb-1">📈</span>
              <span className="font-bold text-slate-800">Daily Signals</span>
            </div>
            <div className="flex flex-col items-center border-x border-slate-200">
              <span className="text-lg mb-1">🌴</span>
              <span className="font-bold text-slate-800">Early Assets</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg mb-1">💎</span>
              <span className="font-bold text-slate-800">VIP Access</span>
            </div>
          </div>

          {/* CTA Buttons Block */}
          <div className="space-y-4">
            
            {/* Redesigned WhatsApp Button */}
            <Link 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full bg-[#128C7E] hover:bg-[#075E54] text-white py-4 px-5 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-emerald-700/10 active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                {/* Official SVG WhatsApp Vector Icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </div>
              <span className="text-xl font-light opacity-80 group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            {/* Redesigned Telegram Button */}
            <Link 
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full bg-[#0088cc] hover:bg-[#0077b3] text-white py-4 px-5 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-sky-700/10 active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                {/* Official SVG Telegram Vector Icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.46 2.75-2.67.01-.03.01-.14-.06-.2-.07-.06-.17-.04-.25-.02-.11.02-1.83 1.16-5.16 3.41-.49.33-.93.5-1.33.49-.44-.01-1.29-.25-1.92-.45-.77-.25-1.39-.39-1.34-.83.03-.23.35-.46.97-.71 3.82-1.66 6.37-2.75 7.66-3.27 3.65-1.48 4.41-1.74 4.9-.15z"/>
                </svg>
                <span>Chat on Telegram</span>
              </div>
              <span className="text-xl font-light opacity-80 group-hover:translate-x-1 transition-transform">→</span>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}
