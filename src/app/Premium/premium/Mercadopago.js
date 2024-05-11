
import  MercadoPago from 'mercadopago';


import { loadMercadoPago } from "@mercadopago/sdk-js";




await loadMercadoPago();
const mp = new window.MercadoPago("APP_USR-ae5cc893-4052-4c6c-bbb6-f77d615cb8f6");






  mp.bricks().create("wallet", "wallet_container", {
    initialization: {
        preferenceId: "<PREFERENCE_ID>",
    },
  });