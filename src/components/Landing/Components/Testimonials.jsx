import React from 'react';
import useFetchTestimonials from '../Data/useFetchTestimonials'; 
import { Star, Quote } from 'lucide-react';
import invertStar from '../assets/SVG/invertStar.svg';
import testimonialFrame from '../assets/SVG/testimonialFrame.svg';
import conference from '../assets/Images/conference.jpg';

const Testimonials = () => {
  const { testimonialsData, loading, error } = useFetchTestimonials();
  const [currentIndexTestimonial, setCurrentIndexTestimonial] = React.useState(0);
  const intervalRefTestimonial = React.useRef(null);

  React.useEffect(() => {
    if (testimonialsData.length > 0) {
      intervalRefTestimonial.current = setInterval(() => {
        setCurrentIndexTestimonial((prevIndex) =>
          prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => clearInterval(intervalRefTestimonial.current);
  }, [testimonialsData]);

  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  if (error) {
    return <div>Error loading testimonials: {error}</div>;
  }

  return (
    <section id="testimonials" className="flex flex-col items-center justify-center h-full gap-10 px-5 py-5 bg-white">
      <div className="max-w-2xl mb-5 text-center">
        <div className="mb-5 text-xl font-semibold leading-tight text-center md:text-3xl xl:text-3xl xl:mb-9 font-jost">TESTIMONIALS</div>
        <p className="text-lg mt-1 font-bold">
          Testimonials highlight the transformative impact of WoW HR's initiatives, empowering individuals to achieve professional excellence and leadership growth through our skill development programs.
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-between p-4 pt-5 xl:pt-10 xl:px-24 xl:flex-row bg-defaultBlue rounded-3xl">
        <img
          src={invertStar}
          alt="invertStar"
          className="absolute transform scale-90 -translate-x-1/2 left-1/2 -top-8"
        />
        <div className="relative bg-defaultBlue xl:w-[52%] md:w-[80%] mt-3">
          <img
            src={testimonialFrame}
            alt="testimonialFrame"
            className="absolute inset-0 object-contain w-full "
          />
          <img
            src={conference}
            alt="conference"
            className="object-cover w-full h-auto p-1"
          />
          <div
            className="absolute right-1 xl:right-4 bottom-2 xl:bottom-5 md:bottom-4"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <span className="flex items-center gap-1 xl:gap-3 text-[.55rem] font-semibold tracking-tight text-white xl:text-lg md:text-xl font-jost">
              <Star className="xl:w-7 w-4 h-4 xl:h-7 p-[.1rem] xl:p-[.4rem] flex stroke-transparent bg-[#ff9c00] rounded-full fill-white" />
              AVG RATINGS 4.9
            </span>
          </div>
        </div>

        <div className="xl:w-[43%] text-white">
        <Quote
            className="w-6 h-6 mb-2 xl:w-8 xl:h-8 xl:mb-4 fill-white stroke-none"
            data-aos="fade-left"
            data-aos-duration="250"
          />
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndexTestimonial * 100}%)`,
              }}
            >
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 xl:w-4 md:w-7 stroke-transparent fill-[#ff9c00]"
                      />
                    ))}
                  </div>
                  <div className="md:text-xl text-xs xl:text-lg font-semibold tracking-wide italic xl:w-[90%] leading-[1.5] mb-4 xl:mb-8">
                    “{testimonial.description}”
                  </div>
                  <div className="flex gap-2 xl:gap-3 items-center w-[60%] xl:w-[40%]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-lg"
                    />
                    <div>
                      <div className="text-base font-jost">{testimonial.name}</div>
                      <div className="text-sm">
                        {testimonial.designation} - {testimonial.organization}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
