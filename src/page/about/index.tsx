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
                            Mình là <strong>Diện Lê</strong>, một <strong>Fullstack Developer</strong> đam mê với công
                            nghệ và thiết kế website hiện đại.
                            <br/>
                            Mình đến từ <strong>ngành Khoa học Máy tính</strong>, <strong>Đại học Bách Khoa Hà
                            Nội</strong>, nơi mình được đào tạo bài bản về lập trình, cấu trúc dữ liệu, thuật toán và
                            các hệ thống phần mềm.
                            <br/>
                            Kinh nghiệm với: <span className="highlight">React</span>, <span
                            className="highlight">Node.js</span>, <span className="highlight">Golang</span>, <span
                            className="highlight">SvelteKit</span>.
                            <br/><br/>
                            Mục tiêu: Trở thành một <strong>nhà phát triển phần mềm blockchain</strong>, xây dựng các
                            hệ thống phân tán, bảo mật và minh bạch ứng dụng trong thực tiễn.
                        </p>
                    </div>


                    <div className="about-avatar">
                        <img
                            src="/heart-icon.webp"
                            alt="Heart"
                            className="heart-icon"
                        />
                        <img
                            src="/avatar-anh-meo-cute-3.jpg"
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
                            src="/avatar-anh-meo-cute-3.jpg"
                            alt="Phóng to ảnh Diện Lê"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default About;
