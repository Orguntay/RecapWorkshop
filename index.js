var a = true;
function fn() {
    var b = 10;
    console.log(a); // true
                    // var a üst scope'tan iç scope'a girebiliyor.
    console.log(b); // 10
}
fn();
console.log(a);     // true
//console.log(b);   // Error
                    // var b ' iç scope'tan dış scope'a çıkamıyor.
let c = true;
function fn2() {
  //console.log(c); // let c üst scope 'tan içeri giremiyor.
                    
    let c = 10;
    console.log(c); // 10
    console.log(a); // undefined ~ aşağıda globaldeki var a' değişkenimize değer
                    // atandığı için Tanımsız (undefined) döndü.
    var a = 55;     // var a' tanımlandığı tüm scope alanı öncesi ve sonrasıyla etkisi
                    // altına alıyor. var a' o scope içinde her yerde geçerli oluyor.
                    // global var a :'değişkenimize iç scope'ta değer atayınca, atamanın öncesindeki
                    // a 'değişkenimizin globaldeki mi  yoksa yereldeki mi değeri alacak bilemediğinden
                    // tanımsız (undefined) dönüyor. Not: son cümle şahsi yorumum...
    console.log(a); // 55
    let e = "iç scopeta let e değişkenim";
}
fn2();
console.log(c);     // let true : globaldaki let c döndü.

// console.log(e);  // yukarda ve iç scope'taki let e 
                    // değişkenimize ulalşamadık.
// console.log(d);  // Error