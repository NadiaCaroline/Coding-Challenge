function checkCats(CatsTuti, catsNining) {
    const correctedTuti = [...CatsTuti];
    if (correctedTuti.length >= 3) {
      correctedTuti[0] = null;
      correctedTuti.pop();
      correctedTuti.pop();
    }
  
    const mergedData = [...correctedTuti, ...catsNining];
  
    for (let i = 0; i < mergedData.length; i++) {
      const age = mergedData[i];
      const catNumber = i + 1;
      if (age >= 3) {
        console.log(`Kucing Nomor ${catNumber} adalah Kucing Dewasa, dan berusia ${age} tahun`);
      } else {
        console.log(`Kucing Nomor ${catNumber} masih anak-anak`);
      }
    }
  }

const data1Tuti = [3, 5, 2, 12, 7];
const data1Nining = [4, 1, 15, 8, 3];
checkCats(data1Tuti, data1Nining);

const data2Tuti = [9, 16, 6, 8, 3];
const data2Nining = [10, 5, 6, 1, 4];
checkCats(data2Tuti, data2Nining);


  
  
  