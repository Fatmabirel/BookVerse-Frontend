# BookVerse: Kütüphane Yönetim Sistemi 📚

Bu proje, kitapların, yazarların ve kategorilerin yönetimini sağlayan kapsamlı bir kütüphane yönetim sistemidir. Bu proje, kütüphaneler için kullanıcı dostu bir arayüz ile kitapların takibi, yazar bilgileri ve kategorik düzenleme gibi özellikler sunarak kitap okuma deneyimini geliştirmeyi hedefler.

<p>📌Projenin backend kısmına <a href=https://github.com/Fatmabirel/BookVerse-Backend>buradan</a> ulaşabilirsiniz.</p>

#### GEREKSİNİMLER 🛠
- [x] Web projesi: 
  ![Asp.NET Web API](https://img.shields.io/badge/asp.net%20web%20api-%231BA3E8.svg?style=for-the-badge&logo=dotnet&logoColor=white)
  ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
- [x] Veri tabanı: 
  ![PostgreSQL](https://img.shields.io/badge/postgresql-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white)

#### PROJEDE KULLANILAN PROGRAMLAMA DİLLERİ VE TEKNOLOJİLER 💻🔧
<p>
  <img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img alt="CSS" src="https://img.shields.io/badge/CSS-239120?style=for-the-badge&logo=css3&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Bootstrap" src="https://img.shields.io/badge/-Bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" />
  <img alt="Angular" src="https://img.shields.io/badge/-Angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" />
  <img alt="Visual Studio Code" src="https://img.shields.io/badge/-Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
</p>

#### 🎯 NASIL BİR PROJE OLUŞTURDUK?

BookVerse, kitapların, yazarların ve kategorilerin yönetimini kolaylaştıran bir kütüphane yönetim sistemi projesidir. Proje, kullanıcıların kütüphane içindeki kaynakları daha verimli bir şekilde takip etmelerini sağlamak amacıyla geliştirilmiştir.

Proje, kullanıcı dostu bir arayüz ile birlikte, arka planda güçlü bir API altyapısı kullanarak veri işlemlerini gerçekleştirmektedir. Kullanıcılar, kitapları, yazarları ve kategorileri listeleyebilir ve detaylı bilgiye erişebilirler.

Projenin bazı ana özellikleri şunlardır:

- **Kitap Listeleme**: Kullanıcılar, mevcut kitapların listesini görüntüleyebilir ve her bir kitabın bilgilerini detaylı bir şekilde inceleyebilir.
- **Yazar Listeleme**: Yazarların bilgileri hızlı bir şekilde incelenebilir.
- **Kategori Listeleme**: Kullanıcılar, mevcut kategorileri görüntüleyebilir.
- **Kullanıcı Arayüzü**: Modern ve kullanıcı dostu bir arayüz ile, listeleme işlemleri kolay ve hızlı bir şekilde gerçekleştirilebilir.

Bu proje, kütüphane yönetim süreçlerini dijitalleştirerek, hem kullanıcı deneyimini iyileştirmeyi hem de kütüphanelerin verimliliğini artırmayı hedeflemektedir.

## PROJE DETAYLARI📝

BookVerse projesinde, ***PostgreSQL*** veri tabanı kullanılarak ***DbFirst (Veritabanı Öncelikli)*** yaklaşımı ile backend kısmı ile etkili bir iletişim sağlanmıştır. Mevcut veri tabanı şeması üzerinden otomatik olarak ***Entity Framework*** modelleri oluşturulmuş ve bu sayede ***RESTful*** mimari prensipleri doğrultusunda geliştirilen bir ***Web API*** aracılığıyla ***Angular*** projesi ile entegrasyon sağlanmıştır. Kullanıcıların kitaplar, yazarlar ve kategoriler üzerinde gerçekleştirdiği işlemlere yönelik gerekli endpoint'ler Web API'de sunulurken, Angular uygulamasının API ile sorunsuz bir şekilde iletişim kurabilmesi için ***CORS (Cross-Origin Resource Sharing)*** ayarları uygun şekilde yapılandırılmıştır. Bu yapı sayesinde, ***BookVerse*** projesi modern bir kütüphane yönetim sistemi olarak kullanıcı deneyimini ön planda tutarak tasarlanmıştır.

🔎 BookVerse projesinde ***Anasayfa, Kitaplar, Yazarlar, Kategoriler, SSS-Yardım*** ve ***Bize Ulaşın***  olmak üzere toplam 6 farklı sayfa bulunmaktadır. Kullanıcılar bu sayfalar üzerinden kitapları keşfedebilir, yazarlar hakkında bilgi alabilir ve kategorileri keşfedebilirler. Ayrıca, sık sorulan sorular ile sorularına cevap bulurlarken, iletişim sayfasında geri bildirimde bulunabilirler. Aşağıda, BookVerse projesine ait sayfaların ekran görüntüleri yer almaktadır:

🌱 ***Ana Sayfa:*** </br>

<img src="https://github.com/user-attachments/assets/76750ca0-dac6-4bb7-b4f4-cb3389f17557" alt="image" width="900"> </br>
<img src="https://github.com/user-attachments/assets/f140ae65-4863-4791-8cb5-ecf700b81529" alt="image" width="900"> </br>

-----------------------------------------------------------------------

🌱 ***Kitaplar:*** </br>

<img src="https://github.com/user-attachments/assets/45ebda2f-68a7-4b6b-8d65-2fff74b138ef" alt="image" width="900"> </br>
<img src="https://github.com/user-attachments/assets/8d64d68b-866a-4c7e-9ff2-fb9533306e59" alt="image" width="900"> </br>

-----------------------------------------------------------------------

🌱 ***Yazarlar:*** </br>

<img src="https://github.com/user-attachments/assets/d73b1f4b-e621-4a93-891a-2d56f468b383" alt="image" width="900"> </br>
<img src="https://github.com/user-attachments/assets/65b64f6d-d392-4dfa-8de4-f6f3a5c2167b" alt="image" width="900"> </br>

-----------------------------------------------------------------------

🌱 ***Kategoriler:*** </br>

<img src="https://github.com/user-attachments/assets/7417cea4-b3b9-48ba-885d-7f9e1f3c6325" alt="image" width="900"> </br>

-----------------------------------------------------------------------

🌱 ***SSS - Yardım:*** </br>

<img src="https://github.com/user-attachments/assets/b5c06391-a2f3-4513-bfac-31b1c86f48a4" alt="image" width="900"> </br>

-----------------------------------------------------------------------

🌱 ***Bize Ulaşın:*** </br>

<img src="https://github.com/user-attachments/assets/5ede121c-47aa-47bc-a117-a25cdaaf4108" alt="image" width="900"> </br>
<img src="https://github.com/user-attachments/assets/3f753f55-d0d0-41e3-bdec-664fbbe4da31" alt="image" width="900"> </br>

</br>

-----------------------------------------------------------------------
#### 🗂️ Proje Veri Tabanı Yedek Dosyası

Projenin PostgreSQL veri tabanı yedek dosyasını aşağıdaki linkten indirebilirsiniz. Bu dosya, BookVerse projesine ait tüm kitaplar, yazarlar, kategoriler ve diğer veri tabanı yapılarıyla birlikte gelir. Dosyayı indirerek yerel ortamınızda projeyi çalıştırabilirsiniz.

📥 **[Veri Tabanı Yedeğini İndir]**(https://drive.google.com/file/d/1oZ0bdF02bcGN3CsZZSUKmiUfjf4Rn-FY/view?usp=drive_link)


Görüşürüz 🎉


