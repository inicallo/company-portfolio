import Image from 'next/image';
import React from 'react'
type ButtonProps = {
    type: 'button' | 'submit'
    title: string;
    icon?: string;
    variant?: 'btn_dark_red'
}
const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button
    className={`flex justify-center items-center gap-3 rounded-full border ${variant}`} 
    type={type}
    >
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="text-white whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button