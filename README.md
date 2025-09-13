# Green Tea Phone Website

## โครงสร้างโปรเจค

```
nextflow-website-github-instruction/
├── assets/                # เก็บไฟล์ bootstrap.min.css
├── public/
│   └── index.html         # HTML template หลัก
├── src/
│   ├── index.js           # Entry point ของ React
│   └── pages/
│       ├── App.js         # Routing และ Layout หลัก
│       ├── HomePage.js    # หน้าแนะนำสินค้า
│       └── ContractPage.js# หน้าติดต่อ
├── package.json           # ข้อมูล dependencies และ scripts
├── webpack.config.js      # Webpack config
├── .babelrc               # Babel config
└── README.md
```

## วิธีเริ่มต้นใช้งาน

1. ติดตั้ง dependencies:
   ```bash
   npm install
   ```
2. รัน development server:
   ```bash
   npm start
   ```

- หน้าแรก: แนะนำสินค้าโทรศัพท์สีชาเขียว
- หน้า Contract: ฟอร์มติดต่อ
- Footer: contract@fuctionware.com

## Tech Stack
- React.js (function component, JSX)
- Bootstrap 5 (assets/bootstrap.min.css)
- React Router DOM
- Webpack, Babel
