import './css/footer.css';

const Footer = () => {
  const link = {
    facebook: 'https://www.facebook.com/Natx0082/',
    instagram: 'https://www.instagram.com/n_nnat_48/',
    github: 'https://github.com/Unknowkubbrother',
    discord: 'https://discordapp.com/users/475327498909908994',
  };

  return (
    <div className='footer'>
      <div className="w-[95%] 2xl:w-[70%] m-auto flex flex-col 2xl:flex-row justify-between items-center py-5 gap-5">
        <img src='logo.png' alt="logo" className='w-[80px] h-[80px] 2xl:w-[100px] 2xl:h-[100px]'/>
        <div className="contact-main1 text-center">
          <div className="font-semibold">Contact</div>
          <div className="flex flex-col">
              <a href="tel:0902974175" className='hover:text-sky-500 duration-300'>+66 902974175</a>
              <a href="mailto:natchnon654321@gmail.com" className='hover:text-sky-500 duration-300'>natchnon654321@gmail.com</a>
          </div>
        </div>
        <div className="contact-main2">
          <div className="text-center font-semibold mb-3">Fllow Us</div>
          <div className="flex gap-3 text-2xl">
              <a href= {link.facebook}  target='_blank'><i className="fa-brands fa-facebook hover:text-sky-500 duration-300"></i></a>
              <a href={link.instagram} target='_blank'><i className="fa-brands fa-instagram hover:text-sky-500 duration-300"></i></a>
              <a href={link.github} target='_blank'><i className="fa-brands fa-github hover:text-sky-500 duration-300"></i></a>
              <a href={link.discord} target='_blank'><i className="fa-brands fa-discord hover:text-sky-500 duration-300"></i></a>
          </div>
        </div>
      </div>
      <div className='text-center text-bold pb-5'>Copyright © 2024 Unknowkubbrother. All Rights Reserved</div>
      
      
    </div>
  )
}

export default Footer