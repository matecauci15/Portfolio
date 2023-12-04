import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Fox } from '../modals/Fox'
import { Canvas } from '@react-three/fiber';
import { Loader } from '../Components/Loader';

 const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [isLoading, setisLoading] = useState(false)
  const [currentAnimation, setcurrentAnimation] = useState("idle")

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  };

  const handleSumbit = (event) => {
    event.preventDefault()
    setisLoading(true)
    setcurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Mateo",
        from_email: form.email,
        to_email: 'matecaucino@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setisLoading(false);

      setTimeout(() => {
        setcurrentAnimation('idle')
        setForm({name: '', email: '', message: ''})
      }, [3000])
         
    }).catch((error) => {
      setisLoading(false)
      setcurrentAnimation('idle')
      console.log(error);
    })

  };

  const handleFocus = () => setcurrentAnimation('walk');
  const handleBlur = () => setcurrentAnimation('idle');


  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
    <div className='flex-1 min-w-[50%] flex flex-col'>
      <h1 className='head-text'>Get in touch</h1>
      <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSumbit}>
        <label className='text-black-500 font-semibold'>
          Name
          <input 
            type="text" 
            name="name" 
            className='input' 
            placeholder='Mateo'
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
        </label>
        <label className='text-black-500 font-semibold'>
          Email
          <input 
            type="email" 
            name="email" 
            className='input' 
            placeholder='mate@gmail.com'
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
        </label>
        <label className='text-black-500 font-semibold'>
          Your message
          <textarea 
            name="message" 
            className='input' 
            placeholder='Let me know anything you want...'
            value={form.textarea}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
        </label>
        <button
        type='submit'
        className='btn'
        disabled={isLoading}
        onFocus={handleFocus}
        onBlur={handleBlur}
        >
          {isLoading ? 'Sending...' : 'Send message'}
        </button>
      </form>
    </div>
    <div className='lg:w-1/2 w-full lg:h-auto md:h[550px] h-[350px]'>
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
      >
        <directionalLight intensity={2.5} position={[0,0,1]}></directionalLight>
        <ambientLight intensity={0.1}></ambientLight>
        <Suspense fallBack={<Loader/>}>
          <Fox 
            currentAnimation={currentAnimation}
            position={[0.5, 0.35, 0]}
            rotation={[12.6, -0.6, 0]}
            scale={[0.5, 0.5, 0.5]}
          />
        </Suspense>
      </Canvas>
    </div>
    </section>
  )
}

export default Contact