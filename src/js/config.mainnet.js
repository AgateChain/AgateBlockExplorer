(function() {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'http://localhost:6761',
        blockchainName: 'Mainnet',
        title: 'Waves Explorer',
        nodes: [{
            url: '',
            maintainer: 'Will be added'
        }],
        peerExplorer: {
            url: '',
            title: 'Will be added'
        },
        wallet: {
            url: '',
            title: 'Will be added'
        }
    });

    angular.module('web').constant('constants.network', {
        NETWORK_NAME: 'mainnet', // 'devnet', 'testnet', 'mainnet'
        ADDRESS_VERSION: 1,
        NETWORK_CODE: 'S',
        INITIAL_NONCE: 0
    });
})();