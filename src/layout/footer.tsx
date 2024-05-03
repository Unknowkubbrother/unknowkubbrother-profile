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
      <div className="contact">
        <img src='logo.png' alt="logo" className='w-[120px] h-[100px]'/>
        <div className="contact-main1 text-center">
          <div className="fllow-me mb-3">Contact</div>
          <div className="contact-secon1">
              <a href="tel:0902974175">+66 902974175</a>
              <a href="mailto:natchnon654321@gmail.com">natchnon654321@gmail.com</a>
          </div>
        </div>
        <div className="contact-main2">
          <div className="fllow-me text-center mb-3">Fllow Us</div>
          <div className="contact-secon2">
              <a href= {link.facebook}  target='_blank'><i className="fa-brands fa-facebook hover:text-sky-500 duration-300"></i></a>
              <a href={link.instagram} target='_blank'><i className="fa-brands fa-instagram hover:text-sky-500 duration-300"></i></a>
              <a href={link.github} target='_blank'><i className="fa-brands fa-github hover:text-sky-500 duration-300"></i></a>
              <a href={link.discord} target='_blank'><i className="fa-brands fa-discord hover:text-sky-500 duration-300"></i></a>
          </div>
        </div>
      </div>
      <div className='text-center mb-10 text-bold'>Copyright © 2024 Unknowkubbrother. All Rights Reserved</div>
      
      
    </div>
  )
}

export default Footer