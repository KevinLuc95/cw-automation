import Logger from './src/utils/Logger'

export default function () {
    Logger.info('*** QA TEAM ***');
    Logger.info(`*** START TEST IN ${process.env.ENV} ***`);
}
