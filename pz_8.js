let objects = [
    { name: 'Василий',
      surname: 'Васильев' },
    { name: 'Иван',
      surname: 'Иванов' },
    { name: 'Пётр',
      surname: 'Петров' }
  ];
  
  function kyshat(objects, key, value) {
   
    const result = [];
  
    
    for (let i = 0; i < objects.length; i++) {
      
      const ob = objects[i];
  
     
      if (ob[key] === value) result.push(ob);
    }
  
    
    return result;
  }
  
  const vivod = kyshat(objects, 'name', 'Пётр');
  
  console.log(vivod);