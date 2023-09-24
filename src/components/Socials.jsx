import { EmailIcon, YoutubeIcon, InstagramIcon } from '@/configs/icons'

const Socials = ({ email, instagram, youtube }) => {
  return (
    <div className="flex items-center">
      <span className="flex gap-x-5 ml-2">
        <a
          href={`mailto:${email}`}
          className="group cursor-pointer"
          aria-label="Email"
          title="Email"
        >
          <EmailIcon />
        </a>

        <a
          href={`https://www.instagram.com/${instagram}`}
          className="group cursor-pointer"
          aria-label="Instagram"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>

        <a
          href={`https://www.youtube.com/@${youtube}`}
          className="group cursor-pointer"
          aria-label="youtube"
          title="youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon />
        </a>
      
      </span>
    </div>
  )
}
export default Socials
