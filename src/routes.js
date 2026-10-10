export const siteURL = 'https://musehair.corstack.dev';
export const routes = {
 home: {path:'/', title:'MUSE | Shop Straight, Body Wave, Curly & Bob Wigs', description:'Find your next wig at MUSE. Explore straight, body wave, curly and bob styles, choose your length and cap size, and shop your favourite look.'},
 shop: {path:'/shop', title:'Shop Wigs | MUSE Hair Atelier', description:'Browse MUSE straight, body wave, curly and bob wigs. Compare styles and choose your preferred length and cap size.'},
 story: {path:'/story', title:'Our Story | MUSE Hair Atelier', description:'Get to know MUSE Hair Atelier. Find wigs for everyday plans, special occasions and looks that feel like you.'},
 journal: {path:'/journal', title:'Wig Care & Styling Guides | MUSE Hair Atelier', description:'Explore MUSE wig care and styling guides, from washing and detangling to parting and keeping your bob in shape.'},
 wishlist: {path:'/wishlist', title:'Your Wishlist | MUSE Hair Atelier', description:'Your saved MUSE wigs in this browser.', noindex:true},
};
export const routeFromPath = pathname => Object.keys(routes).find(key=>routes[key].path===pathname.replace(/\/$/,'') || routes[key].path==='/' && pathname==='/') || 'not-found';
export function updateMetadata(route) {
 const page=routes[route];
 document.title=page?.title || 'Page not found | MUSE Hair Atelier';
 document.querySelector('meta[name="description"]').content=page?.description || 'This page could not be found.';
 document.querySelector('meta[name="robots"]').content=(!page || page.noindex)?'noindex':'index, follow';
 const canonical=document.querySelector('link[rel="canonical"]');
 if(page){canonical.href=siteURL+page.path;canonical.removeAttribute('disabled');}
 else canonical.removeAttribute('href');
}
