const throwIfUndefined = (env: string): string => {
  if (!process.env[env]) {
    throw new Error(`Environment variable "${env}" is required.`);
  }
  return process.env[env] || "";
};

interface EnvironmentVariables {
  env: string;
}

const variables: EnvironmentVariables = {
  env: throwIfUndefined("NODE_ENV")
};

export default variables;
