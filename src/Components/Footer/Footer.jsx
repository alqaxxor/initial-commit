import React from "react";
import './Footer.css'

import { Context } from '../../Context/Theme'


function Footer () {

    const { theme } =React.useContext(Context) 

    return (
    <footer className={theme == 'light' ? 'light' : 'dark'}>
  Footer
    

    </footer>
)

}
export default Footer