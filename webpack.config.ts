import createExpoWebpackConfigAsync from '@expo/webpack-config/webpack';
import { Arguments, Environment } from '@expo/webpack-config/webpack/types';

module.exports = async function (env: Environment, argv: Arguments) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    // Customize the config before returning it.
    return config;
};