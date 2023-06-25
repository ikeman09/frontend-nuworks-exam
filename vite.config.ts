import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')

  console.log('ENV Variables: ', env)

  return {
    plugins: [react(), viteTsconfigPaths(), svgr()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    esbuild: {
      // remove console.log and debugger in production
      // https://vitejs.dev/config/#conditional-config
      drop: env.VITE_ENV != 'dev' ? ['console', 'debugger'] : []
    }
  }
}
)
