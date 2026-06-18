export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  prepTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Easy';
  calories: number;
  rating: number;
  reviewCount: string;
  tags: string[];
  isVegetarian: boolean;
}

export interface Ingredient {
  id: string;
  name: string;
  quantity: string;
  isAvailable: boolean;
  isOptional: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviews: string;
  image: string;
  tag?: string; // e.g. "Best Seller", "Organic"
}

export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  duration: string;
  status: 'Completed' | 'In Progress' | 'Pending';
  emoji: string;
}

export interface NutritionMetric {
  label: string;
  value: string;
  dv: string;
  color: string;
  percentage: number;
  icon: string; // Lucide icon name or emoji
}

export interface NutritionInfo {
  calories: string;
  carbs: string;
  protein: string;
  fat: string;
  fiber: string;
  sodium: string;
  healthScore: number;
  metrics: NutritionMetric[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
  gradient: string; // Tailwind gradient classes
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  avatarInitials: string;
}
