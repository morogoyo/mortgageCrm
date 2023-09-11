// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// This file is being use to work with Docker compose file

export const environment = {
  production: false,

  TOKEN: 'token',
  AUTHENTICATED_USER: 'authenticatedUser',
  CONTENT_TYPE: 'application/json',
  ACCESS_CONTROL_ALLOW_ORIGIN: '*',
  ORIGIN: '*',
  ACCESS_CONTROL_ALLOW_METHODS: 'PUT, DELETE, POST, GET, OPTIONS',
  ACCESS_CONTROL_ALLOW_HEADERS: 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept',
  API_URL_AUTH: "http://localhost:8080/api/authenticate",
  TODO_JPA_API_URL: "http://localhost:8080/api",
  REST_API_SERVER: "http://localhost:8080/api",
  name: "dev"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
