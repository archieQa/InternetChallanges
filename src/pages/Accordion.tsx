import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Accordion = ({ sections }) => {
    const [activeSection , setActiveSection ] = useState(null);

    const toggleSection = (index) => {
        setActiveSection((prevIndex) => prevIndex === index ? null : index)
    } 

    const kthehuMrapa = useNavigate(); 

    const handleKthimin = () => {
        kthehuMrapa('/')
    }

  return (
    <>
    <div className='border rounded-md overflow-hidden'>
    {sections.map((section , index) => (
        <div className='border-b' key={index}>
            <div className= {`py-2 px-4 cursor-pointer bg-black-100
            ${ activeSection === index ? 'bg-black-200' : ''}
            `}
            onClick={() => toggleSection(index)}
             >
            {section.title}
            </div>
            {activeSection === index && (
                <div className='p-4 bg-black-50'>{section.content}</div>
            )}
        </div>
    ))}
    </div>
    <button className='m-7 absolute bottom-0 right-0 bg-blue-600 rounded-md ' onClick={handleKthimin}>Back</button>
    </>
  )
}

export default Accordion
