import { Facebook, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-bg_light text-black rounded-t-[36px]'>
      <div className='_container py-[56px]'>
        <div className='grid grid-cols-6 grid-row-2 gap-y-36'>
          <div className='col-start-1 col-end-4 row-start-1 row-end-2'>
            <Link href='/'>
              <Image
                src='/images/Logo_black.png'
                alt='Logo'
                width={160}
                height={80}
              />
            </Link>
          </div>
          <div className='col-start-4 col-end-7 row-start-1 row-end-2 flex justify-between'>
            <div>
              <h3 className='mb-2 text-lg font-bold'>Kontakt</h3>
              <p>Whatsapp</p>
              <p>Email</p>
            </div>
            <div>
              <h3 className='mb-2 text-lg font-bold'>Rechtliches</h3>
              <p>Impressum</p>
              <p>Datenschutzerklärung</p>
            </div>
            <div>
              <h3 className='mb-2 text-lg font-bold'>Socials</h3>
              <span className='flex items-center gap-x-4'>
                <Facebook size={22} />
                <Twitter size={22} />
              </span>
            </div>
          </div>
          {/* row2 */}
          <div className='col-start-1 col-end-4 row-start-2 row-end-3'>
            <p className='mb-2'>Schreiben Sie uns eine E-Mail! </p>
            <div className='w-fit'>
              <p className='text-4xl'>pitswebdev@email.com</p>
              <span className='w-full h-[1px] bg-black block mt-2'></span>
            </div>
          </div>
          <div className='col-start-4 col-end-7 row-start-2 row-end-3 flex justify-end items-end'>
            <p>© Webdev Pit 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
