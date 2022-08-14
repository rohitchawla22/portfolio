module.exports = {
    swcMinify: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/home': { page: '/home' },
        '/project': { page: '/project' },
        '/timeline': { page: '/timeline' },
      }
    },
    async redirects() {
        return [
          {
            source: '/blog',
            destination: '/',
            permanent: true,
          },
        ]
      },
};

