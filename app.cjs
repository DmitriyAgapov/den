import axios from "axios";


//searchTerm=100 // Суумма фильтра
//providerId=70 // Платежная система
//bidslist/67 // Направление и валюта обмена
const buyUrl =  `https://exchanger.money/emoney/bids/bidslist/67?providerId=70&page=1&searchTerm=100`;
//
// const getData =() => {
// 	var outdata = [];
// 	axios.get('https://exchanger.money/emoney/bids/bidslist/67?providerId=70&page=1&searchTerm=1')
// 		.then((response) => {
// 			outdata.push(response.data);
// 			console.log(response.data.Bids[0])
// 		})
// 		.catch((error) => console.log(error))
// 	// console.log(outdata)
//
// }

const getAuth = () => {
	const rid = '86052A24-B1EA-43BE-A5EB-AF0E00FF7C07'
	const url = `https://login.wmtransfer.com/gatekeeper.aspx?RID=${rid}&AuthType=KeeperMiniSocial`
	console.log(url)
	axios.get(url)
		.then((response) => {
			console.log(response)
		})
		.catch((error) => console.log(error))
}
const getAuth1 = () => {
	const rid = 'A6CB7FB0-C483-4697-B902-AF0E010437F5'
	const url = `https://login.wmtransfer.com/gatekeeper.aspx?RID=${rid}`
	axios.get(url)
		.then((response) => {
			console.log(response)
		})
		.catch((error) => console.log(error))
}

getAuth1()