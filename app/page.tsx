import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

  return (
    <div 
      className="min-h-screen bg-slate-50 flex justify-center items-start sm:py-16"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh', backgroundColor: '#f8fafc', padding: '20px 10px' }}
    >
      {/* Container Card */}
      <div 
        className="w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100"
        style={{ width: '100%', maxWidth: '440px', backgroundColor: '#ffffff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', border: '1px solid #f1f5f9' }}
      >
        
        {/* Banner Section */}
        <div 
          className="relative bg-slate-200"
          style={{ position: 'relative', height: '240px', width: '100%', backgroundColor: '#e2e8f0' }}
        >
          <Image
            src="/banner.jpg" 
            alt="The Retired Wealthy Guides Banner"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          
          {/* Circular Profile Picture (Protected from layout distortion) */}
          <div 
            className="absolute bg-white shadow-md"
            style={{ 
              position: 'absolute', 
              bottom: '-50px', 
              left: '24px', 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              border: '4px solid #ffffff', 
              overflow: 'hidden', 
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              backgroundColor: '#ffffff',
              zIndex: 10
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Profile Avatar"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Text Content Area */}
        <div 
          className="px-6 pb-10"
          style={{ paddingTop: '70px', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '40px' }}
        >
          {/* Channel Badge */}
          <div style={{ display: 'inline-block', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '12px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '9999px', marginBottom: '16px', border: '1px solid #fde68a' }}>
            Official Channel
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.025em', margin: '0 0 12px 0', lineHeight: '1.2' }}>
            The Retired Wealthy Guides
          </h1>
          
          {/* Description */}
          <p style={{ fontSize: '16px', color: '#475569', margin: '0 0 24px 0', lineHeight: '1.6' }}>
            For more info about the membership and joining the trading channel, click below to reach out on:
          </p>

          {/* Clean Info Block */}
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '16px', marginBottom: '28px', fontSize: '14px' }}>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ color: '#1e293b', display: 'inline-block', width: '90px' }}>WhatsApp:</strong>
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#059669', textDecoration: 'none', fontWeight: '500' }}>
                {WHATSAPP_URL}
              </Link>
            </div>
            <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '8px 0' }} />
            <div>
              <strong style={{ color: '#1e293b', display: 'inline-block', width: '90px' }}>Telegram:</strong>
              <Link href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7', textDecoration: 'none', fontWeight: '500' }}>
                {TELEGRAM_URL}
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* WhatsApp Link */}
            <Link 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                width: '100%', 
                backgroundColor: '#0f172a', 
                color: '#ffffff', 
                padding: '14px 20px', 
                borderRadius: '16px', 
                fontWeight: '600', 
                textDecoration: 'none',
                boxSizing: 'border-box'
              }}
            >
              <span>Chat on WhatsApp</span>
              <span style={{ fontSize: '18px' }}>→</span>
            </Link>
            
            {/* Telegram Link */}
            <Link 
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                width: '100%', 
                backgroundColor: '#0f172a', 
                color: '#ffffff', 
                padding: '14px 20px', 
                borderRadius: '16px', 
                fontWeight: '600', 
                textDecoration: 'none',
                boxSizing: 'border-box'
              }}
            >
              <span>Chat on Telegram</span>
              <span style={{ fontSize: '18px' }}>→</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
