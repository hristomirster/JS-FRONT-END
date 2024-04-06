function solve() {
    const furnitureData = document.querySelector("textarea:first-of-type");
    const generateBtn   = document.querySelector("button:first-of-type");
    const tBodyElement  = document.querySelector(".table tbody");
    const buyResult     = document.querySelector("textarea:last-of-type");
    const buyBtn        = document.querySelector("button:last-of-type");
    
    
    generateBtn.addEventListener("click", () => {
        const inputData = JSON.parse(furnitureData.value);
        const img = inputData[0].img;
        const name = inputData[0].name;
        const price = inputData[0].price;
        const decFactor = inputData[0].decFactor;
        
        const tr = document.createElement('tr');
        
        const imgEl = document.createElement('img');
        imgEl.src = img;
        const imgElTd = document.createElement('td');
        imgElTd.appendChild(imgEl);
        
        const nameEl = document.createElement('p');
        nameEl.textContent = name;
        const nameTd = document.createElement('td');
        nameTd.appendChild(nameEl);
        
        const priceEl = document.createElement('p');
        priceEl.textContent = price;
        const priceTd = document.createElement('td');
        priceTd.appendChild(priceEl);
        
        const decFactorEl = document.createElement('p');
        decFactorEl.textContent = decFactor;
        const decFactorTd = document.createElement('td');
        decFactorTd.appendChild(decFactorEl);
        
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        const checkBoxTd = document.createElement('td');
        checkBoxTd.appendChild(checkBox);
        
        tr.appendChild(imgElTd);
        tr.appendChild(nameTd);
        tr.appendChild(priceTd);
        tr.appendChild(decFactorTd);
        tr.appendChild(checkBoxTd);
        
        tBodyElement.appendChild(tr);
        
        
        
        
        // // Create table row and cells
        // const tr = document.createElement("tr");
        // const tdImg = document.createElement("td");
        // const tdName = document.createElement("td");
        // const tdPrice = document.createElement("td");
        // const tdDecFactor = document.createElement("td");
        // const tdMark = document.createElement("td");
        
        // // Create image element
        // const img = document.createElement("img");
        // img.src = inputData[0].img;
        
        // // Create paragraph elements for other data
        // const name = document.createElement("p");
        // name.textContent = inputData[0].name;
        
        // const price = document.createElement("p");
        // price.textContent = inputData[0].price;
        
        // const decFactor = document.createElement("p");
        // decFactor.textContent = inputData[0].decFactor;
        
        // const checkBox = document.createElement("input");
        // checkBox.type = "checkbox";
        
        // // Append elements to cells
        // tdImg.appendChild(img);
        // tdName.appendChild(name);
        // tdPrice.appendChild(price);
        // tdDecFactor.appendChild(decFactor);
        // tdMark.appendChild(checkBox);
        
        // // Append cells to row
        // tr.appendChild(tdImg);
        // tr.appendChild(tdName);
        // tr.appendChild(tdPrice);
        // tr.appendChild(tdDecFactor);
        // tr.appendChild(tdMark);
        
        // // Append row to table body
        // tBodyElement.appendChild(tr);
    });
    
    buyBtn.addEventListener('click', () => {    
        // console.log(tBodyElement.querySelectorAll('tr')); 
        let names = [];
        let price = 0;
        let avgDf = 0;
        let markedBox = 0

        for (const row of (tBodyElement.querySelectorAll('tr'))) {
            if((row.querySelector('tr td:nth-child(5) input').checked)) {
                console.log((row.querySelector('tr td:nth-child(2) p').textContent));
                if(!names.includes(row.querySelector('tr td:nth-child(2) p').textContent)) {
                    names.push(row.querySelector('tr td:nth-child(2) p').textContent);
                }
                price += Number(row.querySelector('tr td:nth-child(3) p').textContent);
                avgDf += Number(row.querySelector('tr td:nth-child(4) p').textContent);
                console.dir(row.querySelector('tr td:nth-child(5) input').checked);
                markedBox += 1;
            };

            
        };

        buyResult.value = (`Bought furniture: ${names.join(', ')}\nTotal price: ${price}\nAverage decoration factor: ${avgDf / markedBox}`);
    });
    
}

// monthly change freez
// account
// Decom

// SMB signing to all SVMs

// DR tests branch locations
