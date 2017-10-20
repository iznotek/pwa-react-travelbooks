export default function regiserServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(
      `${process.env.PUBLIC_URL}service-worker.js`
    );
  }
}
