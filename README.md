# 🎤 Napat Karaoke Pro

ระบบเว็บแอปพลิเคชันคาราโอเกะออนไลน์ รองรับการทำงานแบบแยก 2 หน้าจอ (Dual-Screen) ระหว่าง **จอแสดงผลหลัก (TV Display)** และ **รีโมตควบคุมผ่านมือถือ (Mobile Controller)** โดยเชื่อมต่อข้อมูลแบบ Real-time ด้วย WebRTC (PeerJS) และค้นหาเพลงผ่าน YouTube ด้วย Node.js Backend

---

## ✨ จุดเด่นของระบบ

* **Dual-Screen Real-time Sync:** ใช้ **PeerJS** เชื่อมต่อระหว่าง TV และมือถือ ควบคุมคิวเพลง ข้ามเพลง หรือสั่งหยุดได้ทันทีโดยไม่ต้องรีเฟรชหน้าเว็บ
* **QR Code Quick Connect:** จอทีวีสร้าง QR Code ประจำห้องอัตโนมัติ มือถือเพียงแค่ยกกล้องสแกนก็พร้อมเป็นรีโมตควบคุมได้ทันที
* **YouTube Search Engine:** ค้นหาเพลงคาราโอเกะผ่าน Backend Node.js (`yt-search`) โดยตรง ไม่จำเป็นต้องขอหรือใช้ YouTube Data API Key
* **Auto-Play & Scoring System:** เล่นเพลงในคิวต่อเนื่องอัตโนมัติ พร้อมระบบสุ่มคะแนนและข้อความให้กำลังใจหลังร้องจบเพลง
* **All-in-One Deployment:** รันทั้ง Backend API และหน้าเว็บ Static Frontend รวมไว้ในโปรเจกต์เดียวบน Render.com

---

## 📁 โครงสร้างโฟลเดอร์

```text
karaoke-render/
├── public/
│   ├── index.html        # หน้าคาราโอเกะแบบจอเดี่ยว (All-in-One)
│   ├── display.html      # จอแสดงผลหลักสำหรับ Smart TV / PC (มี QR Code & เครื่องเล่น)
│   └── controller.html   # หน้ารีโมตสำหรับมือถือ (ค้นหาเพลง & จัดการคิว)
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js             # เซิร์ฟเวอร์ Express.js ให้บริการ API และ Static Files


🚀 การติดตั้งและรันในเครื่อง (Local Development)Clone repository:Bashgit clone [https://github.com/nat189/karaoke-render.git](https://github.com/nat189/karaoke-render.git)
cd karaoke-render

ติดตั้ง dependencies:Bashnpm install
เริ่มการทำงานเซิร์ฟเวอร์:Bashnpm start
เซิร์ฟเวอร์จะเริ่มทำงานที่พอร์ต http://localhost:3000🌐 การใช้งานผ่าน Render.comเมื่อดีพลอยขึ้น Render Web Service สามารถเปิดใช้งาน URL ต่างๆ ได้ดังนี้:หน้าจอเส้นทาง (Path)การใช้งานTV Display/display.htmlเปิดบน Smart TV หรือหน้าจอหลักเพื่อเล่นวิดีโอคาราโอเกะMobile Remote/controller.htmlรีโมตบนมือถือ (เปิดผ่านการสแกน QR Code จากหน้า TV)Single Screen/ หรือ /index.htmlจอเดี่ยวสำหรับร้องและเลือกเพลงในหน้าจอเดียวกัน🛠️ เครื่องมือและเทคโนโลยีที่ใช้Runtime & Framework: Node.js, Express.jsSearch Engine: yt-searchP2P Communication: PeerJS (WebRTC)QR Code Generator: qrcode.jsPlayer: YouTube IFrame Player APIHosting Platform: Render.com
