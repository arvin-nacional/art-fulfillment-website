'use client'

import React, { useEffect, useState } from 'react'
import { X, Calendar, ArrowRight } from 'lucide-react'

const CALENDAR_URL = 'https://calendar.app.google/A9oS4BP5NNFpwAto7'

export const MeetingPopup: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('meetingPopupSeen')
    if (!seen) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    sessionStorage.setItem('meetingPopupSeen', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="meeting-popup-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon */}
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
          <Calendar className="w-7 h-7 text-primary" />
        </div>

        {/* Content */}
        <h2 id="meeting-popup-title" className="text-2xl font-bold text-foreground mb-2">
          Meet With Our Team
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Ready to streamline your fulfillment? Schedule a free consultation with our team and
          let&apos;s find the right solution for your business.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm"
          >
            Schedule a Meeting
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={dismiss}
            className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  )
}
