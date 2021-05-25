let slider = "";
slider =
    `<div class="txt">
    <h1>${product[12].food}</h1>
    <p>${product[12].short}</p>
    <div class="nutrient">
        <div class="nutrient--info">
            <span>FAT</span>
            <span>${product[12].FAT}</span>
        </div>
        <div class="nutrient--info">
            <span>PRO</span>
            <span>${product[12].PRO}</span>
        </div>
        <div class="nutrient--info">
            <span>CAR</span>
            <span>${product[12].CAR}</span>
        </div>
        <div class="nutrient--info">
            <span>FIB</span>
            <span>${product[12].FIB}</span>
        </div>
    </div>
</div>
<img src=${product[12].img} style="width: 100%; height: 100%;" />`;
document.getElementById("myslider").innerHTML = slider;

let title = "";
let ingredient = "";
for (i in product[12].ingredient) {
    ingredient +=
        `<tr>
    <td>${Number(i)+1}. </td>
    <td>${product[12].ingredient[i]}</td>
    </tr>`
};
title =
    ` <div class="ingredient-title">⇩ CÁCH LÀM ${product[12].food} NGAY TẠI NHÀ ⇩</div>
<div class="ingredient-descript">${product[12].long[0]}</div>
<div>
    <div class="circle">
        <div>NGUYÊN<br>LIỆU</div>
    </div>
    <div class="ingredient-about">
        <table>
           ${ingredient}
        </table>
    </div>
</div>`;
document.getElementById("title").innerHTML = title;

let how2Cook = "";
let technique = "";
for (i in product[12].how2cook) {
    technique +=
        `<tr>
    <td>BƯỚC ${Number(i) +1}</td>
    <td>${product[12].how2cook[i]}</td>
</tr>`
};
how2Cook =
    `<table>
${technique}
</table>
<div class="circle1">
<div>CHẾ<br>BIẾN</div>
</div>`;
document.getElementById("how2").innerHTML = how2Cook;