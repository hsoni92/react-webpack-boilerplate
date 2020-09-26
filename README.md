This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run dev`

Runs the app in the development mode using webpack dev server configurations.<br />
Open [http://localhost:9000](http://localhost:9000) or [YourSystemIP:9000] to view on any system on the network via browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


### `npm run buildApache`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and copied to `/apacheBuild` as `build.zip`
This `build.zip` is ready to deployed on any apache server.


### `./start-apache-webserver`

Deploys an apache container with `build` as root directory.
Update container parameters using `docker-config.sh`<br />


### `./deploy-build-webserver`

Rebuild ReactApp in `/build` and restart the apache container.<br />