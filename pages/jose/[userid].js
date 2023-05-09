export const getStaticPaths = async ()=>{

    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();

    const paths=data.map(joseph => {
        return{
            params:{id: joseph.id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}

export const getStaticProps =async (context)=>{

    const id=context.params.id;
    const res=await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data=await res.json();
    
    return{
        props:{joseph:data}  
    }
}
const Details = ({joseph}) => {
    return (  
        <>
        <div>
            <h1>MORE DETAILS ABOUT USERS</h1>
            <h1>{joseph.name}</h1>
            <p>{joseph.email}</p>
       
        </div>
        </>
    );
}
 
export default Details;