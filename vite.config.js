import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'


export default defineConfig({
  base:"/FrontEnd_ChatApp/",
  plugins: [react()],
 
})

// import { defineConfig, loadEnv } from 'vite';

// /** @type {import('vite').UserConfig} */
// export default ({ mode }) => {
//     // Extends 'process.env.*' with VITE_*-variables from '.env.(mode=production|development)'
//     process.env = {...process.env, ...loadEnv(mode, process.cwd())};
//     return defineConfig({
//       plugins: [react()],
//         base:"../Wesh/";
//     }); 
// };