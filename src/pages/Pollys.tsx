import React from 'react'

const Pollys = () => {
    let data = [1,2,3,4,5]; 

  Array.prototype.Mymap = function (cb) {
    let arr = []; 
    for (let i = 0 ; i < this.length; i++) {
      arr.push(cb (this[i], i ,this)); 
    }
    return arr;
  }

  Array.prototype.MyFilter = function (cb) {
    let arr = []; 
    for (let i = 0 ; i < this.length; i++) {
      if (cb(this[i] ,i ,this)) {
        arr.push(this[i])
      }
      
    }
    return arr;
  }

  const maplog = data.Mymap((el) => el * 100); 
  const filterLog = data.MyFilter((el) => el < 5)
  return (
    <div>
      
    </div>
  )
}

export default Pollys
