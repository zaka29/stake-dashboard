/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,ts}', // Angular components & templates
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--ion-color-primary)',
          rgb: 'var(--ion-color-primary-rgb)',
          contrast: 'var(--ion-color-primary-contrast)',
          contrastRgb: 'var(--ion-color-primary-contrast-rgb)',
          shade: 'var(--ion-color-primary-shade)',
          tint: 'var(--ion-color-primary-tint)',
        },
        secondary: {
          DEFAULT: 'var(--ion-color-secondary)',
          rgb: 'var(--ion-color-secondary-rgb)',
          contrast: 'var(--ion-color-secondary-contrast)',
          contrastRgb: 'var(--ion-color-secondary-contrast-rgb)',
          shade: 'var(--ion-color-secondary-shade)',
          tint: 'var(--ion-color-secondary-tint)',
        },
        tertiary: {
          DEFAULT: 'var(--ion-color-tertiary)',
          rgb: 'var(--ion-color-tertiary-rgb)',
          contrast: 'var(--ion-color-tertiary-contrast)',
          contrastRgb: 'var(--ion-color-tertiary-contrast-rgb)',
          shade: 'var(--ion-color-tertiary-shade)',
          tint: 'var(--ion-color-tertiary-tint)',
        },
        success: {
          DEFAULT: 'var(--ion-color-success)',
          rgb: 'var(--ion-color-success-rgb)',
          contrast: 'var(--ion-color-success-contrast)',
          contrastRgb: 'var(--ion-color-success-contrast-rgb)',
          shade: 'var(--ion-color-success-shade)',
          tint: 'var(--ion-color-success-tint)',
        },
        warning: {
          DEFAULT: 'var(--ion-color-warning)',
          rgb: 'var(--ion-color-warning-rgb)',
          contrast: 'var(--ion-color-warning-contrast)',
          contrastRgb: 'var(--ion-color-warning-contrast-rgb)',
          shade: 'var(--ion-color-warning-shade)',
          tint: 'var(--ion-color-warning-tint)',
        },
        danger: {
          DEFAULT: 'var(--ion-color-danger)',
          rgb: 'var(--ion-color-danger-rgb)',
          contrast: 'var(--ion-color-danger-contrast)',
          contrastRgb: 'var(--ion-color-danger-contrast-rgb)',
          shade: 'var(--ion-color-danger-shade)',
          tint: 'var(--ion-color-danger-tint)',
        },
        light: {
          DEFAULT: 'var(--ion-color-light)',
          rgb: 'var(--ion-color-light-rgb)',
          contrast: 'var(--ion-color-light-contrast)',
          contrastRgb: 'var(--ion-color-light-contrast-rgb)',
          shade: 'var(--ion-color-light-shade)',
          tint: 'var(--ion-color-light-tint)',
        },
        medium: {
          DEFAULT: 'var(--ion-color-medium)',
          rgb: 'var(--ion-color-medium-rgb)',
          contrast: 'var(--ion-color-medium-contrast)',
          contrastRgb: 'var(--ion-color-medium-contrast-rgb)',
          shade: 'var(--ion-color-medium-shade)',
          tint: 'var(--ion-color-medium-tint)',
        },
        dark: {
          DEFAULT: 'var(--ion-color-dark)',
          rgb: 'var(--ion-color-dark-rgb)',
          contrast: 'var(--ion-color-dark-contrast)',
          contrastRgb: 'var(--ion-color-dark-contrast-rgb)',
          shade: 'var(--ion-color-dark-shade)',
          tint: 'var(--ion-color-dark-tint)',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
