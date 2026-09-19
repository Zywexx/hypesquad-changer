const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const HOUSES = {
  '1': { id: 1, name: 'Bravery (Cesaret)' },
  '2': { id: 2, name: 'Brilliance (Dahilik)' },
  '3': { id: 3, name: 'Balance (Denge)' }
};

console.clear();
console.log('\x1b[1;31m====================================\x1b[0m');
console.log('\x1b[1;37m   Discord HypeSquad House Changer  \x1b[0m');
console.log('\x1b[1;31m====================================\x1b[0m');
console.log('\x1b[1;37m         By zywexx & 787 INC        \x1b[0m');
console.log('\x1b[1;31m        discord.gg/CUFXct9PNz       \x1b[0m');
console.log('\x1b[1;31m====================================\x1b[0m\n');

rl.question('Discord Token bilginizi girin: ', (token) => {
  if (!token) {
    console.log('\n❌ Token boş olamaz!');
    rl.close();
    return;
  }

  console.log('\nGeçmek istediğiniz evi seçin:');
  console.log('1 - Bravery (Cesaret)');
  console.log('2 - Brilliance (Dahilik)');
  console.log('3 - Balance (Denge)\n');

  rl.question('Seçiminiz (1-3): ', async (choice) => {
    const selectedHouse = HOUSES[choice.trim()];

    if (!selectedHouse) {
      console.log('\n❌ Geçersiz seçim yaptınız!');
      rl.close();
      return;
    }

    try {
      console.log(`\n⏳ ${selectedHouse.name} evine geçiş isteği gönderiliyor...`);

      const response = await axios({
        method: 'POST',
        url: 'https://discord.com/api/v9/hypesquad/online',
        headers: {
          'Authorization': token.trim(),
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        data: {
          house_id: selectedHouse.id
        }
      });

      if (response.status === 204 || response.status === 200) {
        console.log(`\n✅ BAŞARILI! HypeSquad eviniz "${selectedHouse.name}" olarak güncellendi.`);
      }
    } catch (error) {
      console.log('\n❌ İşlem sırasında bir hata oluştu:');
      if (error.response) {
        if (error.response.status === 401) {
          console.log('   -> Girdiğiniz Token geçersiz.');
        } else if (error.response.status === 429) {
          console.log('   -> Çok fazla istek attınız (Rate limit). Lütfen biraz bekleyin.');
        } else {
          console.log(`   -> Hata Kodu: ${error.response.status}`);
        }
      } else {
        console.log(`   -> ${error.message}`);
      }
    } finally {
      rl.close();
    }
  });
});