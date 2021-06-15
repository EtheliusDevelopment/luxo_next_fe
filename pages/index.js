import Head from 'next/head'

import Footer from '../components/layout/Footer'
import NavBar from '../components/layout/NavBar';
import styles from '../styles/Home.module.css'

// configurazione i18n
import { useRouter } from 'next/router';
import {en, ru, it} from '../translation'

export default function Home() {

// configurazione i18n
const router = useRouter();
const { locale }= router;

const t = locale === "it" ? it : en;

const handleLanguageToogle = () =>{
  switch (locale ) {

    case "it":
      router.push("/", "/", {
        locale: "en"
      })
    break;

    case "en":
      router.push("/", "/", {
        locale: "it"
      })

    break;

    case "ru":
      router.push("/", "/", {
        locale: "ru"
      })

    break;
  }
}

// fine configurazione i18n    
  return (
    <>
    <NavBar />
    <div className={styles.container}>
    
    <h1>Luxo Tour Operator</h1>
    <br/>
    <h3>Language Test</h3>

      <p onClick={handleLanguageToogle} style={{cursor:'pointer'}}>
      {locale}
      </p>
    
    <h1 style={{color: 'green', border:"2px dashed salmon", padding:"2em"}}>{t.linguaggio}</h1>
    <br/>
    <a href="/home">Home</a>

   
    </div>
    <Footer/>
    </>
  )
}
