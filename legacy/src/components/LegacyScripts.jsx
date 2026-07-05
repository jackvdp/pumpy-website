"use client"

import Script from "next/script"
import {useState} from "react"

/**
 * Handles loading of legacy jQuery/vendor scripts in the correct order.
 * Scripts are loaded lazily and chained to ensure dependencies are met.
 * 
 * Load order: jQuery → vendors-minimal.js → main.js
 * 
 * vendors-minimal.js (348KB) contains only:
 * - anime.min.js (animations)
 * - splitting.js (text effects)
 * - jquery.appear.js (scroll triggers)
 * - imagesloaded.pkgd.js (image loading)
 * - isotope.pkgd.js (portfolio filtering)
 * - bootstrap.bundle.js (navigation collapse)
 * 
 * Removed from original vendors.js (1.4MB):
 * - swiper-bundle.js (using React Swiper instead)
 * - gsap.js, skrollr.js, particles.js, magnific-popup.js
 * - and many other unused libraries
 */
export default function LegacyScripts() {
    const [jqueryLoaded, setJqueryLoaded] = useState(false)
    const [vendorsLoaded, setVendorsLoaded] = useState(false)
    
    return (
        <>
            {/* jQuery - loads first, deferred until page is idle */}
            <Script 
                src="/js/jquery.js" 
                strategy="lazyOnload"
                id="jquery"
                onLoad={() => {
                    console.log('[Scripts] jQuery loaded')
                    setJqueryLoaded(true)
                }}
            />
            
            {/* Minimal vendor libraries - loads after jQuery is ready */}
            {jqueryLoaded && (
                <Script 
                    src="/js/vendors-minimal.js" 
                    strategy="lazyOnload"
                    id="vendors"
                    onLoad={() => {
                        console.log('[Scripts] Vendors (minimal) loaded')
                        setVendorsLoaded(true)
                    }}
                />
            )}
            
            {/* Main initialization - loads after vendors are ready */}
            {vendorsLoaded && (
                <Script 
                    src="/js/main.js" 
                    strategy="lazyOnload"
                    id="main-js"
                    onLoad={() => {
                        console.log('[Scripts] Main.js loaded - all legacy scripts ready')
                    }}
                />
            )}
        </>
    )
}
