function encodeResistorColors(ohmsString) {

  let resistColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white'];
  let split = ohmsString.split(" ");
  let resistVal = split[0];
  
    if (resistVal.includes('k')) {
      
      resistVal = resistVal.replace('k', '000')
      
      }
    
    if (resistVal.includes('M')) {
        resistVal = resistVal.replace('M', '000000')
      }
      
    if (resistVal.includes('.')) {
    resistVal = resistVal.replace('.', '');
    resistValNum = Number(resistVal);
    resistVal = (resistValNum/10).toString();
      }
      
    let bandString = '';
    
    for (let i=0; i < 2; i++) {
      bandString += (resistColors[Number(resistVal[i])] + ' ')
      }
      
    if (resistVal.length > 3) {
    return (( bandString += resistColors[resistVal.length - 2]) + ' ' + 'gold')
    }
    
    return (( bandString  += resistColors[resistVal.length - 2]) + ' ' + 'gold')
      
  }