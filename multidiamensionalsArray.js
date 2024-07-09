  // const array = [
  //   [1,2,3,4],
  //   [5,6,7],
  //   [8,3,4,5]
  // ]

  
  // const newArray=[]

  // for(let i =0;i<array.length;i++){
  //   const subarray = array[i]
  //   for(let j =0;j<subarray.length;j++){
  //       newArray.push(subarray[j])
  //   }
  // }

  // console.log(newArray)



  const array = [
    [1,2,3,4,5],
    [5,6,7],
    [1,2,3]
  ]

  const newArray=[]

  for(let i =0;i<array.length;i++){
    const subarray=array[i]
    for(let j=0;j<subarray.length;j++){
      newArray.push(subarray[j])
    }
  }

  console.log(newArray)