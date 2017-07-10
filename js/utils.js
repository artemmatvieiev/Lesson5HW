function fillArr(nameArr, i) {
	let index
	if (nameArr == dateArr) index = 1
	else {index = 3}
	nameArr[i] = resultReg[i]
								.split(/[`"']/)
								.splice(index,1)
								.join()
	return nameArr
}