import prompt from "prompt";

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

// NOVO IMPORT
import checkPasswordStrength from "./services/password/check-strength.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) console.log(err);

    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();

    // NOVA FUNÇÃO (opção extra)
    if (choose.select == 3) {
      prompt.get(["password"], async (err, result) => {
        if (err) console.log(err);
        await checkPasswordStrength(result.password);
      });
    }
  });

  prompt.start();
}

main();