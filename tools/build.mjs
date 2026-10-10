import {build,createServer} from 'vite';
import fs from 'node:fs/promises';
import {routes,siteURL} from '../src/routes.js';
await build();
const template=await fs.readFile('dist/index.html','utf8');
const vite=await createServer({server:{middlewareMode:true},appType:'custom'});
const escape=value=>value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
try {
 const {render}=await vite.ssrLoadModule('/src/entry-server.jsx');
 for(const [key,page] of Object.entries(routes)) {
  let html=template.replace(/<title>.*?<\/title>/,()=>'<title>'+escape(page.title)+'</title>')
   .replace(/<meta name="description" content="[^"]*"\s*\/>/,()=>'<meta name="description" content="'+escape(page.description)+'"/>')
   .replace(/<link rel="canonical" href="[^"]*"\s*\/>/,()=>'<link rel="canonical" href="'+siteURL+page.path+'"/>')
   .replace(/<meta name="robots" content="[^"]*"\s*\/>/,()=>'<meta name="robots" content="'+(page.noindex?'noindex':'index, follow')+'"/>')
   .replace('<div id="root"></div>',()=>'<div id="root" data-route="'+key+'">'+render(key)+'</div>');
  if(key!=='home') html=html.replace(/<!-- hero-preload:start -->[\s\S]*?<!-- hero-preload:end -->/,'');
  html=html.replace('</head>','<noscript><style>.sharp-image{opacity:1!important}</style></noscript></head>');
  await fs.writeFile('dist/'+(key==='home'?'index':key)+'.html',html);
 }
} finally {await vite.close();}
await fs.writeFile('dist/robots.txt','User-agent: *\nAllow: /\n\nSitemap: '+siteURL+'/sitemap.xml\n');
await fs.writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Object.values(routes).filter(page=>!page.noindex).map(page=>'<url><loc>'+siteURL+page.path+'</loc></url>').join('')+'</urlset>\n');
console.log('Prerendered MUSE public pages and wishlist.');
