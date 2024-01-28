import css from '../styles/Header.module.css'
import Logo from '../assets/Logo.png'
import Image from 'next/image'

export default function Header(){
return(

<div className={css.header}>
  <div className={css.logo}>
    <Image src={Logo} alt='' width='50px' height={50}/>
    <span>FoodDelievery</span>
  </div>
  
<ul className={css.menu}>
<li >Home</li>
<li >About</li>
<li >Contact</li>

</ul>

  
  <div className={css.rightside}>


    <div className={css.cart}>
    <div className={css.badge}>1</div>
    </div>
</div>
  </div>

)


}