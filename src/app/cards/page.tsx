import Cards from "@/components/card";
const products = [
  {
    id: 1,
    name: "React cheat sheet",
    href: "#",
    price: "",
    imageSrc:
      "https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Sheet with example code",
  },
  {
    id: 2,
    name: "Conference talk",
    href: "#",
    price: "",
    imageSrc:
      "https://images.pexels.com/photos/6949978/pexels-photo-6949978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Person speaking at podium",
  },
  {
    id: 3,
    name: "Class notes",
    href: "#",
    price: "",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Hobby list",
    href: "#",
    price: "",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];
export default function Page() {
  return (
    <div>
      <Cards items={products} />
    </div>
  );
}
