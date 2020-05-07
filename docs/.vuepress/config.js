module.exports = {
    title: 'el-table-plus',
    base: '/el-table-plus/',
    themeConfig: {
      repo: 'https://github.com/lq782655835/el-table-plus',
      docsRepo: 'https://github.com/lq782655835/el-table-plus',
      docsDir: 'docs',
      docsBranch: 'master',
      sidebar: 'auto'
    },
    plugins: [
      'leo-demo-block',
    ],
    chainWebpack: (config) => {
      // ts loader rule
      config.resolve.extensions.prepend('.ts').prepend('.tsx')
      config.resolve.alias.set('@', require('path').join(__dirname, '../../src'))
  
      const tsRule = config.module.rule('ts').test(/\.ts$/)
      const tsxRule = config.module.rule('jsx').test(/\.jsx$/)
  
      // add a loader to both *.ts & vue<lang="ts">
      const addLoader = ({ name, loader, options }) => {
        tsRule
          .use(name)
          .loader(loader)
          .options(options)
        tsxRule
          .use(name)
          .loader(loader)
          .options(options)
      }
      addLoader({
        name: 'babel-loader',
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@vue/app']
        },
      })
    },
  }