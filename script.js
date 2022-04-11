// დავალება:
// 1. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   
// currentDay ცვლადი გვაძლევს 
// კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი) , 
// დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა,
//  1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.
// 2. დაწერეთ for ციკლი, 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i
// 3. დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i
// 4. დაწერეთ do while ციკლი 0 დან 150 - მდე console.log ში დაბეჭდეთ ინდექსი i
// 5. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 1000 - მდე 
// ამ მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i); გამოიყენეთ  push მეთოდი

1.

const currentDay = new Date().getDay();

        switch(currentDay){
        case 0:
        console.log(currentDay === "Sunday");
        break;
        case 1:
        console.log(currentDay === "Monday");
        break;
        case 2:
        console.log(currentDay === "Tuesday");
        break;
        case 3:
        console.log(currentDay === "Wednesday");
        break;
        case 4:
        console.log(currentDay === "Thursday");
        break;
        case 5:
        console.log(currentDay === "Friday");
        break;
        case 6:
        console.log(currentDay === "Saturday");
        default:
        console.log(currentDay === 'other day');
        break;
 }




// 2
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//   }

// 3

// let i=0;
// while(i<=50){
//     console.log(i);
//     i++
// }



// 4

// let j=0;
// do{
//     console.log(j);
//     j++;
// }while(j<=150);

// // 5s



// let myarr = [i];
// for (i = 0; i <= 100; i++) {
//   i = i * i;

//   arr.push(i);
// }

// console.log(arr);