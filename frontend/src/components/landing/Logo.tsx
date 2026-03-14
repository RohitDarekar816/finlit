import React from 'react'
import { reallogo} from '@/assets';


type LogoProps= {
    variant?: 'default' | 'icon';
}

const Logo = ({variant =  'default'}: LogoProps) => {
  return (
    <a
        href=''
        className=''

    >
        {variant === 'default' && (
            <img src={reallogo} alt = "Afintrix" width={900}
            height={250}/>
        )}

        {variant === 'icon' && (
            <span className="text-xl font-bold text-white">Afintrix</span>
        )}
    </a>
  )
}

export default Logo