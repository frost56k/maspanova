import MenuItems from './MenuItems'
import { SupBoard } from '@/configs/icons'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center md:items-stretch max-w-screen-lg mx-auto gap-y-4 py-4 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-y-6 md:gap-y-0">
        <MenuItems />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-y-4 md:gap-y-0">
        <span className="text-sm text-fore-secondary">
          &copy; {new Date().getFullYear()} Блог Татьяны Маспановой
        </span>
        <span className="flex items-center text-sm mb-4 sm:mb-2 sm:mt-2">
         <SupBoard />
        </span>
      </div>
    </footer>
  )
}
export default Footer
