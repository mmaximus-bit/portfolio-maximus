import type { Config } from 'tailwindcss';

const config: Config = {
  // 1. Onde o Tailwind deve procurar classes para gerar o CSS
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // 2. Definindo o seu tema personalizado (Black & Red)
  theme: {
    extend: {
      colors: {
        // Define a cor principal do seu portfólio (o seu vermelho vibrante)
        'primary': '#E53E3E', // Um vermelho forte (pode mudar o código hexadecimal)
        // Define o fundo principal como preto absoluto
        'dark': '#000000', 
        // Define o texto principal como cinza claro para alto contraste
        'light': '#EAEAEA',
      }
    },
  },
  // Habilita o modo escuro (Dark Mode) de forma nativa
  darkMode: 'class', 
  plugins: [],
};
export default config;