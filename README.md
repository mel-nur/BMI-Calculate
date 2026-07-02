🔗 **Canlı Önizleme:** [https://calm-narwhal-30db64.netlify.app](https://calm-narwhal-30db64.netlify.app)

# ⚖️ BMI (Vücut Kitle Endeksi) Hesaplayıcı

Kullanıcıların boy ve kilo bilgilerini girerek vücut kitle endekslerini hesaplayabildiği,
sonuca göre kişiye özel diyet önerileri sunan bir React uygulaması.

## ✨ Özellikler

- 📊 Boy ve kiloya göre BMI hesaplama
- 🍎 Sonuca göre kategori (Zayıf / Normal / Fazla Kilolu / Obez) ve özel diyet listesi
- 💾 `localStorage` ile sonucun tarayıcıda saklanması (sayfa yenilense de korunur)
- 🧭 React Router ile URL senkronizasyonu ve sayfalar arası gezinme
- 🎨 Styled Components ile özelleştirilmiş butonlar
- 💅 Bootstrap ile responsive ve modern tasarım
- 🚫 Özel 404 (Bulunamadı) sayfası

## 🛠️ Kullanılan Teknolojiler

- **React 19** (Hooks: `useState`, `useEffect`)
- **React Router v7** (`BrowserRouter`, `Routes`, nested routes, `Outlet`, `useNavigate`)
- **Styled Components**
- **Bootstrap 5**
- **AlertifyJS** (bildirimler)
- **Vite**

## 📁 Sayfa Yapısı

| URL | Sayfa | Açıklama |
|-----|-------|----------|
| `/` | Hesapla | Boy/kilo girişi ve hesaplama (varsayılan) |
| `/result` | Sonuç | BMI değeri + kategori + diyet önerileri |
| `/bmi` | BMI Nedir | Bilgilendirme sayfası |
| `*` | 404 | Bulunamayan sayfalar |

## 🚀 Kurulum

```bash
npm install
npm run dev
```

## 📦 Build

```bash
npm run build
```
