export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62900dac29b9561e3cd0c694',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7cmhm8md',
                  apiId: 'd9163b02-8c66-45a8-a4c2-3c3546508d47'
                },
                {
                  buildHookId: '62900daca2d4231e98f07a49',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qt5dtfow',
                  apiId: 'd3790e9b-a782-4fd3-9f00-169cbf96a217'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/grahamd711/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qt5dtfow.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
