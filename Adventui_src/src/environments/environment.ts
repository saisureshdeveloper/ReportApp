// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  envName: 'dev',

  //  baseUrl:'http://localhost/advent_api/'
      nodeAPI:"http://localhost:1505/api/",
      baseUrl:'http://localhost/AdventAPI/'
      // baseUrl: 'http://ec2-52-66-245-247.ap-south-1.compute.amazonaws.com/advent_api/'
 // baseUrl: 'http://ec2-13-233-131-93.ap-south-1.compute.amazonaws.com/advent_api/'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode   
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
  