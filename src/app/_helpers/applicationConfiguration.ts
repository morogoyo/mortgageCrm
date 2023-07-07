import {HttpHeaders} from "@angular/common/http";

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';
export const CONTENT_TYPE = 'application/json';
export const ACCESS_CONTROL_ALLOW_ORIGIN = '*';
export const ORIGIN = 'http://localhost:4200';
export const ACCESS_CONTROL_ALLOW_METHODS = 'PUT, DELETE, POST, GET, OPTIONS';
export const ACCESS_CONTROL_ALLOW_HEADERS = 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept';

export const API_URL_AUTH = 'http://localhost:8080/authenticate';
export const TODO_JPA_API_URL = 'http://localhost:8080/jpa';
export const REST_API_SERVER = 'http://localhost:8080';

export class ApplicationConfiguration {
  public static API_ENDPOINT="http://localhost:8080/";

  public static HTTPOPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': CONTENT_TYPE,
      'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
      'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
      'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS
    })
  }

}
