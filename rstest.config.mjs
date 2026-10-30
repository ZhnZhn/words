import { defineConfig } from '@rstest/core';

export default defineConfig({
  testEnvironment: 'node',
  globals: true,

  roots: [      
      "<rootDir>/js/utils/"
    ]
});