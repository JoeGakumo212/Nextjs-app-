import Link from "next/link"
import Image from "next/image";
const Navbar = () => {
    return ( 
        <nav>

            <div className="logo">
                <Image src="/avatar.jpg" alt="Logo Home" width={120} height={120}/>
            </div>
            <Link href="/"><h2>Home</h2></Link>
            <Link href="/about"><h2>About</h2></Link>
            <Link href="/jose"><h2>Jose</h2></Link>
            <Link href="/jose/test"><h2>Test</h2></Link>
            <Link href="/jose/comments"><h2>Comments</h2></Link>
        </nav>
     );
}
 
export default Navbar;