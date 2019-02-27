# Angular Starter

## How to start
- `npm install`
- `npm run dev` - for development
- `npm run start` - for client rendering
- `npm run ssr` - for server-side rendering
- `npm run server` - to start the server
- `npm run build:universal` - for assembly in release

## Progressive Web Application
### How to get started
`npm run prod`

Because ng serve does not work with service workers, you must use a separate HTTP server to test your project locally. You can use any HTTP server. The example below uses the http-server package from npm. To reduce the possibility of conflicts and avoid serving stale content, test on a dedicated port and disable caching.

To serve the directory containing your web files with http-server, run the following command: <br>
`cd dist/browser` <br>
`http-server -p 8080`

## Firebase
### Configuration

Open `/src/environments/environment.ts` and add your Firebase configuration:

```javascript
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```