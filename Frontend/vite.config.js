// this code configures the React Frontend (using Vite) to run HTTPS locally using the same self-signed cert
// the 'vite.config.js' is used to define how the dev server behaves  

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // this adds support to Vite 
import fs from 'fs'; // built-in Node.js module to read the local cert and PK files from teh disk

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // adding React plugin to make sure JSX and other React features are properly handled 
  // telling Vite to run its development server over HTTPS
  server: {
    https: {
      key: fs.readFileSync('ssl/key.pem'), 
      cert: fs.readFileSync('ssl/cert.pem'),
    }
  }
});
