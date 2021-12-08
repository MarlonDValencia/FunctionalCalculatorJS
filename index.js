const suma = (FirstValue,SecondValue) => FirstValue+SecondValue
const resta = (FirstValue,SecondValue) => FirstValue-SecondValue

const multiplicar = (FirstValue,SecondValue) => {
  const range = (FirstValue, SecondValue) => {
    if(SecondValue===1) return [FirstValue];
    return [FirstValue, ...range(FirstValue, resta(SecondValue,1))];
  }
  return range(FirstValue,SecondValue).reduce(suma,0)
}

function dividir(FirstValue,SecondValue){
    const range = (FirstValue, SecondValue) => {
      if(resta(FirstValue,SecondValue)<SecondValue) return [FirstValue];
      return [FirstValue, ...range(resta(FirstValue,SecondValue), SecondValue)];
    }
    return (range(FirstValue,SecondValue)).length
}
