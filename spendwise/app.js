// Function to Save Data
const subForm = document.getElementById('add-sub-form');
if (subForm) {
    subForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newSub = {
            id: Date.now(),
            name: document.getElementById('name').value,
            price: parseFloat(document.getElementById('price').value),
            cycle: document.getElementById('cycle').value
        };
        const subs = JSON.parse(localStorage.getItem('mySubs')) || [];
        subs.push(newSub);
        localStorage.setItem('mySubs', JSON.stringify(subs));
        window.location.href = 'index.html';
    });
}

// Function to Show Data
const rows = document.getElementById('subscription-rows');
if (rows) {
    const subs = JSON.parse(localStorage.getItem('mySubs')) || [];
    let total = 0;
    
    subs.forEach((sub, index) => {
        total += (sub.cycle === 'yearly' ? sub.price / 12 : sub.price);
        rows.innerHTML += `
            <tr class="border-b">
                <td class="p-5 font-bold">${sub.name}</td>
                <td class="p-5 text-right font-black">$${sub.price.toFixed(2)}</td>
                <td class="p-5 text-center">
                    <button onclick="deleteItem(${index})" class="text-red-500 font-bold text-xs hover:underline">DELETE</button>
                </td>
            </tr>`;
    });
    document.getElementById('total-monthly').innerText = `$${total.toFixed(2)}`;
    document.getElementById('active-count').innerText = subs.length;
}

// Function to Delete One
function deleteItem(index) {
    let subs = JSON.parse(localStorage.getItem('mySubs')) || [];
    subs.splice(index, 1);
    localStorage.setItem('mySubs', JSON.stringify(subs));
    location.reload();
}

// Function to Clear All
const clearBtn = document.getElementById('clear-all');
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        if(confirm("Delete everything?")) {
            localStorage.clear();
            location.reload();
        }
    });
}
