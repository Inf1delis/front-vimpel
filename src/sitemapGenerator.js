const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/pages/Home'),
  },
  {
    path: '/beton',
    name: 'Beton',
    component: () => import('@/components/pages/Beton'),
  },
  {
    path: '/peskobeton',
    name: 'Peskobeton',
    component: () => import('@/components/pages/Peskobeton'),
  },
  {
    path: '/border',
    name: 'Border',
    component: () => import('@/components/pages/Border'),
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/components/pages/Help')
  },
  {
    path: '/concrete_styling',
    name: 'ConcreteStyling',
    component: () => import('@/components/pages/ConcreteStyling')
  },
  {
    path: '/history_beton',
    name: 'HistoryBeton',
    component: () => import('@/components/pages/HistoryBeton')
  }

]

function getRoutesList(routes, pre) {
  return routes.reduce((array, route) => {
    const path = `${pre}${route.path}`;

    if (route.path !== '*') {
      array.push(path);
    }

    if (route.children) {
      array.push(...getRoutesList(route.children, `${path}/`));
    }

    return array;
  }, []);
}

function getRoutesXML() {
  const list = getRoutesList(routes, 'https://vimpel38.ru/#')
      .map(route => `<url><loc>${route}</loc></url>`)
      .join('\r\n');
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${list}
  </urlset>`;
}

console.log(getRoutesXML());
