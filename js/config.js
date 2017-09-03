$(function() {
  CMS.init({
    siteName: 'BSD Rennes',
    siteTagline: 'Meetup and Events near Rennes (France)',
    siteEmail: 'cc@bsd-rennes.fr',
    siteAuthor: 'Mathieu Kerjouan & Déborah Boodhoo',
    siteNavItems: [ { name: 'meetup'}
                  , { name: 'project'}
                  , { name: 'event'}
                  , { name: 'contact'}
    ],
    postsFolder: 'posts',
    postSnippetLength: 120,
    pagesFolder: 'pages',
    sortDateOrder: true,
    postsOnFrontpage: true,
    pageAsFrontpage: '',
    postsOnUrl: '',
    fadeSpeed: 300,
    footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',
    mode: 'Server',
  });
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });
});
