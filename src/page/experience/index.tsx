import "./index.scss";

const Experience = () => {
    return (
        <section className="experience-section" id="exp" data-aos="fade-up">
            <h2>KINH NGHIỆM</h2>
            <div className="experience-list">
                <div className="experience-item" data-aos="fade-up">
                    <h3>Fullstack Developer — ABC Elearning</h3>
                    <span className="duration">06/2025 – Nay</span>
                    <p>
                        Tham gia phát triển nền tảng học trực tuyến, xây dựng giao diện hiện đại và thân thiện với người
                        dùng bằng <strong>React</strong> và <strong>TypeScript</strong>.
                        Thiết kế và triển khai hệ thống backend linh hoạt với <strong>Node.js</strong>, tối ưu hiệu suất
                        và đảm bảo khả năng mở rộng.
                        Phối hợp chặt chẽ với đội ngũ thiết kế và QA để mang đến trải nghiệm học tập hiệu quả, ổn định
                        cho hàng nghìn người dùng.
                    </p>
                </div>


                <div className="experience-item" data-aos="fade-up">
                    <h3>Fullstack Developer — Blockchain Team</h3>
                    <span className="duration">10/2024 – 01/2025</span>
                    <p>
                        Tham gia phát triển nền tảng ứng dụng phi tập trung (DApp) với giao diện người dùng xây dựng
                        bằng <strong>React</strong>, tích hợp hợp đồng thông minh thông
                        qua <strong>Web3.js</strong> và <strong>Ethers.js</strong>.
                        Đảm nhận vai trò thiết kế và triển khai backend bằng <strong>Golang</strong> để tính toán điểm
                        thưởng, quản lý phần thưởng người chơi trong trò chơi blockchain.
                        Hệ thống backend được xây dựng theo kiến trúc <strong>microservices</strong>, sử
                        dụng <strong>Redis</strong> để cache dữ liệu và tối ưu hiệu suất xử lý theo thời gian thực.
                        Dữ liệu được đồng bộ trực tiếp từ các <strong>smart contract</strong> và ghi nhận lên chuỗi
                        thông qua <strong>Web3 SDK</strong>, đảm bảo tính minh bạch và an toàn trong quá trình phân phối
                        phần thưởng.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Experience;
