import style from '@/styles/jose.module.css'
import Link from 'next/link';
export const getStaticProps= async() =>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();

    return {
        props:{joseph:data}
    }
}
const Test = ({joseph}) => {
    return ( 
        <div>
            <h1>Test page</h1>
            <p>AM a test page for routing</p>
            <p>
            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader,
            </p>
            <h2>Demonstration of Data Fecthing  of users from jsonplaceholder</h2>
            {joseph.map(joseph =>(
                <Link href={'/jose/' +joseph.id} key={joseph.id}>
                    <h3 className={style.single}>{joseph.name}</h3>
                    <h3>{joseph.email}</h3>
                </Link>
            ))}
        </div>
     );
}
 
export default Test;