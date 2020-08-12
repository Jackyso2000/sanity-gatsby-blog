export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f33965d7efe457d9161772d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bf7kqv9d',
                  apiId: '0825060a-8b5f-45d6-a681-234215fdc354'
                },
                {
                  buildHookId: '5f33965e06971d719d0568e4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-92p93hkn',
                  apiId: '7ee2305b-4cb3-4571-81ea-eef6021288a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jackyso2000/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-92p93hkn.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
