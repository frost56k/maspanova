"use client"
import { useEffect, useRef } from 'react'
import { TopPage } from '@/configs/icons'

export default function BackToTopButton() {
    const buttonRef = useRef()

    useEffect(() => {
        const handleClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        buttonRef.current.addEventListener('click', handleClick)

        return () => {
            if (buttonRef.current) {
                buttonRef.current.removeEventListener('click', handleClick)
            }
        }
    }, [])

    return (
        <button ref={buttonRef}> <TopPage /> </button>

    )
}