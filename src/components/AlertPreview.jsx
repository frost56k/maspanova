'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const AlertPreview = ({ enabled }) => {
  const router = useRouter()
  const [show, setShow] = useState(enabled)

  const handleExit = () => {
    router.refresh()
    setShow(false)
  }
  return (
    show && (
      <div className="absolute w-full z-20 top-28 md:top-20 left-0 text-fore-subtle bg-back-subtle px-8">
        <div className="py-2 text-center text-sm">
          <div>
          Вы находитесь в режиме предварительного просмотра.{' '}
            <Link
              onClick={() => handleExit()}
              href="/api/disable-draft"
              className="underline hover:text-accent transition-colors cursor-pointer"
            >
             Нажмите здесь,
            </Link>{' '}
            чтобы выйти.
          </div>
        </div>
      </div>
    )
  )
}
export default AlertPreview