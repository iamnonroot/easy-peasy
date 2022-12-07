export const copy = (data: string) =>
  window.navigator.clipboard.writeText(data);

export const share = (data: ShareData) => {
  if (window.navigator.canShare(data)) {
    window.navigator.share(data);
  }
};

export const openTab = (url: string) => window.open(url);
