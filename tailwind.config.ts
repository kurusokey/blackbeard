{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import type \{ Config \} from "tailwindcss";\
\
const config: Config = \{\
  content: [\
    "./pages/**/*.\{js,ts,jsx,tsx,mdx\}",\
    "./components/**/*.\{js,ts,jsx,tsx,mdx\}",\
    "./app/**/*.\{js,ts,jsx,tsx,mdx\}",\
  ],\
  theme: \{\
    extend: \{\
      colors: \{\
        // Couleurs Pirates\
        'pirate-black': '#0a0705',\
        'pirate-dark': '#1a0f0a',\
        'pirate-brown': '#3d2817',\
        'pirate-wood': '#5c4033',\
        'mahogany': '#8b4513',\
        \
        // M\'e9taux\
        'pirate-gold': '#d4af37',\
        'pirate-gold-light': '#f4d03f',\
        'bronze': '#cd7f32',\
        'copper': '#b87333',\
        \
        // Mer & Cara\'efbes\
        'caribbean-blue': '#17a2b8',\
        'caribbean-teal': '#0d6e7d',\
        'ocean-night': '#1e3a4c',\
        \
        // Parchemin\
        'parchment': '#f4e8d0',\
        'parchment-dark': '#e8dcc0',\
        'ivory': '#fffff0',\
        \
        // Rhum\
        'rum-amber': '#c47d3a',\
        'caramel': '#b8860b',\
        'blood-red': '#8b0000',\
      \},\
      fontFamily: \{\
        pirata: ['"Pirata One"', 'cursive'],\
        cinzel: ['"Cinzel"', 'serif'],\
      \},\
      animation: \{\
        'fade-in': 'fadeIn 0.5s ease-in-out',\
        'bounce-slow': 'bounce 3s infinite',\
      \},\
      keyframes: \{\
        fadeIn: \{\
          '0%': \{ opacity: '0', transform: 'translateY(10px)' \},\
          '100%': \{ opacity: '1', transform: 'translateY(0)' \},\
        \},\
      \},\
    \},\
  \},\
  plugins: [],\
\};\
\
export default config;\
}