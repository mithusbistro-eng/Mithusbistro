export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
};

const img = (id: string, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=${q}`;

export const categories = [
  "Buns",
  "Bread Items",
  "Burger",
  "Wraps & Rolls",
  "Fried Chicken",
  "Momos",
  "Maggie",
  "Pasta",
  "French Fries",
  "Cake",
  "Milk Shakes",
  "Mojito",
  "Ice Creams",
] as const;

export const products: Product[] = [
  // Buns
  { id: "butter-bun", name: "Butter Bun", price: 29, category: "Buns", image: "https://media.istockphoto.com/id/184915506/photo/white-dinner-roll.jpg?b=1&s=612x612&w=0&k=20&c=qw77sKQ5zmFV-DvzZMiwvOCyu6o2hxGJzyav7UiVRBM=" },
  { id: "jam-bun", name: "Jam Bun", price: 29, category: "Buns", image: "https://images.pexels.com/photos/25048976/pexels-photo-25048976.jpeg" },
  { id: "palkova-bun", name: "Palkova Bun", price: 29, category: "Buns", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLSx854-thdTtG0DC7ke-LnmSArRQ9pmmzKg2FVfS55g&s=10" },
  { id: "veg-bun", name: "Veg Bun", price: 29, category: "Buns", image: "https://images.pexels.com/photos/1893574/pexels-photo-1893574.jpeg" },
  { id: "chicken-bun", name: "Chicken Bun", price: 39, category: "Buns", image: "https://images.pexels.com/photos/5446516/pexels-photo-5446516.jpeg" },
  { id: "egg-bun", name: "Egg Bun", price: 29, category: "Buns", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUm9YWuFjAd3E3lmdshtppYbBuLN_w24qAe2bapK65Dg&s=10" },
  { id: "cream-bun", name: "Cream Bun", price: 19, category: "Buns", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZKpsJ2bvt9q0qQSEzMNaxs9F3-PqZt2xYfRgFslpug&s=10" },

  // Bread items
  { id: "peanut-sandwich", name: "Peanut Sandwich", price: 39, category: "Bread Items", image: img("photo-1528735602780-2552fd46c7af") },
  { id: "veg-sandwich", name: "Veg Sandwich", price: 29, category: "Bread Items", image: img("photo-1521390188846-e2a3a97453a0") },
  { id: "egg-sandwich", name: "Egg Sandwich", price: 39, category: "Bread Items", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcYYOS927-pXUbcajEEESNRqO0gn4uKevnEm1euMQdg&s=10" },
  { id: "chicken-sandwich", name: "Chicken Sandwich", price: 59, category: "Bread Items", image: img("photo-1592415486689-125cbbfcbee2") },
  { id: "mushroom-sandwich", name: "Mushroom Sandwich", price: 49, category: "Bread Items", image: img("photo-1539252554453-80ab65ce3586") },
  { id: "paneer-sandwich", name: "Paneer Sandwich", price: 49, category: "Bread Items", image: img("photo-1567234669003-dce7a7a88821") },
  { id: "bread-omelette", name: "Bread Omelette", price: 29, category: "Bread Items", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlulzf1L80hnT_eHOdy9sgUvno6K5Fyb9QUtn6XyNtw&s=10" },

  // Burger
  { id: "egg-burger", name: "Egg Burger", price: 49, category: "Burger", image: img("photo-1550547660-d9450f859349") },
  { id: "veg-burger", name: "Veg Burger", price: 39, category: "Burger", image: img("photo-1520072959219-c595dc870360") },
  { id: "chicken-burger", name: "Chicken Burger", price: 59, category: "Burger", image: img("photo-1571091718767-18b5b1457add") },
  { id: "cheese-chicken-burger", name: "Cheese Chicken Burger", price: 69, category: "Burger", image: img("photo-1568901346375-23c9450c58cd") },
  { id: "paneer-burger", name: "Paneer Burger", price: 59, category: "Burger", image: img("photo-1586190848861-99aa4a171e90") },
  { id: "patty-burger", name: "Patty Burger", price: 59, category: "Burger", image: img("photo-1572802419224-296b0aeee0d9") },

  // Wraps & Rolls
  { id: "egg-roll", name: "Egg Roll", price: 39, category: "Wraps & Rolls", image: img("photo-1626700051175-6818013e1d4f") },
  { id: "veg-roll", name: "Veg Roll", price: 29, category: "Wraps & Rolls", image: img("photo-1550507992-eb63ffee0847") },
  { id: "paneer-roll", name: "Paneer Roll", price: 49, category: "Wraps & Rolls", image: img("photo-1565299585323-38d6b0865b47") },
  { id: "mushroom-roll", name: "Mushroom Roll", price: 49, category: "Wraps & Rolls", image: "https://images.pexels.com/photos/30738186/pexels-photo-30738186.jpeg" },
  { id: "chicken-roll", name: "Chicken Roll", price: 59, category: "Wraps & Rolls", image: img("photo-1626700051175-6818013e1d4f") },

  // Fried Chicken (Fries)
  { id: "classic-fried-chicken", name: "Classic Fried Chicken", price: 69, category: "Fried Chicken", image: img("photo-1562967914-608f82629710") },
  { id: "drum-stick-chicken", name: "Drum Stick Chicken", price: 79, category: "Fried Chicken", image: img("photo-1626082927389-6cd097cdc6ec") },
  { id: "fried-wings-chicken", name: "Fried Wings Chicken", price: 89, category: "Fried Chicken", image: "https://images.pexels.com/photos/9872916/pexels-photo-9872916.jpeg" },
  { id: "fried-strips-chicken", name: "Fried Strips Chicken", price: 89, category: "Fried Chicken", image: img("photo-1585325701956-60dd9c8553bc") },
  { id: "chicken-popcorn", name: "Chicken Popcorn", price: 89, category: "Fried Chicken", image: "https://images.pexels.com/photos/28449693/pexels-photo-28449693.jpeg" },
  { id: "chicken-bites", name: "Chicken Bites", price: 99, category: "Fried Chicken", image: img("photo-1569058242253-92a9c755a0ec") },

  // Momos
  { id: "veg-momos", name: "Veg Momos", price: 49, category: "Momos", image: img("photo-1626776876729-bab4369a5a5a") },
  { id: "paneer-momos", name: "Paneer Momos", price: 59, category: "Momos", image: "https://images.pexels.com/photos/28445589/pexels-photo-28445589.jpeg" },
  { id: "mushroom-momos", name: "Mushroom Momos", price: 59, category: "Momos", image: "https://images.pexels.com/photos/28445587/pexels-photo-28445587.jpeg" },
  { id: "chicken-momos", name: "Chicken Momos", price: 69, category: "Momos", image: img("photo-1534422298391-e4f8c172dddb") },
  { id: "schezwan-chicken-momos", name: "Schezwan Chicken Momos", price: 79, category: "Momos", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprIZU7EGyCShGVPJ0_iaQg0xmvQiUGfFpzk_tNbMSJg&s=10" },
  { id: "pari-pari-chicken-momos", name: "Pari Pari Chicken Momos", price: 79, category: "Momos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMuBGRM9ySIDGM4V3xV1nDu6ugMzqICvi4cdbOi12cw&s=10" },
  { id: "tikka-chicken-momos", name: "Tikka Chicken Momos", price: 70, category: "Momos", image: img("photo-1626776876729-bab4369a5a5a") },
  { id: "5-in-1-combo", name: "5 in 1 Combo", price: 89, category: "Momos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ekbDRmJAij-6dG0MqerRbVHQqfbMA8FE-laL05HYmA&s=10" },

  // Maggie
  { id: "egg-maggie", name: "Egg Maggie", price: 49, category: "Maggie", image: img("photo-1612929633738-8fe44f7ec841") },
  { id: "veg-maggie", name: "Veg Maggie", price: 39, category: "Maggie", image: img("photo-1585032226651-759b368d7246") },
  { id: "chicken-maggie", name: "Chicken Maggie", price: 59, category: "Maggie", image: img("photo-1612929633738-8fe44f7ec841") },
  { id: "butter-maggie", name: "Butter Maggie", price: 59, category: "Maggie", image: img("photo-1626804475297-41608ea09aeb") },
  { id: "mushroom-maggie", name: "Mushroom Maggie", price: 59, category: "Maggie", image: img("photo-1585032226651-759b368d7246") },
  { id: "classic-maggie", name: "Classic Maggie", price: 29, category: "Maggie", image: img("photo-1612929633738-8fe44f7ec841") },
  { id: "spicie-maggie", name: "Spicie Maggie", price: 49, category: "Maggie", image: img("photo-1585032226651-759b368d7246") },

  // Pasta
  { id: "classic-pasta", name: "Classic Pasta", price: 49, category: "Pasta", image: img("photo-1621996346565-e3dbc646d9a9") },
  { id: "white-sauce-pasta", name: "White Sauce Pasta", price: 89, category: "Pasta", image: "https://images.pexels.com/photos/31109622/pexels-photo-31109622.jpeg"},
  { id: "chicken-pasta", name: "Chicken Pasta", price: 79, category: "Pasta", image: img("photo-1563379926898-05f4575a45d8") },
  { id: "mushroom-pasta", name: "Mushroom Pasta", price: 69, category: "Pasta", image: img("photo-1473093226795-af9932fe5856") },
  { id: "spicy-pasta", name: "Spicy Pasta", price: 59, category: "Pasta", image: img("photo-1621996346565-e3dbc646d9a9") },
  { id: "veg-pasta", name: "Veg Pasta", price: 59, category: "Pasta", image: img("photo-1473093226795-af9932fe5856") },

  // French Fries
  { id: "classic-french-fries", name: "Classic French Fries", price: 39, category: "French Fries", image: img("photo-1573080496219-bb080dd4f877") },
  { id: "pari-pari-french-fries", name: "Pari Pari French Fries", price: 49, category: "French Fries", image: img("photo-1541592106381-b31e9677c0e5") },
  { id: "cheese-french-fries", name: "Cheese French Fries", price: 59, category: "French Fries", image: img("photo-1585109649139-366815a0d713") },
  { id: "smiles", name: "Smiles", price: 39, category: "French Fries", image: img("photo-1518013431117-eb1465fa5752") },

  // Cake
  { id: "brownies", name: "Brownies", price: 29, category: "Cake", image: img("photo-1606313564200-e75d5e30476c") },
  { id: "cup-cakes", name: "Cup Cakes", price: 29, category: "Cake", image: img("photo-1587668178277-295251f900ce") },
  { id: "jar-cake", name: "Jar Cake", price: 39, category: "Cake", image: "https://images.pexels.com/photos/20809255/pexels-photo-20809255.jpeg" },
  { id: "lava-cake", name: "Lava Cake", price: 39, category: "Cake", image: "https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.jpg?b=1&s=612x612&w=0&k=20&c=BkjZR0gwMo4Lui1RhfZVPQQCB2rD3ICzsjbHX8-Ss3Y=" },
  { id: "muttai-mittai", name: "Muttai Mittai", price: 29, category: "Cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMii0yqelF5AUJnHbCB0GIuH_BGV9dLd1NQjWNIJUdAg&s=10" },
  { id: "pal-bun", name: "Pal Bun", price: 9, category: "Cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBxibbrNDdD-S1kO8qsPIaUhXm6eOgc5ozokcOyCegg&s=10" },
  { id: "sizzling-brownie", name: "Sizzling Brownie", price: 99, category: "Cake", image: "https://images.pexels.com/photos/33510641/pexels-photo-33510641.jpeg" },
  { id: "brownie-with-icecream", name: "Brownie With Icecream", price: 89, category: "Cake", image: "https://media.istockphoto.com/id/514998178/photo/chocolate-brownie-with-vanilla-ice-cream-nuts-and-mint.jpg?b=1&s=612x612&w=0&k=20&c=KX8p3Tqp3EraDUdEXwjtmZ-mWKDPZZW2LA1gyfffnoI="},
  { id: "triple-chocolate-brownie", name: "Triple Chocolate Brownie", price: 39, category: "Cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUjKbqbOjCMN-UP32--qG-42R8xgIECRqCqiC-4BHT3Q&s=10" },
  { id: "brownie-tub", name: "Brownie Tub", price: 39, category: "Cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiPO12Rtx0X4nhX3MvMpqmYoTCI3gy0kTEAC-ebWxkA&s=10" },

  // Milk Shakes
  { id: "vanilla-milkshake", name: "Vanilla Milkshake", price: 49, category: "Milk Shakes", image: img("photo-1553787499-6f9133860278") },
  { id: "strawberry-milkshake", name: "Strawberry Milkshake", price: 49, category: "Milk Shakes", image:"https://images.pexels.com/photos/17518758/pexels-photo-17518758.jpeg" },
  { id: "chocolate-milkshake", name: "Chocolate Milkshake", price: 49, category: "Milk Shakes", image: img("photo-1572490122747-3968b75cc699") },
  { id: "blue-berry-milkshake", name: "Blue Berry Milkshake", price: 59, category: "Milk Shakes", image: "https://images.pexels.com/photos/7463309/pexels-photo-7463309.jpeg" },
  { id: "black-current-milkshake", name: "Black Current Milkshake", price: 59, category: "Milk Shakes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxE52bhg9CpX8RZ2Ke42Pd-S4YAwRmBY6vWx8vjFkyjw&s=10" },

  // Mojito
  { id: "mint-mojito", name: "Mint Mojito", price: 39, category: "Mojito", image: "https://images.pexels.com/photos/32647248/pexels-photo-32647248.jpeg" },
  { id: "blue-mojito", name: "Blue Mojito", price: 39, category: "Mojito", image: "https://images.pexels.com/photos/30839489/pexels-photo-30839489.jpeg" },
  { id: "green-apple-mojito", name: "Green Apple Mojito", price: 49, category: "Mojito", image: "https://images.pexels.com/photos/10484525/pexels-photo-10484525.jpeg" },
  { id: "mint-lime-mojito", name: "Mint & Lime Mojito", price: 49, category: "Mojito", image: "https://images.pexels.com/photos/37662775/pexels-photo-37662775.jpeg" },

  // Ice Creams
  { id: "ice-cream-scoop", name: "Ice Cream (A Scoop)", price: 30, category: "Ice Creams", image: "https://images.pexels.com/photos/37696167/pexels-photo-37696167.jpeg" },
];

export const featured = [
  products.find(p => p.id === "palkova-bun")!,
  products.find(p => p.id === "cheese-chicken-burger")!,
  products.find(p => p.id === "sizzling-brownie")!,
].map(p => ({
  ...p,
  description:
    p.id === "palkova-bun"
      ? "Our signature bun filled with slow-cooked milk sweets — a local legend."
      : p.id === "cheese-chicken-burger"
      ? "Juicy double patty with melting cheddar and secret sauce."
      : "Warm chocolate brownie on a sizzling plate with vanilla scoop.",
}));

export const fastSellers = [
  "chicken-popcorn", "paneer-burger", "schezwan-chicken-momos",
  "chocolate-milkshake", "cheese-french-fries", "white-sauce-pasta",
  "chicken-roll", "blue-mojito", "sizzling-brownie", "butter-bun",
].map(id => products.find(p => p.id === id)!);
