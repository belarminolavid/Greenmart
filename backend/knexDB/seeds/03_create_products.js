
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
        }
      ]);
    });
};
