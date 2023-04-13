import { Avatar } from '@mui/material';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
import styles from './../pages/page.module.css';

function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Natasha Lawson",
      text: "I've been using AIScripter for a month now and it has made a huge difference in my social media presence. Highly recommended!",
      avatar: "/logo.svg",
      role: 'Tiktok influencer'
    },
    {
      id: 2,
      name: "André Sutton",
      text: "AIScripter has saved me so much time and effort in creating video scripts. It's an essential tool for any content creator.",
      avatar: "/logo.svg",
      role: 'Online instructor'
    },
    {
      id: 3,
      name: "Ken Erman",
      text: "I was skeptical at first, but after trying AIScripter, I was blown away by the quality of the video scripts it generated. It's a game-changer!",
      avatar: "/logo.svg",
      role: 'Tiktok influencer'
    }
  ];

  return (
    <section style={{ backgroundColor: '#fbfbfb' }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={styles.heading}>What Our <font color="#0356e4">Customers</font> Say About Us</h2>
        </div>
        <div className="">
          <div className=" mx-auto space-y-8">
            <Carousel>
              {testimonials.map(testimonial => (
                <Carousel.Item style={{ padding: "50px 10%" }}>
                  <div key={testimonial.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-8 bg-white sm:p-10 sm:flex sm:items-center">
                      <div className="sm:flex-1">
                        <div className="flex items-center justify-center text-gray-400">
                          <FaQuoteLeft className="h-6 w-6" />
                        </div>
                        <div className="mt-4 text-gray-500 text-lg sm:mt-0 sm:ml-6 sm:text-xl">
                          {testimonial.text}
                        </div>
                        <div className="mt-4 flex items-center justify-end">
                          <Avatar sx={{ bgcolor: 'indigo' }}>{testimonial.name[0]}</Avatar>
                          <div className="ml-2">
                            <div className="text-md font-medium text-gray-900">{testimonial.name}</div>
                            <div className="text-sm font-small text-gray-500">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex-shrink-0 sm:mt-0 sm:ml-6">
                        <div className="flex items-center justify-center text-gray-400">
                          <FaQuoteRight className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;