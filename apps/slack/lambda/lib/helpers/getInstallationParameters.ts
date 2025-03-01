import { SlackAppInstallationParameters } from '../routes/events/types';
import { makeSpaceEnvClient } from '../clients/cma';
import { config } from '../config';

export async function getInstallationParametersFromCma(spaceId: string, environmentId: string) {
  const cmaClient = await makeSpaceEnvClient(spaceId, environmentId);
  const appInstallation = await cmaClient.appInstallation.get({
    appDefinitionId: config.appId,
  });

  return appInstallation?.parameters as SlackAppInstallationParameters;
}
