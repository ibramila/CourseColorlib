import React from 'react'
import "./style.scss"

function Register() {

    return (
        <section className='register_section'>
            <div className="register_info">
                <h1>Register now and get a discount <span style={{ color: "black" }}>50%</span> discount until 1 January
                </h1>
                <p>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.
                </p>
                <button>REGISTER NOW</button>
            </div>
            <div className='register'>
                <div className='wrapper'>
                    <form>
                        <h1>Search for your course
                        </h1>
                        <input type="text" placeholder='Course Name' />
                        <input type="text" placeholder='Category' />
                        <input type="text" placeholder='Degree' />
                        <button>SEARCH COURSE</button>
                    </form>
                </div>

            </div>
        </section >
    )
}

export default Register