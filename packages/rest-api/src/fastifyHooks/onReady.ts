import { onReadyAsyncHookHandler } from 'fastify';
import constants from '../constants';

export const onReady: onReadyAsyncHookHandler = async function () {
  this.listen(
    {
      port: constants.PORT,
    },
    (err, address) => {
      if (err) {
        this.log.error(err.message);
        return;
      }

      this.log.info(`Server listening. Address => ${address}`);
    }
  );
};
