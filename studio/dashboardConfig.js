export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61099e8d5098f200a6d1cae3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8xcwnb6p',
                  apiId: 'ea48f5e9-40a9-4abf-9455-c49e19e84688'
                },
                {
                  buildHookId: '61099e8d5a8d4c00b656e32e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-o7uatam3',
                  apiId: '18908456-7610-4de4-9c27-471a2c37f6dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stephan099/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-o7uatam3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
