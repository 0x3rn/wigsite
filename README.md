# MUSE Hair Atelier

A React storefront inspired by the supplied Pinterest references. Includes responsive shopping collections, Framer Motion reveals and modal transitions, scroll parallax, product variants, search, local wishlist and bag, a hair finder, care articles, and a demonstration checkout.

Store copy uses direct shopping language. Style and hair care cards show full portrait photographs at their natural proportions, with captions below the images. Decorative numbering and marketing eyebrow labels have been removed.

The homepage, product descriptions, shopping labels, care guide links, and page metadata use the supplied MUSE copy. Style browsing includes body wave, straight, curly, and bob cards. The wig finder filters by style and length, selects a matching length when opening a product, and explains unavailable combinations. Newsletter validation and success messages run locally; no subscription is transmitted.

## Run

`npm install` then `npm run dev`. Build with `npm run build`.

## Before commercial launch

The product catalog, pricing and shipping rules are illustrative. Confirm product specifications and inventory, connect a commerce backend and payment provider, enable real order fulfillment and email subscriptions, add verified contact/social details, and finalize shipping, returns, privacy and terms policies. Demo checkout sends no information, takes no payment, and does not submit orders. Wishlist and bag use browser localStorage.

## Images

AI-generated with the built-in ImageGen tool. Originals are retained in `assets/source/` and are not served to visitors. Campaign prompt: two adult Black fashion models in cream long-sleeved shirts, sleek and wavy black hair, warm beige studio, editorial lighting, empty space on the left, no text. Collection prompt: four equal portrait panels of adult Black models with body wave, straight, curly and bob styles, ivory studio backgrounds, consistent catalog framing, no text.

The storefront serves responsive AVIF images with WebP fallbacks and separate catalog portraits. The mobile hero is about 34 KB, the desktop hero about 55 KB, and the four full-size catalog portraits together about 87 KB. The matching hero source is preloaded; below-the-fold images load lazily and small inline previews fill their space until the image arrives. Image filenames include content hashes. `src/image-assets.json` lists sizes and sources. No original PNG files are included in the deployment.
