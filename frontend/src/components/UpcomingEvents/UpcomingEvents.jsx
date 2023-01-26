import React from 'react'
import "./style.scss"

function UpcomingEvents() {
    return (
        <section className='upcoming_events'>
            <div className="container">
                <div className="events_article">
                    <div style={{ width: "10%", backgroundColor: "#ffb606", height: "5px" }}></div>
                    <h1>our services</h1>
                    <ul className='events'>
                        <li className='event'>
                            <div className='time'>
                                <span style={{ fontSize: "50px", fontWeight: 800, color: "#ffb606" }}>07</span>
                                <span style={{ fontSize: "20px", color: "#ffb606", fontWeight: 800 }}>January</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <h2>Student Festival
                                </h2>
                                <h3>Grand Central Park
                                </h3>
                                <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.
                                </p>
                            </div>
                            <img style={{ width: "30%" }} src="	https://preview.colorlib.com/theme/course/images/event_1.jpg" alt="event1" />
                        </li>
                        <li className='event'>
                            <div className='time'>
                                <span style={{ fontSize: "50px", fontWeight: 800, color: "#ffb606" }}>07</span>
                                <span style={{ fontSize: "20px", color: "#ffb606", fontWeight: 800 }}>January</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <h2>Open day in the Univesrsity campus</h2>
                                <h3>Grand Central Park
                                </h3>
                                <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.
                                </p>
                            </div>
                            <img style={{ width: "30%" }} src="	https://preview.colorlib.com/theme/course/images/event_2.jpg" alt="event2" />
                        </li>
                        <li className='event'>
                            <div className='time'>
                                <span style={{ fontSize: "50px", fontWeight: 800, color: "#ffb606" }}>07</span>
                                <span style={{ fontSize: "20px", color: "#ffb606", fontWeight: 800 }}>January</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <h2>Student Graduation Ceremony
                                </h2>
                                <h3>Grand Central Park
                                </h3>
                                <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.
                                </p>
                            </div>
                            <img style={{ width: "30%" }} src="	https://preview.colorlib.com/theme/course/images/event_3.jpg" alt="event3" />
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default UpcomingEvents