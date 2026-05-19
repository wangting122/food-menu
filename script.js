const menuData = [ 
     { id:1, name:"豆浆油条", price:5, category:"breakfast", desc:"现磨豆浆+酥脆油条", icon:"🥛" }, 
     { id:2, name:"番茄炒蛋盖饭", price:12, category:"lunch", desc:"酸甜可口，经典家常菜", icon:"🍚" }, 
     { id:3, name:"红烧肉套餐", price:18, category:"lunch", desc:"肥瘦相间，入口即化", icon:"🍖" }, 
     { id:4, name:"牛肉面", price:15, category:"dinner", desc:"手工拉面+大块牛肉", icon:"🍜" }, 
     { id:5, name:"烤肠", price:3, category:"snack", desc:"外焦里嫩，解馋必备", icon:"🌭" }, 
     { id:6, name:"鲜肉包", price:4, category:"breakfast", desc:"热气腾腾，一口爆汁", icon:"🥟" } 
 ]; 
 function renderMenu(category = "all") { 
     const grid = document.getElementById("menuGrid"); 
     grid.innerHTML = ""; 
     const filtered = category === "all" ? menuData : menuData.filter(item => item.category === category); 
     filtered.forEach(food => { 
         const card = document.createElement("div"); 
         card.className = "food-card"; 
         card.innerHTML = ` 
             <div class="food-placeholder">${food.icon}</div> 
             <div class="food-info"> 
                 <div class="food-name">${food.name}</div> 
                 <div class="food-price">¥${food.price}</div> 
                 <div class="food-desc">${food.desc}</div> 
             </div> 
         `; 
         grid.appendChild(card); 
     }); 
 } 
 document.querySelectorAll(".filter-btn").forEach(btn => { 
     btn.addEventListener("click", () => { 
         document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active")); 
         btn.classList.add("active"); 
         renderMenu(btn.dataset.category); 
     }); 
 }); 
 window.onload = () => renderMenu();