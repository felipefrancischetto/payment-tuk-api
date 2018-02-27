import getConfig from './config';

const config = getConfig({
  development: {
    bypass: true,
    secret: 'peregrin-tuk'
  },
  test: {
    bypass: true,
    secret: 'peregrin-tuk'
  },
  production: {
    bypass: false,
    secret: 'peregrin-tuk'
  },
});

export default config;