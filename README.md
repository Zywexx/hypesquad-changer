# Discord HypeSquad House Changer

Basit bir Node.js CLI aracı. Kendi Discord hesabınızın **HypeSquad evini** (Bravery / Brilliance / Balance) terminal üzerinden değiştirmenizi sağlar.

> ⚠️ **Not:** Bu araç, Discord'un kullanıcı hesabı token'ını (self-bot / self-token) kullanır. Discord'un Kullanım Şartları, token'ların otomasyon amaçlı kullanımını yasaklar ve bu tür kullanımlar hesap askıya alınmasına yol açabilir. Bu proje **sadece eğitim/kişisel deneme amaçlıdır**. Kullanım sorumluluğu tamamen kullanıcıya aittir.

---

## 🚀 Özellikler

- Terminal üzerinden HypeSquad evi seçimi (Bravery, Brilliance, Balance)
- Renkli, okunaklı arayüz (kırmızı & beyaz tema)
- Hata yönetimi (geçersiz token, rate limit, genel API hataları)

---

## 📦 Gereksinimler

- [Node.js](https://nodejs.org/) (v16 veya üstü önerilir)
- npm (Node.js ile birlikte gelir)

---

## 🔧 Kurulum

1. Projeyi bilgisayarınıza indirin ve bir klasöre çıkarın.
2. Klasörün içinde terminal/komut istemi açın.
3. Aşağıdaki komutu çalıştırın:

```bash
npm install axios
```

## ▶️ Kullanım

```bash
node main.js
```

Program sizden sırasıyla:
1. Discord token'ınızı,
2. Geçmek istediğiniz HypeSquad evini (1-3)

girmenizi isteyecektir.

---

## 🔑 Discord Token'ınızı Nasıl Alırsınız

1. Discord'u tarayıcıda veya masaüstü uygulamasında açın ve giriş yapın.
2. `F12` tuşuna basarak Geliştirici Araçları'nı açın.
3. Üstteki sekmelerden **Application**'a geçin.
4. Sol menüden **Local Storage** başlığını açın ve altındaki `https://discord.com` girdisine tıklayın.
5. Açılan tablonun üstündeki arama/filtre kutusuna `token` yazın.
6. Çıkan satırın **Value** sütunundaki uzun metin sizin token'ınızdır — kopyalayın.

> 🔒 **Güvenlik uyarısı:** Token'ınızı asla başkasıyla paylaşmayın. Token'ınıza sahip olan herkes hesabınıza tam erişim kazanır.

---

## 🛠️ HypeSquad Evleri

| ID | Görsel | Ev | Türkçe | Renk |
|----|--------|-----|--------|------|
| 1 | ![Bravery](assets/bravery.png) | Bravery | Cesaret | Mor |
| 2 | ![Brilliance](assets/brilliance.png) | Brilliance | Dahilik | Kırmızı |
| 3 | ![Balance](assets/balance.png) | Balance | Denge | Yeşil |

---

## 👤 Geliştiriciler

**By zywexx & 787 INC**

Discord: [discord.gg/CUFXct9PNz](https://discord.gg/CUFXct9PNz)

---

## 📄 Lisans

Bu proje **GNU General Public License v3.0 (GPL-3.0)** ile lisanslanmıştır.

Bu, projeyi özgürce kullanabileceğiniz, değiştirebileceğiniz ve dağıtabileceğiniz, ancak türetilmiş çalışmaların da aynı lisans altında açık kaynak olarak paylaşılması gerektiği anlamına gelir. Tam lisans metni için [LICENSE](./LICENSE) dosyasına bakın.

```
Copyright (C) 2026 zywexx & 787 INC

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
```