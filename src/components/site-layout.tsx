import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickySideIcons } from "@/components/sticky-side-icons";
import { useEffect } from "react";

export function openBrevoChat() {
  const brevo = (window as Window & {
    BrevoConversations?: (command: string) => void;
  }).BrevoConversations;

  if (brevo) {
    brevo("open");
    return;
  }

  let attempts = 0;
  const retry = window.setInterval(() => {
    const conversation = (window as Window & {
      BrevoConversations?: (command: string) => void;
    }).BrevoConversations;

    if (conversation) {
      window.clearInterval(retry);
      conversation("open");
    } else if (++attempts >= 20) {
      window.clearInterval(retry);
    }
  }, 100);
}

export function SiteLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize Brevo Conversations
    (function(d, w, c) {
      w.BrevoConversationsID = '6ab15adfaece481469082ab5';
      w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
      };
      var s = d.createElement('script');
      s.async = true;
      s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
      if (d.head) d.head.appendChild(s);
    })(document, window, 'BrevoConversations');
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <StickySideIcons />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
