import "./index.scss";
import { useState } from "react";

const About = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <section className="about-section" id="about" data-aos="fade-up">
                <div className="about-content">
                    <div className="about-text">
                        <h2>HALLOOO!</h2>
                        <p>
                            Mình là <strong>Diện Lê</strong>, một <strong>Fullstack Developer</strong> với niềm đam mê
                            lớn dành cho công nghệ
                            và thiết kế website hiện đại.
                            <br/>
                            Xuất thân từ <strong>ngành Khoa học Máy tính</strong>, <strong>Đại học Bách Khoa Hà
                            Nội</strong>, mình đã được đào tạo bài bản
                            về lập trình, cấu trúc dữ liệu, thuật toán và xây dựng các hệ thống phần mềm.
                            <br/>
                            Có kinh nghiệm làm việc với: <span className="highlight">React</span>, <span
                            className="highlight">Node.js</span>,
                            <span className="highlight">Golang</span>, <span
                            className="highlight">SvelteKit</span>, <span className="highlight">NestJS</span>...
                            <br/><br/>
                            Mục tiêu của mình là trở thành một <strong>nhà phát triển phần mềm blockchain</strong>, xây
                            dựng các hệ thống phân tán,
                            bảo mật và minh bạch phục vụ các bài toán thực tế.
                            <br/><br/>
                            Nếu bạn có nhu cầu xây dựng website hoặc các dự án web nhỏ, mình cũng <strong>nhận làm
                            freelance</strong> nhé! :3
                        </p>

                    </div>


                    <div className="about-avatar">
                        <img
                            src={`${process.env.PUBLIC_URL}/heart-icon.webp`}
                            alt="Heart"
                            className="heart-icon"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/avatar-anh-meo-cute-3.jpg`}
                            alt="Ảnh Diện Lê"
                            onClick={() => setShowPopup(true)}
                        />

                    </div>
                </div>
            </section>

            {showPopup && (
                <div className="popup-overlay" onClick={() => setShowPopup(false)}>
                    <div className="popup-image-wrapper">
                        <img
                            src={`${process.env.PUBLIC_URL}/avatar-anh-meo-cute-3.jpg`}
                            alt="Phóng to ảnh Diện Lê"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default About;
