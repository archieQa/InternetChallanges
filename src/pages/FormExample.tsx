import { useState } from 'react';

const FormExample = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, age });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'age') {
      setAge(value);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' placeholder='Name' value={name} onChange={handleChange} name='name' />
        </label>
        <label>
          Age:
          <input type='number' placeholder='Age' value={age} onChange={handleChange} name='age' />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>

      {submittedData && (
        <div>
          <p>Name : {submittedData.name} and Age: {submittedData.age}</p>
        </div>
      )}
    </>
  );
};

export default FormExample;
