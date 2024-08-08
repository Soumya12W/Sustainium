/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
      minHeight: {
        'screen': 'calc(100vh - 80px)',
      }

    },
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
			}
		},
    fontFamily: {
      'sans': ['"Open Sans"', 'sans-serif']
    },
    backgroundPosition: {
      'sm-right-bottom': 'right -6.5rem bottom -2rem ',
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      right: 'right',
      top: 'top',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
    }
	},
	plugins: [
    
      require('@tailwindcss/typography'),
 
  ]
};
