export default {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "node",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
