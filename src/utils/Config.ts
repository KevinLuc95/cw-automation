import { ENVIRONMENT } from '../resource/Env';

interface envInfo {
  DOMAIN?: string;
  TIMEOUT?: 120000
}

const Config = (): envInfo => {
  let envObj: envInfo;
  const envValue: string = process.env.ENV || 'STG';
  const env = envValue.toString().toUpperCase();
  switch (env) {
    case 'STG':
      envObj = ENVIRONMENT.STG;
      return envObj;
    case 'PROD':
      envObj = ENVIRONMENT.PROD;
      return envObj;
  }
};

export default Config();
