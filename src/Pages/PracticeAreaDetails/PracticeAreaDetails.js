import React from "react";
import { Rate } from "antd";
import BookMeeting from "../BookMeeting/BookMeeting";
import PeopleReview from "../PeopleReview/PeopleReview";

const PracticeAreaDetails = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-5 py-5">
      <div className="flex gap-x-20">
        <div className="left-sidebar w-1/3">
          <div>
            <h3 className="text-4xl">Civil Litigation</h3>
            <hr />
          </div>
          <div className="book-meeting">
            <h3 className="text-2xl my-5">Book a Meeting</h3>
            <p>Free legal consultation</p>
            <section class="max-w-4xl mx-auto bg-white rounded-md  ">
              <BookMeeting />
            </section>
          </div>
        </div>
        <div className="practice-area-info w-8/12">
          <div className="first-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              molestiae reiciendis asperiores rem similique vel voluptas,
              cupiditate molestias ducimus quod sint necessitatibus laborum a
              consequatur? Quas aliquam minima soluta perspiciatis, dolore totam
              ab id! Libero repellendus modi ipsam dolores. Culpa ipsum maxime
              consequuntur laboriosam repellendus. Incidunt consectetur quia
              ipsum. Cumque, culpa laboriosam! Sunt, adipisci nostrum.
              Laudantium dolor, quis sit tempora autem assumenda? Necessitatibus
              magnam tempore, sed, laudantium explicabo et ad alias perferendis
              voluptates minus facilis nulla possimus eius sequi. Rem laboriosam
              error cupiditate quas porro velit animi quo dolorum? Eligendi
              recusandae odit aspernatur doloribus aperiam aliquid ex, sint
              fugiat illo quo tempora ullam cum earum autem facere impedit magni
              facilis provident! Nulla non aliquam sit voluptatibus error! Optio
              dolorum fugit sit sapiente voluptate beatae natus.
            </p>
          </div>
          <div className="practice-img my-2 border flex items-center justify-center p-2 shadow">
            <img
              src="https://ld-wp73.template-help.com/wordpress/prod_17879/v2/wp-content/uploads/2018/05/legalor-single-service-1.jpg"
              alt=""
            />
          </div>
          <div className="final-description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              iusto tenetur assumenda soluta maiores optio consequuntur alias.
              Atque asperiores earum eligendi, culpa similique dicta illum
              dolorum laudantium voluptates excepturi, autem officia iusto fugit
              ducimus, doloribus quaerat rerum accusantium. Hic beatae doloribus
              quas quasi accusantium, veniam soluta sit quidem explicabo
              laboriosam natus eius aliquid necessitatibus sunt exercitationem
              dolore tempora quod, rem animi illum maxime cupiditate eum cum.
              Ipsam quos eveniet consequatur nesciunt, qui id a itaque sed neque
              repellat esse fugit impedit, tenetur consequuntur similique minima
              aspernatur nostrum minus, quasi vitae rerum corrupti. Ratione
              ipsam necessitatibus quos? Neque sed doloremque laboriosam.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="rating">
              <Rate allowHalf disabled defaultValue={4.5} className="" />{" "}
              <span className=" font-semibold text-xl text-green-700">4.5</span>
            </div>
            <div>342$/per week</div>
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <div className="review">
        <PeopleReview />
      </div>
    </div>
  );
};

export default PracticeAreaDetails;
