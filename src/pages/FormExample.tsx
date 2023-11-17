import {useEffect, useRef, useState} from 'react'

interface FormExampleProps {
  onSubmit: (formData: {
    username: string;
    Email: string;
    password: string;
  }) => void;
}

const FormExample = ({onSubmit}:FormExampleProps) => {

  

  const [formData , setFormData] = useState({
    username:'',
    password:'',
    Email:''
  })
  const fokusi = useRef<HTMLInputElement>(null); 
  const [isFoucsed , setIsFoucused] = useState(null); 
  const [error, setError] = useState({
    username:'',
    password:'',
    Email:''
  })

  const [succsess , setSuccsess] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    }); 
    setError({
      username:'',
      password:'',
      Email:''
    })
  }

  useEffect(() => {
    if(fokusi.current){
      fokusi.current.focus(); 
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if(!formData.username) {
      setError((prevData) => ({...prevData, username: 'Please fill out the Username Input'}))
    }

    if(!formData.password) {
      setError((prevData) => ({...prevData, password: 'Please fill out the Password Input'}))
    }
    if(!formData.Email) {
      setError((prevData) => ({...prevData, Email: 'Please fill out the Email Input'}))
    }
      

    setTimeout(() => {
        onSubmit(formData); 
        setSuccsess('Your Registration is done')
    }, 1000)
  }
  return (
    <>
    <h1 className='text-4xl font-bold mb-6'>Google Sign in</h1>
    <div className='h-8'></div>
    <form className='flex flex-col gap-4 max-w-md mx-auto' onSubmit={handleSubmit}>
      <label className='flex flex-col'>
        <input
        ref={fokusi}
        placeholder='Username:'
        type='text'
        name='username'
        id='username'
        onChange={handleChange}
        value={formData.username}
        className='border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300'
        >
        </input>
        {error.username && <div className='text-red-500 mt-4'>{error.username}</div>}
      </label>
      <label>
        <input
        placeholder='Password:'
        type='password'
        name='password'
        id='password'
        onChange={handleChange}
        value={formData.password}
        className='border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300'
        >
        </input>
        {error.password && <div className='text-red-500 mt-4'>{error.password}</div>}
      </label>
      <label>
        <input
        placeholder='Email:'
        type='text'
        name='Email'
        id='Email'
        onChange={handleChange}
        value={formData.Email}
        className='border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300'
        >
        </input>
        {error.Email && <div className='text-red-500 mt-4 '>{error.Email}</div>}
      </label>
      <button className='bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300' type='submit'>Sign In</button>
    </form>
    {succsess && <div className='text-blue-500 mt-4'>{succsess}</div>}
      
    </>
  )
}

export default FormExample
