import React from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App';
import {routeFromPath} from './routes';
const root=document.getElementById('root');
const route=root.dataset.route || routeFromPath(location.pathname);
const application=<App initialRoute={route}/>;
if(root.hasChildNodes()) hydrateRoot(root,application);
else createRoot(root).render(application);
