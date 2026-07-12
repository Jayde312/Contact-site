import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      minHeight: '100vh',
      backgroundColor: '#FAF8F4',
      padding: '48px 16px',
      fontFamily: 'ui-serif, Georgia, "Times New Roman", serif',
      boxSizing: 'border-box'
    }}>

      <div style={{
        width: '100%',
        maxWidth: '460px',
        backgroundColor: '#ffffff',
        borderRadius: '4px',
        overflow: 'hidden',
        border: '1px solid #E4DFD6',
        boxSizing: 'border-box'
      }}>

        {/* Header: plain photo, no badges, no gradients */}
        <div style={{ padding: '40px 32px 0 32px', boxSizing: 'border-box' }}>
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1px solid #E4DFD6',
            position: 'relative',
            marginBottom: '20px'
          }}>
            <Image
              src="/profile.jpg"
              alt="Photo of [Your Name]"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <h1 style={{
            fontSize: '26px',
            fontWeight: '600',
            color: '#1C1A17',
            letterSpacing: '-0.01em',
            margin: '0 0 6px 0',
            lineHeight: '1.2',
            fontFamily: 'ui-serif, Georgia, serif'
          }}>
            [Your Name]
          </h1>

          <p style={{
            fontSize: '14px',
            color: '#8A7F6E',
            margin: '0 0 24px 0',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
          }}>
            Personal finance notes &amp; investing basics
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#E4DFD6', margin: '0 32px' }} />

        {/* Body copy — plain, specific, no urgency or wealth framing */}
        <div style={{ padding: '28px 32px', boxSizing: 'border-box' }}>
          <p style={{
            fontSize: '15px',
            color: '#3A362F',
            lineHeight: '1.65',
            margin: '0 0 16px 0',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
          }}>
            I write plain-language notes on saving, investing basics, and how markets work.
            Free to read, no cost to join.
          </p>

          <p style={{
            fontSize: '15px',
            color: '#3A362F',
            lineHeight: '1.65',
            margin: '0 0 16px 0',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
          }}>
            Some material may become paid later on. Anything free today stays free — I'll say
            clearly if and when that changes.
          </p>

          <p style={{
            fontSize: '13px',
            color: '#8A7F6E',
            lineHeight: '1.6',
            margin: '0 0 28px 0',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontStyle: 'italic'
          }}>
            This is educational content, not financial advice. I'm not a licensed advisor —
            do your own research before making investment decisions.
          </p>

          {/* Contact links — plain, no arrows-as-urgency, no shadow "premium" styling */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                border: '1px solid #D8D2C6',
                color: '#1C1A17',
                padding: '13px 16px',
                borderRadius: '4px',
                fontWeight: '500',
                fontSize: '14px',
                textDecoration: 'none',
                boxSizing: 'border-box',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
              }}
            >
              <svg style={{ width: '16px', height: '16px', fill: '#4A4438', flexShrink: 0 }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </Link>

            <Link
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                border: '1px solid #D8D2C6',
                color: '#1C1A17',
                padding: '13px 16px',
                borderRadius: '4px',
                fontWeight: '500',
                fontSize: '14px',
                textDecoration: 'none',
                boxSizing: 'border-box',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
              }}
            >
              <svg style={{ width: '16px', height: '16px', fill: '#4A4438', flexShrink: 0 }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.46 2.75-2.67.01-.03.01-.14-.06-.2-.07-.06-.17-.04-.25-.02-.11.02-1.83 1.16-5.16 3.41-.49.33-.93.5-1.33.49-.44-.01-1.29-.25-1.92-.45-.77-.25-1.39-.39-1.34-.83.03-.23.35-.46.97-.71 3.82-1.66 6.37-2.75 7.66-3.27 3.65-1.48 4.41-1.74 4.9-.15z"/>
              </svg>
              <span>Telegram</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
