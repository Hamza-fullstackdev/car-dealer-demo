import { Button, Select } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { TiCloudStorage } from "react-icons/ti";

const AddOns = () => {
  const services = [
    {
      id: 1,
      image: "/07.png",
      alt: "Feature 7 - Google Fonts Integration",
      title: "Content Writing",
      description:
        "Sysfoc car dealer provides full of features for creating a perfect Business website. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit optio dicta nihil excepturi magni!",
      price: "$300/month",
    },
    {
      id: 2,
      image: "/08.png",
      alt: "Feature 8 - SEO Optimization",
      title: "SEO Optimization",
      description:
        "Optimize your website for better search rankings and online visibility. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit optio dicta nihil excepturi magni!",
      price: "$500/month",
    },
    {
      id: 3,
      image: "/09.png",
      alt: "Feature 9 - Social Media Marketing",
      title: "Social Media Marketing",
      description:
        "Boost your brand's for better search rankings and online visibility. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit optio dicta nihil excepturi magni",
      price: "$400/month",
    },
  ];

  return (
    <section className='mx-4 md:mx-12 my-5'>
      <div className='flex items-center justify-center'>
        <div className='w-full md:w-[80%]'>
          <div className='flex flex-col items-center gap-5'>
            {services.map((service) => (
              <div
                key={service.id}
                className='w-full shadow-md px-8 py-6 rounded-lg bg-white'
              >
                <div className='flex items-center gap-8 flex-wrap md:flex-nowrap'>
                  <div className='w-[100px] h-[100px] flex-shrink-0'>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={100}
                      height={100}
                      className='rounded-full p-5 bg-gray-50/95'
                    />
                  </div>
                  <div className='w-full flex items-end justify-between flex-wrap md:flex-nowrap gap-5'>
                    <div className='flex flex-col gap-1'>
                      <h3 className='text-xl font-semibold'>{service.title}</h3>
                      <p className='text-gray-500'>{service.description}</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <span className='px-5 py-2 rounded-md text-sm bg-gray-100'>
                        {service.price}
                      </span>
                      <Button className='w-full bg-red-600 hover:!bg-red-700 text-white'>
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className='w-full shadow-md px-8 py-6 rounded-lg bg-white'>
              <div className='flex items-center gap-8 flex-wrap md:flex-nowrap'>
                <div className='w-[100px] h-[100px] flex-shrink-0'>
                  <div className='flex items-center justify-center p-6 w-full h-full rounded-full bg-gray-50/95'>
                    <TiCloudStorage className='text-6xl text-gray-500' />
                  </div>
                </div>
                <div className='w-full flex items-end justify-between flex-wrap md:flex-nowrap gap-5'>
                  <div className='flex flex-col gap-1'>
                    <h3 className='text-xl font-semibold'>Extra Storage</h3>
                    <p className='text-gray-500'>Purchased: 10GB - $3/mo</p>
                    <p className='text-gray-500'>
                      Increase your Storage for a small monthly fee
                    </p>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <Select>
                      <option value='10GB - $3/mo'>10GB - $3/mo</option>
                      <option value='20GB - $7/mo'>20GB - $7/mo</option>
                      <option value='30GB - $12/mo'>30GB - $12/mo</option>
                    </Select>
                    <Button className='w-full bg-red-600 hover:!bg-red-700 text-white'>
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddOns;
