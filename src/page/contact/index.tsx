import "./index.scss";

const Contact = () => {
    return (
        <section className="contact-section" id="contact" data-aos="fade-up">
            <h2>LIÊN HỆ</h2>
            <p className="contact-intro">
                Nếu bạn muốn trao đổi hoặc hợp tác, hãy liên hệ với mình qua form dưới đây hoặc email trực tiếp.
            </p>

            <form
                className="contact-form"
                action="mailto:your-email@gmail.com"
                method="POST"
                encType="text/plain"
            >
                <input type="text" name="name" placeholder="Tên của bạn" required />
                <input type="email" name="email" placeholder="Email của bạn" required />
                <textarea name="message" rows={5} placeholder="Nội dung..." required></textarea>
                <button type="submit">Gửi</button>
            </form>

            <div className="contact-links">
                <a href="mailto:leducdientin92018@gmail.com">leducdientin92018@gmail.com</a>
                <a href="https://github.com/dienkudo123" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.facebook.com/dienkudo123/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
        </section>
    );
};

export default Contact;
