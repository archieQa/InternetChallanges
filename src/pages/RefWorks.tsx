import {useState , useRef } from 'react'

const RefWorks = () => {
    // we created a state to store if the password was correct or not 
    
    const [isCorrect , setIsCorrect] = useState(null); 
    const [isFocused , setIsFocused] = useState<number>(0);
    // we created two useRefs to manipulate the inpute element  
    const passwordRef = useRef<HTMLInputElement>(null); 
    const usernameRef = useRef<HTMLInputElement>(null); 
    const inputRefs = [useRef<HTMLInputElement | null>(null) ,useRef<HTMLInputElement | null >(null),useRef<HTMLInputElement | null >(null)]

    const focusNextInput = () => {
        const nextIndex = (isFocused + 1) % inputRefs.length;  
        setIsFocused(nextIndex)
        if(inputRefs[nextIndex].current && inputRefs[nextIndex]){
            inputRefs[nextIndex].current.focus();
        }
    }

    // we handle submit to check if the form is submited 
    const handleSubmmit  = (e) => {
        e.preventDefault();
        if(passwordRef.current) {
            // we store the lenght in the isvalid const so we can set the setIscorrect to isvalid 
            const isValid = passwordRef.current.value.length >= 8; 
            setIsCorrect(isValid); 
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmmit}> 
      <label>
        Password
        <input type='password' ref={passwordRef} style={{borderColor: isCorrect !== null ?(isCorrect ? 'blue' : 'red'): ""}} />
      </label>
      <label>
        Username
        <input type='text' ref={usernameRef} />
      </label>
      <button type='submit'>Submit</button>
      </form>
      <div className='focus_container'>
        {inputRefs.map((ref, index) => (
            <input
            key={index}
            ref={ref}
            placeholder={`Input ${index + 1}`}
            onFocus={() => focusNextInput()}
            />
        ))}
        <button onClick={focusNextInput}>Next input</button>
      </div>
    </div>
  )
}

export default RefWorks
