function astra(str) {
    let reg = /(#|\|)(?<product>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>([1-9][0-9]{0,3}|10000))\1/g

    let list = [];
    let productInfo;
    let allCall = 0;
    while (productInfo = reg.exec(str)) {
        let product = productInfo.groups.product
        let expDate = productInfo.groups.expDate
        let calories = +productInfo.groups.calories
        //if(calories === undefined)
        list.push({product: product,expDate: expDate,calories: calories});
        allCall+= calories

    }
    let days = allCall/ 2000
    

    console.log(`You have food to last you for: ${Math.floor(days)} days!`);
    if (days > 0) {
        for (let el of list) {
            console.log(`Item: ${el.product}, Best before: ${el.expDate}, Nutrition: ${el.calories}`);
        }  
        // list.forEach(item =>{
        //     console.log(`Item: ${item.product}, Best before: ${item.expDate}, Nutrition: ${item.calories}`);
            
        // })
    }
}
astra('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|')