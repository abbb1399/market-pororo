const getFood = (items) =>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(items.length === 0){
        return reject('데이터가 없습니다.')
      }

      resolve(items)
    }, 1000);
  })
}

export default getFood