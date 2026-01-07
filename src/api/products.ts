import image1 from '/src/img/Rectangle-18.png';
import image2 from '/src/img/Group-5.png';
import image3 from '/src/img/Group-6.png';
import image4 from '/src/img/Group-7.png';
import image5 from '/src/img/Group-8.png';
import image6 from '/src/img/Group-9.png';

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  price: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "IMMORTAL",
    subtitle: "",
    img: image1,
    price: "49.990 ₽"
  },
  {
    id: 2,
    title: "LEGENDARY",
    subtitle: "Пожизненная лицензия с дополнительными привилегиями.",
    img: image2,
    price: "9979 ₽"
  },
  {
    id: 3,
    title: "COMBATER",
    subtitle: "Расширенный тариф с повышенным сроком и возможн...",
    img: image3,
    price: "3979 ₽"
  },
  {
    id: 4,
    title: "BUILDER",
    subtitle: "Рекомендованный тариф для тех, кто хочет получить доступ к ...",
    img: image4,
    price: "1979 ₽"
  },
  {
    id: 5,
    title: "RAIDER",
    subtitle: "Стартовый тариф с увеличенным сроком использования.",
    img: image5,
    price: "979 ₽"
  },
  {
    id: 6,
    title: "EOKA",
    subtitle: "Пробный тариф для первичного знакомства с платформой.",
    img: image6,
    price: "289 ₽"
  }
];

export const productsAPI = {
  // Получить все продукты
  getAllProducts: (): Product[] => {
    return products;
  },
  
  // Получить продукт по ID
  getProductById: (id: number): Product | undefined => {
    return products.find(product => product.id === id);
  },
  
  // Получить основной продукт (первый в списке)
  getMainProduct: (): Product => {
    return products[0];
  },
  
  // Получить остальные продукты (со второго)
  getSmallProducts: (): Product[] => {
    return products.slice(1);
  }
};


export const useProducts = () => {
  return {
    products,
    mainProduct: products[0],
    smallProducts: products.slice(1)
  };
};

export default productsAPI;