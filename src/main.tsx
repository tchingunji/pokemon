import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
import pt from 'javascript-time-ago/locale/pt.json';

TimeAgo.addDefaultLocale(pt);
TimeAgo.addLocale(en);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
