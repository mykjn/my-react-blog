import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        fetch("https://formsubmit.co/ajax/quesada.mykiejan@gmail.com", {
            method: "POST",
            body: new FormData(form),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSubmitted(true);
                form.reset();
            })
            .catch((err) => {
                console.error(err);
                alert("Oops! Something went wrong.");
            });
    };

    return (
        <div className="page-container">
            <h1 className="fade-up">Contact</h1>

            <div className="contact-content">
                <p className="fade-up delay-1">
                    If something here resonated with you, or if you'd simply like to
                    reach out, you're very much welcome to do so.
                </p>
                {!submitted ? (
                    <form
                        className="contact-form fade-up delay-2"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="subject" value="New message from your blog" />

                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                        />
                        
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                        />

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your message"
                            required
                        />

                        <button type="submit">Send message</button>
                    </form>
                ) : (
                    <div className="contact-success fade-up delay-2">
                        <p>Thank you! Your message has been sent successfully.</p>
                    </div>
                )}
            </div>
        </div>
    );
}