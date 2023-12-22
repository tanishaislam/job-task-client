import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0f12p5j', 'template_5dfqhoc', form.current, 'uU8zj7lHQ-6pZ9vyz')
        .then((result) => {
            console.log(result.text);
            toast('message send successfully')
        }, (error) => {
            console.log(error.text);
            toast(error.text)
        });
    };
  





    return (
        <div>
            <div className=" " style={{backgroundImage: 'url(https://i.ibb.co/pjnLgr1/mdr2.jpg)'}}>
           <div className="container mx-auto ">
           <div className="flex lg:flex-row flex-col justify-around items-center gap-9 lg:h-[100vh] h-auto lg:pt-2 pt-20">
                <div className='bg-black lg:p-20 md:p-16 p-5 bg-opacity-50 mb-7 mt-3'>
                <form ref={form} onSubmit={sendEmail}>
                <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center text-white" >contact page</h1>
                <div className="border-b-4 w-28 border-blue-600 my-5 m-auto "></div>
                <div className="flex justify-center items-center flex-col">
                    <div className="flex gap-5 lg:flex-row md:flex-row flex-col justify-center mt-6">
                        <div className="form-control">
                        <label className="">
                        <input type="text" name="user_name" placeholder="Enter Your Name " className="input lg:w-72 w-auto rounded-none border-blue-500" required />
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="">
                        <input type="email" name="user_email" placeholder="Enter Your Email" className="input lg:w-72 w-auto rounded-none border-blue-500" required />
                        </label>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className=" mt-9">
                        <textarea name="message" id="" cols="25" rows="3" placeholder="Something Write" className="p-5 lg:pr-80 md:pr-10 border-blue-500"></textarea>
                        </label>
                        </div>
                   <div className="">
                    <input type="submit" value="Send Message" className="lg:py-3 md:py-3 py-2 bg-white text-blue-500 px-8 rounded-lg font-bold mt-8" />
                    </div>          
                </div>
                </form>
                </div>
           </div>
           </div>
        </div>
        </div>
    );
};

export default ContactPage;