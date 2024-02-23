const menu = [
  {
    id: 1,
    title: "Adrak chai",
    category: "breakfast",
    price: 20,
    img: "adrak.jfif",
    desc: `A classic adrak chai is refreshing and has that perfect kick of adrak. `,
  },
  {
    id: 2,
    title: "paneer patty",
    category: "lunch",
    price: 80,
    img: "item-2.jpeg",
    desc: `his mouth-watering patty is everything you dream of, rich and silky smooth. `,
  },
  {
    id: 3,
    title: "Hazelnut Coffee",
    category: "shakes",
    price: 70,
    img: "mocha2.jpg",
    desc: `Heat the milk until steaming using either a steam wand, nespresso milk frother or in a pan <br>
    on the stove.`,
  },
  {
    id: 4,
    title: " Chocolate chai",
    category: "breakfast",
    price: 20,
    img: "item-4.jpeg",
    desc: `Chocolate chai is a sweet, rich, delicious hot beverage.It
    makes a great, alternative to ice cream after a meal. `,
  },
  {
    id: 5,
    title: "Veg Cheese Burger",
    category: "lunch",
    price: 50,
    img: "item-5.jpeg",
    desc: `The creamy center with that quintessential kick of vegetable is pure perfection. Indeed, great
    things do come in small packages. `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 80,
    img: "item-6.jpeg",
    desc: `Combine the espresso, sugar, vanilla, and hot water in a blender and stir until the sugar 
    dissolves.`,
  },
  {
    id: 7,
    title: "Grilled Vege Sandwitch",
    category: "lunch",
    price: 50,
    img: "item-7.jpeg",
    desc: `Surprisingly low on calories and nothing short of spectacular, enjoy this deliciously delicate
    French classic the guilt-free way.`,
  },
  {
    id: 8,
    title: "Loaded afries",
    category: "lunch",
    price: 70,
    img: "item-8.jpeg",
    desc: `Top it off with cream, sprinkle with oregano, chilly powder and voila! Your guilt-free
    fries is ready to be devoured. `,
  },
  {
    id: 9,
    title: "Kesar Chai",
    category: "breakfast",
    price: 20,
    img: "turkish.jpg",
    desc: `Kesar Chai has a well-deserved reputation for its wonderfully strong flavor. This classic
    recipe includes ground cardamom, but what makes all the difference is the fine grind of the
    kesar.`,
  },
  {
    id: 10,
    title: "Garlic Maska Buns ",
    category: "lunch",
    price: 30,
    img: "item-10.jpeg",
    desc: `These buns laid the groundwork for the amazing taste of buns to add garlic creating the very first garlic bun`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  showMenuItems(menu);
})

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const newMenu = menu.filter(function (menuItem) {
      console.log(menuItem.category);
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    // console.log(newMenu);
    if (category === "all") {
      showMenuItems(menu);
    }
    else {
      showMenuItems(newMenu);
    }
  });
});


function showMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} class="photo">

    <div class="item-info">
        <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
        </header>
        <div class="underline2"></div>
        <p class="item-text">
           ${item.desc}
        </p>
    </div>
</article>`
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
