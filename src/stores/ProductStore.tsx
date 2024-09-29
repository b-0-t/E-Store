// @ts-nocheck
import create from "zustand";
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number[];
}

interface ProductState {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [
    {
      id: 2,
      title: "iphone 12",
      price: 910,
      description: "iphone 12 is a good product",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901535-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNDU5Njh8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ4L2hiYi85NDA3NzMwODQzNjc4LmpwZ3wzMTBjNGJmZTRhNDY0OTg1ZDk1MWZmMjg4ZjhiY2E4YjE0ZDBmMjhiODkxNmZkMGQyYzcwNGIyM2U2NzEwM2E5",
      ratings: [4, 5, 3, 4, 5],
    },
    {
      id: 3,
      title: "iphone 13",
      price: 910,
      description: "iphone 13 is a good product",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Apple-iPhone-13-Smartphones-491997702-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDkzMTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGI5L2gxMS85ODc4MTAyNjA1ODU0LmpwZ3w5NGFjNjk3MDQ1ZmU2Y2Q1YmY0ZTljZWM4N2JkMjdhNzE0ZmVlZDQxYzJhNjExNDdkZjY1MmQwYjQ2YTc0NWJm",
      ratings: [5, 4, 4, 5, 4],
    },
    {
      id: 4,
      title: "iphone 14",
      price: 910,
      description: "iphone 14 is a good product",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/iPhone-14-Midnight-PDP-Image-493177749-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjk0MzJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDIyL2g2Yi8xMDAxNjgxMjkyNDk1OC5qcGd8NmE0OTVjMDMxMGYyYTJjYjUxMmEwNzIxYjA3M2ZiMzgxYTJjYWY2ODFlYzc0Yjc3NzZlYTA0NjljMzAyZjc0Zg",
      ratings: [4, 4, 5, 5, 4],
    },
    {
      id: 6,
      title: "iphone 15",
      price: 910,
      description: "iphone 15 is a good product",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Apple-iPhone-15-128GB-Yellow-493839311-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MDk0NTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDc4L2hiNS8xMDA1MjA4MTI4NzE5OC5qcGd8NjRkYTc0Zjg1NGM3N2Q2YzQ0MmQ3ZDhiMDVlNDY0YjZhZWRiNDg3N2E0ZmEwM2ZhZTBhMDE5ODJlNmZhYTQ5MA",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 7,
      title: "Samsung S24+",
      price: 1099,
      description: "Samsung S24+ 5G 256 GB, 12GB RAM, Onyx Black, Mobile Phone",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Samsung-S-Series-Plus-494352147-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0OTkzOHxpbWFnZS9qcGVnfGltYWdlcy9oNmYvaDMzLzEwMTAyNTg2NjcxMTM0LmpwZ3w2OGQ3MDhlZDYxMTBlMjAzNjNhMzI3ZTNkNGZiMzkwZjdiNGRlNTFjNjVlYWZiNjJlZDhkZjE4MmJiMDUxNjJh",
      ratings: [5, 4, 4, 3, 5],
    },
    {
      id: 8,
      title: "Samsung Galaxy Flip6",
      price: 1499,
      description:
        "Samsung Galaxy Flip6 512 GB, 12 GB RAM, Light Blue, Mobile Phone",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Samsung-Galaxy-Flip6-494422001-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNDYwMzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGE0L2hiZi8xMDE3MTA4NDA3OTEzNC5qcGd8YWIxZGUzMTgxZGMwNDUwOWY3NjkwOWJlMWVkNTAzNjhhZjJmZWIyYWJjMWVjODM0OTM1YWRhMjIxNzMxODc4NA",
      ratings: [4, 5, 4, 4, 3],
    },
    {
      id: 9,
      title: "Samsung Galaxy Fold6",
      price: 1599,
      description:
        "Samsung Galaxy Fold6 256 GB, 12 GB RAM, Light Pink, Mobile Phone",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Samsung-Galaxy-Fold6-494421980-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzQ4NjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGVhL2hkZC8xMDE3MTA5NTIyMDI1NC5qcGd8OWQ1YTBkNDBjMWYwYTlhZTQ3MGJlMzQ2MGY2MzBjN2NmNGIwODU3YWY3YTQ3NzVlZjQ2MDVjNTI5MzFkNzE5Ng",
      ratings: [5, 3, 4, 5, 4],
    },
    {
      id: 10,
      title: "Motorola Moto Razr 40",
      price: 599,
      description:
        "Motorola Moto Razr 40 Ultra 256 GB, 8 GB RAM, Ultra Magenta, Mobile Phone",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Moto-Razar-Viva-Magenta-493838321-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MTMwOHxpbWFnZS9qcGVnfGltYWdlcy9oMGEvaDQxLzEwMDE4NzgwNDQ2NzUwLmpwZ3w1ODVhMmRlMDM5MjJhZDA0MWYxNTA0NDc2ZWI3MjYzOGIwNzFjNTAwZjIwMGIzOGNkNTkzZmU0NDE1OTdlYjlm",
      ratings: [4, 5, 3, 4, 5],
    },
    {
      id: 11,
      title: "Oppo N3 Flip",
      price: 690,
      description: "Oppo N3 Flip 256 GB, 12 GB RAM, Sleek Black, Mobile Phone",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Oppo-N3-Flip-494267992-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDgxMTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDVmL2hhYS8xMDA2NDQ3MDYwNTg1NC5qcGd8YzM2NjRlOGFhOWVhMjYzMjMzYTgzOGVjMWZmMGU5MTNjOGI5ZjBlYjkxMzlmNWIwMTA2NWI5NjhlOTNmYThkNA",
      ratings: [3, 4, 4, 5, 4],
    },
    {
      id: 12,
      title: "Samsung Galaxy S23 Ultra",
      price: 1009,
      description:
        "Samsung Galaxy S23 Ultra 5G 256 GB, 12 GB RAM, Phantom Black, Mobile Phone",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Samsung-S23Ultra-493665085-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4OTc3OXxpbWFnZS9qcGVnfGltYWdlcy9oMTgvaDIyLzk5Njg0MzM4ODkzMTAuanBnfDQ2YjgzNTMyMDFhYjUyYzMyZDlhMGI5MTU4MGM1MDJhZmZhZWJlYWExYTkzYTc1NmVhYWQ4MjMyM2MwNWYwZDE",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 13,
      title: "Apple iPhone 15 Pro ",
      price: 1699,
      description: "Apple iPhone 15 Pro 512 GB, Blue Titanium",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Apple-iPhone15Pro-493839350-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzYzMjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDYyL2g4MS8xMDA1MTk0MDA1NzExOC5qcGd8YTJlYzM5MDk4ZWJiMDZlMjI4NTdjN2NjODJiZDM4ZWRlNGJiYTY0ODBhZDYyZTVhYTY5MjJkMTI3MDJlNTYyNA",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 14,
      title: "Samsung Galaxy S21 FE",
      price: 499,
      description: "Samsung Galaxy S21 FE 5G 256 GB, 8 GB, White, Mobile Phone",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Samsung-SM-G990EZWGINU-Smartphones-492575023-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NjAyNzN8aW1hZ2UvanBlZ3xpbWFnZXMvaGVhL2gxMS85ODA4ODUzMzAzMzI2LmpwZ3wwYWQ1NTNkMjUxYzBhOTQ4OGQxNjNjNWQ2Mzk5MzVkNzRmZTI2MmQyYmNiZjM2ZTdmNjlmOWU5Yzk1YzNiZDYw",
    },
    {
      id: 15,
      title: "Xiaomi 13 Pro 5G",
      price: 850,
      description:
        "Xiaomi 13 Pro 5G 256 GB, 12 GB RAM, Ceramic Black, Mobile Phone",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Xiaomi-13-Pro-Mobile-Phone-493665810-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MjA0N3xpbWFnZS9qcGVnfGltYWdlcy9oMzQvaDJmLzk5NzY0Nzg0OTg4NDYuanBnfDZlMjM5NDYzZjJlMmZlMDc0ZWQ5ZDViNDEyNzU5MjIyZDM2YWU1NjhlOTNjMGNiMmYyOWY3YjQxMmYyYWM3NzA",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 16,
      title: "OnePlus 11",
      price: 490,
      description: "OnePlus 11 5G 256 GB, 16 GB Ram, Titan Black, Mobile Phone",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/OnePlus-11-Mobile-Phone-493665044-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5Mzk4NXxpbWFnZS9qcGVnfGltYWdlcy9oMDIvaDFlLzk5NTk4Mjc2NjkwMjIuanBnfDZjODY2MGMwMTM1YzRmN2UzMWVmMTFkMDk2ZjVmNDUyZWNhNGM5MGY4OWRlOTAyNTUyZTgwMjlhMmRhZjg4ZjE",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 17,
      title: "Apple iPhone 15 Pro Max",
      price: 1900,
      description:
        "Apple iPhone 15 Pro Max 512 GB, White Titanium,Super Retina XDR display",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Apple-iPhone-15-Pro-Max-Mobile-Phone-493839360-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzk5NjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGUxL2hiMC8xMDA1MjExNzM2NDc2Ni5qcGd8NmVhYjdhMjBjNjkwNDNkNTI0ZDBmM2U2MzMxODMwODMzODZhOTg4YWU5MWFiMDg2NTdiZGJlMGM1YjQyYjA2Mg",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 18,
      title: "OnePlus 10T ",
      price: 679,
      description:
        "OnePlus 10T 5G 256 GB, 12 GB RAM, Jade Green, Mobile Phone,50 MP + 8 MP Back Camera",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/One-Plus-10T-Mobile-Phone-493177294-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjg5MjN8aW1hZ2UvanBlZ3xpbWFnZXMvaDgzL2gyMy85ODY5OTQxNjA0MzgyLmpwZ3w0NjgyNWJmMmI0MzA5ZjE2OThjODQ0OWE1YjlhNjM2ZGExMmIzYzg1ZThhNTA4MDYwZTFhZDcwNGJmYWM3NDBh",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 19,
      title: "Tecno Phantom V Fold",
      price: 760,
      description:
        "Tecno Phantom V Fold 5G, 256 GB 12 GB RAM, White, Mobile Phone,2k Resolution",
      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Techno-Phantom-Mobile-Phone-White-493837838-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MTU3NXxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDNkLzEwMDE1MDQ4NDAwOTI2LmpwZ3xkMzIzNDVkZmRlMzVmMjgxNTg3MDE4MGI3YzU3ZmE1Y2Y3N2VhMDE0NmY2NTg5NzUyNWVmNjlmZDE0Y2JjYWYw",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 20,
      title: "Apple iPhone 15 Plus",
      price: 1078,
      description:
        "Apple iPhone 15 Plus 512 GB, Yellow,Front Camera - 12 MP,Processor - A16 Bionic Chip",

      category: "phone",
      image:
        "https://www.reliancedigital.in/medias/Apple-iPhone-15-Plus-512-GB-Yellow-493839336-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MzU3NjR8aW1hZ2UvanBlZ3xpbWFnZXMvaGE4L2g3MC8xMDA1MTg2NzQ0MzIzMC5qcGd8Yzk3MzhmNjIyMDY5ZTU3ODIzOTA3ODIzODI3OTE1NWRmNDIxZmQ5MWY3NGQwYzVlMjIyZDE2NTMwNTJlNjc5Nw",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 21,
      title: "Apple MacBook air",
      price: 800,
      description:
        "Apple MGN63HNA MacBook Air (Apple M1 Chip/8GB/256GB SSD/macOS Big Sur/Retina), 33.78 cm (13.3 inch)",
      category: "laptop",
      image:
        "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 22,
      title: "ASUS TUF F15",
      price: 570,
      description:
        "Asus HN025WS TUF F15 Gaming Laptop (11th Gen Intel Core i5-11400H/16GB/512 SSD4 GB Graphics/NVIDIA GeForce RTX 2050/144Hz/Win 11 Home/MSO/FHD), 35.56 cm (15.6 inch)",
      category: "laptop",
      image:
        "https://www.reliancedigital.in/medias/Asus-Tuf-F15-HN025WS-Gaming-493837970-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDkxMTB8aW1hZ2UvanBlZ3xpbWFnZXMvaGU0L2g0MS8xMDAyMjQ1OTQwODQxNC5qcGd8Mzk0YjI2MjM2ZjZmNzhjOTdlMmJmMDZjZjNmMzFlZjJkMzM5OGQwMDI5Zjk4OTZhYzgzMzliMzU2MzRjNTRjMw",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 23,
      title: "Asus ROG Strix G",
      price: 899,
      description:
        "Asus HN083W ROG Strix G Gaming Laptop (AMD Ryzen 7 6800H/16GB/1TB SSD/NVIDIA GeForce RTX 3050 Graphics/Windows 11 Home/FHD), 39.62 cm (15.6 inch)",
      category: "laptop",
      image:
        "https://www.reliancedigital.in/medias/Asus-Strix-G-HN083W-493838344-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3Njc0NXxpbWFnZS9qcGVnfGltYWdlcy9oNDIvaGZiLzEwMDU2ODMzMjM3MDIyLmpwZ3w1OGMxNjU5MzhmMDdjZjAxZDhhYjgzMGNjODY3MWVjYWMxN2FlNzA4YjIxZjQ4NGJkNDUyYmE0ODYzNTk5ODYy",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 24,
      title: "Asus N3088WS ROG Strix G16",
      price: 950,
      description:
        "Asus N3088WS ROG Strix G16 Gaming Laptop (13th Gen Intel Core i5-13450HX/16GB/1TB SSD/NVIDIA GeForce RTX 3050 Graphics/Windows 11 Home/MSO/FHD+), 40.64 cm (16 inch)",
      category: "laptop",
      image:
        "https://www.reliancedigital.in/medias/Asus-Strix-G-16-N3088WS-494267917-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTY5MnxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaGE0LzEwMDU2ODMzODkyMzgyLmpwZ3wzNjAyNjJlODQ1N2U5OThlYTU2NTc5MDc3ZmI5MzYwMjQwZTBlZDEwZTBkYzhhZThlMmY0ZDAyYzllNGEwMjFm",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 25,
      title: "MSI Cyborg 15",
      price: 900,
      description:
        "MSI Cyborg 15 A12VE 071IN Gaming Laptop (Intel 12th Gen Intel i5-12450H/16 GB/512 GB /6GB Nvidia RTX4050 Graphics/Widnows 11/FHD/38.1 cm (15.6 Inch))",
      category: "laptop",
      image:
        "https://www.reliancedigital.in/medias/MSI-071IN-Cyborg-493838688-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MjUzMXxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaDBiLzEwMDM0ODE3NzYxMzEwLmpwZ3wxOTg2OTViZmQ1M2I1MTY1NmI5YzdjMWFlZGM1NjU4OWZmZTQxZGUzODgzZjVkODU3ZjQ5MTU5YWY0NjkyM2Fj",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 26,
      title: "HP Victus 15",
      price: 760,
      description:
        "HP Victus 15-fa0998TX Gaming Laptop (12th Gen Intel Core i5-12450H/16 GB/512 GB SSD/Nvidia GeForce /Windows 11 Home/Full HD), 39.6 cm (15.6 inch)",
      category: "laptop",
      image:
        "https://www.reliancedigital.in/medias/HP-V15-fa0998TX-493837767-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODQ4MDA0fGltYWdlL2pwZWd8aW1hZ2VzL2g2Yi9oYTIvMTAwMTE4NDcyOTUwMDYuanBnfDQxZWQwNGE3ZmY4MGNhNDBmN2RkMDRhZjdjYWMyOTI0YTY3MjU0YjE0NzJiOWE4NTFlYzk5NDc1ZjY3Nzg0ZDE",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 27,
      title: "Dell Inspiron 5530 G15",
      price: 850,
      description:
        "Dell Inspiron 5530 G15 Gaming Laptop (13th Gen Intel Core i5-13450HX/16GB RAM/512GB SSD/6GB Nvidia GeForce 3050/Windows 11/MSO/FHD/), 39.62 cm (15.6 Inch)",
      category: "laptop",
      image:
        "https://www.reliancedigital.in/medias/Dell-G15-5530-494352573-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MTQ4MjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDQzL2hhZS8xMDEyMTU4MDgwNjE3NC5qcGd8YTU0MWEwMjZjODU5ZTVmNTgyMTFmZDI0NDNlMTVlYzlkZWRmODMxN2M3MTM4ODcyMTAzNzYyMjFjYjIwZmUxNA",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 28,
      title: "Asus ROG Zephyrus G14 ",
      price: 1999,
      description:
        "Asus ROG Zephyrus G14 GA403UV-QS085WS Gaming Laptop (AMD Ryzen 9 8945HS/16 GB/1 TB SSD/NVIDIA/Windows 11/MS Office Home and Student/OLED), 35.56 cm (14 inch), Eclipse Gray",
      category: "laptop",
      image:
        "https://www.reliancedigital.in/medias/Asus-ROG-Zephyrus-G14-494421742-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2ODMyMDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDIwL2hlMS8xMDE3MDI4NTc4NTExOC5qcGd8ZjA1MmEyMWRiZGIyN2ExOTAyYzFmMDNiYzM4MzVlMjIyYWM2ODkxM2I1ZGMxMGRlMWI5OTBhYTVkMDQxZjc4NQ",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 29,
      title: "HP Omen 14-fb0007TX",
      price: 1899,
      description:
        "HP Omen 14-fb0007TX Gaming Laptop (Intel Core Ultra 7-155H/16 GB LPDDR5x - 7467 mhz/1 TB PCIe SSD/Nvidia GeForce RTX 4060 Graphics (8 GB GDDR6)/ 35.56 cm (14 inch) 2.8K, OLED. 48-120 Hz/OST W11/MSO), Shadow Black",
      category: "laptop",
      image:
        "https://www.reliancedigital.in/medias/HP-O14-fb0007tx-494353010-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzg2NzB8aW1hZ2UvanBlZ3xpbWFnZXMvaDdhL2hiOS8xMDE1Njg2NDgzMTUxOC5qcGd8ZmMzZWE3MTg0MzA5YTc3ZjMxYzA1NzQ1OWIzN2U1NGIyNjE1ZmU3ZjNiODkxYTRmYWJjMGM1NTAzOTE2ZmRlMA",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 30,
      title: "Lenovo DXIN Legion Slim 5",
      price: 1399,
      description:
        "Lenovo DXIN Legion Slim 5 Gaming Laptop (13th Intel Core i7-13620H/16 GB RAM/1TB SSD/8 GB/Nvidia GeForce RTX 4060 Graphics/Windows 11/MSO/WQXGA 40.64 cm (16 inch)",
      category: "laptop",
      image:
        "https://www.reliancedigital.in/medias/Lenovo-Ideapad-Laptop-494267967-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5NTQ0OXxpbWFnZS9qcGVnfGltYWdlcy9oMTYvaDI1LzEwMDYxMjgzNjIyOTQyLmpwZ3wxMjY5MzhmMWJhNzBjZDliMzQ3YWFmYjVkN2I4ZTU2NTIzYjk1ZjE4N2ZjNjk5YTRkMGM3N2QzZjU4MWUxNjFi",
      ratings: [3, 4, 5, 4, 5],
    },

    {
      id: 31,
      title: "Logitech G402 ",
      price: 54,
      description:
        "Logitech G402 Hyperion Fury Ultra-Fast FPS Gaming Mouse,8 Programmable Buttons, On-The-Fly DPI Switching",
      category: "accessories",
      image:
        "https://www.reliancedigital.in/medias/2d798983-48c4-4915-8901-e65607686298-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4NzAzNHxpbWFnZS9qcGVnfGltYWdlcy9oNWMvaGM5Lzg4MDQ5ODY0NTQwNDYuanBnfGNhZWFhNzUwMDZlZDA3MDcwMjc1OWE4M2VjZWIxODAwMzk2YmE1NTEzZmZiNGYwMmJhZWZjNWIxNTZiMTFjN2U",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 32,
      title: "SteelSeries Rival 105",
      price: 45,
      description:
        "SteelSeries Rival 105 62415 Gaming Mouse, Prism RGB Illumination, 3 area - 1 zone on wheel + logo, Custom S3059-SS sensor, 4000 DCPI, 140 IPS",
      category: "accessories",
      image:
        "https://www.reliancedigital.in/medias/Steel-Series-62415-Mouse-and-Mouse-Pad-491570709-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMTIzOXxpbWFnZS9qcGVnfGltYWdlcy9oZmUvaDU1LzkxNDg3NzQzMTgxMTAuanBnfGJmMTE3NzU2MDk0MmJiYTA3YzgzYTRmZWFkNjk3NDFhYzJjOTA4NDVkNTIyMWYyMGVmYjJlYTRmNmU5YTQ3ZjM",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 33,
      title: "Lenovo Legion M200",
      price: 10,
      description:
        "Lenovo Legion M200 Wired Gaming Mouse, Ambidextrous Comfortable Design, 7-Color RGB Backlight",
      category: "accessories",
      image:
        "https://www.reliancedigital.in/medias/Lenovo-GX30P93886-Mouse-491897342-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMDQ2OTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ2L2g0OS85MzcwNzgzNTgwMTkwLmpwZ3w1ODJkMzkzMzA5ZmU0YzgyZjM3NmQ0MWQzNDM4YjY0YjU1M2QwMzg2NGE1MDFhMTgwYmZkMTcxMDJmZmQ2YTQ5",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 34,
      title: "Asus ROG Gladius III",
      price: 59,
      description:
        "Asus ROG Gladius III Gaming Mouse with Instant button actuation, Aura Sync RGB lighting",
      category: "accessories",
      image:
        "https://www.reliancedigital.in/medias/Asus-ROG-Gladius-III-Gaming-Mouse-491998039-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3OTg1MXxpbWFnZS9qcGVnfGltYWdlcy9oZGQvaGUyLzk2NTkyMjA4MTk5OTguanBnfDcxY2IwNDk4ODczM2RkYmQwZjllOWUzMmFhODU3Mzk2ZjE4N2U1YjlhNTE5MzdhYzI0NDU1NTAxNTZhZjk0NjU",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 35,
      title: "Logitech G203",
      price: 15,
      description:
        "Logitech G203 USB Light Sync Wired Gaming Mouse with Customizable RGB Lighting, 6 Programmable Buttons, Gaming Grade Sensor, 8K DPI Tracking, 16.8 million Colour, Light Weight, Black",
      category: "accessories",
      image:
        "https://www.reliancedigital.in/medias/Logitech-Wired-Gaming-Mouse-494352936-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjQxMXxpbWFnZS9qcGVnfGltYWdlcy9oYjMvaDQyLzEwMTQxNTY4MTM5Mjk0LmpwZ3w1MzMzODUzYWNmN2U2MDhkZDM1Y2ZjMTk4YmYwYjM2ZjY0MmExNTZmNzkzMTVkYTEzZTdiYWJkZTczZDY3NWIx",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 36,
      title: "HP Photon Wireless Mouse ",
      price: 99,
      description:
        "HP Photon Wireless Mouse with Qi Charging , Black, Compatible with all Notebook and Desktop",
      category: "accessories",
      image:
        "https://www.reliancedigital.in/medias/HP-Photon-Mouse-and-Mouse-Pads-491996990-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjc4ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaDY3L2hjMy85NTgxNTYyNzU3MTUwLmpwZ3w5ZDQ4NTMyNjQ2MWNkNGM5ZDZjMDYzNmIzNDNiODRiYjBhODQzMDliNTI5ZTFjYWI0NWJlY2Y3NGFjNzJjMDg2",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 37,
      title: "HyperX Alloy Origins 60 ",
      price: 90,
      description:
        "HyperX Alloy Origins 60 - USB-C Mechanical Gaming Keyboard - Ultra Compact 60% Form Factor - (Aqua Switch) - Double Shot Pbt Keycaps - RGB Led Backlit - Ngenuity Software Compatible (56R61AA#ABA)",
      category: "accessories",
      image:
        "https://www.reliancedigital.in/medias/HyperX-Alloy-493665561-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjExNjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDY0L2g1ZC8xMDA0MzMyNTY3NzU5OC5qcGd8YzFlZDZiZTkyMmE2ZTAzMmQ3YjQ4MTkxMTk1ZGE4ZjQ1MDZiNDFiODhiNjllZDhiNjQ1NjhiZTMyNDQxNWMxZQ",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 38,
      title: "Lapcare Champ Series LGK-108",
      price: 89,
      description:
        "Lapcare Champ Series LGK-108 Wired Keyboard, RGB Backligting, Gaming Mode, 2x USB Pass Through Port",
      category: "accessories",
      image:
        "https://www.reliancedigital.in/medias/Lapcare-LGK-108-Keyboards-493665206-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDQ2MDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGZmL2g3OC85OTg0NTM3OTg1MDU0LmpwZ3w3MWRiMGRkYTQwZGY4MWMxN2VlZDE1OGZkNTQyMjkxMDRlMDQ2NzQ0NDk5ODJjOTJlZTMwZGEzOTEzYzk0MDNm",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 39,
      title: "Zebronics Zeb-Max ",
      price: 47,
      description:
        "Zebronics Zeb-Max Chroma Mechanical Gaming Keyboard with 6 LED Speed Modes, Heavy Duty, 5 Brightness Levels + 1 LED Off Mode",
      category: "accessories",
      image:
        "https://www.reliancedigital.in/medias/ZEBRONICS-ZEB-KBMULTIMEDIA-MAXCHROMA-USBKEYBOARD-491998407-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTM3MDd8aW1hZ2UvanBlZ3xpbWFnZXMvaGYxL2hiMS85NjcyNTE3MTg5NjYyLmpwZ3xiMTIwY2RhZmY5ZDU3NTIwMWRkMWNlMGU4YmY4OTI2N2VlMjQzNzk5YmNiMmQxNTkxMDQyNWJjZmZkNzZhNDQ4",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 40,
      title: "Zebronics Zeb-Max Pro",
      price: 38,
      description:
        "Zebronics Zeb-Max Pro V2 Gaming Mechanical Keyboard with 6 LED Speed Modes, 4 Brightness Levels + 1 LED Off Mode",
      category: "accessories",
      image:
        "https://www.reliancedigital.in/medias/Zebronics-Zeb-Max-Pro-V2-Keyboard491998409-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NDE2M3xpbWFnZS9qcGVnfGltYWdlcy9oMzgvaDliLzk2NzI1MTY1MzQzMDIuanBnfDhhNTRmYjM3MTdmMTUwNTI5MDdlYmFjZjY3MjliYjU1YzczODQyMjQ2YzE0NmM5NGYyNjkzN2YzZTVjYjc4ZmY",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 41,
      title: "JBL Quantum 100",
      price: 34,
      description:
        "JBL Quantum 100 Wired Over-Ear Gaming Headset with Detachable Mic for PC, Mobile, Laptop, PS4, Xbox, Nintendo Switch, VR (Black)",
      category: "accessories",
      image:
        "https://www.reliancedigital.in/medias/JBL-Quantum-100-Headphone-491893371-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2ODcwMHxpbWFnZS9qcGVnfGltYWdlcy9oNjcvaDRiLzk2MDgwNzk1MDc0ODYuanBnfGZhN2JhODJjOWMwMTEwYzUyZjU0Y2Q4NjIzOWQ1ZmNjMGI4Mjc4YzA5YjFlZmY2ZTFhYzQzYzVlMjcyYzdjNjk",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 42,
      title: "JBL Live 660NC",
      price: 99,
      description:
        "JBL Live 660NC Wireless Headphone with Noise Cancellation, Up to 50 hours of playtime, Voice assistance, Multi-point connectivity, 40 mm Dynamic Driver, Ambient Aware technology, Black",
      category: "accessories",
      image:
        "https://www.reliancedigital.in/medias/JBL-660NC-Wireless-Bluetooth-Noise-Cancelling-Headphones-Black-492338701-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNTU1NDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDdhL2gxZC85NjAxNTI4MTAyOTQyLmpwZ3xlYmJkMWUzZmIxMjZlMjdmN2Q1ZjFmNmNkYTg4OGQxZGQ5YjdiMTUzYzJmZjE1ZWJkMmNjMzc1YTM3ZjIyNGFi",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 43,
      title: "Reconnect 109 cm",
      price: 179,
      description:
        "Reconnect 109 cm (43 inch) FHD Smart Neo TV 43F4330S, Supported Apps: Prime Video, Zee5, Sony Liv, Hungama, Eros Now, Operating System: Coolita 2.0 ",
      category: "TV",
      image:
        "https://www.reliancedigital.in/medias/Reconnect-TV-43F4330S-493841907-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjE2MHxpbWFnZS9qcGVnfGltYWdlcy9oNTIvaDZhLzEwMDM1MzAyNzI3NzEwLmpwZ3w2NmYxNjdlYTU1YjAwODBjNzE2YTlkODU1YzgyZGFhY2VkMzkzMzIxM2JkNWE5ZGRkMTYwYjg4NGNiOGZiOWU5",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 44,
      title: "LG 139 cm",
      price: 1500,
      description:
        "LG 139 cm (55 inch) Ultra HD (4K) OLED Smart TV, OLED55C2XSC, Supported Apps: Netflix, Prime Video, Disney+ Hotstar ",
      category: "TV",
      image:
        "https://www.reliancedigital.in/medias/LG-OLED55C2XSC-TELEVISION-492912918-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjg1NDR8aW1hZ2UvanBlZ3xpbWFnZXMvaGZjL2hlMS85ODQ1ODM0MTIxMjQ2LmpwZ3xkMzM4ZTlkZWMwNWQ2NDk1MjkwMzNhNmM1NmEwNjEzODdiMTJmOWUzZTYzZmMxNmRhZWMwZDg3OTZjZGVjYTEw",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 45,
      title: "Samsung 190.5 cm",
      price: 1599,
      description:
        "Samsung 190.5 cm (75 inch) UHD Smart LED TV 75CU8000, Supported Apps: Netflix, YouTube, Amazon Prime, AppleTV",
      category: "TV",
      image:
        "https://www.reliancedigital.in/medias/Samsung-UA75CU8000KXXL-493711923-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTQ2NjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDUyL2gxMy8xMDAwODA2NDU4OTg1NC5qcGd8ZTcyYWM5ODU0M2RiMWI0NTM0YmFjYTgwN2Q0MDQyY2YxNmUwZGExMWI2MjQwNDMzNGQ0YjBjOGIxYzc2YmUxNA",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 46,
      title: "Samsung 137.7 cm",
      price: 1799,
      description:
        "Samsung 137.7 cm (55 inch) OLED Smart LED TV 55S90C, Neural Quantum Processor 4K",
      category: "TV",
      image:
        "https://www.reliancedigital.in/medias/Samsung-Oled-Smart-Led-Tv-493841862-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NTE4MjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDUwL2g4OC8xMDA2Nzg5OTUxNDkxMC5qcGd8OGFlMmI5NmM2N2VmMDk4ZDRiYTg5OTg1YTM0MjkxNmNhMTkyMTYxNTAyMTY1MDczMzY5NDRkN2ViODkzYTZlMw",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 47,
      title: "Sony Bravia 195 cm ",
      price: 5599,
      description:
        "Sony Bravia 195 cm (77 inches) XR Series 4K Ultra HD Smart OLED Google TV XR-77A80L, Black",
      category: "TV",
      image:
        "https://www.reliancedigital.in/medias/Sony-XR-77A80L-Television-493842046-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDE3MzU5fGltYWdlL2pwZWd8aW1hZ2VzL2gzYy9oYzAvMTAwMjUyNTY4MTI1NzQuanBnfDU0ZTA2MTA4OTFmMWQxMzY2ZWYzODYzM2I0YTZhMWY1NTVlN2RlOGY5Mjc1YmY0NWQyMmMxODYzYzQ2NTdlMmI",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 48,
      title: "Sony Bravia 164 cm ",
      price: 2999,
      description:
        "Sony Bravia 164 cm (65 inches) XR Series 4K Ultra HD Smart OLED Google TV XR-65A80L, Black",
      category: "TV",
      image:
        "https://www.reliancedigital.in/medias/Sony-XR-65A80L-Television-493837811-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDE3MzU5fGltYWdlL2pwZWd8aW1hZ2VzL2g2Yy9oMWQvMTAwMjUyNTY0ODQ4OTQuanBnfDcwYjU5OTZlNzZjMWFlZDE0YjFkZjdkNDk5NTNlMTA0MjY1NGU4NGZjZWRiMmZjYjM0ZTBmZGEwNzZmNTQwMGQ",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 49,
      title: "Apple Watch Series 9",
      price: 460,
      description:
        "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case with Starlight Sport Loop ",
      category: "watch",
      image:
        "https://www.reliancedigital.in/medias/Apple-Watch-Series9-493839583-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjI5OTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGZmL2hiNC8xMDA1MTA4MzY2NTQzOC5qcGd8ODFmNmFkY2MyODZkNTI0M2M1ZDk2ZDhjNTBiZGY0ZWNmNTM0OWYyYjM4YTM1MDYzZGYwMTIyZjMzNmFhOWUxYw",
      ratings: [3, 4, 5, 4, 5],
    },
    {
      id: 50,
      title: "Apple Watch Series 9",
      price: 430,
      description:
        "Apple Watch Series 9 GPS 41mm Midnight Aluminium Case with Midnight Sport Loop",
      category: "watch",
      image:
        "https://www.reliancedigital.in/medias/Apple-Watch-Series9-493839586-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDU2Nzh8aW1hZ2UvanBlZ3xpbWFnZXMvaDZiL2hmYi8xMDA1MTA4Mzk5MzExOC5qcGd8MTI4YzkxZWE3Y2JlNGM5MjRmNzdmYTdhMjAzODQ3ZGY0MmI3OGMyZDgwY2Y4NGUwZTMyZDVhMzI2Mjg4ZWI3YQ",
      ratings: [3, 4, 5, 4, 5],
    },
  ],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
    })),
  deleteProduct: (id) =>
    set((state) => ({ products: state.products.filter((p) => p.id !== id) })),
}));
