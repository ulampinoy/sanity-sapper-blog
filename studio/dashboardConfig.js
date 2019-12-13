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
                  buildHookId: '5df356cd9e580fd8b4b1ffc3',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-t39koe1z',
                  apiId: '1667b8b1-12f1-4dae-a005-dec872e18f08'
                },
                {
                  buildHookId: '5df356cd5e2fa6ec870597b4',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-cu6mwmp3',
                  apiId: '9a15663c-fd80-4927-b9ad-171edbd7ad78'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ulampinoy/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-cu6mwmp3.netlify.com', category: 'apps'}
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
