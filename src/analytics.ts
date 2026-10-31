type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: Gtag;
  }
}

export function initializeAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

  if (!measurementId || typeof window === 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', measurementId);
}
