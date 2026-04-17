export default async function checkPasswordStrength(password) {
  let score = 0;

  if (!password) {
    console.log("Nenhuma senha fornecida.");
    return;
  }

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) {
    console.log("Senha fraca ❌");
  } else if (score === 3 || score === 4) {
    console.log("Senha média ⚠️");
  } else {
    console.log("Senha forte ✅");
  }
}