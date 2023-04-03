import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from '../../styles/header.module.scss';


interface props {
    rightElements?: React.ReactElement[]
}


const Header = ({rightElements}:props)=>{
    return(
        <header className={styles.header}>
            <div className={styles.flexItem}>
                <Link href="/" className={styles.box}>
                    <Image src="/inflearn.png" alt="" width={110} height={20}/>
                </Link>
            </div>
           {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
        </header>
    )
}

export default Header