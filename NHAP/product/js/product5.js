let slider = "";
slider =
    `<div class="txt">
    <h1>${product[5].food}</h1>
    <p>${product[5].short}</p>
    <div class="nutrient">
        <div class="nutrient--info">
            <span>FAT</span>
            <span>${product[5].FAT}</span>
        </div>
        <div class="nutrient--info">
            <span>PRO</span>
            <span>${product[5].PRO}</span>
        </div>
        <div class="nutrient--info">
            <span>CAR</span>
            <span>${product[5].CAR}</span>
        </div>
        <div class="nutrient--info">
            <span>FIB</span>
            <span>${product[5].FIB}</span>
        </div>
    </div>
</div>
<img src=${product[5].img} style="width: 100%; height: 100%;" />`;
document.getElementById("myslider").innerHTML = slider;

let title = "";
let ingredient = "";
for (i in product[5].ingredient) {
    ingredient +=
        `<tr>
    <td>${Number(i)+1}. </td>
    <td>${product[5].ingredient[i]}</td>
    </tr>`
};
title =
    ` <div class="ingredient-title">⇩ CÁCH LÀM ${product[5].food} NGAY TẠI NHÀ ⇩</div>
<div class="ingredient-descript">${product[5].long[0]}</div>
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
for (i in product[5].how2cook) {
    technique +=
        `<tr>
    <td>BƯỚC ${Number(i) +1}</td>
    <td>${product[5].how2cook[i]}</td>
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