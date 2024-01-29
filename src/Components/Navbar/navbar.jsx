import React from "react";
import s from './navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            {/* <section className={s.oracion}>
                Oh! Sangre y Agua que brotaste del Corazón de Jesús
                como fuente de misericordia para nosotros, Jesús en vos confío.
            </section> */}
            <section className={s.menu}>
                <span>INICIO</span>
                <span>QUIEN SOY</span>
                <span>CONTACTO</span>
            </section>
        </nav>
    )
}

export default Navbar;