# islamicjs(Beta) :
هو حزمة توفر أذكار وأحاديث إسلامية عشوائية من مصادر مختلفة. يمكن استخدام هذه الحزمة في تطبيقات الويب أو المشاريع التي تحتاج إلى عرض أذكار وأحاديث إسلامية عشوائية.

## التثبيت :
```bash
npm i islamicjs
```
```yarn 
yarn add islamicjs
```


## الاستخدام : 
بمجرد تثبيت الحزمة، يمكنك استيراد الوظائف المتاحة واستخدامها في ملف JavaScript الخاص بك. فيما يلي مثال بسيط عن كيفية استخدامه:

### 1- `getAzkar()` :
تستخدم هذه الوظيفة للحصول على أذكار إسلامية عشوائية.

```js
const { getAzkar } = require('islamicjs');

const randomAzkar = getAzkar();
console.log(randomAzkar)//ارسال الأذكــــار
```

### 2- `getAhadith()` :
تستخدم هذه الوظيفة للحصول على أحاديث إسلامية عشوائية.

```js
const { getAhadith } = require('a-islamic');

const Haditget = getAhadith();

console.log(Haditget.title);//ارسال عنوان الحـــديث
console.log(Haditget.hadith);// ارسال الحــــــديث
console.log(Haditget.references);// ارسال صاحب الحـــــديث
```

# مثال :
```js
const { getAzkar, getAhadith } = require('islamicjs');

//اذكــــــار
const randomAzkar = getAzkar();

console.log(randomAzkar)//ارسال الأذكــــار

// احــــــاديث
const Haditget = getAhadith();

console.log(Haditget.title);//ارسال عنوان الحـــديث
console.log(Haditget.hadith);// ارسال الحــــــديث
console.log(Haditget.references);// ارسال صاحب الحـــــديث
```
