import * as OAuth from 'oauth-1.0a';
import * as Crypto from 'crypto-js';

export interface IKeySecret {
    key: string;
    secret: string
}

export interface IOAuthOptions {
    consumer: IKeySecret;
    realm: string;
    token: IKeySecret;
    request_data: {
        url: string,
        method: string
    };    
}

export const oauth1 = (options: IOAuthOptions): string => {
    // Create an auth object
    const oauth = new OAuth.default({
        consumer: options.consumer,
        realm: options.realm,
        hash_function: (base_string:string, key:string): string => {
          return Crypto.HmacSHA256(base_string, key).toString(Crypto.enc.Base64);
        },
        signature_method: 'HMAC-SHA256',
    }); 
    
    // Create an authorization header.
    const authHead =  oauth.toHeader(oauth.authorize(options.request_data, options.token));

    return authHead.Authorization;
}