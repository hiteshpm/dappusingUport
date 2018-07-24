// import { Connect } from 'uport-connect'

// export let uport = new Connect('TruffleBox')
// export const web3 = uport.getWeb3()

import { Connect, SimpleSigner } from 'uport-connect'

    export let  uport = new Connect('React-uport dapp', {
      // clientId: '2otDF8wNG124dBWXZEfvCakeWyFMTfz75Ud',
      // network: 'rinkeby',
      // signer: SimpleSigner('4cf13393a8b5b37f6552ed53811d60f012049e47746774a71b277cf6bb93958f')
      clientId: '2ogvX133ncToPGcrNSadnZZDwf4acxZtGci',
      network: 'rinkeby',
      signer: SimpleSigner('113a138e97f6c808203398bfa785557a23dfbcac06e81b7ddd16e09c4d53e5c3')
    })
export const web3 = uport.getWeb3()