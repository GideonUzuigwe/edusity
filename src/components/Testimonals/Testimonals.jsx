import React, { useRef } from "react";
import "./Testimonals.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonals = () => {
  const slider = useRef();
  let tx = 0;

  function slideForward() {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  function slideBackward() {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className="testimonals">
      <img src={next_icon} alt="" className="next_btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back_btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Willimas Jackson 1</h3>
                  <span>Edusity USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                minus repellendus quo nulla eum nobis laborum sapiente quisquam
                aspernatur magnam, deserunt dolorum quos veritatis alias unde
                possimus. Delectus, dolor explicabo.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Willimas Jackson 2</h3>
                  <span>Edusity USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                minus repellendus quo nulla eum nobis laborum sapiente quisquam
                aspernatur magnam, deserunt dolorum quos veritatis alias unde
                possimus. Delectus, dolor explicabo.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Willimas Jackson 3</h3>
                  <span>Edusity USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                minus repellendus quo nulla eum nobis laborum sapiente quisquam
                aspernatur magnam, deserunt dolorum quos veritatis alias unde
                possimus. Delectus, dolor explicabo.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Willimas Jackson 4</h3>
                  <span>Edusity USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                minus repellendus quo nulla eum nobis laborum sapiente quisquam
                aspernatur magnam, deserunt dolorum quos veritatis alias unde
                possimus. Delectus, dolor explicabo.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonals;
