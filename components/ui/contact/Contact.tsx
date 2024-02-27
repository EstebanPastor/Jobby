import Input from "../input/Input";
import Button from "../button/Button";

const Contact = () => {
  return (
    <div className="lg:py-24 py-16" id="contact">
      <div className="w-[90%] mx-auo max-w-[1450px]">
        <div className="grid md:grid-cols-12 grid-col-1 items-center gap-[30px]">
          <div className="lg:col-span-6">
            <img
              src="/contact.png"
              alt="contact-image"
              className="h-auto max-w-full"
            />
          </div>
          <div className="md:col-span-6 bg-gray-50/50">
            <div>
              <div className="rounded-md shadow p-6 w-full">
                <h3 className="mb-6 text-2xl leading-normal">Get in touch!</h3>
                <form className="flex flex-col gap-5">
                  <div className="grid md:Grid-cols-2 gap-5">
                    <Input id="name" label="name" placeHolder="Your name" />
                    <Input id="email" label="email" placeHolder="Your email" />
                  </div>
                  <Input
                    isTextArea
                    id="message"
                    label="Message"
                    placeHolder="message"
                  />
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
