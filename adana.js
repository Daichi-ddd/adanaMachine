let namae = ["わく", "ちん", "ぽん"];
let adana;
let keisyou = "くん"
var keisyouCount = Math.floor(Math.random() * (3 + 1 - 1));
console.log(keisyouCount);
console.log(namae[keisyouCount]);

let adanaMachine = (namae, keisyouCount) => {

    let karina = namae[keisyouCount] + namae[keisyouCount];

    switch (keisyouCount) {
        case 0:
            adana = karina + "くん"
            break;
        case 1:
            adana = karina + "ちゃん"
            break;
        case 2:
            adana = karina + "さん"
            break;


    }

    return adana;
};

document.getElementById('result').textContent = adanaMachine(namae, keisyouCount);

//次のタスク：入力できるようにする