document.body.onload = function () {
  Sentry.init({
    dsn: "https://10803bd633204194a62d3d64c2fcb978@o983020.ingest.sentry.io/5938527",
    // this assumes your build process sets "npm_package_version" in the env
    // release: "my-project-name@" + process.env.npm_package_version,
    integrations: [new Sentry.Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
}
// TAWK.to API START
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/60eac4b6d6e7610a49aab375/1faah0r3e';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();

// TAWK.to API END


// document.addEventListener('DOMContentLoaded', function () {
//   document.addEventListener('keyup', function (e) {
//     if (e.key === '/') {
//       document.querySelector('.navbar__search-input').focus()
//     }
//   })
// })


