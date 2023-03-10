import React, { useEffect, useState } from 'react'
import "./style.scss"
import axios from "axios";
import { BsPersonCircle } from "react-icons/bs"
import { AiFillDelete } from "react-icons/ai"
function PopularCourses() {
  //! data
  const [posts, setPosts] = useState([]);

  //! changeable input
  const [value, setValue] = useState('');
  //! sort
  const [sorted, setSorted] = useState({
    sorted: "price", reversed: false
  })
  // ! axiosGET
  const URL = axios.create({
    baseURL: "http://localhost:5000"
  });
  useEffect(() => {
    URL.get('/courses').then((response) => {
      setPosts(response.data);
    });
  }, []);

  //! delete 
  const deletePost = (id) => {
    URL.delete(`/courses/${id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );
  };

  //!sort
  const sortData = () => {
    setSorted({ sorted: "price", reversed: !sorted.reversed })
    const dataCopy = [...posts]
    dataCopy.sort((a, b) => {
      if (sorted.reversed) {
        return a.price - b.price;
      }
      return b.price - a.price;
    });
    setPosts(dataCopy);
  }
  //!filter
  const handleFilter = (e) => {
    setValue(e.target.value);
  }

  return (
    <section className='popular_courses'>
      <div className="container">
        <div className="popular_courses_section">
          <div style={{ width: "10%", backgroundColor: "#ffb606", height: "5px" }}></div>
          <h1>popular courses
          </h1>
          <div style={{ display: "flex", gap: "30px", justifyContent: "space-around" }}>
            <input style={{ padding: "20px", border: "none", borderBottom: "2px solid orange" }} placeholder='Filter data...' type='text' onChange={handleFilter} />
            <button onClick={sortData}>Sort Data</button>
          </div>

          <ul className='cards' >
            {posts
              .filter(data => {
                return value.trim().toLowerCase() === "" ? data : data.name.toLowerCase().includes(value.toLowerCase())
              })
              .map((post) => {
                return (
                  <li className='card' key={post._id}>
                    <img style={{ width: "100%" }} src={post.image} alt="course_image" />
                    <ul className='card_info'>
                      <h4>{post.title}</h4>
                      <p>{post.information}</p>
                    </ul>
                    <div className='author'>
                      <ul>
                        <BsPersonCircle style={{ fontSize: "25px" }} />
                        <h6>{post.name},</h6>
                        <span>{post.category}</span>
                      </ul>
                      <button onClick={() => deletePost(post._id)}>
                        <AiFillDelete style={{ fontSize: "30px", color: "red" }} />
                      </button>
                      <div className='price'>
                        ${post.price}
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div >
    </section >
  )
}

export default PopularCourses