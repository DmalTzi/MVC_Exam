# src/lib/server
ส่วนของหลังบ้าน
## server.ts
คือตัว serve backend
## route.s
คือตัวกระจาย route ไปยัง route api ต่างๆ หรือ ก็คือ เป็นจุดรวมของ controller

## controller
### auth.ts
ทำหน้าที่รับ request และ response ของการ login
### pledge
ทำหน้าที่รับ request และ response ของการรับเงินระดมทุน
### project
ทำหน้าที่รับ request และ response การสร้าง เรียกข้อมูล

## model
### middlerwares/auth.ts
ทำการตรวจสอบว่า login ไหม ด้วย jwt และเก็บข้อมูลเพื่อนำไปใช้ต่อ
### db/index.ts
สำหรับการเชื่อมต่อฐานข้อมูล
### db/schema.ts
เป็น โครงสร้างของฐานข้อมูล
### auth.ts
เป็น logic สำหรับการ login ทำ auth แล้วสร้าง jwt และทำการเซฟลง cookie
### pledge
เป็น logic ของการจัดการการะดมทุน ตาม business logic ในโจทย์
### project
เป็น logic ของการสร้าง project เรียกใช้ ดึงข้อมูลทั้งหมด หรือ ข้อมูลหนึ่งอย่าง 

## view
### /route/+page.svelte
หน้า login


## route api
`POST` `<host>/api/auth/login`

`POST` `<host>/api/project/create`
`GET` `<host>/api/project/getAll`
`GET` `<host>/api/project/get/:id`

`POST` `/api/pledge`

## view
`<host>/` หน้า login