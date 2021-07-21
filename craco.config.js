const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#28c0f1',
              '@success-color': '#3c9e1a'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};