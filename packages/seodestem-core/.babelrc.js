const sharedPresets = ['@babel/typescript'];
const shared = {
  ignore: ['**/*.d.ts'],
  presets: sharedPresets,
};

module.exports = {
  env: {
    esm: {
      ...shared,
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            // targets: '> 0.25%, not dead',
            targets: {
              esmodules: true,
            },
          },
        ],
        ...sharedPresets,
      ],
    },
    cjs: {
      ...shared,
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
          },
        ],
        ...sharedPresets,
      ],
    },
    test: {
      presets: ['@babel/preset-env', ...sharedPresets],
    },
  },
};
