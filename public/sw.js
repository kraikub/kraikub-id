if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1IXJhfpikLoccXt2YYlWQ/_buildManifest.js",revision:"483c5bad0382db50512955368cd77580"},{url:"/_next/static/1IXJhfpikLoccXt2YYlWQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1-28c68535c6415cad.js",revision:"28c68535c6415cad"},{url:"/_next/static/chunks/180-1cde687b3ea50aaf.js",revision:"1cde687b3ea50aaf"},{url:"/_next/static/chunks/21-5271159e4548c0c8.js",revision:"5271159e4548c0c8"},{url:"/_next/static/chunks/252f366e-4c8571a0070b6a20.js",revision:"4c8571a0070b6a20"},{url:"/_next/static/chunks/447-98f94e44177a9a6a.js",revision:"98f94e44177a9a6a"},{url:"/_next/static/chunks/458-058ffddeb9f27bc4.js",revision:"058ffddeb9f27bc4"},{url:"/_next/static/chunks/564-4e242e0e8a389f14.js",revision:"4e242e0e8a389f14"},{url:"/_next/static/chunks/630-4b5b910ed41a0889.js",revision:"4b5b910ed41a0889"},{url:"/_next/static/chunks/664-1d281c1803f7e599.js",revision:"1d281c1803f7e599"},{url:"/_next/static/chunks/786-f2b49b48c58aeb13.js",revision:"f2b49b48c58aeb13"},{url:"/_next/static/chunks/95b64a6e-ca20a1e8294000c8.js",revision:"ca20a1e8294000c8"},{url:"/_next/static/chunks/ae51ba48-da6ecb62ef839154.js",revision:"da6ecb62ef839154"},{url:"/_next/static/chunks/d0c16330-f1d8bb4987212cdf.js",revision:"f1d8bb4987212cdf"},{url:"/_next/static/chunks/d7eeaac4-d6325a887b9d48c4.js",revision:"d6325a887b9d48c4"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-e4ea250a7cfce203.js",revision:"e4ea250a7cfce203"},{url:"/_next/static/chunks/pages/_app-e3aae5231968d9c2.js",revision:"e3aae5231968d9c2"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/account-85cebed800b6df4a.js",revision:"85cebed800b6df4a"},{url:"/_next/static/chunks/pages/index-dddf028e6a289f81.js",revision:"dddf028e6a289f81"},{url:"/_next/static/chunks/pages/oauth2-activities-208e458b129cc539.js",revision:"208e458b129cc539"},{url:"/_next/static/chunks/pages/profile-gallery-a7171cb787aabcc5.js",revision:"a7171cb787aabcc5"},{url:"/_next/static/chunks/pages/security-6482804783778d0f.js",revision:"6482804783778d0f"},{url:"/_next/static/chunks/pages/settings-ca7649283fbbd76a.js",revision:"ca7649283fbbd76a"},{url:"/_next/static/chunks/pages/verify/university-email-ea9579321d7eaba1.js",revision:"ea9579321d7eaba1"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-0b5d8249fb15f5f3.js",revision:"0b5d8249fb15f5f3"},{url:"/_next/static/css/e6b4cfbab08def29.css",revision:"e6b4cfbab08def29"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"4ed4063005f1e7ee94a273cd0359097f"},{url:"/icon-256x256.png",revision:"844ac8c295e58eb3bb12ba6fb632617e"},{url:"/icon-384x384.png",revision:"d999676a87d1e4f1455fc18fa4fd0da2"},{url:"/icon-512x512.png",revision:"38c59ae383d83c6611babfd0480e6e77"},{url:"/locales/en/account.json",revision:"3a21ccc13b5e21e6a2ffca987b55510a"},{url:"/locales/en/common.json",revision:"6d316fba838f70b90efc8add7db62649"},{url:"/locales/th/account.json",revision:"a12c336bf042c7ef078a6a1286ff8163"},{url:"/locales/th/common.json",revision:"3f54b3656b1f60f7ce6a13f9bb76e35a"},{url:"/manifest.json",revision:"9928a29c2286d683b5e59a5d73611457"},{url:"/profiles/girl-001.jpg",revision:"e8dca79220dbdaa82663486071878eb7"},{url:"/profiles/girl-002.jpg",revision:"222ce547411350070970d45173c4782c"},{url:"/profiles/girl-003.jpg",revision:"e0cbd5d9629700d330d5e2db7aca5ce6"},{url:"/profiles/girl-004.jpg",revision:"d19a4f77d63f1668167beb949b5a4c9c"},{url:"/profiles/girl-005.jpg",revision:"733b323ba09d7f31e4413031af79e226"},{url:"/profiles/girl-006.jpg",revision:"ad583f1a207b84e0f2626511d9ab483e"},{url:"/profiles/girl-007.jpg",revision:"c06130b4942b57b38d6f8310bc34d7de"},{url:"/resources/default-profile.png",revision:"cd2ddf475c8843b943d47371735dd126"},{url:"/resources/kraikub-logo-transparent.png",revision:"3c70b956122e15549cca9f7d6dea89fd"},{url:"/resources/lock.png",revision:"9e13ad5bd5aa8b3971c82e0b9e72a211"},{url:"/resources/padlock.png",revision:"1571e2d99273aea7109771b6fbb21fb2"},{url:"/th/account.json",revision:"3a21ccc13b5e21e6a2ffca987b55510a"},{url:"/th/common.json",revision:"6d316fba838f70b90efc8add7db62649"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
