import styles from '@/styles/404.module.css'
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NotFound = () => {
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        },3000)
    },[])
    return (
        <div className="not-found">
            <h1 className={styles.joe}>Ooooooops.............</h1>
            <h2 className={styles.joe2}>That page cannot be found</h2>
            <p className={styles.l}>Go back to home page <Link href="/" className={styles.home}>HomePage</Link></p>
        </div>
      );
}
 
export default NotFound;