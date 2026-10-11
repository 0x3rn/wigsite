import React, {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';

const sourceSet = (asset, format) => asset[format].map(image => `${image.src} ${image.width}w`).join(', ');

export default function ResponsiveImage({asset, mobileAsset, mobileMedia='(max-width: 760px)', mobileSizes='100vw', sizes, alt='', loading='lazy', priority='auto', className='', motionStyle, decorative=false}) {
 const [loaded, setLoaded] = useState(false);
 const imageRef = useRef(null);
 useEffect(()=>{if(imageRef.current?.complete && imageRef.current.naturalWidth>0)setLoaded(true)},[]);
 const Img = motionStyle ? motion.img : 'img';
 const responsiveSizes = loading === 'lazy' ? `auto, ${sizes}` : sizes;
 return <picture className={`responsive-picture ${className}`} style={priority==='high' ? undefined : {'--image-preview':`url("${asset.preview}")`, '--mobile-preview':`url("${(mobileAsset || asset).preview}")`}}>
  {mobileAsset && <>
   <source media={mobileMedia} type="image/avif" srcSet={sourceSet(mobileAsset,'avif')} sizes={mobileSizes}/>
   <source media={mobileMedia} type="image/webp" srcSet={sourceSet(mobileAsset,'webp')} sizes={mobileSizes}/>
  </>}
  <source type="image/avif" srcSet={sourceSet(asset,'avif')} sizes={responsiveSizes}/>
  <Img ref={imageRef} src={asset.webp.at(-1).src} srcSet={sourceSet(asset,'webp')} sizes={responsiveSizes} width={asset.width} height={asset.height} alt={alt} aria-hidden={decorative || undefined} loading={loading} fetchPriority={priority} decoding="async" className={`sharp-image ${priority==='high'?'is-priority ':''}${loaded?'is-loaded':''}`} style={motionStyle} onLoad={()=>setLoaded(true)}/>
 </picture>;
}
