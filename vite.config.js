import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ✅ React plugin only

export default defineConfig({
  base: '/',
  plugins: [react()],
});