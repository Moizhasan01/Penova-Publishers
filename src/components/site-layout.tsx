import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickySideIcons } from "@/components/sticky-side-icons";
import { useEffect } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize Brevo Conversations
    (function(d, w, c) {
      w.BrevoConversationsID = '6a9f0190f7c46c27ab0ee80a';
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
