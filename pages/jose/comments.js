import Head from "next/head";
import style from '@/styles/jose.module.css'

export const getStaticProps=async()=>{

    const res=await fetch('https://jsonplaceholder.typicode.com/comments');
    const data=await res.json();

    return {
        props:{comment:data}
    } 
}

const Comments = ({comment}) => {
    return ( 
        <>
        <Head>
            <title>Comments page</title>
        </Head>
        <div>
            <h1>Welcome to Comments page</h1>
            <p>Use of JsonPLaceholder to fetch data of comments</p>
            {comment.map(comment =>(
                <div key={comment.id}>
                    <div className="deco">
                    <h3 >{comment.name}</h3>
                    <p><strong>{comment.name}</strong></p>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default Comments;