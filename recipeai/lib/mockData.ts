import { Recipe, Ingredient, Product, Step, NutritionInfo, Feature, Testimonial } from '../types';

export interface FullRecipeData {
  recipeDetails: Recipe;
  ingredients: Ingredient[];
  products: Product[];
  cookingSteps: Step[];
  nutritionData: NutritionInfo;
}

export const recipeDatabase: Record<string, FullRecipeData> = {
  'jeera rice': {
    recipeDetails: {
      id: 'jeera-rice',
      name: 'Jeera Rice',
      description: 'A popular Indian dish made with basmati rice, cumin seeds (jeera), ghee, and aromatic whole spices. Fluffy, fragrant, and perfect with dal or curry.',
      image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=800&h=600',
      prepTime: '25 mins',
      servings: 2,
      difficulty: 'Easy',
      calories: 320,
      rating: 4.8,
      reviewCount: '2.1k reviews',
      tags: ['Indian', 'Vegetarian', 'Quick', 'Comfort Food'],
      isVegetarian: true
    },
    ingredients: [
      { id: 'jr-ing-1', name: 'Basmati Rice', quantity: '1 Cup', isAvailable: true, isOptional: false },
      { id: 'jr-ing-2', name: 'Cumin Seeds (Jeera)', quantity: '1 tsp', isAvailable: true, isOptional: false },
      { id: 'jr-ing-3', name: 'Pure Ghee', quantity: '2 tbsp', isAvailable: true, isOptional: false },
      { id: 'jr-ing-4', name: 'Bay Leaves', quantity: '2 leaves', isAvailable: false, isOptional: true },
      { id: 'jr-ing-5', name: 'Salt', quantity: 'To taste', isAvailable: true, isOptional: false },
      { id: 'jr-ing-6', name: 'Water', quantity: '2 Cups', isAvailable: true, isOptional: false },
      { id: 'jr-ing-7', name: 'Green Cardamom', quantity: '2 pods', isAvailable: false, isOptional: true },
      { id: 'jr-ing-8', name: 'Cloves', quantity: '3 pieces', isAvailable: false, isOptional: true }
    ],
    products: [
      {
        id: 'prod-1',
        name: 'Daawat Basmati Rice 5kg',
        brand: 'Daawat',
        price: 299,
        originalPrice: 399,
        discount: '-25%',
        rating: 4.5,
        reviews: '1.2k',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Best Seller'
      },
      {
        id: 'prod-2',
        name: 'Amul Pure Ghee 1L',
        brand: 'Amul',
        price: 599,
        originalPrice: 699,
        discount: '-14%',
        rating: 4.7,
        reviews: '3.4k',
        image: 'https://images.unsplash.com/photo-1628294895520-73f248f766d5?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Organic'
      },
      {
        id: 'prod-3',
        name: 'Organic Cumin Seeds 200g',
        brand: 'Organic Tattva',
        price: 149,
        originalPrice: 199,
        discount: '-25%',
        rating: 4.6,
        reviews: '850',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Organic'
      },
      {
        id: 'prod-4',
        name: 'Tata Himalayan Pink Salt 1kg',
        brand: 'Tata',
        price: 189,
        originalPrice: 249,
        discount: '-24%',
        rating: 4.4,
        reviews: '2.3k',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Pure'
      }
    ],
    cookingSteps: [
      { id: 'jr-step-1', number: '01', title: 'Wash & Soak Rice', description: 'Rinse basmati rice 2-3 times in running water. Soak in water for 20 minutes, then drain completely.', duration: '10 mins', status: 'Completed', emoji: '🍚' },
      { id: 'jr-step-2', number: '02', title: 'Heat the Ghee', description: 'Heat ghee in a heavy-bottomed pan or pressure cooker on medium flame.', duration: '2 mins', status: 'Completed', emoji: '🥘' },
      { id: 'jr-step-3', number: '03', title: 'Temper the Spices', description: 'Add cumin seeds, bay leaves, cardamom, and cloves to the hot ghee. Sauté till they splutter and aromatic.', duration: '2 mins', status: 'In Progress', emoji: '🌿' },
      { id: 'jr-step-4', number: '04', title: 'Add Water & Salt', description: 'Add 2 cups of water and salt to taste. Bring the water to a rolling boil.', duration: '5 mins', status: 'Pending', emoji: '💧' },
      { id: 'jr-step-5', number: '05', title: 'Cook the Rice', description: 'Add drained soaked rice. Cover tightly and cook on low flame for 15 minutes or until water is fully absorbed.', duration: '15 mins', status: 'Pending', emoji: '🔥' },
      { id: 'jr-step-6', number: '06', title: 'Rest & Fluff', description: 'Turn off the heat. Let it rest covered for 5 minutes. Gently fluff the rice with a fork to avoid breaking grains.', duration: '5 mins', status: 'Pending', emoji: '⏱' },
      { id: 'jr-step-7', number: '07', title: 'Serve Hot', description: 'Garnish with fresh chopped coriander leaves. Serve hot with dal fry, kadhi, or your favorite raita.', duration: '1 min', status: 'Pending', emoji: '🍛' }
    ],
    nutritionData: {
      calories: '320',
      carbs: '58g',
      protein: '6g',
      fat: '8g',
      fiber: '1.5g',
      sodium: '420mg',
      healthScore: 85,
      metrics: [
        { label: 'Calories', value: '320 kcal', dv: '16%', color: '#00D9F5', percentage: 16, icon: '🔥' },
        { label: 'Protein', value: '6g', dv: '12%', color: '#00F5A0', percentage: 12, icon: '💪' },
        { label: 'Carbohydrates', value: '58g', dv: '21%', color: '#7B61FF', percentage: 21, icon: '🌾' },
        { label: 'Total Fat', value: '8g', dv: '10%', color: '#FF6B35', percentage: 10, icon: '🥑' },
        { label: 'Fiber', value: '1.5g', dv: '5%', color: '#EC4899', percentage: 5, icon: '🌿' },
        { label: 'Sodium', value: '420mg', dv: '18%', color: '#FFD93D', percentage: 18, icon: '🧂' }
      ]
    }
  },
  'paneer butter masala': {
    recipeDetails: {
      id: 'paneer-butter-masala',
      name: 'Paneer Butter Masala',
      description: 'A rich, creamy, and mildly sweet North Indian curry made with soft paneer cubes cooked in a buttery tomato-cashew sauce.',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800&h=600',
      prepTime: '35 mins',
      servings: 3,
      difficulty: 'Medium',
      calories: 410,
      rating: 4.9,
      reviewCount: '3.4k reviews',
      tags: ['Indian', 'Vegetarian', 'Rich', 'Curry'],
      isVegetarian: true
    },
    ingredients: [
      { id: 'pbm-ing-1', name: 'Paneer (Cottage Cheese)', quantity: '250g', isAvailable: true, isOptional: false },
      { id: 'pbm-ing-2', name: 'Butter', quantity: '3 tbsp', isAvailable: true, isOptional: false },
      { id: 'pbm-ing-3', name: 'Tomatoes', quantity: '4 large', isAvailable: true, isOptional: false },
      { id: 'pbm-ing-4', name: 'Cashew Nuts', quantity: '10-12 pcs', isAvailable: false, isOptional: false },
      { id: 'pbm-ing-5', name: 'Heavy Cream', quantity: '2 tbsp', isAvailable: false, isOptional: true },
      { id: 'pbm-ing-6', name: 'Ginger-Garlic Paste', quantity: '1 tbsp', isAvailable: true, isOptional: false },
      { id: 'pbm-ing-7', name: 'Kasuri Methi', quantity: '1 tsp', isAvailable: false, isOptional: true },
      { id: 'pbm-ing-8', name: 'Garam Masala', quantity: '1 tsp', isAvailable: true, isOptional: false }
    ],
    products: [
      {
        id: 'prod-pbm-1',
        name: 'Amul Malai Paneer 200g',
        brand: 'Amul',
        price: 85,
        originalPrice: 95,
        discount: '-10%',
        rating: 4.6,
        reviews: '2.5k',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Best Seller'
      },
      {
        id: 'prod-pbm-2',
        name: 'Amul Butter 500g',
        brand: 'Amul',
        price: 275,
        originalPrice: 299,
        discount: '-8%',
        rating: 4.8,
        reviews: '5k',
        image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Daily Essential'
      },
      {
        id: 'prod-pbm-3',
        name: 'Tata Sampann Garam Masala 100g',
        brand: 'Tata',
        price: 78,
        originalPrice: 90,
        discount: '-13%',
        rating: 4.5,
        reviews: '1.2k',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Spices'
      },
      {
        id: 'prod-pbm-4',
        name: 'Catch Kasuri Methi 100g',
        brand: 'Catch',
        price: 45,
        originalPrice: 55,
        discount: '-18%',
        rating: 4.4,
        reviews: '900',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Herbs'
      }
    ],
    cookingSteps: [
      { id: 'pbm-step-1', number: '01', title: 'Prepare Tomato-Cashew Paste', description: 'Boil tomatoes and cashew nuts in water for 10 minutes. Cool down, peel tomatoes, and grind into a smooth paste.', duration: '12 mins', status: 'Completed', emoji: '🍅' },
      { id: 'pbm-step-2', number: '02', title: 'Sauté Aromatics', description: 'Melt butter in a pan. Add ginger-garlic paste and sauté for 1-2 minutes until raw smell goes.', duration: '3 mins', status: 'Completed', emoji: '🍳' },
      { id: 'pbm-step-3', number: '03', title: 'Cook Gravy Base', description: 'Pour tomato cashew paste, add red chili powder, turmeric, garam masala. Cook till oil separates.', duration: '8 mins', status: 'In Progress', emoji: '🔥' },
      { id: 'pbm-step-4', number: '04', title: 'Simmer & Add Paneer', description: 'Add water to adjust consistency, sugar, and salt. Add Paneer cubes and simmer for 5 minutes.', duration: '6 mins', status: 'Pending', emoji: '🧀' },
      { id: 'pbm-step-5', number: '05', title: 'Cream & Kasuri Methi Finish', description: 'Stir in heavy cream and crushed kasuri methi. Turn off heat immediately.', duration: '4 mins', status: 'Pending', emoji: '🥛' },
      { id: 'pbm-step-6', number: '06', title: 'Serve Warm', description: 'Garnish with additional cream and serve hot with butter naan or Jeera Rice.', duration: '2 mins', status: 'Pending', emoji: '🍽️' }
    ],
    nutritionData: {
      calories: '410',
      carbs: '12g',
      protein: '14g',
      fat: '36g',
      fiber: '3g',
      sodium: '510mg',
      healthScore: 72,
      metrics: [
        { label: 'Calories', value: '410 kcal', dv: '20%', color: '#00D9F5', percentage: 20, icon: '🔥' },
        { label: 'Protein', value: '14g', dv: '28%', color: '#00F5A0', percentage: 28, icon: '💪' },
        { label: 'Carbohydrates', value: '12g', dv: '4%', color: '#7B61FF', percentage: 4, icon: '🌾' },
        { label: 'Total Fat', value: '36g', dv: '46%', color: '#FF6B35', percentage: 46, icon: '🥑' },
        { label: 'Fiber', value: '3g', dv: '10%', color: '#EC4899', percentage: 10, icon: '🌿' },
        { label: 'Sodium', value: '510mg', dv: '22%', color: '#FFD93D', percentage: 22, icon: '🧂' }
      ]
    }
  },
  'biryani': {
    recipeDetails: {
      id: 'biryani',
      name: 'Biryani',
      description: 'An aromatic, layers-packed, royal Indian dish of rice, cooked with aromatic spices, herbs, yogurt, and mixed vegetables (or choice protein).',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800&h=600',
      prepTime: '60 mins',
      servings: 4,
      difficulty: 'Hard',
      calories: 520,
      rating: 4.9,
      reviewCount: '8.2k reviews',
      tags: ['Indian', 'Festive', 'Spicy', 'Royal'],
      isVegetarian: true
    },
    ingredients: [
      { id: 'b-ing-1', name: 'Basmati Rice', quantity: '2 Cups', isAvailable: true, isOptional: false },
      { id: 'b-ing-2', name: 'Mixed Vegetables', quantity: '2 Cups', isAvailable: true, isOptional: false },
      { id: 'b-ing-3', name: 'Onions', quantity: '2 large', isAvailable: true, isOptional: false },
      { id: 'b-ing-4', name: 'Fresh Yogurt', quantity: '1/2 Cup', isAvailable: true, isOptional: false },
      { id: 'b-ing-5', name: 'Biryani Masala', quantity: '2 tbsp', isAvailable: false, isOptional: false },
      { id: 'b-ing-6', name: 'Ghee', quantity: '3 tbsp', isAvailable: true, isOptional: false },
      { id: 'b-ing-7', name: 'Saffron Threads', quantity: 'A pinch', isAvailable: false, isOptional: true },
      { id: 'b-ing-8', name: 'Mint & Coriander', quantity: '1/2 Cup', isAvailable: true, isOptional: false }
    ],
    products: [
      {
        id: 'prod-b-1',
        name: 'Daawat Biryani Basmati Rice 5kg',
        brand: 'Daawat',
        price: 380,
        originalPrice: 499,
        discount: '-24%',
        rating: 4.7,
        reviews: '3.1k',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Best Seller'
      },
      {
        id: 'prod-b-2',
        name: 'Everest Shahi Biryani Masala 50g',
        brand: 'Everest',
        price: 65,
        originalPrice: 75,
        discount: '-13%',
        rating: 4.6,
        reviews: '1.8k',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Spices'
      },
      {
        id: 'prod-b-3',
        name: 'Mother Dairy Fresh Curd 400g',
        brand: 'Mother Dairy',
        price: 35,
        originalPrice: 40,
        discount: '-12%',
        rating: 4.4,
        reviews: '950',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Dairy'
      },
      {
        id: 'prod-b-4',
        name: 'Organic Saffron 1g',
        brand: 'Baby Saffron',
        price: 320,
        originalPrice: 399,
        discount: '-20%',
        rating: 4.8,
        reviews: '1.1k',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Premium'
      }
    ],
    cookingSteps: [
      { id: 'b-step-1', number: '01', title: 'Marinate Vegetables', description: 'Marinate vegetables in yogurt, biryani masala, ginger-garlic paste, half mint-coriander and salt for 30 minutes.', duration: '30 mins', status: 'Completed', emoji: '🥗' },
      { id: 'b-step-2', number: '02', title: 'Prepare Golden Fried Onions', description: 'Thinly slice onions and deep fry in ghee/oil till golden brown and crispy (birista). Set aside.', duration: '15 mins', status: 'Completed', emoji: '🧅' },
      { id: 'b-step-3', number: '03', title: 'Parboil the Rice', description: 'Cook washed rice in boiling salted water with whole cardamoms and cloves until 70% cooked. Drain well.', duration: '10 mins', status: 'Completed', emoji: '🍚' },
      { id: 'b-step-4', number: '04', title: 'Cook Vegetables Base', description: 'In a deep heavy bottom pan, heat ghee, add marinated veggies, and cook on medium heat for 10-12 mins.', duration: '12 mins', status: 'In Progress', emoji: '🔥' },
      { id: 'b-step-5', number: '05', title: 'Layering (Dum Setup)', description: 'Top the vegetable gravy with 70% cooked rice. Layer fried onions, saffron milk, ghee, mint, and coriander.', duration: '5 mins', status: 'Pending', emoji: '🥘' },
      { id: 'b-step-6', number: '06', title: 'Dum Cook', description: 'Seal the pan with dough or foil and cover with a heavy lid. Cook on low flame for 20-25 minutes.', duration: '25 mins', status: 'Pending', emoji: '⏱' },
      { id: 'b-step-7', number: '07', title: 'Serve Royal', description: 'Gently mix layers from bottom side. Serve hot with mirchi ka salan and cucumber raita.', duration: '3 mins', status: 'Pending', emoji: '🍛' }
    ],
    nutritionData: {
      calories: '520',
      carbs: '72g',
      protein: '12g',
      fat: '18g',
      fiber: '5g',
      sodium: '680mg',
      healthScore: 78,
      metrics: [
        { label: 'Calories', value: '520 kcal', dv: '26%', color: '#00D9F5', percentage: 26, icon: '🔥' },
        { label: 'Protein', value: '12g', dv: '24%', color: '#00F5A0', percentage: 24, icon: '💪' },
        { label: 'Carbohydrates', value: '72g', dv: '26%', color: '#7B61FF', percentage: 26, icon: '🌾' },
        { label: 'Total Fat', value: '18g', dv: '23%', color: '#FF6B35', percentage: 23, icon: '🥑' },
        { label: 'Fiber', value: '5g', dv: '18%', color: '#EC4899', percentage: 18, icon: '🌿' },
        { label: 'Sodium', value: '680mg', dv: '28%', color: '#FFD93D', percentage: 28, icon: '🧂' }
      ]
    }
  },
  'pasta': {
    recipeDetails: {
      id: 'pasta',
      name: 'Creamy Tomato Pasta',
      description: 'Classic Penne pasta tossed in a rich, velvety creamy tomato sauce (pink sauce), seasoned with garlic, fresh basil, and parmesan cheese.',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800&h=600',
      prepTime: '20 mins',
      servings: 2,
      difficulty: 'Easy',
      calories: 380,
      rating: 4.7,
      reviewCount: '1.8k reviews',
      tags: ['Italian', 'Vegetarian', 'Quick', 'Kids Favorite'],
      isVegetarian: true
    },
    ingredients: [
      { id: 'p-ing-1', name: 'Penne Pasta', quantity: '200g', isAvailable: true, isOptional: false },
      { id: 'p-ing-2', name: 'Tomato Pasta Sauce', quantity: '1 Cup', isAvailable: false, isOptional: false },
      { id: 'p-ing-3', name: 'Heavy Cream', quantity: '1/4 Cup', isAvailable: false, isOptional: true },
      { id: 'p-ing-4', name: 'Olive Oil', quantity: '2 tbsp', isAvailable: true, isOptional: false },
      { id: 'p-ing-5', name: 'Garlic Cloves', quantity: '4 cloves', isAvailable: true, isOptional: false },
      { id: 'p-ing-6', name: 'Grated Parmesan', quantity: '1/4 Cup', isAvailable: false, isOptional: true },
      { id: 'p-ing-7', name: 'Fresh Basil Leaves', quantity: '6-8 leaves', isAvailable: false, isOptional: true },
      { id: 'p-ing-8', name: 'Salt & Pepper', quantity: 'To taste', isAvailable: true, isOptional: false }
    ],
    products: [
      {
        id: 'prod-p-1',
        name: 'Disano Penne Pasta 500g',
        brand: 'Disano',
        price: 125,
        originalPrice: 150,
        discount: '-16%',
        rating: 4.5,
        reviews: '2.1k',
        image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Best Seller'
      },
      {
        id: 'prod-p-2',
        name: 'Del Monte Pasta Sauce 390g',
        brand: 'Del Monte',
        price: 135,
        originalPrice: 165,
        discount: '-18%',
        rating: 4.4,
        reviews: '1.5k',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Sauces'
      },
      {
        id: 'prod-p-3',
        name: 'Figaro Extra Virgin Olive Oil 500ml',
        brand: 'Figaro',
        price: 699,
        originalPrice: 799,
        discount: '-12%',
        rating: 4.7,
        reviews: '4.2k',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Premium'
      },
      {
        id: 'prod-p-4',
        name: 'Amul Cheese Block 200g',
        brand: 'Amul',
        price: 120,
        originalPrice: 130,
        discount: '-8%',
        rating: 4.6,
        reviews: '3.8k',
        image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=200&h=200',
        tag: 'Daily Essential'
      }
    ],
    cookingSteps: [
      { id: 'p-step-1', number: '01', title: 'Boil Pasta', description: 'Boil pasta in salted water for 9-10 mins till al dente (firm to bite). Drain, reserve 1/2 cup pasta water.', duration: '12 mins', status: 'Completed', emoji: '🍝' },
      { id: 'p-step-2', number: '02', title: 'Sauté Garlic', description: 'Heat olive oil in a pan, add finely chopped garlic, and sauté for 1 min without browning.', duration: '2 mins', status: 'Completed', emoji: '🧄' },
      { id: 'p-step-3', number: '03', title: 'Cook Sauce Base', description: 'Add tomato pasta sauce, salt, chili flakes, and black pepper. Simmer on medium-low for 5 mins.', duration: '5 mins', status: 'In Progress', emoji: '🥫' },
      { id: 'p-step-4', number: '04', title: 'Make Creamy (Pink Sauce)', description: 'Reduce heat, stir in heavy cream, and add 2 tbsp of reserved pasta water. Simmer 1 min.', duration: '2 mins', status: 'Pending', emoji: '🥛' },
      { id: 'p-step-5', number: '05', title: 'Toss Pasta', description: 'Add boiled penne pasta and grated parmesan. Gently toss till sauce coats the pasta nicely.', duration: '2 mins', status: 'Pending', emoji: '🔄' },
      { id: 'p-step-6', number: '06', title: 'Serve & Garnish', description: 'Garnish with fresh torn basil leaves and a sprinkle of cheese. Serve hot immediately.', duration: '2 mins', status: 'Pending', emoji: '🍽️' }
    ],
    nutritionData: {
      calories: '380',
      carbs: '64g',
      protein: '10g',
      fat: '12g',
      fiber: '4g',
      sodium: '490mg',
      healthScore: 80,
      metrics: [
        { label: 'Calories', value: '380 kcal', dv: '19%', color: '#00D9F5', percentage: 19, icon: '🔥' },
        { label: 'Protein', value: '10g', dv: '20%', color: '#00F5A0', percentage: 20, icon: '💪' },
        { label: 'Carbohydrates', value: '64g', dv: '23%', color: '#7B61FF', percentage: 23, icon: '🌾' },
        { label: 'Total Fat', value: '12g', dv: '15%', color: '#FF6B35', percentage: 15, icon: '🥑' },
        { label: 'Fiber', value: '4g', dv: '16%', color: '#EC4899', percentage: 16, icon: '🌿' },
        { label: 'Sodium', value: '490mg', dv: '21%', color: '#FFD93D', percentage: 21, icon: '🧂' }
      ]
    }
  }
};

export const relatedRecipes: Recipe[] = [
  {
    id: 'rel-1',
    name: 'Veg Pulao',
    description: 'A aromatic one-pot rice dish loaded with healthy vegetables and warm spices.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=500&h=350',
    prepTime: '30 min',
    servings: 2,
    difficulty: 'Easy',
    calories: 290,
    rating: 4.6,
    reviewCount: '1.2k',
    tags: ['Indian', 'Vegetarian', 'One-Pot'],
    isVegetarian: true
  },
  {
    id: 'rel-2',
    name: 'Lemon Rice',
    description: 'A tangy, crunchy South Indian rice dish flavored with lemon juice, mustard seeds, curry leaves, and peanuts.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=500&h=350',
    prepTime: '20 min',
    servings: 2,
    difficulty: 'Easy',
    calories: 270,
    rating: 4.5,
    reviewCount: '980',
    tags: ['South Indian', 'Tangy', 'Quick'],
    isVegetarian: true
  },
  {
    id: 'rel-3',
    name: 'Fried Rice',
    description: 'Classic Indo-Chinese fried rice stir-fried in a wok with vegetables, garlic, and soy sauce.',
    image: 'https://images.unsplash.com/photo-1603133872878-685f588c7915?auto=format&fit=crop&q=80&w=500&h=350',
    prepTime: '25 min',
    servings: 2,
    difficulty: 'Medium',
    calories: 380,
    rating: 4.7,
    reviewCount: '1.5k',
    tags: ['Chinese', 'Vegetarian', 'Stir-Fry'],
    isVegetarian: true
  },
  {
    id: 'rel-4',
    name: 'Biryani',
    description: 'Royal rice dish loaded with rich spices, herbs, and vegetables cooked under pressure (dum).',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=500&h=350',
    prepTime: '60 min',
    servings: 4,
    difficulty: 'Hard',
    calories: 520,
    rating: 4.9,
    reviewCount: '8.2k',
    tags: ['Spicy', 'Royal', 'Festive'],
    isVegetarian: true
  },
  {
    id: 'rel-5',
    name: 'Peas Pulao',
    description: 'A simple, fragrant, sweet basmati rice pilaf cooked with fresh green peas.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=500&h=350',
    prepTime: '25 min',
    servings: 2,
    difficulty: 'Easy',
    calories: 310,
    rating: 4.4,
    reviewCount: '650',
    tags: ['Indian', 'Vegetarian', 'Simple'],
    isVegetarian: true
  },
  {
    id: 'rel-6',
    name: 'Curd Rice',
    description: 'Soothing and cooling South Indian rice dish mixed with fresh curd, tempered with mustard seeds and curry leaves.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=500&h=350',
    prepTime: '15 min',
    servings: 2,
    difficulty: 'Very Easy',
    calories: 250,
    rating: 4.3,
    reviewCount: '480',
    tags: ['South Indian', 'Soothing', 'Comfort'],
    isVegetarian: true
  }
];

export const features: Feature[] = [
  {
    id: 'feat-1',
    title: 'Smart Recipe Search',
    description: 'AI understands natural language queries and finds the perfect recipe regardless of how you phrase it.',
    iconName: 'Search',
    gradient: 'from-accentTeal to-accentPurple'
  },
  {
    id: 'feat-2',
    title: 'Ingredient Detection',
    description: 'Automatically identifies and lists all required ingredients with precise quantities and substitution options.',
    iconName: 'Leaf',
    gradient: 'from-accentGreen to-accentTeal'
  },
  {
    id: 'feat-3',
    title: 'Nutrition Analysis',
    description: 'Provides detailed nutritional breakdown per serving with health scores and dietary compatibility.',
    iconName: 'BarChart3',
    gradient: 'from-accentPurple to-pink-500'
  },
  {
    id: 'feat-4',
    title: 'Grocery Recommendation',
    description: 'Suggests the best-rated, most affordable products from trusted brands for every ingredient.',
    iconName: 'ShoppingCart',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'feat-5',
    title: 'Personalized Suggestions',
    description: 'Learns your taste preferences, dietary restrictions, and cooking skill level to recommend tailored recipes.',
    iconName: 'Sparkles',
    gradient: 'from-pink-500 to-accentPurple'
  },
  {
    id: 'feat-6',
    title: 'AI Food Assistant',
    description: 'Chat with our AI assistant for real-time cooking help, tips, substitutions, and troubleshooting.',
    iconName: 'Bot',
    gradient: 'from-blue-500 to-accentTeal'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Priya Sharma',
    role: 'Home Cook',
    location: 'Mumbai',
    text: 'RecipeAI transformed my cooking! The ingredient suggestions are spot-on and the step-by-step guide is super easy to follow.',
    rating: 5,
    avatarInitials: 'PS'
  },
  {
    id: 'test-2',
    name: 'Rahul Verma',
    role: 'Food Blogger',
    location: 'Delhi',
    text: 'The nutrition dashboard is incredible. I can now track my macros while enjoying delicious home-cooked meals.',
    rating: 5,
    avatarInitials: 'RV'
  },
  {
    id: 'test-3',
    name: 'Ananya Krishnan',
    role: 'Student',
    location: 'Bangalore',
    text: 'As a hostel student, this app helped me learn cooking from scratch. The AI suggestions are always accurate!',
    rating: 4.5,
    avatarInitials: 'AK'
  },
  {
    id: 'test-4',
    name: 'Vikram Patel',
    role: 'Fitness Trainer',
    location: 'Ahmedabad',
    text: 'The calorie and protein tracking per recipe helps my clients maintain their diet goals while eating tasty food.',
    rating: 5,
    avatarInitials: 'VP'
  },
  {
    id: 'test-5',
    name: 'Meera Iyer',
    role: 'Working Professional',
    location: 'Chennai',
    text: 'Quick recipes, smart grocery suggestions — this saves me 2 hours every week. Absolutely love it!',
    rating: 5,
    avatarInitials: 'MI'
  },
  {
    id: 'test-6',
    name: 'Arjun Singh',
    role: 'Chef',
    location: 'Jaipur',
    text: 'Even as a professional chef, I discover new recipe ideas and cooking techniques through RecipeAI daily.',
    rating: 4.5,
    avatarInitials: 'AS'
  }
];
