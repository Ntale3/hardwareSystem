import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#030406] text-gray-100">
       <div className='lg:flex lg:justify-between lg:flex-row p-8 mt-4 bg-[#030406] flex flex-col gap-6'>
        <div className="">
            <p className="mb-3 text-xl">Support</p>
            <ul className=" flex flex-col gap-4">
                <li>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
            </ul>
        </div>

        <div className="">
        <p className="mb-3 text-xl">Account</p>
            <ul className=" flex flex-col gap-4">
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
            </ul>
        </div>

        <div className="">
        <p className="mb-3 text-xl">Quick Link</p>
            <ul className=" flex flex-col gap-4">
                <li>Privacy policy</li>
                <li>Terms of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
                
            </ul>
        </div>

        <div>
        <p className="mb-3 text-xl">Socials</p>
            <ul className="flex gap-4">
                <li><FaFacebookF/></li>
                <li><FiTwitter/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedinIn/></li>
                
                
            </ul>
        </div>       
            
        </div >
        <div className="flex justify-center p-4">            
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
        </div>

       
    );
};

export default Footer;