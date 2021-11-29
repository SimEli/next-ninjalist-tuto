import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return ( 
		<nav>
			<div className="logo">
				<Image src="/logo.png" width={128} height={77} />
			</div>
			<Link href="/"><a>Home</a></Link>
			<Link href="/about">About</Link>
			<Link href="/ninjas">Ninja Listing</Link>
		</nav>
	 );
}
 
export default Navbar;