import Image from 'next/image';
const me = () =>{
    return (
        <div>
            <Image
            
        src="/../public/images/profile.jpeg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Ankit"
        />
             </div>
    );
   
}
export default me;