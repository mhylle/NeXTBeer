// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDYmqbZEmDHZHKrxYUq80f6_4rrVD6W08s",
    authDomain: "nextbeer-beta.firebaseapp.com",
    databaseURL: "https://nextbeer-beta.firebaseio.com",
    projectId: "nextbeer-beta",
    storageBucket: "nextbeer-beta.appspot.com",
    messagingSenderId: "289944695768"
  }
};
