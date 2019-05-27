var environment = {};

environment.staging = {
    hashingSecret : 'IAmSecret'
}

environment.production = {
    hashingSecret : 'IAmTheDamnSecret'
}

var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
var environmentToExport = typeof(environment[currentEnvironment]) == 'object' ? environment[currentEnvironment] : environment.production
module.export = environmentToExport;