import React from 'react'
import "./style.scss"
import { GiWorld } from 'react-icons/gi';
import { AiOutlineContainer } from "react-icons/ai"
import { IoLibrary } from "react-icons/io5"
import { BsPersonSquare } from "react-icons/bs"
import { TfiBlackboard } from "react-icons/tfi"
import { GiGraduateCap } from "react-icons/gi"

function OurServices() {
    return (
        <section className='our_services'>
            <div className="container">
                <div className="services">
                    <div style={{ width: "10%", backgroundColor: "#ffb606", height: "5px" }}></div>
                    <h1>our services
                    </h1>
                    <ul >
                        <li>
                            <GiWorld style={{ color: "#ffc53b", fontSize: "35px" }} />
                            <h3> Birthday Events
                            </h3>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.
                            </p>
                        </li>
                        <li>
                            <AiOutlineContainer style={{ color: "#ffc53b", fontSize: "35px" }} />
                            <h3> Indoor Courses
                            </h3>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.
                            </p>
                        </li>
                        <li>
                            <IoLibrary style={{ color: "#ffc53b", fontSize: "35px" }} />
                            <h3> Amazing Library
                            </h3>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.
                            </p>
                        </li>
                        <li>
                            <BsPersonSquare style={{ color: "#ffc53b", fontSize: "35px" }} />
                            <h3> Exceptional Professors
                            </h3>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.
                            </p>
                        </li>
                        <li>
                            <TfiBlackboard style={{ color: "#ffc53b", fontSize: "35px" }} />
                            <h3> Top Programs
                            </h3>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.
                            </p>
                        </li>
                        <li>
                            <GiGraduateCap style={{ color: "#ffc53b", fontSize: "35px" }} />
                            <h3>Graduate Diploma
                            </h3>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OurServices