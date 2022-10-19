import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
	  fontSize: {
		  'head': '3rem',
		  'sub': '2rem'
	  },
	  boxShadow: {
		  gBox: '0 4px 30px rgba(0, 0, 0, 0.1)',
	  },
	  backdropBlur: {
		  gBox: '2px',
	  }
  }
} as Options;
