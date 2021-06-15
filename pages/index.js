import Head from 'next/head'

import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    
    <h1>Luxo Tour Operator</h1>
    <br/>
    <br/>
    <a href="/home">Home</a>

    <Footer/>
    </div>
  )
}
