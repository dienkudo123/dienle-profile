import "./index.scss";

const Projects = () => {
    return (
        <section className="projects-section" id="projects" data-aos="fade-up">
            <h2>DỰ ÁN</h2>
            <div className="projects-grid">

                {/* QR Food Order */}
                <div className="project-card">
                    <div className="project-info">
                        <h3>Ứng dụng Order Đồ Ăn qua QR</h3>
                        <p>
                            Hệ thống gọi món tại quán ăn bằng cách quét mã QR, hỗ trợ quản lý đơn hàng theo thời gian thực.
                        </p>
                        <div className="tech-stack">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MySQL</span>
                            <span>QRCode</span>
                        </div>

                    </div>
                </div>

                {/* Route Planner */}
                <div className="project-card">
                    <div className="project-info">
                        <h3>Web Tính Toán Đường Đi</h3>
                        <p>
                            Ứng dụng web xác định lộ trình tối ưu giữa các điểm bằng <strong>Google Map API</strong> và thuật toán <strong>Dijkstra</strong>.
                        </p>
                        <div className="tech-stack">
                            <span>React</span>
                            <span>Dijkstra</span>
                            <span>Google Maps API</span>
                        </div>

                    </div>
                </div>

                {/* Social Network */}
                <div className="project-card">
                    <div className="project-info">
                        <h3>Mạng Xã Hội Trending</h3>
                        <p>
                            Nền tảng chia sẽ bài viết qua các trend, kết bạn và nhắn tin thời gian thực, có chức năng đăng nhập, thông báo, like, bình luận...
                        </p>
                        <div className="tech-stack">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>Socket.IO</span>
                            <span>MongoDB</span>
                        </div>

                    </div>
                </div>

                {/* Blockchain Degree Auth */}
                <div className="project-card">
                    <div className="project-info">
                        <h3>Xác Thực Bằng Cấp bằng Blockchain</h3>
                        <p>
                            Ứng dụng web xác thực bằng cấp của sinh viên qua công nghệ <strong>blockchain</strong>, giúp các trường đại học lưu trữ dữ liệu không thể chỉnh sửa.
                        </p>
                        <div className="tech-stack">
                            <span>React</span>
                            <span>Golang</span>
                            <span>Smart Contract</span>
                            <span>Ethereum</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
