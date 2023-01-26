import React from 'react'
import "./style.scss"
function PopularCourses() {

  return (
    <section className='popular_courses'>
      <div className="container">
        <div className="popular_courses_section">
          <div style={{ width: "10%", backgroundColor: "#ffb606", height: "5px" }}></div>
          <h1>popular courses
          </h1>
          <ul className='cards' >

            <li className='card'>
              <img style={{ width: "100%" }} src="https://preview.colorlib.com/theme/course/images/course_1.jpg" alt="course_1" />
              <ul className='card_info'>
                <h4>A complete guide to design</h4>
                <p>Adobe Guide, Layes, Smart Objects etc...</p>
              </ul>
              <div className='author'>
                <ul>
                  <img style={{ borderRadius: "50%" }} src="https://preview.colorlib.com/theme/course/images/author.jpg" alt="author_1" />
                  <h6>Michael Smith,</h6>
                  <span>Author</span>
                </ul>
                <div className='price'>
                  $29
                </div>
              </div>
            </li>
            <li className='card'>
              <img style={{ width: "100%" }} src="https://preview.colorlib.com/theme/course/images/course_1.jpg" alt="course_1" />
              <ul className='card_info'>
                <h4>A complete guide to design</h4>
                <p>Adobe Guide, Layes, Smart Objects etc...</p>
              </ul>
              <div className='author'>
                <ul>
                  <img style={{ borderRadius: "50%" }} src="https://preview.colorlib.com/theme/course/images/author.jpg" alt="author_1" />
                  <h6>Michael Smith,</h6>
                  <span>Author</span>
                </ul>
                <div className='price'>
                  $29
                </div>
              </div>
            </li> <li className='card'>
              <img style={{ width: "100%" }} src="https://preview.colorlib.com/theme/course/images/course_1.jpg" alt="course_1" />
              <ul className='card_info'>
                <h4>A complete guide to design</h4>
                <p>Adobe Guide, Layes, Smart Objects etc...</p>
              </ul>
              <div className='author'>
                <ul>
                  <img style={{ borderRadius: "50%" }} src="https://preview.colorlib.com/theme/course/images/author.jpg" alt="author_1" />
                  <h6>Michael Smith,</h6>
                  <span>Author</span>
                </ul>
                <div className='price'>
                  $29
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div >
    </section >
  )
}

export default PopularCourses