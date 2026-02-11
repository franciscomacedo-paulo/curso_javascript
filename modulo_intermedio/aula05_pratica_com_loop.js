const roman_numbers = ['I','II','III','IV','V','VI','VII','VIII','IX', 'X', 'XI', 'XII', 'XIII','XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX']
let verificar = 1
let tam = roman_numbers.length

for(let i = 1;i <= tam;i++){
    if(i == verificar){
        console.log(roman_numbers[i])
    }
}
console.log("***********************")
for(n in roman_numbers){
    // console.log(n)
    if(n == verificar ){
        console.log(roman_numbers[n])
        break
    }
}