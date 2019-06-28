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
                  buildHookId: '5d15d698d3745c1dcf0f3e5f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nw9so7a8',
                  apiId: '83ade39b-24d3-4098-a9cf-1dc2a4d19fc8'
                },
                {
                  buildHookId: '5d15d698fe39891f615db88f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-anhs4gt8',
                  apiId: 'a37d0aea-c8ef-4674-bb89-05eb82bdf56b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/markbarton/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-anhs4gt8.netlify.com', category: 'apps'}
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
