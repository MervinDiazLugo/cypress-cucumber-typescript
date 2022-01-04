export class config{

    static CypressConfiguration = require('../../cypress.json')
    static currentEnv=config.CypressConfiguration['currentEnvironment'] 
    static environment = config.CypressConfiguration['env'][config.CypressConfiguration['currentEnvironment']]
}

