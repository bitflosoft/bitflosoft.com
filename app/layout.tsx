import type { Metadata } from 'next';
import { Outfit, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  manifest: '/site.webmanifest',
  title: 'Bitflosoft — Independent Mobile App Studio',
  description:
    'Bitflosoft is an independent mobile app studio building apps we believe in. Currently developing int:act — an AI-powered goal planner for iOS and Android that turns intentions into real progress.',
  keywords: [
    'mobile app studio',
    'independent app studio',
    'iOS app',
    'Android app',
    'int:act',
    'AI goal planner',
    'productivity app',
    'goal planning app',
    'Bitflosoft',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* Anti-flash: apply stored theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
