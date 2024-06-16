let newLine = "\r\n";
// ++++---- GÜN Uygulaması --------++++++++

/* let days =
  "1-Monday" +
  newLine +
  "2-tuesday" +
  newLine +
  "3-wednesday" +
  newLine +
  "4-thursday" +
  newLine +
  "5-friday" +
  newLine +
  "6-saturday" +
  newLine +
  "7-sunday" 
  + 
  newLine 
  + 
  "Lütfen değer giriniz?";

let value = prompt(days);

switch (value) {
  case "1":
    alert("Pazartesi");
    break; //Break ile kırmazsak bir sonraki case'e geçer break görene kadar devam eder.
  case "2":
    alert("Salı");
    break;
  case "3": //Burada alınan değer string olmasının nedeni days değişkeninde string olarak atanmış olmasından kaynaklıdır.
    alert("çarşamba");
    break;
  case "4":
    alert("perşembe");
    break;
  case "5":
    alert("cuma");
    break;
  case "6":
    alert("cumartesi");
    break;
  case "7":
    alert("pazar");
    break;
  default:
    alert("please enter acceptable value");
} */

// +++------  ATM Application  -----+++++

let balance = 1500;

let bankAction =
  "1-Show the balance" +
  newLine +
  "2-Withdraw" +
  newLine +
  "3-Deposit" +
  newLine +
  "4-Exit" +
  newLine +
  "Please enter your choice?";

let choise = prompt(bankAction);

switch (choise) {
  case "1":
    alert(`Balance is : ${balance}`);
    break;
  case "2":
    let withdrawAmount = +prompt("How much do you want to withdraw?");
    if (withdrawAmount > balance) {
      alert(
        "Your balance is not enough! Your balance is : " +
          balance + " " +
          "You want withdraw : " +
          withdrawAmount
      );
    } else {
      balance -= withdrawAmount;
      alert(`New Balance is : ${balance}`);
    }
    break;
  case "3":
    let depositAmount = +prompt("How much do you want to deposit?");
    balance += depositAmount;
    alert("New balance is : " + balance);
    break;
  case "4":
    alert("Exited the system!");
    break;
  default:
    alert("Please make your true choice!");
}
