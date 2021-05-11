
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Product').del()
    .then(function () {
      // Inserts seed entries
      return knex('Product').insert([
        {
          "product_name_2": "Golden-Delicious",
          "id_category": 1,
          "product_name": "Apple",
          "price": 3.50,
          
          "iconic": "/iconic-images-and-descriptions/Fruit/Apple/Golden-Delicious/Golden-Delicious_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Apple/Golden-Delicious/Golden-Delicious_Description.txt"
        },
        {
          "product_name_2": "Granny-Smith",
          "id_category": 1,
          "product_name": "Apple",
          "iconic": "/iconic-images-and-descriptions/Fruit/Apple/Granny-Smith/Granny-Smith_Iconic.jpg",
          "price": 3.50,
          "description": "/iconic-images-and-descriptions/Fruit/Apple/Granny-Smith/Granny-Smith_Description.txt"
        },
        {
          "product_name_2": "Pink-Lady",
          "id_category": 1,
          "product_name": "Apple",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Apple/Pink-Lady/Pink-Lady_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Apple/Pink-Lady/Pink-Lady_Description.txt"
        },
        {
          "product_name_2": "Red-Delicious",
          "id_category": 1,
          "product_name": "Apple",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Apple/Red-Delicious/Red-Delicious_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Apple/Red-Delicious/Red-Delicious_Description.txt"
        },
        {
          "product_name_2": "Royal-Gala",
          "id_category": 1,
          "product_name": "Apple",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Apple/Royal-Gala/Royal-Gala_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Apple/Royal-Gala/Royal-Gala_Description.txt"
        },
        {
          "product_name_2": "Avocado",
          "id_category": 1,
          "product_name": "Avocado",
           
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Avocado/Avocado_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Avocado/Avocado_Description.txt"
        },
        {
          "product_name_2": "Banana",
          "id_category": 1,
          "product_name": "Banana",
           
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Banana/Banana_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Banana/Banana_Description.txt"
        },
        {
          "product_name_2": "Kiwi",
          "id_category": 2,
          "product_name": "Kiwi",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Kiwi/Kiwi_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Kiwi/Kiwi_Description.txt"
        },
        {
          "product_name_2": "Lemon",
          "id_category": 2,
          "product_name": "Lemon",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Lemon/Lemon_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Lemon/Lemon_Description.txt"
        },
        {
          "product_name_2": "Lime",
          "id_category": 1,
          "product_name": "Lime",
          "price": 3.50,
           
          "iconic": "/iconic-images-and-descriptions/Fruit/Lime/Lime_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Lime/Lime_Description.txt"
        },
        {
          "product_name_2": "Mango",
          "id_category": 2,
          "product_name": "Mango",
          "price": 3.50,
           
          "iconic": "/iconic-images-and-descriptions/Fruit/Mango/Mango_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Mango/Mango_Description.txt"
        },
        {
          "product_name_2": "Cantaloupe",
          "id_category": 1, 
          "product_name": "Melon",
          "price": 3.50,
           
          "iconic": "/iconic-images-and-descriptions/Fruit/Melon/Cantaloupe/Cantaloupe_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Melon/Cantaloupe/Cantaloupe_Description.txt"
        },
        {
          "product_name_2": "Galia-Melon",
          "id_category": 1,
          "product_name": "Melon",
          "price": 3.50,
           
          "iconic": "/iconic-images-and-descriptions/Fruit/Melon/Galia-Melon/Galia-Melon_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Melon/Galia-Melon/Galia-Melon_Description.txt"
        },
        {
          "product_name_2": "Honeydew-Melon",
          "id_category": 1,
          "product_name": "Melon",
          "price": 3.50,
           
          "iconic": "/iconic-images-and-descriptions/Fruit/Melon/Honeydew-Melon/Honeydew-Melon_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Melon/Honeydew-Melon/Honeydew-Melon_Description.txt"
        },
        {
          "product_name_2": "Watermelon",
          "id_category": 1,
          "product_name": "Melon",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Melon/Watermelon/Watermelon_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Melon/Watermelon/Watermelon_Description.txt"
        },
        {
          "product_name_2": "Nectarine",
          "id_category": 1,
          "price": 3.50,
          "product_name": "Nectarine",
          "iconic": "/iconic-images-and-descriptions/Fruit/Nectarine/Nectarine_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Nectarine/Nectarine_Description.txt"
        },
        {
          "product_name_2": "Orange",
          "id_category": 1,
          "price": 3.50,
          "product_name": "Orange",
          "iconic": "/iconic-images-and-descriptions/Fruit/Orange/Orange_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Orange/Orange_Description.txt"
        },
        {
          "product_name_2": "Papaya",
          "id_category": 1,
          "product_name": "Papaya",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Papaya/Papaya_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Papaya/Papaya_Description.txt"
        },
        {
          "product_name_2": "Passion-Fruit",
          "id_category": 1,
          "price": 3.50,
          "product_name": "Passion-Fruit",
          "iconic": "/iconic-images-and-descriptions/Fruit/Passion-Fruit/Passion-Fruit_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Passion-Fruit/Passion-Fruit_Description.txt"
        },
        {
          "product_name_2": "Peach",
          "id_category": 1,
          "price": 3.50,
          "product_name": "Peach",
          "iconic": "/iconic-images-and-descriptions/Fruit/Peach/Peach_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Peach/Peach_Description.txt"
        },
        {
          "product_name_2": "Anjou",
          "id_category": 1,
          "product_name": "Pear",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Pear/Anjou/Anjou_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Pear/Anjou/Anjou_Description.txt"
        },
        {
          "product_name_2": "Conference",
          "id_category": 2,
          "product_name": "Pear",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Pear/Conference/Conference_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Pear/Conference/Conference_Description.txt"
        },
        {
          "product_name_2": "Kaiser",
          "id_category": 2,
          "product_name": "Pear",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Pear/Kaiser/Kaiser_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Pear/Kaiser/Kaiser_Description.txt"
        },
        {
          "product_name_2": "Pineapple",
          "id_category": 1,
          "product_name": "Pineapple",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Pineapple/Pineapple_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Pineapple/Pineapple_Description.txt"
        },
        {
          "product_name_2": "Plum",
          "id_category": 2,
          "product_name": "Plum",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Plum/Plum_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Plum/Plum_Description.txt"
        },
        {
          "product_name_2": "Pomegranate",
          "id_category": 1,
          "product_name": "Pomegranate",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Pomegranate/Pomegranate_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Pomegranate/Pomegranate_Description.txt"
        },
        {
          "product_name_2": "Red-Grapefruit",
          "id_category": 1,
          "product_name": "Red-Grapefruit",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Red-Grapefruit/Red-Grapefruit_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Red-Grapefruit/Red-Grapefruit_Description.txt"
        },
        {
          "product_name_2": "Satsumas",
          "id_category": 1,
          "product_name": "Satsumas",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Fruit/Satsumas/Satsumas_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Fruit/Satsumas/Satsumas_Description.txt"
        },
        {
          "product_name_2": "Bravo-Apple-Juice",
          "id_category": 1,
          "product_name": "Juice",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Juice/Bravo-Apple-Juice/Bravo-Apple-Juice_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Juice/Bravo-Apple-Juice/Bravo-Apple-Juice_Description.txt"
        },
        {
          "product_name_2": "Bravo-Orange-Juice",
          "id_category": 2,
          "product_name": "Juice",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Juice/Bravo-Orange-Juice/Bravo-Orange-Juice_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Juice/Bravo-Orange-Juice/Bravo-Orange-Juice_Description.txt"
        },
        {
          "product_name_2": "God-Morgon-Apple-Juice",
          "id_category": 1,
          "product_name": "Juice",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Juice/God-Morgon-Apple-Juice/God-Morgon-Apple-Juice_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Juice/God-Morgon-Apple-Juice/God-Morgon-Apple-Juice_Description.txt"
        },
        {
          "product_name_2": "God-Morgon-Orange-Juice",
          "id_category": 1,
          "product_name": "Juice",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Juice/God-Morgon-Orange-Juice/God-Morgon-Orange-Juice_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Juice/God-Morgon-Orange-Juice/God-Morgon-Orange-Juice_Description.txt"
        },
        {
          "product_name_2": "God-Morgon-Orange-Red-Grapefruit-Juice",
          "id_category": 1,
          "product_name": "Juice",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Juice/God-Morgon-Orange-Red-Grapefruit-Juice/God-Morgon-Orange-Red-Grapefruit-Juice_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Juice/God-Morgon-Orange-Red-Grapefruit-Juice/God-Morgon-Orange-Red-Grapefruit-Juice_Description.txt"
        },
        {
          "product_name_2": "God-Morgon-Red-Grapefruit-Juice",
          "id_category": 1,
          "product_name": "Juice",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Juice/God-Morgon-Red-Grapefruit-Juice/God-Morgon-Red-Grapefruit-Juice_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Juice/God-Morgon-Red-Grapefruit-Juice/God-Morgon-Red-Grapefruit-Juice_Description.txt"
        },
        {
          "product_name_2": "Tropicana-Apple-Juice",
          "id_category":  1,
          "product_name": "Juice",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Juice/Tropicana-Apple-Juice/Tropicana-Apple-Juice_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Juice/Tropicana-Apple-Juice/Tropicana-Apple-Juice_Description.txt"
        },
        {
          "product_name_2": "Tropicana-Golden-Grapefruit",
          "id_category": 1,
          "product_name": "Juice",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Juice/Tropicana-Golden-Grapefruit/Tropicana-Golden-Grapefruit_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Juice/Tropicana-Golden-Grapefruit/Tropicana-Golden-Grapefruit_Description.txt"
        },
        {
          "product_name_2": "Tropicana-Juice-Smooth",
          "id_category": 1,
          "product_name": "Juice",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Juice/Tropicana-Juice-Smooth/Tropicana-Juice-Smooth_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Juice/Tropicana-Juice-Smooth/Tropicana-Juice-Smooth_Description.txt"
        },
        {
          "product_name_2": "Tropicana-Mandarin-Morning",
          "id_category": 2,
          "product_name": "Juice",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Juice/Tropicana-Mandarin-Morning/Tropicana-Mandarin-Morning_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Juice/Tropicana-Mandarin-Morning/Tropicana-Mandarin-Morning_Description.txt"
        },
        {
          "product_name_2": "Arla-Ecological-Medium-Fat-Milk",
          "id_category": 2,
          "product_name": "Milk",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Milk/Arla-Ecological-Medium-Fat-Milk/Arla-Ecological-Medium-Fat-Milk_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Milk/Arla-Ecological-Medium-Fat-Milk/Arla-Ecological-Medium-Fat-Milk_Description.txt"
        },
        {
          "product_name_2": "Arla-Lactose-Medium-Fat-Milk",
          "id_category": 2,
          "product_name": "Milk",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Milk/Arla-Lactose-Medium-Fat-Milk/Arla-Lactose-Medium-Fat-Milk_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Milk/Arla-Lactose-Medium-Fat-Milk/Arla-Lactose-Medium-Fat-Milk_Description.txt"
        },
        {
          "product_name_2": "Arla-Medium-Fat-Milk",
          "id_category": 1,
          "product_name": "Milk",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Milk/Arla-Medium-Fat-Milk/Arla-Medium-Fat-Milk_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Milk/Arla-Medium-Fat-Milk/Arla-Medium-Fat-Milk_Description.txt"
        },
        {
          "product_name_2": "Arla-Standard-Milk",
          "id_category": 2,
          "product_name": "Milk",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Milk/Arla-Standard-Milk/Arla-Standard-Milk_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Milk/Arla-Standard-Milk/Arla-Standard-Milk_Description.txt"
        },
        {
          "product_name_2": "Garant-Ecological-Medium-Fat-Milk",
          "id_category": 2,
          "product_name": "Milk",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Milk/Garant-Ecological-Medium-Fat-Milk/Garant-Ecological-Medium-Fat-Milk_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Milk/Garant-Ecological-Medium-Fat-Milk/Garant-Ecological-Medium-Fat-Milk_Description.txt"
        },
        {
          "product_name_2": "Garant-Ecological-Standard-Milk",
          "id_category": 1,
          "product_name": "Milk",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Milk/Garant-Ecological-Standard-Milk/Garant-Ecological-Standard-Milk_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Milk/Garant-Ecological-Standard-Milk/Garant-Ecological-Standard-Milk_Description.txt"
        },
        {
          "product_name_2": "Oatly-Natural-Oatghurt",
          "id_category": 2,
          "product_name": "Oatghurt",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Oatghurt/Oatly-Natural-Oatghurt/Oatly-Natural-Oatghurt_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Oatghurt/Oatly-Natural-Oatghurt/Oatly-Natural-Oatghurt_Description.txt"
        },
        {
          "product_name_2": "Oatly-Oat-Milk",
          "id_category": 2,
          "product_name": "Oat-Milk",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Oat-Milk/Oatly-Oat-Milk/Oatly-Oat-Milk_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Oat-Milk/Oatly-Oat-Milk/Oatly-Oat-Milk_Description.txt"
        },
        {
          "product_name_2": "Arla-Ecological-Sour-Cream",
          "id_category": 1,
          "product_name": "Sour-Cream",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Sour-Cream/Arla-Ecological-Sour-Cream/Arla-Ecological-Sour-Cream_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Sour-Cream/Arla-Ecological-Sour-Cream/Arla-Ecological-Sour-Cream_Description.txt"
        },
        {
          "product_name_2": "Arla-Sour-Cream",
          "id_category": 1,
          "product_name": "Sour-Cream",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Sour-Cream/Arla-Sour-Cream/Arla-Sour-Cream_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Sour-Cream/Arla-Sour-Cream/Arla-Sour-Cream_Description.txt"
        },
        {
          "product_name_2": "Arla-Sour-Milk",
          "id_category": 2,
          "product_name": "Sour-Milk",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Sour-Milk/Arla-Sour-Milk/Arla-Sour-Milk_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Sour-Milk/Arla-Sour-Milk/Arla-Sour-Milk_Description.txt"
        },
        {
          "product_name_2": "Alpro-Blueberry-Soyghurt",
          "id_category": 2,
          "product_name": "Soyghurt",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Soyghurt/Alpro-Blueberry-Soyghurt/Alpro-Blueberry-Soyghurt_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Soyghurt/Alpro-Blueberry-Soyghurt/Alpro-Blueberry-Soyghurt_Description.txt"
        },
        {
          "product_name_2": "Alpro-Vanilla-Soyghurt",
          "id_category": 1,
          "product_name": "Soyghurt",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Soyghurt/Alpro-Vanilla-Soyghurt/Alpro-Vanilla-Soyghurt_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Soyghurt/Alpro-Vanilla-Soyghurt/Alpro-Vanilla-Soyghurt_Description.txt"
        },
        {
          "product_name_2": "Alpro-Fresh-Soy-Milk",
          "id_category": 1,
          "product_name": "Soy-Milk",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Soy-Milk/Alpro-Fresh-Soy-Milk/Alpro-Fresh-Soy-Milk_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Soy-Milk/Alpro-Fresh-Soy-Milk/Alpro-Fresh-Soy-Milk_Description.txt"
        },
        {
          "product_name_2": "Alpro-Shelf-Soy-Milk",
          "id_category": 1,
          "product_name": "Soy-Milk",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Soy-Milk/Alpro-Shelf-Soy-Milk/Alpro-Shelf-Soy-Milk_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Soy-Milk/Alpro-Shelf-Soy-Milk/Alpro-Shelf-Soy-Milk_Description.txt"
        },
        {
          "product_name_2": "Arla-Mild-Vanilla-Yoghurt",
          "id_category": 1,
          "product_name": "Yoghurt",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Yoghurt/Arla-Mild-Vanilla-Yoghurt/Arla-Mild-Vanilla-Yoghurt_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Yoghurt/Arla-Mild-Vanilla-Yoghurt/Arla-Mild-Vanilla-Yoghurt_Description.txt"
        },
        {
          "product_name_2": "Arla-Natural-Mild-Low-Fat-Yoghurt",
          "id_category": 1,
          "product_name": "Yoghurt",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Yoghurt/Arla-Natural-Mild-Low-Fat-Yoghurt/Arla-Natural-Mild-Low-Fat-Yoghurt_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Yoghurt/Arla-Natural-Mild-Low-Fat-Yoghurt/Arla-Natural-Mild-Low-Fat-Yoghurt_Description.txt"
        },
        {
          "product_name_2": "Arla-Natural-Yoghurt",
          "id_category": 1,
          "product_name": "Yoghurt",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Yoghurt/Arla-Natural-Yoghurt/Arla-Natural-Yoghurt_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Yoghurt/Arla-Natural-Yoghurt/Arla-Natural-Yoghurt_Description.txt"
        },
        {
          "product_name_2": "Valio-Vanilla-Yoghurt",
          "id_category": 1,
          "product_name": "Yoghurt",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Yoghurt/Valio-Vanilla-Yoghurt/Valio-Vanilla-Yoghurt_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Yoghurt/Valio-Vanilla-Yoghurt/Valio-Vanilla-Yoghurt_Description.txt"
        },
        {
          "product_name_2": "Yoggi-Strawberry-Yoghurt",
          "id_category": 1,
          "product_name": "Yoghurt",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Yoghurt/Yoggi-Strawberry-Yoghurt/Yoggi-Strawberry-Yoghurt_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Yoghurt/Yoggi-Strawberry-Yoghurt/Yoggi-Strawberry-Yoghurt_Description.txt"
        },
        {
          "product_name_2": "Yoggi-Vanilla-Yoghurt",
          "id_category": 1,
          "product_name": "Yoghurt",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Packages/Yoghurt/Yoggi-Vanilla-Yoghurt/Yoggi-Vanilla-Yoghurt_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Packages/Yoghurt/Yoggi-Vanilla-Yoghurt/Yoggi-Vanilla-Yoghurt_Description.txt"
        },
        {
          "product_name_2": "Asparagus",
          "id_category": 1,
          "product_name": "Asparagus",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Asparagus/Asparagus_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Asparagus/Asparagus_Description.txt"
        },
        {
          "product_name_2": "Aubergine",
          "id_category": 1,
          "product_name": "Aubergine",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Aubergine/Aubergine_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Aubergine/Aubergine_Description.txt"
        },
        {
          "product_name_2": "Cabbage",
          "id_category": 1,
          "product_name": "Cabbage",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Cabbage/Cabbage_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Cabbage/Cabbage_Description.txt"
        },
        {
          "product_name_2": "Carrots",
          "id_category": 1,
          "product_name": "Carrots",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Carrots/Carrots_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Carrots/Carrots_Description.txt"
        },
        {
          "product_name_2": "Cucumber",
          "id_category": 1,
          "product_name": "Cucumber",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Cucumber/Cucumber_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Cucumber/Cucumber_Description.txt"
        },
        {
          "product_name_2": "Garlic",
          "id_category": 1,
          "product_name": "Garlic",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Garlic/Garlic_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Garlic/Garlic_Description.txt"
        },
        {
          "product_name_2": "Ginger",
          "id_category": 2,
          "product_name": "Ginger",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Ginger/Ginger_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Ginger/Ginger_Description.txt"
        },
        {
          "product_name_2": "Leek",
          "id_category": 1,
          "product_name": "Leek",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Leek/Leek_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Leek/Leek_Description.txt"
        },
        {
          "product_name_2": "Brown-Cap-Mushroom",
          "id_category": 2,
          "product_name": "Mushroom",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Mushroom/Brown-Cap-Mushroom/Brown-Cap-Mushroom_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Mushroom/Brown-Cap-Mushroom/Brown-Cap-Mushroom_Description.txt"
        },
        {
          "product_name_2": "Yellow-Onion",
          "id_category": 1,
          "product_name": "Onion",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Onion/Yellow-Onion/Yellow-Onion_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Onion/Yellow-Onion/Yellow-Onion_Description.txt"
        },
        {
          "product_name_2": "Green-Bell-Pepper",
          "id_category": 1,
          "product_name": "Pepper",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Pepper/Green-Bell-Pepper/Green-Bell-Pepper_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Pepper/Green-Bell-Pepper/Green-Bell-Pepper_Description.txt"
        },
        {
          "product_name_2": "Orange-Bell-Pepper",
          "id_category": 1,
          "product_name": "Pepper",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Pepper/Orange-Bell-Pepper/Orange-Bell-Pepper_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Pepper/Orange-Bell-Pepper/Orange-Bell-Pepper_Description.txt"
        },
        {
          "product_name_2": "Red-Bell-Pepper",
          "id_category": 1,
          "product_name": "Pepper",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Pepper/Red-Bell-Pepper/Red-Bell-Pepper_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Pepper/Red-Bell-Pepper/Red-Bell-Pepper_Description.txt"
        },
        {
          "product_name_2": "Yellow-Bell-Pepper",
          "id_category": 2,
          "product_name": "Pepper",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Pepper/Yellow-Bell-Pepper/Yellow-Bell-Pepper_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Pepper/Yellow-Bell-Pepper/Yellow-Bell-Pepper_Description.txt"
        },
        {
          "product_name_2": "Floury-Potato",
          "id_category": 2,
          "product_name": "Potato",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Potato/Floury-Potato/Floury-Potato_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Potato/Floury-Potato/Floury-Potato_Description.txt"
        },
        {
          "product_name_2": "Solid-Potato",
          "id_category": 1,
          "product_name": "Potato",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Potato/Solid-Potato/Solid-Potato_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Potato/Solid-Potato/Solid-Potato_Description.txt"
        },
        {
          "product_name_2": "Sweet-Potato",
          "id_category": 1,
          "product_name": "Potato",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Potato/Sweet-Potato/Sweet-Potato_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Potato/Sweet-Potato/Sweet-Potato_Description.txt"
        },
        {
          "product_name_2": "Red-Beet",
          "id_category": 1,
          "product_name": "Red-Beet",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Red-Beet/Red-Beet_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Red-Beet/Red-Beet_Description.txt"
        },
        {
          "product_name_2": "Beef-Tomato",
          "id_category": 2,
          "product_name": "Tomato",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Tomato/Beef-Tomato/Beef-Tomato_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Tomato/Beef-Tomato/Beef-Tomato_Description.txt"
        },
        {
          "product_name_2": "Regular-Tomato",
          "id_category": 1,
          "product_name": "Tomato",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Tomato/Regular-Tomato/Regular-Tomato_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Tomato/Regular-Tomato/Regular-Tomato_Description.txt"
        },
        {
          "product_name_2": "Vine-Tomato",
          "id_category": 2,
          "product_name": "Tomato",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Tomato/Vine-Tomato/Vine-Tomato_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Tomato/Vine-Tomato/Vine-Tomato_Description.txt"
        },
        {
          "product_name_2": "Zucchini",
          "id_category": 1,
          "product_name": "Zucchini",
          "price": 3.50,
          "iconic": "/iconic-images-and-descriptions/Vegetables/Zucchini/Zucchini_Iconic.jpg",
          "description": "/iconic-images-and-descriptions/Vegetables/Zucchini/Zucchini_Description.txt"
        }
      ]);
    });
};
