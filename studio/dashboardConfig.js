export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5db9562febd8f3e692b52a39',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vy5hrim6',
                  apiId: 'd6602d52-6be5-4032-a9e2-955b2e74a12d'
                },
                {
                  buildHookId: '5db95630ffc40014c1aef5bd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-g1gnebbu',
                  apiId: '86f5dc29-0005-4209-b251-72c3bfee8e38'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prithiv-kumar/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-g1gnebbu.netlify.com', category: 'apps'}
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
