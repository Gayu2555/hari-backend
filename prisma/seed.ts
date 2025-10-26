// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const recipeData = [
  // BREAKFAST RECIPES
  {
    recipeId: 1,
    recipeCategory: 'Breakfast',
    recipeName: 'Avocado Toast',
    recipeImage:
      'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 5.0,
    cookTime: 5.0,
    recipeServing: 2,
    recipeMethod:
      'In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork. Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.',
    recipeReview: 45,
    isPopular: true,
    ingredients: {
      create: [
        { name: '1/2 small avocado', order: 1 },
        { name: '1/2 teaspoon fresh lemon juice', order: 2 },
        { name: 'salt', order: 3 },
        { name: 'black pepper', order: 4 },
        { name: '1 slice bread', order: 5 },
        { name: 'olive oil', order: 6 },
      ],
    },
  },
  {
    recipeId: 2,
    recipeCategory: 'Breakfast',
    recipeName: 'Green Smoothie',
    recipeImage:
      'https://images.pexels.com/photos/5366704/pexels-photo-5366704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 5.0,
    cookTime: 0.0,
    recipeServing: 2,
    recipeMethod:
      'In a blender, add ingredients in the order they are listed. Purée ingredients until smooth. Add more coconut water if consistency is too thick.',
    recipeReview: 25,
    isPopular: false,
    ingredients: {
      create: [
        { name: '1/2 cup coconut water', order: 1 },
        { name: '1 banana', order: 2 },
        { name: '2 cups spinach', order: 3 },
        { name: '1 cup frozen mango', order: 4 },
      ],
    },
  },
  {
    recipeId: 3,
    recipeCategory: 'Breakfast',
    recipeName: 'Breakfast Burritos',
    recipeImage:
      'https://images.pexels.com/photos/5848051/pexels-photo-5848051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 15.0,
    cookTime: 20.0,
    recipeServing: 8,
    recipeMethod:
      'Heat oil and cook potatoes over medium high heat until golden. In large bowl, beat eggs, green chiles, salt and pepper. Cook sausage 2-3 minutes until browned. Add egg mixture and scramble. Warm tortillas and fill with potato, egg mixture, and cheese.',
    recipeReview: 155,
    isPopular: true,
    ingredients: {
      create: [
        { name: '3 tbsp vegetable oil', order: 1 },
        { name: '4 cups frozen hash brown potatoes', order: 2 },
        { name: '8 eggs', order: 3 },
        { name: '1 can chopped green chillies', order: 4 },
        { name: 'salt', order: 5 },
        { name: 'pepper', order: 6 },
        { name: '6 sausages', order: 7 },
        { name: '8 tortillas', order: 8 },
        { name: '1 cup shredded cheese', order: 9 },
      ],
    },
  },
  {
    recipeId: 4,
    recipeCategory: 'Breakfast',
    recipeName: 'Classic Omelette',
    recipeImage:
      'https://images.pexels.com/photos/6294248/pexels-photo-6294248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 2.0,
    cookTime: 4.0,
    recipeServing: 1,
    recipeMethod:
      'Whisk eggs, water, salt and pepper. Heat butter in pan over medium heat. Pour in eggs and cook until almost set. Add filling to half, fold over and serve immediately.',
    recipeReview: 65,
    isPopular: false,
    ingredients: {
      create: [
        { name: '2 eggs', order: 1 },
        { name: '2 tbsp water', order: 2 },
        { name: 'salt', order: 3 },
        { name: 'black pepper', order: 4 },
        { name: '1 tbsp butter', order: 5 },
      ],
    },
  },
  {
    recipeId: 5,
    recipeCategory: 'Breakfast',
    recipeName: 'Tropical Smoothie Bowl',
    recipeImage:
      'https://images.unsplash.com/photo-1534352436920-f658b50b73fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80',
    prepTime: 5.0,
    cookTime: 0.0,
    recipeServing: 2,
    recipeMethod:
      'In blender, pulse banana, mango, and pineapple with almond milk until smooth but still thick. Pour into bowl and top with granola, coconut flakes, and fresh fruit.',
    recipeReview: 145,
    isPopular: true,
    ingredients: {
      create: [
        { name: '1 banana, sliced and frozen', order: 1 },
        { name: '1 cup frozen mango chunks', order: 2 },
        { name: '1 cup frozen pineapple chunks', order: 3 },
        { name: '1 cup almond milk', order: 4 },
        { name: '1/4 cup granola', order: 5 },
        { name: '2 tbsp coconut flakes', order: 6 },
      ],
    },
  },
  {
    recipeId: 6,
    recipeCategory: 'Breakfast',
    recipeName: 'Pancakes',
    recipeImage:
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10.0,
    cookTime: 15.0,
    recipeServing: 4,
    recipeMethod:
      'Mix flour, sugar, baking powder and salt. In another bowl, whisk milk, egg and melted butter. Combine wet and dry ingredients. Pour 1/4 cup batter onto hot griddle. Cook until bubbles form, flip and cook until golden.',
    recipeReview: 230,
    isPopular: true,
    ingredients: {
      create: [
        { name: '1 1/2 cups all-purpose flour', order: 1 },
        { name: '2 tbsp sugar', order: 2 },
        { name: '2 tsp baking powder', order: 3 },
        { name: '1/2 tsp salt', order: 4 },
        { name: '1 1/4 cups milk', order: 5 },
        { name: '1 egg', order: 6 },
        { name: '3 tbsp melted butter', order: 7 },
      ],
    },
  },
  {
    recipeId: 7,
    recipeCategory: 'Breakfast',
    recipeName: 'French Toast',
    recipeImage:
      'https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 5.0,
    cookTime: 10.0,
    recipeServing: 4,
    recipeMethod:
      'Whisk together eggs, milk, vanilla, cinnamon and salt. Dip bread slices in mixture. Cook on buttered griddle until golden brown on both sides. Serve with maple syrup and berries.',
    recipeReview: 178,
    isPopular: true,
    ingredients: {
      create: [
        { name: '4 eggs', order: 1 },
        { name: '1/2 cup milk', order: 2 },
        { name: '1 tsp vanilla extract', order: 3 },
        { name: '1 tsp cinnamon', order: 4 },
        { name: 'pinch of salt', order: 5 },
        { name: '8 slices bread', order: 6 },
        { name: 'butter for cooking', order: 7 },
        { name: 'maple syrup', order: 8 },
      ],
    },
  },

  // LUNCH RECIPES
  {
    recipeId: 8,
    recipeCategory: 'Lunch',
    recipeName: 'Microwave Omelette',
    recipeImage:
      'https://images.unsplash.com/photo-1588580261949-f17eacb905c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    prepTime: 5.0,
    cookTime: 3.0,
    recipeServing: 1,
    recipeMethod:
      "Combine all ingredients in a microwaveable mug. Cook for 2-3 minutes, making sure the egg doesn't bubble over. Stir halfway through the cooking process.",
    recipeReview: 15,
    isPopular: false,
    ingredients: {
      create: [
        { name: '2 eggs', order: 1 },
        { name: '1/2 bell pepper', order: 2 },
        { name: '2 slices ham', order: 3 },
        { name: '1/4 cup Spinach', order: 4 },
        { name: 'salt', order: 5 },
        { name: 'pepper', order: 6 },
      ],
    },
  },
  {
    recipeId: 9,
    recipeCategory: 'Lunch',
    recipeName: 'Mediterranean Tostadas',
    recipeImage:
      'https://images.unsplash.com/photo-1619019187992-b2569e321752?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
    prepTime: 15.0,
    cookTime: 10.0,
    recipeServing: 2,
    recipeMethod:
      'Prepare the salad by combining cucumbers, tomatoes, olives, shallots and parsley. Whisk together olive oil, lemon juice, salt and pepper for dressing. Toast tortillas until crispy. Spread hummus on tortillas and top with salad.',
    recipeReview: 45,
    isPopular: false,
    ingredients: {
      create: [
        { name: '1 1/2 cups chopped cucumber', order: 1 },
        { name: '1 cup chopped cherry tomatoes', order: 2 },
        { name: '1/2 cup chopped green olives', order: 3 },
        { name: '1/4 cup diced shallot', order: 4 },
        { name: '1/4 cup chopped parsley', order: 5 },
        { name: '1 tbsp olive oil', order: 6 },
        { name: 'lemon juice', order: 7 },
        { name: 'salt', order: 8 },
        { name: 'pepper', order: 9 },
        { name: '4 tortillas', order: 10 },
        { name: '1/2 cup hummus', order: 11 },
      ],
    },
  },
  {
    recipeId: 10,
    recipeCategory: 'Lunch',
    recipeName: 'Naan Pizza',
    recipeImage:
      'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    prepTime: 5.0,
    cookTime: 10.0,
    recipeServing: 2,
    recipeMethod:
      'Place naans on baking sheet. Spread tomato sauce, sprinkle garlic powder and Italian seasoning. Add mozzarella slices and basil. Bake at 400°F for 8-10 minutes. Drizzle with olive oil before serving.',
    recipeReview: 82,
    isPopular: true,
    ingredients: {
      create: [
        { name: '2 naans', order: 1 },
        { name: '1/2 cup tomato sauce', order: 2 },
        { name: '1 tsp garlic powder', order: 3 },
        { name: '1 tsp Italian seasoning', order: 4 },
        { name: '8 slices fresh mozzarella', order: 5 },
        { name: 'Fresh basil leaves', order: 6 },
        { name: 'salt', order: 7 },
        { name: 'pepper', order: 8 },
        { name: '1 tbsp olive oil', order: 9 },
      ],
    },
  },
  {
    recipeId: 11,
    recipeCategory: 'Lunch',
    recipeName: 'Classic Tuna Salad',
    recipeImage:
      'https://images.unsplash.com/photo-1604497181015-76590d828b75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1742&q=80',
    prepTime: 10.0,
    cookTime: 0.0,
    recipeServing: 4,
    recipeMethod:
      'Place drained tuna in a medium bowl. Add mayonnaise, relish, red onion, celery, salt and pepper. Stir with a fork until well combined. Serve on bread, crackers, or over lettuce.',
    recipeReview: 68,
    isPopular: false,
    ingredients: {
      create: [
        { name: '2 cans tuna in water', order: 1 },
        { name: '1/4 cup mayonnaise', order: 2 },
        { name: '2 tbsp relish', order: 3 },
        { name: '2 tbsp diced red onion', order: 4 },
        { name: '1 stalk celery, diced', order: 5 },
        { name: 'salt', order: 6 },
        { name: 'pepper', order: 7 },
      ],
    },
  },
  {
    recipeId: 12,
    recipeCategory: 'Lunch',
    recipeName: 'Chicken Almond Salad',
    recipeImage:
      'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    prepTime: 10.0,
    cookTime: 5.0,
    recipeServing: 2,
    recipeMethod:
      'Toast almonds in frying pan over medium heat until golden. In bowl, mix mayonnaise, lemon juice, salt and pepper. Add shredded chicken, toasted almonds, and diced celery. Toss until well combined.',
    recipeReview: 27,
    isPopular: false,
    ingredients: {
      create: [
        { name: '1/2 cup mayonnaise', order: 1 },
        { name: '1 tbsp lemon juice', order: 2 },
        { name: 'salt', order: 3 },
        { name: 'black pepper', order: 4 },
        { name: '2 cups shredded chicken', order: 5 },
        { name: '1 stalk celery, diced', order: 6 },
        { name: '1/2 cup sliced almonds', order: 7 },
      ],
    },
  },
  {
    recipeId: 13,
    recipeCategory: 'Lunch',
    recipeName: 'Caesar Salad Wrap',
    recipeImage:
      'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10.0,
    cookTime: 0.0,
    recipeServing: 2,
    recipeMethod:
      'Toss romaine lettuce with Caesar dressing and parmesan. Add grilled chicken if desired. Lay mixture on tortilla, sprinkle with croutons, wrap tightly and cut in half.',
    recipeReview: 93,
    isPopular: true,
    ingredients: {
      create: [
        { name: '4 cups romaine lettuce', order: 1 },
        { name: '1/4 cup Caesar dressing', order: 2 },
        { name: '1/4 cup parmesan cheese', order: 3 },
        { name: '1 cup grilled chicken', order: 4 },
        { name: '1/2 cup croutons', order: 5 },
        { name: '2 large tortillas', order: 6 },
      ],
    },
  },
  {
    recipeId: 14,
    recipeCategory: 'Lunch',
    recipeName: 'Caprese Sandwich',
    recipeImage:
      'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 5.0,
    cookTime: 0.0,
    recipeServing: 1,
    recipeMethod:
      'Slice ciabatta bread and drizzle with balsamic glaze. Layer with fresh mozzarella, tomato slices, and basil leaves. Drizzle with olive oil, season with salt and pepper. Top with second slice of bread.',
    recipeReview: 112,
    isPopular: true,
    ingredients: {
      create: [
        { name: '1 ciabatta roll', order: 1 },
        { name: '4 oz fresh mozzarella', order: 2 },
        { name: '1 large tomato', order: 3 },
        { name: 'fresh basil leaves', order: 4 },
        { name: '1 tbsp balsamic glaze', order: 5 },
        { name: '1 tbsp olive oil', order: 6 },
        { name: 'salt', order: 7 },
        { name: 'pepper', order: 8 },
      ],
    },
  },

  // DINNER RECIPES
  {
    recipeId: 15,
    recipeCategory: 'Dinner',
    recipeName: 'Spaghetti Carbonara',
    recipeImage:
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10.0,
    cookTime: 20.0,
    recipeServing: 4,
    recipeMethod:
      'Cook spaghetti according to package. Fry bacon until crispy. Whisk eggs with parmesan. Toss hot pasta with bacon, then remove from heat and quickly mix in egg mixture. Season with black pepper.',
    recipeReview: 267,
    isPopular: true,
    ingredients: {
      create: [
        { name: '1 lb spaghetti', order: 1 },
        { name: '8 oz bacon, diced', order: 2 },
        { name: '3 eggs', order: 3 },
        { name: '1 cup grated parmesan', order: 4 },
        { name: 'black pepper', order: 5 },
        { name: 'salt', order: 6 },
      ],
    },
  },
  {
    recipeId: 16,
    recipeCategory: 'Dinner',
    recipeName: 'Chicken Stir Fry',
    recipeImage:
      'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 15.0,
    cookTime: 15.0,
    recipeServing: 4,
    recipeMethod:
      'Cut chicken into bite-sized pieces. Heat oil in wok, cook chicken until browned. Add vegetables and stir-fry for 5 minutes. Mix soy sauce, garlic, ginger and cornstarch. Pour over chicken and vegetables, cook until sauce thickens.',
    recipeReview: 198,
    isPopular: true,
    ingredients: {
      create: [
        { name: '1 lb chicken breast', order: 1 },
        { name: '2 cups mixed vegetables', order: 2 },
        { name: '3 tbsp soy sauce', order: 3 },
        { name: '2 cloves garlic, minced', order: 4 },
        { name: '1 tbsp fresh ginger', order: 5 },
        { name: '1 tbsp cornstarch', order: 6 },
        { name: '2 tbsp vegetable oil', order: 7 },
      ],
    },
  },
  {
    recipeId: 17,
    recipeCategory: 'Dinner',
    recipeName: 'Beef Tacos',
    recipeImage:
      'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10.0,
    cookTime: 15.0,
    recipeServing: 6,
    recipeMethod:
      'Brown ground beef in skillet. Add taco seasoning and water, simmer. Warm taco shells. Fill shells with beef, lettuce, tomato, cheese, and sour cream.',
    recipeReview: 341,
    isPopular: true,
    ingredients: {
      create: [
        { name: '1 lb ground beef', order: 1 },
        { name: '1 packet taco seasoning', order: 2 },
        { name: '12 taco shells', order: 3 },
        { name: '2 cups shredded lettuce', order: 4 },
        { name: '2 tomatoes, diced', order: 5 },
        { name: '1 cup shredded cheese', order: 6 },
        { name: '1/2 cup sour cream', order: 7 },
      ],
    },
  },
  {
    recipeId: 18,
    recipeCategory: 'Dinner',
    recipeName: 'Grilled Salmon',
    recipeImage:
      'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10.0,
    cookTime: 15.0,
    recipeServing: 4,
    recipeMethod:
      'Mix olive oil, lemon juice, garlic, dill, salt and pepper. Brush over salmon fillets. Grill salmon skin-side down for 6-8 minutes per side until cooked through. Serve with lemon wedges.',
    recipeReview: 215,
    isPopular: true,
    ingredients: {
      create: [
        { name: '4 salmon fillets', order: 1 },
        { name: '2 tbsp olive oil', order: 2 },
        { name: '2 tbsp lemon juice', order: 3 },
        { name: '2 cloves garlic, minced', order: 4 },
        { name: '1 tsp dried dill', order: 5 },
        { name: 'salt', order: 6 },
        { name: 'pepper', order: 7 },
      ],
    },
  },
  {
    recipeId: 19,
    recipeCategory: 'Dinner',
    recipeName: 'Vegetable Curry',
    recipeImage:
      'https://images.pexels.com/photos/4197439/pexels-photo-4197439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 15.0,
    cookTime: 30.0,
    recipeServing: 6,
    recipeMethod:
      'Sauté onions and garlic in oil. Add curry powder, cook 1 minute. Add vegetables and coconut milk. Simmer 20 minutes until vegetables are tender. Season with salt. Serve over rice.',
    recipeReview: 156,
    isPopular: false,
    ingredients: {
      create: [
        { name: '2 tbsp vegetable oil', order: 1 },
        { name: '1 onion, diced', order: 2 },
        { name: '3 cloves garlic, minced', order: 3 },
        { name: '2 tbsp curry powder', order: 4 },
        { name: '4 cups mixed vegetables', order: 5 },
        { name: '1 can coconut milk', order: 6 },
        { name: 'salt', order: 7 },
        { name: 'cooked rice for serving', order: 8 },
      ],
    },
  },
  {
    recipeId: 20,
    recipeCategory: 'Dinner',
    recipeName: 'Baked Chicken Parmesan',
    recipeImage:
      'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 15.0,
    cookTime: 30.0,
    recipeServing: 4,
    recipeMethod:
      'Coat chicken in flour, egg, then breadcrumb-parmesan mixture. Bake at 400°F for 20 minutes. Top with marinara sauce and mozzarella. Bake 10 more minutes until cheese melts. Serve with pasta.',
    recipeReview: 289,
    isPopular: true,
    ingredients: {
      create: [
        { name: '4 chicken breasts', order: 1 },
        { name: '1/2 cup flour', order: 2 },
        { name: '2 eggs, beaten', order: 3 },
        { name: '1 cup breadcrumbs', order: 4 },
        { name: '1/2 cup grated parmesan', order: 5 },
        { name: '2 cups marinara sauce', order: 6 },
        { name: '1 cup shredded mozzarella', order: 7 },
      ],
    },
  },

  // SNACKS & APPETIZERS
  {
    recipeId: 21,
    recipeCategory: 'Snacks',
    recipeName: 'Guacamole',
    recipeImage:
      'https://images.pexels.com/photos/2792186/pexels-photo-2792186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10.0,
    cookTime: 0.0,
    recipeServing: 4,
    recipeMethod:
      'Mash avocados with fork, leaving some chunks. Mix in lime juice, onion, tomato, cilantro, jalapeño, salt and pepper. Taste and adjust seasoning. Serve immediately with tortilla chips.',
    recipeReview: 124,
    isPopular: true,
    ingredients: {
      create: [
        { name: '3 ripe avocados', order: 1 },
        { name: '2 tbsp lime juice', order: 2 },
        { name: '1/4 cup diced onion', order: 3 },
        { name: '1 tomato, diced', order: 4 },
        { name: '2 tbsp chopped cilantro', order: 5 },
        { name: '1 jalapeño, minced', order: 6 },
        { name: 'salt', order: 7 },
      ],
    },
  },
  {
    recipeId: 22,
    recipeCategory: 'Snacks',
    recipeName: 'Bruschetta',
    recipeImage:
      'https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 15.0,
    cookTime: 5.0,
    recipeServing: 8,
    recipeMethod:
      'Slice baguette and brush with olive oil. Toast until golden. Mix tomatoes, basil, garlic, balsamic vinegar, salt and pepper. Top toasted bread with tomato mixture just before serving.',
    recipeReview: 187,
    isPopular: true,
    ingredients: {
      create: [
        { name: '1 baguette, sliced', order: 1 },
        { name: '3 tbsp olive oil', order: 2 },
        { name: '4 tomatoes, diced', order: 3 },
        { name: '1/4 cup fresh basil', order: 4 },
        { name: '2 cloves garlic, minced', order: 5 },
        { name: '1 tbsp balsamic vinegar', order: 6 },
        { name: 'salt', order: 7 },
        { name: 'pepper', order: 8 },
      ],
    },
  },
  {
    recipeId: 23,
    recipeCategory: 'Snacks',
    recipeName: 'Hummus',
    recipeImage:
      'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10.0,
    cookTime: 0.0,
    recipeServing: 6,
    recipeMethod:
      'Blend chickpeas, tahini, lemon juice, garlic, cumin, salt and olive oil in food processor until smooth. Add water to reach desired consistency. Drizzle with olive oil and paprika before serving.',
    recipeReview: 98,
    isPopular: false,
    ingredients: {
      create: [
        { name: '1 can chickpeas, drained', order: 1 },
        { name: '1/4 cup tahini', order: 2 },
        { name: '3 tbsp lemon juice', order: 3 },
        { name: '2 cloves garlic', order: 4 },
        { name: '1 tsp cumin', order: 5 },
        { name: '1/4 cup olive oil', order: 6 },
        { name: 'salt', order: 7 },
        { name: 'paprika', order: 8 },
      ],
    },
  },
  {
    recipeId: 24,
    recipeCategory: 'Snacks',
    recipeName: 'Buffalo Wings',
    recipeImage:
      'https://images.pexels.com/photos/4676409/pexels-photo-4676409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10.0,
    cookTime: 45.0,
    recipeServing: 6,
    recipeMethod:
      'Pat chicken wings dry. Season with salt and pepper. Bake at 400°F for 40-45 minutes until crispy. Toss with buffalo sauce mixture. Serve with ranch or blue cheese dressing.',
    recipeReview: 234,
    isPopular: true,
    ingredients: {
      create: [
        { name: '2 lbs chicken wings', order: 1 },
        { name: '1/2 cup hot sauce', order: 2 },
        { name: '4 tbsp melted butter', order: 3 },
        { name: '1 tsp garlic powder', order: 4 },
        { name: 'salt', order: 5 },
        { name: 'pepper', order: 6 },
        { name: 'ranch dressing', order: 7 },
      ],
    },
  },
  {
    recipeId: 25,
    recipeCategory: 'Snacks',
    recipeName: 'Spinach Artichoke Dip',
    recipeImage:
      'https://images.pexels.com/photos/6941002/pexels-photo-6941002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10.0,
    cookTime: 25.0,
    recipeServing: 8,
    recipeMethod:
      'Mix cream cheese, sour cream, mayo, garlic, parmesan. Fold in spinach and artichokes. Transfer to baking dish, top with mozzarella. Bake at 350°F for 25 minutes until bubbly.',
    recipeReview: 176,
    isPopular: true,
    ingredients: {
      create: [
        { name: '8 oz cream cheese', order: 1 },
        { name: '1/2 cup sour cream', order: 2 },
        { name: '1/4 cup mayonnaise', order: 3 },
        { name: '2 cloves garlic, minced', order: 4 },
        { name: '1/2 cup parmesan', order: 5 },
        { name: '1 cup frozen spinach, thawed', order: 6 },
        { name: '1 can artichoke hearts', order: 7 },
        { name: '1 cup mozzarella', order: 8 },
      ],
    },
  },

  // DESSERTS
  {
    recipeId: 26,
    recipeCategory: 'Dessert',
    recipeName: 'Chocolate Chip Cookies',
    recipeImage:
      'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 15.0,
    cookTime: 12.0,
    recipeServing: 24,
    recipeMethod:
      'Cream butter and sugars. Beat in eggs and vanilla. Mix in flour, baking soda, salt. Fold in chocolate chips. Drop spoonfuls on baking sheet. Bake at 375°F for 10-12 minutes.',
    recipeReview: 456,
    isPopular: true,
    ingredients: {
      create: [
        { name: '1 cup butter, softened', order: 1 },
        { name: '3/4 cup white sugar', order: 2 },
        { name: '3/4 cup brown sugar', order: 3 },
        { name: '2 eggs', order: 4 },
        { name: '2 tsp vanilla extract', order: 5 },
        { name: '2 1/4 cups flour', order: 6 },
        { name: '1 tsp baking soda', order: 7 },
        { name: '1 tsp salt', order: 8 },
        { name: '2 cups chocolate chips', order: 9 },
      ],
    },
  },
  {
    recipeId: 27,
    recipeCategory: 'Dessert',
    recipeName: 'Brownies',
    recipeImage:
      'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 15.0,
    cookTime: 30.0,
    recipeServing: 16,
    recipeMethod:
      'Melt butter and chocolate together. Whisk in sugar, then eggs and vanilla. Fold in flour, cocoa powder, and salt. Pour into greased pan. Bake at 350°F for 25-30 minutes.',
    recipeReview: 312,
    isPopular: true,
    ingredients: {
      create: [
        { name: '1/2 cup butter', order: 1 },
        { name: '1 cup chocolate chips', order: 2 },
        { name: '1 cup sugar', order: 3 },
        { name: '2 eggs', order: 4 },
        { name: '1 tsp vanilla extract', order: 5 },
        { name: '1/3 cup flour', order: 6 },
        { name: '1/4 cup cocoa powder', order: 7 },
        { name: '1/4 tsp salt', order: 8 },
      ],
    },
  },
  {
    recipeId: 28,
    recipeCategory: 'Dessert',
    recipeName: 'Tiramisu',
    recipeImage:
      'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 30.0,
    cookTime: 0.0,
    recipeServing: 8,
    recipeMethod:
      'Beat egg yolks with sugar until thick. Fold in mascarpone. In separate bowl, whip cream to stiff peaks and fold into mascarpone mixture. Dip ladyfingers in espresso, layer in dish with cream. Refrigerate 4 hours. Dust with cocoa.',
    recipeReview: 198,
    isPopular: true,
    ingredients: {
      create: [
        { name: '6 egg yolks', order: 1 },
        { name: '3/4 cup sugar', order: 2 },
        { name: '1 1/3 cups mascarpone', order: 3 },
        { name: '1 3/4 cups heavy cream', order: 4 },
        { name: '2 cups espresso, cooled', order: 5 },
        { name: '24 ladyfinger cookies', order: 6 },
        { name: 'cocoa powder', order: 7 },
      ],
    },
  },
  {
    recipeId: 29,
    recipeCategory: 'Dessert',
    recipeName: 'Cheesecake',
    recipeImage:
      'https://images.pexels.com/photos/47013/pexels-photo-47013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 20.0,
    cookTime: 60.0,
    recipeServing: 12,
    recipeMethod:
      'Mix graham cracker crumbs with melted butter, press into pan. Beat cream cheese and sugar until smooth. Add eggs one at a time. Pour over crust. Bake at 325°F for 55-60 minutes. Cool completely, refrigerate 4 hours.',
    recipeReview: 387,
    isPopular: true,
    ingredients: {
      create: [
        { name: '1 1/2 cups graham cracker crumbs', order: 1 },
        { name: '1/4 cup melted butter', order: 2 },
        { name: '32 oz cream cheese', order: 3 },
        { name: '1 cup sugar', order: 4 },
        { name: '4 eggs', order: 5 },
        { name: '1 tsp vanilla extract', order: 6 },
      ],
    },
  },
  {
    recipeId: 30,
    recipeCategory: 'Dessert',
    recipeName: 'Apple Pie',
    recipeImage:
      'https://images.pexels.com/photos/5945852/pexels-photo-5945852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 30.0,
    cookTime: 50.0,
    recipeServing: 8,
    recipeMethod:
      'Mix sliced apples with sugar, cinnamon, flour. Place bottom crust in pie pan. Add apple filling. Cover with top crust, seal edges and cut slits. Brush with egg wash. Bake at 375°F for 45-50 minutes until golden.',
    recipeReview: 265,
    isPopular: true,
    ingredients: {
      create: [
        { name: '2 pie crusts', order: 1 },
        { name: '6 cups sliced apples', order: 2 },
        { name: '3/4 cup sugar', order: 3 },
        { name: '2 tsp cinnamon', order: 4 },
        { name: '2 tbsp flour', order: 5 },
        { name: '1 egg, beaten', order: 6 },
      ],
    },
  },

  // BEVERAGES
  {
    recipeId: 31,
    recipeCategory: 'Beverages',
    recipeName: 'Iced Coffee',
    recipeImage:
      'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 5.0,
    cookTime: 0.0,
    recipeServing: 1,
    recipeMethod:
      'Brew strong coffee and let cool. Fill glass with ice. Pour coffee over ice. Add milk and simple syrup to taste. Stir and serve.',
    recipeReview: 89,
    isPopular: false,
    ingredients: {
      create: [
        { name: '1 cup strong brewed coffee', order: 1 },
        { name: 'ice cubes', order: 2 },
        { name: '2 tbsp milk', order: 3 },
        { name: '1 tbsp simple syrup', order: 4 },
      ],
    },
  },
  {
    recipeId: 32,
    recipeCategory: 'Beverages',
    recipeName: 'Lemonade',
    recipeImage:
      'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10.0,
    cookTime: 5.0,
    recipeServing: 8,
    recipeMethod:
      'Make simple syrup by heating sugar and water until dissolved. Cool. Juice lemons to get 1 cup of juice. Mix lemon juice, simple syrup, and water. Chill and serve over ice with lemon slices.',
    recipeReview: 142,
    isPopular: true,
    ingredients: {
      create: [
        { name: '1 cup sugar', order: 1 },
        { name: '1 cup water for syrup', order: 2 },
        { name: '1 cup fresh lemon juice', order: 3 },
        { name: '6 cups cold water', order: 4 },
        { name: 'lemon slices', order: 5 },
        { name: 'ice', order: 6 },
      ],
    },
  },
  {
    recipeId: 33,
    recipeCategory: 'Beverages',
    recipeName: 'Hot Chocolate',
    recipeImage:
      'https://images.pexels.com/photos/1193647/pexels-photo-1193647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 5.0,
    cookTime: 10.0,
    recipeServing: 2,
    recipeMethod:
      'Heat milk in saucepan over medium heat. Whisk in cocoa powder and sugar. Add chocolate chips and vanilla. Stir until chocolate melts and mixture is smooth. Top with whipped cream and marshmallows.',
    recipeReview: 167,
    isPopular: true,
    ingredients: {
      create: [
        { name: '2 cups milk', order: 1 },
        { name: '2 tbsp cocoa powder', order: 2 },
        { name: '2 tbsp sugar', order: 3 },
        { name: '1/4 cup chocolate chips', order: 4 },
        { name: '1/2 tsp vanilla extract', order: 5 },
        { name: 'whipped cream', order: 6 },
        { name: 'marshmallows', order: 7 },
      ],
    },
  },
  {
    recipeId: 34,
    recipeCategory: 'Beverages',
    recipeName: 'Mojito Mocktail',
    recipeImage:
      'https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 5.0,
    cookTime: 0.0,
    recipeServing: 1,
    recipeMethod:
      'Muddle mint leaves with lime juice and sugar in glass. Fill glass with ice. Top with club soda. Stir gently and garnish with mint sprig and lime wheel.',
    recipeReview: 76,
    isPopular: false,
    ingredients: {
      create: [
        { name: '10 fresh mint leaves', order: 1 },
        { name: '2 tbsp lime juice', order: 2 },
        { name: '2 tsp sugar', order: 3 },
        { name: 'ice cubes', order: 4 },
        { name: '1 cup club soda', order: 5 },
        { name: 'mint sprig for garnish', order: 6 },
        { name: 'lime wheel', order: 7 },
      ],
    },
  },
  {
    recipeId: 35,
    recipeCategory: 'Beverages',
    recipeName: 'Mango Lassi',
    recipeImage:
      'https://images.pexels.com/photos/5947005/pexels-photo-5947005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 5.0,
    cookTime: 0.0,
    recipeServing: 2,
    recipeMethod:
      'Blend mango, yogurt, milk, sugar, and cardamom until smooth. Add ice and blend again. Pour into glasses and garnish with mint leaves.',
    recipeReview: 93,
    isPopular: false,
    ingredients: {
      create: [
        { name: '1 cup mango chunks', order: 1 },
        { name: '1 cup plain yogurt', order: 2 },
        { name: '1/2 cup milk', order: 3 },
        { name: '2 tbsp sugar', order: 4 },
        { name: '1/4 tsp cardamom', order: 5 },
        { name: 'ice cubes', order: 6 },
      ],
    },
  },
];

async function main() {
  console.log('Start seeding...');

  // Delete existing data first
  console.log('Deleting existing data...');
  await prisma.ingredient.deleteMany();
  await prisma.recipe.deleteMany();

  // Seed recipe data
  console.log('Creating recipes...');
  for (const recipe of recipeData) {
    const createdRecipe = await prisma.recipe.create({
      data: recipe,
    });
    console.log(
      `✓ Created recipe: ${createdRecipe.recipeName} (${createdRecipe.recipeCategory})`,
    );
  }

  console.log('\n=================================');
  console.log('Seeding finished successfully!');
  console.log(`Total recipes created: ${recipeData.length}`);
  console.log('=================================');

  // Display summary by category
  const categories = [...new Set(recipeData.map((r) => r.recipeCategory))];
  console.log('\nRecipes by category:');
  categories.forEach((cat) => {
    const count = recipeData.filter((r) => r.recipeCategory === cat).length;
    console.log(`- ${cat}: ${count} recipes`);
  });
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
