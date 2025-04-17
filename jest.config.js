export default {
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  };
  