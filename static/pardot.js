piAId = '948642';
piCId = '';
piHostname = 'go.qceventplanning.com';

(function () {
  function asyncLoad() {
    const s = document.createElement('script'); s.type = 'text/javascript';
    s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
    const c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
  }
  if (window.attachEvent) {
    window.attachEvent('onload', asyncLoad);
  } else {
    window.addEventListener('load', asyncLoad, false);
  }
})();
