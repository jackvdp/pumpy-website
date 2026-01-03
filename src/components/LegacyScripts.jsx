"use client"

import Script from "next/script"
import {useState} from "react"

/**
 * Handles loading of legacy jQuery/vendor scripts in the correct order.
 * Scripts are loaded lazily and chained to ensure dependencies are met.
 * 
 * Load order: jQuery → vendors.js → main.js
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
            
            {/* Vendor libraries - loads after jQuery is ready */}
            {jqueryLoaded && (
                <Script 
                    src="/js/vendors.js" 
                    strategy="lazyOnload"
                    id="vendors"
                    onLoad={() => {
                        console.log('[Scripts] Vendors loaded')
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
