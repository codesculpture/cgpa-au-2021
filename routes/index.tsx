import Main from '../islands/Main.tsx';
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
	  <>
		  <Head>
			  <title>Calculate CGPA - 2021 AU</title>
			  <meta name="description" content="Calculate CGPA for Anna University 2021 Regulation"/>
			  <link rel="icon" type="image/x-icon" href="https://w7.pngwing.com/pngs/981/872/png-transparent-computer-terminal-computer-icons-linux-console-terminal-emulator-linux-logo-desktop-wallpaper-linux-thumbnail.png" />	  
		  </Head>
    <div class="p-4 mx-auto max-w-screen-md">
	    <div class="text-head font-bold text-blue-600 text-center">
		    CGPA Calculator
	   </div>
	    <Main />
	   </div>
		  <div class="text-center bottom-0">
			  Made with ❤️  by <a class="text-blue-600"href="https://github.com/codesculpture">Arvind</a>
		  </div>
	  </>
  );
}
