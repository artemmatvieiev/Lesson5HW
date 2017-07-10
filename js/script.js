const reg = /([`"'])((\d{10,})|(\w{3}[\s,][^"^']+))\1\s[-=:][>:]\s\1(\w{4,5}:[^"^']+?)\1/gi
const resultReg = str.match(reg)
console.log(resultReg)

for (let i in resultReg) {
	fillArr(dateArr, i)
	
	if (Number.isInteger(+dateArr[i])) dateArr[i] = new Date(+dateArr[i])
		dateArr[i] = new Date(Date.parse(dateArr[i]))
	
	dateArr[i] = dateArr[i].toLocaleDateString("en-Gb")
	
	fillArr(urlArr, i)
	
	result[i] = {
		date: dateArr[i],
		url: urlArr[i]
	} 
}

console.log(result)