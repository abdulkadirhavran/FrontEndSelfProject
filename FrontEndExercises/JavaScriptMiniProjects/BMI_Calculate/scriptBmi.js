const mass = Number(prompt("Enter your mass: "));
const height = Number(prompt("Enter your height(m): "));

const bmi = mass / Math.pow(height, 2);

if (bmi < 18.5) {
  alert("hadi yine fitsin!");
} else if (bmi < 24.9) {
  alert("İdeal kilodasın!");
} else if (bmi < 29.9) {
  alert("Fazla kilolusun!");
} else if (bmi < 34.9) {
  alert("Obezsin!Yeme sen artık ");
} else {
  alert("Ayı gibisiniz maşalaah");
}
