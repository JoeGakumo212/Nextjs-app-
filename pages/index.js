import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/navbar'
import Footer from '@/comps/footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  <Head>
    <title>Home page | NextJs</title>
    <meta name='Keywords' content='jose'></meta>
  </Head>
    <div> 
    <h1 className={styles.title}>Home page for Winners</h1>
    <p className={styles.text}>Welcome to  home of victors</p> 
    <p className={styles.text}>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader,</p>
      
    <div>
      <row >
      <Link href="/jose/test" className={styles.btn}> 
      Test
      </Link>
      <Link href="/jose/comments" className={styles.btn1}> 
      Comments
      </Link>
      </row>
    </div>
    </div>
  </>
  )
}
