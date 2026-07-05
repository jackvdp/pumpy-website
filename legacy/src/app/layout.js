import "./css/icon.css"
import "./css/vendors.css"
import "./css/style.css"
import "./css/responsive.css"
import "./css/digital-agency.css"
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer"
import {MusicPlayerProvider} from "@/components/MusicPlayer/MusicPlayerProvider"
import CustomCursor from "@/components/CustomCursor"
import ScrollIndicator from "@/components/ScrollIndicator"
import LegacyScripts from "@/components/LegacyScripts"

export const metadata = {
    title: "Vanderpump Tech | Web & App Development",
    description: "Bespoke Web & App Development Solutions",
    icons: {
        icon: '/favicon/favicon-32x32.png',
        shortcut: '/favicon/favicon.ico',
        apple: '/favicon/apple-touch-icon.png',
        other: [
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                url: '/favicon/favicon-16x16.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/favicon/favicon-32x32.png',
            },
        ],
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            
            {/* Preconnect to external origins for faster loading */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            
            {/* Load fonts with display=swap to prevent FOIT */}
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />
            
            {/* Preload critical hero image */}
            <link
                rel="preload"
                as="image"
                href="/imagesNew/hero/hero2.webp"
                type="image/webp"
            />
            
            {/* Inline critical JS to remove no-js class immediately */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');`
                }}
            />
        </head>
        <body data-mobile-nav-style="full-screen-menu" data-mobile-nav-bg-color="#2d2c2b" className="custom-cursor">
        <MusicPlayerProvider>
            <CustomCursor/>
            {children}
            <ScrollIndicator/>
            <MusicPlayer/>
        </MusicPlayerProvider>
        
        {/* Legacy scripts loaded in sequence: jQuery → vendors → main */}
        <LegacyScripts />
        </body>
        </html>
    );
}
