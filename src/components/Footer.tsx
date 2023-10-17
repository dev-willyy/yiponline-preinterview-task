import SocialIcons from './SocialIcons';
import { year } from '../database/dates';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const icons = [
  {
    name: 'facebook-logo',
    iconTag: <FaFacebookF />,
    link: 'https://www.facebook.com/williams.madu.14',
  },
  {
    name: 'twitter-logo',
    iconTag: <FaTwitter />,
    link: 'https://twitter.com/dev_willyy',
  },
  {
    name: 'linkedin-logo',
    iconTag: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/dev-willyy',
  },
  {
    name: 'instagram-logo',
    iconTag: <FaInstagram />,
    link: 'https://www.instagram.com/dev_willyy',
  },
];

function Footer() {
  return (
    <footer className="font-fira-reg">
      <main className="flex gap-8 text-black text-sm py-4 border-t-2 border-t-generalShadow">
        <div className="basis-[53%] text-right pt-3">
          Built from scratch by Williams Madu, &copy; {year} All rights reserved.
        </div>
        <div className="basis-[47%] text-left">
          <SocialIcons icons={icons} />
        </div>
      </main>
    </footer>
  );
}

export default Footer;
