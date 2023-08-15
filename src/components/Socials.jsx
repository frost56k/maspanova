import { EmailIcon, FacebookIcon, VkIcon, InstagramIcon } from '@/configs/icons'

const Socials = ({ email, instagram, vk, facebook }) => {
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
          href={`https://facebook.com/${facebook}`}
          className="group cursor-pointer"
          aria-label="Facebook"
          title="Facebook"
        >
          <FacebookIcon />
        </a>
        <a
          href={`https://www.instagram.com/${instagram}`}
          className="group cursor-pointer"
          aria-label="Instagram"
          title="Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          href={`https://www.vk.com/${vk}`}
          className="group cursor-pointer"
          aria-label="vk"
          title="vk"
        >
          <VkIcon />
        </a>
      </span>
    </div>
  )
}
export default Socials
