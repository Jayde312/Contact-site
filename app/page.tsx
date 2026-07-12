import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Clean, unified link constants
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex justify-center items-start sm:py-16 px-0 sm:px-4">
      {/* Premium Card Wrapper */}
      <div className="w-full max-w-md bg-white shadow-xl shadow-slate-200/80 sm:rounded-3xl overflow-hidden min-h-screen sm:min-h-0 border border-slate-100 transition-all duration-300">
        
        {/* Header Image Banner Section */}
        <div className="relative h-64 w-full bg-slate-200">
          <Image
            src="/banner.jpg" 
            alt="The Retired Wealthy Guides Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          
          {/* Overlapping Profile Avatar */}
          <div className="absolute -bottom-14 left-6 w-28 h-28 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105">
            <Image
              src="/profile.jpg"
              alt="The Retired Wealthy Guides Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text and Links Content Section */}
        <div className="pt-18 px-6 pb-12 mt-14">
          
          {/* Verified Badge */}
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            Official Channel
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl font-black text-slate-950 tracking-tight mb-3">
            The Retired Wealthy Guides
          </h1>
          
          {/* Subtext */}
          <p className="text-slate-600 text-base mb-6 leading-relaxed">
            For more info about the membership and joining the trading channel, click below to reach out on:
          </p>

          {/* Inline Raw Text Links */}
          <div className="space-y-3 mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 break-all">
              <span className="font-bold text-slate-800 min-w-[90px]">WhatsApp:</span>
              <Link 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-600 hover:text-emerald-700 hover:underline font-medium"
              >
                {WHATSAPP_URL}
              </Link>
            </div>
            <div className="h-[1px] bg-slate-200/60 w-full" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 break-all">
              <span className="font-bold text-slate-800 min-w-[90px]">Telegram:</span>
              <Link 
                href={TELEGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-600 hover:text-sky-700 hover:underline font-medium"
              >
                {TELEGRAM_URL}
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            {/* WhatsApp Button */}
            <Link 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full bg-slate-950 hover:bg-emerald-600 text-white py-4 px-5 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-emerald-200 hover:shadow-lg active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                {/* SVG WhatsApp Icon */}
                <svg className="w-5 h-5 fill-current text-white group-hover:animate-bounce" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4 0 11.95 0c3.176.001 6.163 1.24 8.404 3.485 2.242 2.246 3.476 5.237 3.475 8.417-.004 6.557-5.338 11.907-11.893 11.907-2.003-.001-3.973-.507-5.731-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.028 14.066.999 11.945 1c-5.443 0-9.87 4.371-9.874 9.799-.001 1.745.474 3.447 1.373 4.936l-.99 3.616 3.692-.957z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </div>
              <span className="text-xl font-light transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            
            {/* Telegram Button */}
            <Link 
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full bg-slate-950 hover:bg-sky-600 text-white py-4 px-5 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-sky-200 hover:shadow-lg active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                {/* SVG Telegram Icon */}
                <svg className="w-5 h-5 fill-current text-white group-hover:animate-bounce" viewBox="0 0 24 24">
                  <path d="M11.944 0C5.344 0 0 5.344 0 11.944c0 5.622 3.88 10.331 9.133 11.594.46.084.629-.2.629-.444 0-.218-.008-.794-.012-1.56-3.32.721-4.02-1.6-4.02-1.6-.543-1.38-1.327-1.748-1.327-1.748-1.084-.741.082-.726.082-.726 1.199.084 1.83 1.232 1.83 1.232 1.065 1.825 2.794 1.298 3.475.992.108-.772.417-1.298.759-1.597-2.65-.301-5.437-1.325-5.437-5.9 0-1.303.466-2.368 1.23-3.103-.123-.302-.533-1.516.117-3.06 0 0 1.002-.321 3.282 1.224a11.442 11.442 0 016.008 0c2.277-1.545 3.277-1.224 3.277-1.224.653 1.544.243 2.758.12 3.06.767.735 1.227 1.8 1.227 3.103 0 4.586-2.792 5.596-5.449 5.891.428.37.812 1.101.812 2.219 0 1.603-.015 2.895-.015 3.288 0 .247.167.533.634.442C20.125 22.271 24 17.564 24 11.944 24 5.344 18.656 0 11.944 0z"/>
                  {/* Clean standard paper airplane map fallback */}
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-2.11 9.94c-.15.68-.56.84-1.13.52l-3.22-2.37-1.55 1.49c-.17.17-.32.3-.65.3l.23-3.27 5.95-5.38c.26-.23-.06-.36-.41-.13l-7.35 4.63-3.17-1c-.69-.21-.7-.69.14-1.02l12.39-4.78c.57-.21 1.07.13.82 1.09z"/>
                </svg>
                <span>Chat on Telegram</span>
              </div>
              <span className="text-xl font-light transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
