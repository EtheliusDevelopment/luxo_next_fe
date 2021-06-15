import Image from 'next/image'
import React from 'react'
import styles from '../../styles/NavBar.module.css';

const Logo = () => {
    return (
        <>
          <Image src="/logo.svg" alt="Luxo Italia Logo" width={200} height={60} className={styles.Logo} />  
        </>
    )
}

export default Logo
