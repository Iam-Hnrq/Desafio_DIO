let nome = "Cronos";
let xp = 8757;
let level = 5;

if (xp <= 1000) {
  level = "ferro";
} else if (xp <= 2000) {
  level = "bronze";
} else if (xp <= 5000) {
  level = "prata";
} else if (xp <= 7000) {
  level = "ouro";
} else if (xp <= 8000) {
  level = "platina";
} else if (xp <= 9000) {
  level = "diamante";
} else if (xp <= 10000) {
  level = "Champions";
}

console.log(
  `O jogador ${nome} está no nível ${level} com ${xp} pontos de experiência.`,
);
