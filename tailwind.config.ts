/* eslint-disable sort-keys */
/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-select/dist/index.esm.js',
  ],
  theme: {
    extend: {
      colors: {
        primitive: {
          'light-1': '#F5F7FA',
          'light-2': '#EDF0F2',
          'light-3': '#D7DCE0',
          'light-4': '#B4B9BF',
          'dark-1': '#0E1012',
          'dark-2': '#14171A',
          'dark-3': '#1D2024',
          'dark-4': '#3B4147',
          'neutral-1': '#F5F7FA',
          'neutral-2': '#E9EDF2',
          'neutral-3': '#D8DFE5',
          'neutral-4': '#BCC4CC',
          'neutral-5': '#8A9199',
          'neutral-6': '#707880',
          'neutral-7': '#585F66',
          'neutral-8': '#40464D',
          'neutral-9': '#1F2326',
          'neutral-10': '#0E1012',
          'opacity-light-0': 'rgba(245, 247, 250, 0.00)',
          'opacity-light-10': 'rgba(245, 247, 250, 0.10)',
          'opacity-light-20': 'rgba(245, 247, 250, 0.20)',
          'opacity-light-30': 'rgba(245, 247, 250, 0.30)',
          'opacity-light-40': 'rgba(245, 247, 250, 0.40)',
          'opacity-light-50': 'rgba(245, 247, 250, 0.50)',
          'opacity-light-60': 'rgba(245, 247, 250, 0.60)',
          'opacity-light-70': 'rgba(245, 247, 250, 0.70)',
          'opacity-light-80': 'rgba(245, 247, 250, 0.80)',
          'opacity-light-90': 'rgba(245, 247, 250, 0.90)',
          'opacity-light-100': 'rgba(245, 247, 250, 1)',
          'opacity-dark-0': 'rgba(14, 16, 18, 0.00)',
          'opacity-dark-10': 'rgba(14, 16, 18, 0.10)',
          'opacity-dark-20': 'rgba(14, 16, 18, 0.20)',
          'opacity-dark-30': 'rgba(14, 16, 18, 0.30)',
          'opacity-dark-40': 'rgba(14, 16, 18, 0.40)',
          'opacity-dark-50': 'rgba(14, 16, 18, 0.50)',
          'opacity-dark-60': 'rgba(14, 16, 18, 0.60)',
          'opacity-dark-70': 'rgba(14, 16, 18, 0.70)',
          'opacity-dark-80': 'rgba(14, 16, 18, 0.80)',
          'opacity-dark-90': 'rgba(14, 16, 18, 0.90)',
          'opacity-dark-100': 'rgba(14, 16, 18, 1)',
          'blue-1': '#82ADD9',
          'blue-2': '41 147 255',
          'blue-3': '9 111 214',
          'blue-4': '#507499',
          'red-1': '#BF837C',
          'red-2': '235 70 52',
          'red-3': '210 57 40',
          'red-4': '#AA5950',
          'green-1': '#7CBFA9',
          'green-2': '#26EBA9',
          'green-3': '#0D825B',
          'green-4': '#507569',
          'yellow-1': '#BFA67C',
          'yellow-2': '#EBA834',
          'yellow-3': '194 123 0',
          'yellow-4': '#AA8950',
        },
        // Light / Dark Tokens
        'color-text-primary': 'var(--color-text-primary)',
        'color-text-secondary': 'var(--color-text-secondary)',
        'color-text-tertiary': 'var(--color-text-tertiary)',
        'color-text-quaternary': 'var(--color-text-quaternary)',
        'color-text-primary-inverted': 'var(--color-text-primary-inverted)',
        'color-text-secondary-inverted': 'var(--color-text-secondary-inverted)',
        'color-text-tertiary-inverted': 'var(--color-text-tertiary-inverted)',
        'color-text-quaternary-inverted':
          'var(--color-text-quaternary-inverted)',
        'color-content-1': 'var(--color-content-1)',
        'color-content-2': 'var(--color-content-2)',
        'color-content-3': 'var(--color-content-3)',
        'color-content-4': 'var(--color-content-4)',
        'color-content-5': 'var(--color-content-5)',
        'color-content-6': 'var(--color-content-6)',
        'color-content-7': 'var(--color-content-7)',
        'color-content-8': 'var(--color-content-8)',
        'color-content-9': 'var(--color-content-9)',
        'color-content-10': 'var(--color-content-10)',
        'color-opacity-0': 'var(--color-opacity-0)',
        'color-opacity-10': 'var(--color-opacity-10)',
        'color-opacity-20': 'var(--color-opacity-20)',
        'color-opacity-30': 'var(--color-opacity-30)',
        'color-opacity-40': 'var(--color-opacity-40)',
        'color-opacity-50': 'var(--color-opacity-50)',
        'color-opacity-60': 'var(--color-opacity-60)',
        'color-opacity-70': 'var(--color-opacity-70)',
        'color-opacity-80': 'var(--color-opacity-80)',
        'color-opacity-90': 'var(--color-opacity-90)',
        'color-opacity-100': 'var(--color-opacity-100)',
        'color-opacity-0-inverted': 'var(--color-opacity-0-inverted)',
        'color-opacity-10-inverted': 'var(--color-opacity-10-inverted)',
        'color-opacity-20-inverted': 'var(--color-opacity-20-inverted)',
        'color-opacity-30-inverted': 'var(--color-opacity-30-inverted)',
        'color-opacity-40-inverted': 'var(--color-opacity-40-inverted)',
        'color-opacity-50-inverted': 'var(--color-opacity-50-inverted)',
        'color-opacity-60-inverted': 'var(--color-opacity-60-inverted)',
        'color-opacity-70-inverted': 'var(--color-opacity-70-inverted)',
        'color-opacity-80-inverted': 'var(--color-opacity-80-inverted)',
        'color-opacity-90-inverted': 'var(--color-opacity-90-inverted)',
        'color-opacity-100-inverted': 'var(--color-opacity-100-inverted)',
        'color-pagebackground-primary': 'var(--color-pagebackground-primary)',
        'color-pagebackground-secondary':
          'var(--color-pagebackground-secondary)',
        'color-pagebackground-tertiary': 'var(--color-pagebackground-tertiary)',
        'color-pagebackground-quaternary':
          'var(--color-pagebackground-quaternary)',
        'color-pagebackground-primary-inverted':
          'var(--color-pagebackground-primary-inverted)',
        'color-pagebackground-secondary-inverted':
          'var(--color-pagebackground-secondary-inverted)',
        'color-pagebackground-tertiary-inverted':
          'var(--color-pagebackground-tertiary-inverted)',
        'color-pagebackground-quaternary-inverted':
          'var(--color-pagebackground-quaternary-inverted)',
        'color-utility-active': 'rgb(var(--color-utility-active))',
        'color-utility-active-subtle': 'var(--color-utility-active-subtle)',
        'color-utility-positive': 'var(--color-utility-positive)',
        'color-utility-positive-subtle': 'var(--color-utility-positive-subtle)',
        'color-utility-negative': 'rgb(var(--color-utility-negative))',
        'color-utility-negative-subtle': 'var(--color-utility-negative-subtle)',
        'color-utility-warning': 'rgb(var(--color-utility-warning))',
        'color-utility-warning-subtle': 'var(--color-utility-warning-subtle)',
        'color-utility-active-inverted': 'var(--color-utility-active-inverted)',
        'color-utility-active-subtle-inverted':
          'var(--color-utility-active-subtle-inverted)',
        'color-utility-positive-inverted':
          'var(--color-utility-positive-inverted)',
        'color-utility-positive-subtle-inverted':
          'var(--color-utility-positive-subtle-inverted)',
        'color-utility-negative-inverted':
          'var(--color-utility-negative-inverted)',
        'color-utility-negative-subtle-inverted':
          'var(--color-utility-negative-subtle-inverted)',
        'color-utility-warning-inverted':
          'var(--color-utility-warning-inverted)',
        'color-utility-warning-subtle-inverted':
          'var(--color-utility-warning-subtle-inverted)',
        // Independent Tokens
        'color-text-independent-light-primary':
          'var(--color-text-independent-light-primary)',
        'color-text-independent-light-secondary':
          'var(--color-text-independent-light-secondary)',
        'color-text-independent-light-tertiary':
          'var(--color-text-independent-light-tertiary)',
        'color-text-independent-light-quaternary':
          'var(--color-text-independent-light-quaternary)',
        'color-text-independent-dark-primary':
          'var(--color-text-independent-dark-primary)',
        'color-text-independent-dark-secondary':
          'var(--color-text-independent-dark-secondary)',
        'color-text-independent-dark-tertiary':
          'var(--color-text-independent-dark-tertiary)',
        'color-text-independent-dark-quaternary':
          'var(--color-text-independent-dark-quaternary)',
        'color-content-independent-1': 'var(--color-content-independent-1)',
        'color-content-independent-2': 'var(--color-content-independent-2)',
        'color-content-independent-3': 'var(--color-content-independent-3)',
        'color-content-independent-4': 'var(--color-content-independent-4)',
        'color-content-independent-5': 'var(--color-content-independent-5)',
        'color-content-independent-6': 'var(--color-content-independent-6)',
        'color-content-independent-7': 'var(--color-content-independent-7)',
        'color-content-independent-8': 'var(--color-content-independent-8)',
        'color-content-independent-9': 'var(--color-content-independent-9)',
        'color-content-independent-10': 'var(--color-content-independent-10)',
        'color-opacity-independent-light-0':
          'var(--color-opacity-independent-light-0)',
        'color-opacity-independent-light-10':
          'var(--color-opacity-independent-light-10)',
        'color-opacity-independent-light-20':
          'var(--color-opacity-independent-light-20)',
        'color-opacity-independent-light-30':
          'var(--color-opacity-independent-light-30)',
        'color-opacity-independent-light-40':
          'var(--color-opacity-independent-light-40)',
        'color-opacity-independent-light-50':
          'var(--color-opacity-independent-light-50)',
        'color-opacity-independent-light-60':
          'var(--color-opacity-independent-light-60)',
        'color-opacity-independent-light-70':
          'var(--color-opacity-independent-light-70)',
        'color-opacity-independent-light-80':
          'var(--color-opacity-independent-light-80)',
        'color-opacity-independent-light-90':
          'var(--color-opacity-independent-light-90)',
        'color-opacity-independent-light-100':
          'var(--color-opacity-independent-light-100)',
        'color-opacity-independent-dark-0':
          'var(--color-opacity-independent-dark-0)',
        'color-opacity-independent-dark-10':
          'var(--color-opacity-independent-dark-10)',
        'color-opacity-independent-dark-20':
          'var(--color-opacity-independent-dark-20)',
        'color-opacity-independent-dark-30':
          'var(--color-opacity-independent-dark-30)',
        'color-opacity-independent-dark-40':
          'var(--color-opacity-independent-dark-40)',
        'color-opacity-independent-dark-50':
          'var(--color-opacity-independent-dark-50)',
        'color-opacity-independent-dark-60':
          'var(--color-opacity-independent-dark-60)',
        'color-opacity-independent-dark-70':
          'var(--color-opacity-independent-dark-70)',
        'color-opacity-independent-dark-80':
          'var(--color-opacity-independent-dark-80)',
        'color-opacity-independent-dark-90':
          'var(--color-opacity-independent-dark-90)',
        'color-opacity-independent-dark-100':
          'var(--color-opacity-independent-dark-100)',
        'color-utility-independent-active':
          'var(--color-utility-independent-active)',
        'color-utility-independent-active-subtle':
          'var(--color-utility-independent-active-subtle)',
        'color-utility-independent-positive':
          'var(--color-utility-independent-positive)',
        'color-utility-independent-positive-subtle':
          'var(--color-utility-independent-positive-subtle)',
        'color-utility-independent-negative':
          'var(--color-utility-independent-negative)',
        'color-utility-independent-negative-subtle':
          'var(--color-utility-independent-negative-subtle)',
        'color-utility-independent-warning':
          'var(--color-utility-independent-warning)',
        'color-utility-independent-warning-subtle':
          'var(--color-utility-independent-warning-subtle)',
        'color-utility-independent-active-inverted':
          'var(--color-utility-independent-active-inverted)',
        'color-utility-independent-active-subtle-inverted':
          'var(--color-utility-independent-active-subtle-inverted)',
        'color-utility-independent-positive-inverted':
          'var(--color-utility-independent-positive-inverted)',
        'color-utility-independent-positive-subtle-inverted':
          'var(--color-utility-independent-positive-subtle-inverted)',
        'color-utility-independent-negative-inverted':
          'var(--color-utility-independent-negative-inverted)',
        'color-utility-independent-negative-subtle-inverted':
          'var(--color-utility-independent-negative-subtle-inverted)',
        'color-utility-independent-warning-inverted':
          'var(--color-utility-independent-warning-inverted)',
        'color-utility-independent-warning-subtle-inverted':
          'var(--color-utility-independent-warning-subtle-inverted)',
      },
      keyframes: {
        skeleton: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        'hide-to-right': 'hide-to-right 800ms ease forwards',
        skeleton:
          'skeleton 1400ms cubic-bezier(0.66, 0.00, 0.34, 1.00) infinite',
        skeletonLoader: 'skeleton 2s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }: PluginAPI) {
      addBase({
        ':root': {
          // Light / Default Tokens
          '--color-text-primary': theme('colors.primitive.neutral-10'),
          '--color-text-secondary': theme('colors.primitive.neutral-8'),
          '--color-text-tertiary': theme('colors.primitive.neutral-6'),
          '--color-text-quaternary': theme('colors.primitive.neutral-4'),
          '--color-text-primary-inverted': theme('colors.primitive.neutral-1'),
          '--color-text-secondary-inverted': theme(
            'colors.primitive.neutral-3',
          ),
          '--color-text-tertiary-inverted': theme('colors.primitive.neutral-5'),
          '--color-text-quaternary-inverted': theme(
            'colors.primitive.neutral-7',
          ),
          '--color-content-1': theme('colors.primitive.neutral-10'),
          '--color-content-2': theme('colors.primitive.neutral-9'),
          '--color-content-3': theme('colors.primitive.neutral-8'),
          '--color-content-4': theme('colors.primitive.neutral-7'),
          '--color-content-5': theme('colors.primitive.neutral-6'),
          '--color-content-6': theme('colors.primitive.neutral-5'),
          '--color-content-7': theme('colors.primitive.neutral-4'),
          '--color-content-8': theme('colors.primitive.neutral-3'),
          '--color-content-9': theme('colors.primitive.neutral-2'),
          '--color-content-10': theme('colors.primitive.neutral-1'),
          '--color-opacity-0': theme('colors.primitive.opacity-light-0'),
          '--color-opacity-10': theme('colors.primitive.opacity-light-10'),
          '--color-opacity-20': theme('colors.primitive.opacity-light-20'),
          '--color-opacity-30': theme('colors.primitive.opacity-light-30'),
          '--color-opacity-40': theme('colors.primitive.opacity-light-40'),
          '--color-opacity-50': theme('colors.primitive.opacity-light-50'),
          '--color-opacity-60': theme('colors.primitive.opacity-light-60'),
          '--color-opacity-70': theme('colors.primitive.opacity-light-70'),
          '--color-opacity-80': theme('colors.primitive.opacity-light-80'),
          '--color-opacity-90': theme('colors.primitive.opacity-light-90'),
          '--color-opacity-100': theme('colors.primitive.opacity-light-100'),
          '--color-opacity-0-inverted': theme(
            'colors.primitive.opacity-dark-0',
          ),
          '--color-opacity-10-inverted': theme(
            'colors.primitive.opacity-dark-10',
          ),
          '--color-opacity-20-inverted': theme(
            'colors.primitive.opacity-dark-20',
          ),
          '--color-opacity-30-inverted': theme(
            'colors.primitive.opacity-dark-30',
          ),
          '--color-opacity-40-inverted': theme(
            'colors.primitive.opacity-dark-40',
          ),
          '--color-opacity-50-inverted': theme(
            'colors.primitive.opacity-dark-50',
          ),
          '--color-opacity-60-inverted': theme(
            'colors.primitive.opacity-dark-60',
          ),
          '--color-opacity-70-inverted': theme(
            'colors.primitive.opacity-dark-70',
          ),
          '--color-opacity-80-inverted': theme(
            'colors.primitive.opacity-dark-80',
          ),
          '--color-opacity-90-inverted': theme(
            'colors.primitive.opacity-dark-90',
          ),
          '--color-opacity-100-inverted': theme(
            'colors.primitive.opacity-dark-100',
          ),
          '--color-pagebackground-primary': theme('colors.primitive.light-1'),
          '--color-pagebackground-secondary': theme('colors.primitive.light-2'),
          '--color-pagebackground-tertiary': theme('colors.primitive.light-3'),
          '--color-pagebackground-quaternary': theme(
            'colors.primitive.light-4',
          ),
          '--color-pagebackground-primary-inverted': theme(
            'colors.primitive.dark-1',
          ),
          '--color-pagebackground-secondary-inverted': theme(
            'colors.primitive.dark-2',
          ),
          '--color-pagebackground-tertiary-inverted': theme(
            'colors.primitive.dark-3',
          ),
          '--color-pagebackground-quaternary-inverted': theme(
            'colors.primitive.dark-4',
          ),
          '--color-utility-active': theme('colors.primitive.blue-3'),
          '--color-utility-active-subtle': theme('colors.primitive.blue-4'),
          '--color-utility-positive': theme('colors.primitive.green-3'),
          '--color-utility-positive-subtle': theme('colors.primitive.green-4'),
          '--color-utility-negative': theme('colors.primitive.red-3'),
          '--color-utility-negative-subtle': theme('colors.primitive.red-4'),
          '--color-utility-warning': theme('colors.primitive.yellow-3'),
          '--color-utility-warning-subtle': theme('colors.primitive.yellow-4'),
          '--color-utility-active-inverted': theme('colors.primitive.blue-2'),
          '--color-utility-active-subtle-inverted': theme(
            'colors.primitive.blue-1',
          ),
          '--color-utility-positive-inverted': theme(
            'colors.primitive.green-2',
          ),
          '--color-utility-positive-subtle-inverted': theme(
            'colors.primitive.green-1',
          ),
          '--color-utility-negative-inverted': theme('colors.primitive.red-2'),
          '--color-utility-negative-subtle-inverted': theme(
            'colors.primitive.red-1',
          ),
          '--color-utility-warning-inverted': theme(
            'colors.primitive.yellow-2',
          ),
          '--color-utility-warning-subtle-inverted': theme(
            'colors.primitive.yellow-1',
          ),
          // Independent tokens
          '--color-text-independent-light-primary': theme(
            'colors.primitive.neutral-1',
          ),
          '--color-text-independent-light-secondary': theme(
            'colors.primitive.neutral-3',
          ),
          '--color-text-independent-light-tertiary': theme(
            'colors.primitive.neutral-5',
          ),
          '--color-text-independent-light-quaternary': theme(
            'colors.primitive.neutral-7',
          ),
          '--color-text-independent-dark-primary': theme(
            'colors.primitive.neutral-10',
          ),
          '--color-text-independent-dark-secondary': theme(
            'colors.primitive.neutral-8',
          ),
          '--color-text-independent-dark-tertiary': theme(
            'colors.primitive.neutral-6',
          ),
          '--color-text-independent-dark-quaternary': theme(
            'colors.primitive.neutral-4',
          ),
          '--color-content-independent-1': theme('colors.primitive.neutral-10'),
          '--color-content-independent-2': theme('colors.primitive.neutral-9'),
          '--color-content-independent-3': theme('colors.primitive.neutral-8'),
          '--color-content-independent-4': theme('colors.primitive.neutral-7'),
          '--color-content-independent-5': theme('colors.primitive.neutral-6'),
          '--color-content-independent-6': theme('colors.primitive.neutral-5'),
          '--color-content-independent-7': theme('colors.primitive.neutral-4'),
          '--color-content-independent-8': theme('colors.primitive.neutral-3'),
          '--color-content-independent-9': theme('colors.primitive.neutral-2'),
          '--color-content-independent-10': theme('colors.primitive.neutral-1'),
          '--color-opacity-independent-light-0': theme(
            'colors.primitive.opacity-light-0',
          ),
          '--color-opacity-independent-light-10': theme(
            'colors.primitive.opacity-light-10',
          ),
          '--color-opacity-independent-light-20': theme(
            'colors.primitive.opacity-light-20',
          ),
          '--color-opacity-independent-light-30': theme(
            'colors.primitive.opacity-light-30',
          ),
          '--color-opacity-independent-light-40': theme(
            'colors.primitive.opacity-light-40',
          ),
          '--color-opacity-independent-light-50': theme(
            'colors.primitive.opacity-light-50',
          ),
          '--color-opacity-independent-light-60': theme(
            'colors.primitive.opacity-light-60',
          ),
          '--color-opacity-independent-light-70': theme(
            'colors.primitive.opacity-light-70',
          ),
          '--color-opacity-independent-light-80': theme(
            'colors.primitive.opacity-light-80',
          ),
          '--color-opacity-independent-light-90': theme(
            'colors.primitive.opacity-light-90',
          ),
          '--color-opacity-independent-light-100': theme(
            'colors.primitive.opacity-light-100',
          ),
          '--color-opacity-independent-dark-0': theme(
            'colors.primitive.opacity-dark-0',
          ),
          '--color-opacity-independent-dark-10': theme(
            'colors.primitive.opacity-dark-10',
          ),
          '--color-opacity-independent-dark-20': theme(
            'colors.primitive.opacity-dark-20',
          ),
          '--color-opacity-independent-dark-30': theme(
            'colors.primitive.opacity-dark-30',
          ),
          '--color-opacity-independent-dark-40': theme(
            'colors.primitive.opacity-dark-40',
          ),
          '--color-opacity-independent-dark-50': theme(
            'colors.primitive.opacity-dark-50',
          ),
          '--color-opacity-independent-dark-60': theme(
            'colors.primitive.opacity-dark-60',
          ),
          '--color-opacity-independent-dark-70': theme(
            'colors.primitive.opacity-dark-70',
          ),
          '--color-opacity-independent-dark-80': theme(
            'colors.primitive.opacity-dark-80',
          ),
          '--color-opacity-independent-dark-90': theme(
            'colors.primitive.opacity-dark-90',
          ),
          '--color-opacity-independent-dark-100': theme(
            'colors.primitive.opacity-dark-100',
          ),
          '--color-utility-independent-active': theme(
            'colors.primitive.blue-3',
          ),
          '--color-utility-independent-active-subtle': theme(
            'colors.primitive.blue-4',
          ),
          '--color-utility-independent-positive': theme(
            'colors.primitive.green-3',
          ),
          '--color-utility-independent-positive-subtle': theme(
            'colors.primitive.green-4',
          ),
          '--color-utility-independent-negative': theme(
            'colors.primitive.red-3',
          ),
          '--color-utility-independent-negative-subtle': theme(
            'colors.primitive.red-4',
          ),
          '--color-utility-independent-warning': theme(
            'colors.primitive.yellow-3',
          ),
          '--color-utility-independent-warning-subtle': theme(
            'colors.primitive.yellow-4',
          ),
          '--color-utility-independent-active-inverted': theme(
            'colors.primitive.blue-2',
          ),
          '--color-utility-independent-active-subtle-inverted': theme(
            'colors.primitive.blue-1',
          ),
          '--color-utility-independent-positive-inverted': theme(
            'colors.primitive.green-2',
          ),
          '--color-utility-independent-positive-subtle-inverted': theme(
            'colors.primitive.green-1',
          ),
          '--color-utility-independent-negative-inverted': theme(
            'colors.primitive.red-2',
          ),
          '--color-utility-independent-negative-subtle-inverted': theme(
            'colors.primitive.red-1',
          ),
          '--color-utility-independent-warning-inverted': theme(
            'colors.primitive.yellow-2',
          ),
          '--color-utility-independent-warning-subtle-inverted': theme(
            'colors.primitive.yellow-1',
          ),
        },
        '.dark': {
          '--color-text-primary': theme('colors.primitive.neutral-1'),
          '--color-text-secondary': theme('colors.primitive.neutral-3'),
          '--color-text-tertiary': theme('colors.primitive.neutral-5'),
          '--color-text-quaternary': theme('colors.primitive.neutral-7'),
          '--color-text-primary-inverted': theme('colors.primitive.neutral-10'),
          '--color-text-secondary-inverted': theme(
            'colors.primitive.neutral-8',
          ),
          '--color-text-tertiary-inverted': theme('colors.primitive.neutral-6'),
          '--color-text-quaternary-inverted': theme(
            'colors.primitive.neutral-4',
          ),
          '--color-content-1': theme('colors.primitive.neutral-1'),
          '--color-content-2': theme('colors.primitive.neutral-2'),
          '--color-content-3': theme('colors.primitive.neutral-3'),
          '--color-content-4': theme('colors.primitive.neutral-4'),
          '--color-content-5': theme('colors.primitive.neutral-5'),
          '--color-content-6': theme('colors.primitive.neutral-6'),
          '--color-content-7': theme('colors.primitive.neutral-7'),
          '--color-content-8': theme('colors.primitive.neutral-8'),
          '--color-content-9': theme('colors.primitive.neutral-9'),
          '--color-content-10': theme('colors.primitive.neutral-10'),
          '--color-opacity-0': theme('colors.primitive.opacity-dark-0'),
          '--color-opacity-10': theme('colors.primitive.opacity-dark-10'),
          '--color-opacity-20': theme('colors.primitive.opacity-dark-20'),
          '--color-opacity-30': theme('colors.primitive.opacity-dark-30'),
          '--color-opacity-40': theme('colors.primitive.opacity-dark-40'),
          '--color-opacity-50': theme('colors.primitive.opacity-dark-50'),
          '--color-opacity-60': theme('colors.primitive.opacity-dark-60'),
          '--color-opacity-70': theme('colors.primitive.opacity-dark-70'),
          '--color-opacity-80': theme('colors.primitive.opacity-dark-80'),
          '--color-opacity-90': theme('colors.primitive.opacity-dark-90'),
          '--color-opacity-100': theme('colors.primitive.opacity-dark-100'),
          '--color-opacity-0-inverted': theme(
            'colors.primitive.opacity-light-0',
          ),
          '--color-opacity-10-inverted': theme(
            'colors.primitive.opacity-light-10',
          ),
          '--color-opacity-20-inverted': theme(
            'colors.primitive.opacity-light-20',
          ),
          '--color-opacity-30-inverted': theme(
            'colors.primitive.opacity-light-30',
          ),
          '--color-opacity-40-inverted': theme(
            'colors.primitive.opacity-light-40',
          ),
          '--color-opacity-50-inverted': theme(
            'colors.primitive.opacity-light-50',
          ),
          '--color-opacity-60-inverted': theme(
            'colors.primitive.opacity-light-60',
          ),
          '--color-opacity-70-inverted': theme(
            'colors.primitive.opacity-light-70',
          ),
          '--color-opacity-80-inverted': theme(
            'colors.primitive.opacity-light-80',
          ),
          '--color-opacity-90-inverted': theme(
            'colors.primitive.opacity-light-90',
          ),
          '--color-opacity-100-inverted': theme(
            'colors.primitive.opacity-light-100',
          ),
          '--color-pagebackground-primary': theme('colors.primitive.dark-1'),
          '--color-pagebackground-secondary': theme('colors.primitive.dark-2'),
          '--color-pagebackground-tertiary': theme('colors.primitive.dark-3'),
          '--color-pagebackground-quaternary': theme('colors.primitive.dark-4'),
          '--color-pagebackground-primary-inverted': theme(
            'colors.primitive.light-1',
          ),
          '--color-pagebackground-secondary-inverted': theme(
            'colors.primitive.light-2',
          ),
          '--color-pagebackground-tertiary-inverted': theme(
            'colors.primitive.light-3',
          ),
          '--color-pagebackground-quaternary-inverted': theme(
            'colors.primitive.light-4',
          ),
          '--color-utility-active': theme('colors.primitive.blue-2'),
          '--color-utility-active-subtle': theme('colors.primitive.blue-1'),
          '--color-utility-positive': theme('colors.primitive.green-2'),
          '--color-utility-positive-subtle': theme('colors.primitive.green-1'),
          '--color-utility-negative': theme('colors.primitive.red-2'),
          '--color-utility-negative-subtle': theme('colors.primitive.red-4'),
          '--color-utility-warning': theme('colors.primitive.yellow-2'),
          '--color-utility-warning-subtle': theme('colors.primitive.yellow-1'),
          '--color-utility-active-inverted': theme('colors.primitive.blue-3'),
          '--color-utility-active-subtle-inverted': theme(
            'colors.primitive.blue-4',
          ),
          '--color-utility-positive-inverted': theme(
            'colors.primitive.green-3',
          ),
          '--color-utility-positive-subtle-inverted': theme(
            'colors.primitive.green-4',
          ),
          '--color-utility-negative-inverted': theme('colors.primitive.red-3'),
          '--color-utility-negative-subtle-inverted': theme(
            'colors.primitive.red-4',
          ),
          '--color-utility-warning-inverted': theme(
            'colors.primitive.yellow-3',
          ),
          '--color-utility-warning-subtle-inverted': theme(
            'colors.primitive.yellow-4',
          ),
        },
      });
    },
  ],
  darkMode: 'class',
};
export default config;
