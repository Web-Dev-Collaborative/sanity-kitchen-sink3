export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '613127c1f3740710d7fd2a47',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-3-studio-qpaz93e3',
                  apiId: 'c9221b77-97f8-4c21-ace2-20f7ed371a58'
                },
                {
                  buildHookId: '613127c2a4f02113a543ad3b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-3-web-v2fb8vmv',
                  apiId: '2acbbf26-a596-44a0-a9a0-cdf499cd7f72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bgoonz/sanity-kitchen-sink3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-3-web-v2fb8vmv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
