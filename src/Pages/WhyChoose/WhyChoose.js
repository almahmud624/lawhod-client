import React from "react";

const WhyChoose = () => {
  return (
    <>
      <section id="why-choose" className="max-w-screen-xl px-4 py-10 mx-auto">
        <div className="flex gap-10 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/3">
            <h3 className="text-5xl leading-tight text-gray-700">
              Why You Can Trust <br />
              LawHod
            </h3>
            <hr className="max-w-[12rem] border-[#4e362846]" />
          </div>
          <div className="w-full md:w-8/12 text-lg bg-slate-200 p-6">
            <p>
              We value justice, honesty and time. We are always at your service
              as we are in charge of your defence. Any detail will be noticed
              and it can be essential for your case.
            </p>
            <p>
              During our work we gathered a team of devoted experts with rich
              experience in juridical help. We put a great emphasis on business
              law, because in today’s rapidly-changing environment, people
              require assistance in business spheres. Our experience allows us
              to be confident and stand by our words.
            </p>
            <p>
              Our company was established in 2004. We started as a small legal
              consultancy. We have proved our competence and had many satisfied
              clients. We expanded our activity and started providing many other
              juridical services to meet wider clients needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
