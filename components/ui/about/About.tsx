import Image from "next/image";

const About = () => {
  return (
    <div className="py-16 bg-gray-50/50 mt-10" id="about">
      <div className="w-[90%] mx-auto max-w-[1450px]">
        <h2 className="w-full text-center mb-10 text-2xl font-extrabold uppercase text-purple-600">
          About us
        </h2>
        <div className="mt-5 w-full flex flex-col justify-center items-center">
          <p className="leading-loose text-center">
            Looking to embark on an exciting new career journey? Welcome to our
            job portal, where opportunities await! Whether you're a seasoned
            professional or just starting out, we have a diverse range of
            positions to suit your skills and ambitions.
          </p>
          <Image
            src={"/signature.png"}
            width={400}
            height={400}
            alt="workify-signature"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
