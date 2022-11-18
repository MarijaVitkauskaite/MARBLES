module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      'babel-preset-expo',
      '@babel/preset-typescript',
    ],
    plugins: [
      '@babel/plugin-transform-modules-commonjs',
      [
        'module:react-native-dotenv',
        {
          moduleName: '@dotenv',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
