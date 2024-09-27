const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    //config.experiments = { topLevelAwait: true, layers: false };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          remote: `remote@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes:{
          './content': "./src/components/content/index.tsx",
          './header': "./src/components/header/index.tsx",
          './footer': "./src/components/footer/index.tsx"
        },  shared: {
          // Share Tailwind and other common dependencies
          tailwindcss: { singleton: true, eager: true },
          postcss: { singleton: true, eager: true },
          autoprefixer: { singleton: true, eager: true },
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true },
        },
        extraOptions: {
          exposePages: true
        },
      })
    );
    return config;
  }
}

module.exports = nextConfig
