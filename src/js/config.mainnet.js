(function() {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'https://api.agate.services',
        blockchainName: 'Mainnet',
        title: 'Agate Explorer',
        nodes: [{
            url: 'https://api.agate.services',
            maintainer: 'Api 1 Agate'
        },
        {
            url: 'https://api2.agate.services',
            maintainer: 'Api 2 Agate'
        },
        {
            url: 'https://api3.agate.services',
            maintainer: 'Api 3 Agate'
        }],
    });

    angular.module('web').constant('constants.network', {
        NETWORK_NAME: 'mainnet', // 'devnet', 'testnet', 'mainnet'
        ADDRESS_VERSION: 1,
        NETWORK_CODE: 'S',
        INITIAL_NONCE: 0
    });
})();