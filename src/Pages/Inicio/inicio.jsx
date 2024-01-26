import React from "react";
import s from './inicio.module.css';

const Inicio = () => {
    return (
        <div className={s.main}>
            <section className={s.section_one}>
                <div className={s.message}>
                    <img className={s.image} src="./images/Cristo-cruz-sangre-agua.jpg" alt="Cristo en la cruz" />
                    <p className={s.cuadrado_grande}>
                        Oh! Sangre y Agua que brotaste del Corazón de Jesús
                        como fuente de misericordia para nosotros,
                        <p className={s.destacado}>JESÚS</p>

                    </p>
                    <p className={s.cuadrado_chico}> en vos confío.</p>
                </div>
            </section>

            <section className={s.section_two}>
                <h1 className={s.title}>Sangre y Agua</h1>
                <p>
                    EL hecho que me indujo a comenzar a escribir este blog,
                    fue una pregunta que me hizo mi hija de 14 años, que está preparándose
                    para la confirmación. En su grupo de catequesis, el celebrador
                    les envió un audio para que investiguen, reflexionen y formen un debate.
                    El cual me pareció muy importante, porque en ese audio,
                    una persona exponía que los católicos bautizaban a los niños
                    recién nacidos, y que eso no era necesario, porque los bebés
                    son inocentes y no tienen ningún pecado, y por lo tanto,
                    no era necesario bautizarlos.
                </p>


            </section >
            <section className={s.espacio}>
            </section>
            <section className={s.section_three}>
                <p>
                    Ana Catalina Emmerick, narra que cuando Cristo murió en la cruz,
                    uno de los soldados que estaba cerca, clavó su lanza en el costado
                    de Jesús, para comprobar que ya había fallecido. La beata describe
                    como brotó abundantemente Sangre y Agua, y cubrió totalmente al soldado,
                    este se arrodilló y reconoció que el que estaba en la cruz, es el mismo DIOS.
                    Es decir, se produjo la converción del soldado, a través de la Sangre y el Agua
                    que brotó del costado de Cristo.
                    Recibió el bautismo, entonces el Espíritu Santo penetró en su alma y lo liberó de su ceguera.
                </p>
                <p>
                    No es una casualidad empezar por esta oración,
                    porque la considero esencial y punto central de
                    toda la acción salvadora de Cristo Jesús. La primera vez
                    que me enteré sobre la importancia de la Sangre y el Agua
                    que brotaron del costado de Cristo, fue leyendo a Ana Catalina Emmerick.
                    Ella, es una Beata de la Iglesia Católica, pero no cualquiera,
                    tiene una gran cantidad de escritos extraordinarios que narran
                    desde la creación de los Ángeles, la creación del Mundo, todo el Antiguo Testamento
                    y el Nuevo Testamento.
                </p>
                <p>La beata, narra lo que Dios le permite ver desde
                    que tenía tres años. Quiero comenzar por este tema, porque considero
                    que es un punto esencial que debemos saber todos, sobre todo porque
                    se trata de la Salvación del Mundo. Y además porque los católicos
                    debemos saber defender nuestra Fe,  debemos profundizar
                    muy bien sobre sus preceptos, mandamientos y Sacramentos,
                    para hacer uso de ellos, tal como Dios quiere que lo hagamos.
                    Porque no sea cosa que desperdiciemos el tesoro incalculable
                    que Dios con todo su AMOR puso a nuestra disposición por nuestra
                    Salvación ETERNA.
                </p>
                <p>

                </p>
            </section>


        </div>

    )
};

export default Inicio;