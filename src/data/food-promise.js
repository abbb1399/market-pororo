const getFood = (items) =>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(items.length === 0){
        return reject('데이터가 유효하지 않음')
      }

      resolve(items)
    }, 2000);
  })
}

export default getFood