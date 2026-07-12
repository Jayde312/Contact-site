import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

  return (
    // Main full-screen wrapper
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-start', 
      minHeight: '100vh', 
      backgroundColor: '#f1f5f9', 
      padding: '40px 12px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      boxSizing: 'border-box'
    }}>
      
      {/* Premium Landing Card */}
      <div style={{ 
        width: '100%', 
        maxWidth: '430px', 
        backgroundColor: '#ffffff', 
        borderRadius: '24px', 
        overflow: 'hidden', 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        border: '1px solid #e2e8f0',
        boxSizing: 'border-box'
      }}>
        
        {/* Banner Section */}
        <div style={{ position: 'relative', height: '240px', width: '100%', backgroundColor: '#cbd5e1' }}>
          <Image
            src="/banner.jpg" 
            alt="The Retired Wealthy Guides Banner"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          
          {/* Circular Profile Avatar (Forced into position via core CSS) */}
          <div style={{ 
            position: 'absolute', 
            bottom: '-52px', 
            left: '24px', 
            width: '104px', 
            height: '104px', 
            borderRadius: '50%', 
            border: '4px solid #ffffff', 
            overflow: 'hidden', 
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
            zIndex: 10
          }}>
            <Image
              src="/profile.jpg"
              alt="Profile Avatar"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Content Body */}
        <div style={{ paddingTop: '72px', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '36px', boxSizing: 'border-box' }}>
          
          {/* Trust Badge */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center',
            backgroundColor: '#fef3c7', 
            color: '#b45309', 
            fontSize: '12px', 
            fontWeight: '700', 
            padding: '6px 14px', 
            borderRadius: '9999px', 
            marginBottom: '14px', 
            border: '1px solid #fde68a',
            letterSpacing: '0.02em'
          }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#d97706', borderRadius: '50%', marginRight: '6px' }}></span>
            Official Channel
          </div>

          {/* Headline Title */}
          <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.03em', margin: '0 0 4px 0', lineHeight: '1.15' }}>
            The Retired Wealthy Guides
          </h1>
          
          {/* Catchphrase Subheading extracted from banner artwork */}
          <p style={{ fontSize: '13px', fontWeight: '800', color: '#059669', letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
            Investing Today for a Wealthy Tomorrow
          </p>
          
          {/* Context Explainer Paragraph */}
          <p style={{ fontSize: '15px', color: '#475569', margin: '0 0 24px 0', lineHeight: '1.6' }}>
            Welcome to the early retirement plan. Ready to scale your portfolio? Connect directly with our execution team to unlock exclusive trading channels, signals, and elite wealth masterclass groups.
          </p>

          {/* Quick Value Metrics Layout */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            backgroundColor: '#f8fafc', 
            border: '1px solid #e2e8f0', 
            borderRadius: '16px', 
            padding: '14px', 
            marginBottom: '28px',
            textAlign: 'center'
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '18px', marginBottom: '2px' }}>📊</div>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#334155' }}>Daily Signals</div>
            </div>
            <div style={{ flex: 1, borderLeft: '1px solid #cbd5e1', borderRight: '1px solid #cbd5e1' }}>
              <div style={{ fontSize: '18px', marginBottom: '2px' }}>🌴</div>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#334155' }}>Early Freedom</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '18px', marginBottom: '2px' }}>💎</div>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#334155' }}>VIP Community</div>
            </div>
          </div>

          {/* Action Interactive Buttons (Cleaned up: No duplicate raw text block) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            
            {/* Native Styled WhatsApp Button */}
            <Link 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                width: '100%', 
                backgroundColor: '#128C7E', 
                color: '#ffffff', 
                padding: '16px 20px', 
                borderRadius: '16px', 
                fontWeight: '700', 
                fontSize: '16px',
                textDecoration: 'none',
                boxSizing: 'border-box',
                boxShadow: '0 4px 12px rgba(18, 140, 126, 0.15)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* SVG WhatsApp Vector Graphic */}
                <svg style={{ width: '20px', height: '20px', fill: '#ffffff' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </div>
              <span style={{ fontSize: '18px', fontWeight: '300' }}>→</span>
            </Link>
            
            {/* Native Styled Telegram Button */}
            <Link 
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                width: '100%', 
                backgroundColor: '#0088cc', 
                color: '#ffffff', 
                padding: '16px 20px', 
                borderRadius: '16px', 
                fontWeight: '700', 
                fontSize: '16px',
                textDecoration: 'none',
                boxSizing: 'border-box',
                boxShadow: '0 4px 12px rgba(0, 136, 204, 0.15)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* SVG Telegram Vector Graphic */}
                <svg style={{ width: '20px', height: '20px', fill: '#ffffff' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.46 2.75-2.67.01-.03.01-.14-.06-.2-.07-.06-.17-.04-.25-.02-.11.02-1.83 1.16-5.16 3.41-.49.33-.93.5-1.33.49-.44-.01-1.29-.25-1.92-.45-.77-.25-1.39-.39-1.34-.83.03-.23.35-.46.97-.71 3.82-1.66 6.37-2.75 7.66-3.27 3.65-1.48 4.41-1.74 4.9-.15z"/>
                </svg>
                <span>Chat on Telegram</span>
              </div>
              <span style={{ fontSize: '18px', fontWeight: '300' }}>→</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
