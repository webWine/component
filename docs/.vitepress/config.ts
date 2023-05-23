import {UserConfig} from "vitepress"



export const config:UserConfig={
    title:"Wine Component",
    description:"Vue3+ts component",
    themeConfig:{
        nav: [
            { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
            { text: 'Config', link: '/config/', activeMatch: '/config/' },
            { text: 'Plugins', link: '/plugins/', activeMatch: '/plugins/' },
            {
              text: 'Resources',
              items: [
                { text: 'Team', link: '/team' },
                { text: 'Releases', link: '/releases' },
                {
                  items: [
                    {
                      text: 'Twitter',
                      link: 'https://twitter.com/vite_js',
                    },
                    {
                      text: 'Discord Chat',
                      link: 'https://chat.vitejs.dev',
                    },
                    {
                      text: 'Awesome Vite',
                      link: 'https://github.com/vitejs/awesome-vite',
                    },
                    {
                      text: 'DEV Community',
                      link: 'https://dev.to/t/vite',
                    },
                    {
                      text: 'Rollup Plugins Compat',
                      link: 'https://vite-rollup-plugins.patak.dev/',
                    },
                    {
                      text: 'Changelog',
                      link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md',
                    },
                  ],
                },
              ],
            }
          ],
      
          sidebar: {
            '/guide/': [
              {
                text: 'Guide',
                items: [
                  {
                    text: 'Why Vite',
                    link: '/guide/why',
                  },
                  {
                    text: 'Getting Started',
                    link: '/guide/',
                  },
                  {
                    text: 'Features',
                    link: '/guide/features',
                  },
                  {
                    text: 'CLI',
                    link: '/guide/cli',
                  },
                  {
                    text: 'Using Plugins',
                    link: '/guide/using-plugins',
                  },
                  {
                    text: 'Dependency Pre-Bundling',
                    link: '/guide/dep-pre-bundling',
                  },
                  {
                    text: 'Static Asset Handling',
                    link: '/guide/assets',
                  },
                  {
                    text: 'Building for Production',
                    link: '/guide/build',
                  },
                  {
                    text: 'Deploying a Static Site',
                    link: '/guide/static-deploy',
                  },
                  {
                    text: 'Env Variables and Modes',
                    link: '/guide/env-and-mode',
                  },
                  {
                    text: 'Server-Side Rendering (SSR)',
                    link: '/guide/ssr',
                  },
                  {
                    text: 'Backend Integration',
                    link: '/guide/backend-integration',
                  },
                  {
                    text: 'Comparisons',
                    link: '/guide/comparisons',
                  },
                  {
                    text: 'Troubleshooting',
                    link: '/guide/troubleshooting',
                  },
                  {
                    text: 'Migration from v3',
                    link: '/guide/migration',
                  },
                ],
              },
              {
                text: 'APIs',
                items: [
                  {
                    text: 'Plugin API',
                    link: '/guide/api-plugin',
                  },
                  {
                    text: 'HMR API',
                    link: '/guide/api-hmr',
                  },
                  {
                    text: 'JavaScript API',
                    link: '/guide/api-javascript',
                  },
                  {
                    text: 'Config Reference',
                    link: '/config/',
                  },
                ],
              },
            ],
            '/config/': [
              {
                text: 'Config',
                items: [
                  {
                    text: 'Configuring Vite',
                    link: '/config/',
                  },
                  {
                    text: 'Shared Options',
                    link: '/config/shared-options',
                  },
                  {
                    text: 'Server Options',
                    link: '/config/server-options',
                  },
                  {
                    text: 'Build Options',
                    link: '/config/build-options',
                  },
                  {
                    text: 'Preview Options',
                    link: '/config/preview-options',
                  },
                  {
                    text: 'Dep Optimization Options',
                    link: '/config/dep-optimization-options',
                  },
                  {
                    text: 'SSR Options',
                    link: '/config/ssr-options',
                  },
                  {
                    text: 'Worker Options',
                    link: '/config/worker-options',
                  },
                ],
              },
            ],
          }
    }
}

export default config