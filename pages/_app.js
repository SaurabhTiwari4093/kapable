import '../styles/globals.css';
import "@fontsource/poppins/400.css"

function MyApp({ Component, pageProps }) {
  return (
    <div style={{fontFamily:"Poppins"}}>
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
