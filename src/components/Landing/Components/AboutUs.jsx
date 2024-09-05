import abtus from "../assets/Images/abtus.jpg";
import spring from "../assets/SVG/spring.svg";
import abtUsFrame from "../assets/SVG/abtUsFrame.svg";
import { useState } from "react";

const AboutUs = () => {
  const [showOverview, setShowOverview] = useState(true);
  const [showKeyObjectives, setShowKeyObjectives] = useState(false);

  return (
    <section
      id="about-us"
      className="flex flex-col items-center justify-center h-full overflow-hidden bg-white cursor-default py-7 xl:pt-0 xl:min-h-[98vh] xl:items-center xl:flex-row xl:gap-20 xl:px-28 xl:py-0"
    >
      <div
        className={`w-[50%] mb-7 ${
          showKeyObjectives ? "xl:mb-auto" : "xl:mb-0"
        } xl:mt-0 xl:w-[35%] relative`}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          src={abtUsFrame}
          alt="abtUsFrame"
          className="absolute inset-0 object-contain w-full scale-105 "
        />
        <img src={abtus} alt="abtus" className="object-cover w-full h-auto" />
      </div>

      <div className="w-[80%] xl:w-[57%]">
        <div
          className="relative flex mb-3 text-xl font-semibold md:mb-5 md:text-4xl xl:text-3xl xl:mb-14 font-jost"
          data-aos="fade-left"
        >
          ABOUT US
          <img
            src={spring}
            alt="spring"
            data-aos="zoom-out-left"
            data-aos-duration="1000"
            className="absolute top-[-3.5rem] left-52"
          />
        </div>
        {showOverview && (
          <>
            <div
              className=" mb-2 md:mb-3 xl:mb-8 text-xs xl:text-lg font-semibold tracking-wider md:text-xl leading-[1.7] md:leading-[1.7]"
              data-aos="fade-left"
            >
              WoW HR, a not for profit organization with a mission to create a
              WoW factor among HR Fraternities and Management Students through
              Skill development. We focus on the segment of Skill Development
              which supports the individual to enhance their professional
              development and cultivating future leaders within the field.
            </div>
            <div
              className=" mb-2 md:mb-4 xl:mb-6 md:text-xl text-xs  xl:text-lg font-semibold tracking-wider leading-[1.7] md:leading-[1.7]"
              data-aos="fade-left"
            >
              We further contribute to growth and development of HR fraternities
              and management students providing exclusive learning experience
              through different learning formats by Industrial experts creating
              a lasting impact in the industry.
            </div>

            <div
              className=" mb-4 md:mb-8 xl:mb-12 md:text-xl text-xs  xl:text-lg font-semibold tracking-wider leading-[1.7] md:leading-[1.7]"
              data-aos="fade-left"
            >
              For Further Details : connect@wowhr.in
            </div>
          </>
        )}
        {showKeyObjectives && (
          <div
            className="mb-4 space-y-4 md:mb-8 xl:mb-12 text-xs xl:text-lg font-semibold tracking-wider leading-[1.7] md:leading-[1.7]"
            data-aos="fade-left"
          >
            <p>
              <strong>♦Diverse Learning Formats:</strong> Consider offering a
              variety of learning formats such as workshops, webinars, seminars,
              and online courses. This can cater to different learning
              preferences and schedules.
            </p>
            <p>
              <strong>♦Industry-Relevant Content:</strong> Ensure that the
              content is tailored to the current needs and trends in the HR
              industry. Collaborate with experts who can provide insights into
              the latest developments and challenges within the field.
            </p>
            <p>
              <strong>♦Networking Opportunities:</strong> Create platforms for
              networking among HR professionals and students. This could include
              virtual meet-ups, conferences, or forums where participants can
              share experiences and build connections.
            </p>
            <p>
              <strong>♦Mentorship Programs:</strong> Establish mentorship
              programs that connect experienced HR professionals with students
              or early-career individuals. This can provide valuable guidance
              and support in their professional journeys.
            </p>
            <p>
              <strong>♦Certifications and Recognitions:</strong> Explore the
              possibility of offering certifications for the skills acquired
              through your programs. Recognitions and certifications can add
              credibility and value to the participants resumes.
            </p>
            <p>
              <strong>♦Feedback Mechanism:</strong> Implement a feedback system
              to continuously improve the quality of your programs. Gather input
              from participants, assess the effectiveness of the learning
              experiences, and make necessary adjustments.
            </p>
            <p>
              <strong>♦Collaborations with Corporations:</strong> Partner with
              corporations or businesses to provide real-world case studies and
              projects. This can give participants practical insights into the
              challenges faced by HR professionals in the workplace.
            </p>
            <p>
              <strong>♦Community Engagement:</strong> Actively engage with your
              community through social media, newsletters, and other
              communication channels. Keep them informed about upcoming events,
              industry news, and opportunities for collaboration.
            </p>
            <p>
              <strong>♦Accessibility and Inclusivity:</strong> Ensure that your
              programs are accessible to a wide audience. Consider offering
              scholarships or reduced fees for students or individuals with
              limited financial resources to promote inclusivity.
            </p>
            <p>
              <strong>♦Continuous Learning Culture:</strong> Encourage a culture
              of continuous learning among your community. Share resources,
              articles, and opportunities for ongoing professional development.
            </p>
          </div>
        )}

        <div
          className=" xl:w-[45%] w-[70%] font-jost justify-between flex"
          data-aos="fade-up"
        >
          <button
            className={` text-[.6rem] md:text-base xl:text-sm border-[1px] xl:hover:shadow-lg px-2 md:px-8 xl:px-6 min-w-24 xl:min-w-36 py-2 xl:py-3 font-medium rounded-md xl:hover:bg-[#089adec1] xl:hover:text-white transition-all duration-200 xl:hover:scale-[1.02] xl:hover:translate-y-[-.1rem] xl:hover:border-transparent ${
              showOverview
                ? "bg-darkBlue text-white  border-transparent"
                : "bg-white  border-darkBlue"
            }`}
            onClick={() => {
              setShowOverview(true);
              setShowKeyObjectives(false);
            }}
          >
            OVERVIEW
          </button>
          <button
            className={`px-2 xl:px-6 min-w-24 xl:min-w-36 border-[1px] md:text-base xl:hover:shadow-lg md:px-8 text-[.6rem] xl:text-sm border-darkBlue xl:hover:bg-[#089adec1] xl:hover:text-white py-2 xl:py-3 font-medium rounded-md transition-all duration-200 xl:hover:scale-[1.02] xl:hover:translate-y-[-.1rem]  xl:hover:border-transparent 
              ${
                showKeyObjectives
                  ? "bg-darkBlue text-white  border-transparent"
                  : "bg-white  border-darkBlue"
              }`}
            onClick={() => {
              setShowOverview(false);
              setShowKeyObjectives(true);
            }}
          >
            KEY OBJECTIVE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
