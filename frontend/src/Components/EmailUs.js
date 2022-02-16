function EmailUs() {
    return (
        <div className="form-div">
            <h2>Email Us</h2>
            <form action="#" method="POST" className="index-form">
                <div className="name-row">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        required
                    />
                </div>
                <div className="email-row">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Your email"
                        required
                    />
                </div>
                <div className="subject-row">
                    <label htmlFor="subject">Subject</label>
                    <select name="subject" id="subject">
                        <option value="general">General</option>
                        <option value="bug">Found a bug</option>
                        <option value="technical-help">Need technical help</option>
                        <option value="partnership">Partnership</option>
                    </select>
                </div>
                <div className="message-row">
                    <label htmlFor="message">Your message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="3"
                        placeholder="Your message"
                        required
                    ></textarea>
                </div>
                <div className="submit-row">
                    <button className="btn btn-full">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EmailUs;