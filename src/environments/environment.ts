// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Agregamos Firebase
  firebase: {
    apiKey: "AIzaSyDFU8neIyAjlUy9YCogWJtXdCdq6Xhjhp0",
    authDomain: "empleados-fc422.firebaseapp.com",
    projectId: "empleados-fc422",
    storageBucket: "empleados-fc422.appspot.com",
    messagingSenderId: "164970034852",
    appId: "1:164970034852:web:56a672ee02ce3a25705831"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
