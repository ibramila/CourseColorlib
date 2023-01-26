import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import { Helmet } from 'react-helmet-async';
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents';
import PopularCourses from '../components/PopularCourses/PopularCourses';
import Register from '../components/Register/Register';
import OurServices from '../components/OurServices/OurServices';
function Home() {
    return (
        <div>
            <Helmet>
                <title>Home!</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>

            <HeroSection />
            <PopularCourses />
            <Register />
            <OurServices />
            <UpcomingEvents />
        </div>
    )
}

export default Home