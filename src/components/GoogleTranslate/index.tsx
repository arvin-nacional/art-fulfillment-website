'use client'

import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google: any
  }
}

export const GoogleTranslate = () => {
  useEffect(() => {
    const browserLang = navigator.language?.slice(0, 2)
    const autoLangs = ['th', 'vi', 'zh']
    if (!autoLangs.includes(browserLang)) return

    const trySwitch = setInterval(() => {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null
      if (select) {
        const target = browserLang === 'zh' ? 'zh-CN' : browserLang
        select.value = target
        select.dispatchEvent(new Event('change'))
        clearInterval(trySwitch)
      }
    }, 300)

    return () => clearInterval(trySwitch)
  }, [])

  return (
    <>
      <Script id="google-translate-init" strategy="afterInteractive">{`
        window.googleTranslateElementInit = function () {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,th,vi,zh-CN',
              autoDisplay: false,
            },
            'google_translate_element'
          );
        };
      `}</Script>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <div id="google_translate_element" />
    </>
  )
}
