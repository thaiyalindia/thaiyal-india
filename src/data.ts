import { Product, GalleryItem, Review } from './types';

// Product page images
import productQuilt from './assets/products/product_quilt.jpg';
import productPillow from './assets/products/product_pillow.jpg';
import productToys from './assets/products/product_toys.jpg';
import productTshirts from './assets/products/product_tshirts.jpg';

// Gallery - Memory Quilts (1-13)
import q1 from './assets/gallery/quilts/q1.jpg';
import q2 from './assets/gallery/quilts/q2.jpg';
import q3 from './assets/gallery/quilts/q3.jpg';
import q4 from './assets/gallery/quilts/q4.jpg';
import q5 from './assets/gallery/quilts/q5.jpg';
import q6 from './assets/gallery/quilts/q6.jpg';
import q7 from './assets/gallery/quilts/q7.jpg';
import q8 from './assets/gallery/quilts/q8.jpg';
import q9 from './assets/gallery/quilts/q9.jpg';
import q10 from './assets/gallery/quilts/q10.jpg';
import q11 from './assets/gallery/quilts/q11.jpg';
import q12 from './assets/gallery/quilts/q12.jpg';
import q13 from './assets/gallery/quilts/q13.jpg';

// Gallery - Memory Pillows (14-24)
import p14 from './assets/gallery/pillows/p14.jpg';
import p15 from './assets/gallery/pillows/p15.jpg';
import p16 from './assets/gallery/pillows/p16.jpg';
import p17 from './assets/gallery/pillows/p17.jpg';
import p18 from './assets/gallery/pillows/p18.jpg';
import p19 from './assets/gallery/pillows/p19.jpg';
import p20 from './assets/gallery/pillows/p20.jpg';
import p21 from './assets/gallery/pillows/p21.jpg';
import p22 from './assets/gallery/pillows/p22.jpg';
import p23 from './assets/gallery/pillows/p23.jpg';
import p24 from './assets/gallery/pillows/p24.jpg';

// Gallery - Memory Toys (25-35)
import t25 from './assets/gallery/toys/t25.jpg';
import t26 from './assets/gallery/toys/t26.jpg';
import t27 from './assets/gallery/toys/t27.jpg';
import t28 from './assets/gallery/toys/t28.jpg';
import t29 from './assets/gallery/toys/t29.jpg';
import t30 from './assets/gallery/toys/t30.jpg';
import t31 from './assets/gallery/toys/t31.jpg';
import t32 from './assets/gallery/toys/t32.jpg';
import t33 from './assets/gallery/toys/t33.jpg';
import t34 from './assets/gallery/toys/t34.jpg';
import t35 from './assets/gallery/toys/t35.jpg';

// Gallery - Custom T-Shirts (36-44)
import s36 from './assets/gallery/tshirts/s36.jpg';
import s37 from './assets/gallery/tshirts/s37.jpg';
import s38 from './assets/gallery/tshirts/s38.jpg';
import s39 from './assets/gallery/tshirts/s39.jpg';
import s40 from './assets/gallery/tshirts/s40.jpg';
import s41 from './assets/gallery/tshirts/s41.jpg';
import s42 from './assets/gallery/tshirts/s42.jpg';
import s43 from './assets/gallery/tshirts/s43.jpg';
import s44 from './assets/gallery/tshirts/s44.jpg';

export const products: Product[] = [
  {
    id: 'quilts',
    name: 'Memory Quilts',
    category: 'Memory Quilts',
    description: 'Transform baby clothes, T-shirts, sarees, or school uniforms into a warm, functional memory quilt.',
    longDescription: 'Transform baby clothes, T-shirts, sarees, or school uniforms into a warm, functional memory quilt. Each handmade quilt from old clothes is a tapestry of your most cherished milestones, a meaningful memorial quilt or baby clothes quilt, meticulously hand-stitched to preserve stories that deserve to be held.',
    mainImage: productQuilt,
    images: [q1, q2]
  },
  {
    id: 'toys',
    name: 'Memory Toys',
    category: 'Memory Toys',
    description: 'A tangible connection to the past, lovingly crafted from garments that mean the world to you.',
    longDescription: 'Our memory toys offer a tangible connection to the past. Lovingly crafted from garments that mean the world to you, these keepsake toys made from old clothes provide comfort and a lifetime of smiles. From heirloom teddy bears to whimsical softies, we give your clothes a new soul.',
    mainImage: productToys,
    images: [t25]
  },
  {
    id: 'pillows',
    name: 'Memory Pillows & Cushion Covers',
    category: 'Memory Pillows',
    description: 'Add a touch of sentiment to your home decor with cushions handcrafted from sarees or shirts.',
    longDescription: 'Add a touch of sentiment to your home decor. Whether it\u2019s a favourite shirt or a wedding saree, we turn them into beautiful memory pillows from old clothes that hold memories close. A subtle yet powerful way to keep the presence of loved ones in your daily living space.',
    mainImage: productPillow,
    images: [p14]
  },
  {
    id: 'shirts',
    name: 'Custom T-Shirts',
    category: 'Custom T-Shirts',
    description: 'Modern apparel accented with meaningful patchwork, perfect for gifting or personal style.',
    longDescription: 'Perfect for gifting or personal style. We highlight precious fabric pieces through expert embroidery and patchwork, giving old clothes a new life as an upcycled custom t-shirt. Each shirt is a wearable piece of art that tells a unique personal story through colour and texture.',
    mainImage: productTshirts,
    images: [s36]
  }
];

export const galleryItems: GalleryItem[] = [
  // Memory Quilts
  { id: 'q1', title: 'Memory Quilt', category: 'Memory Quilts', image: q1 },
  { id: 'q2', title: 'Memory Quilt', category: 'Memory Quilts', image: q2 },
  { id: 'q3', title: 'Memory Quilt', category: 'Memory Quilts', image: q3 },
  { id: 'q4', title: 'Memory Quilt', category: 'Memory Quilts', image: q4 },
  { id: 'q5', title: 'Memory Quilt', category: 'Memory Quilts', image: q5 },
  { id: 'q6', title: 'Memory Quilt', category: 'Memory Quilts', image: q6 },
  { id: 'q7', title: 'Memory Quilt', category: 'Memory Quilts', image: q7 },
  { id: 'q8', title: 'Memory Quilt', category: 'Memory Quilts', image: q8 },
  { id: 'q9', title: 'Memory Quilt', category: 'Memory Quilts', image: q9 },
  { id: 'q10', title: 'Memory Quilt', category: 'Memory Quilts', image: q10 },
  { id: 'q11', title: 'Memory Quilt', category: 'Memory Quilts', image: q11 },
  { id: 'q12', title: 'Memory Quilt', category: 'Memory Quilts', image: q12 },
  { id: 'q13', title: 'Memory Quilt', category: 'Memory Quilts', image: q13 },

  // Memory Pillows
  { id: 'p14', title: 'Memory Pillow', category: 'Memory Pillows', image: p14 },
  { id: 'p15', title: 'Memory Pillow', category: 'Memory Pillows', image: p15 },
  { id: 'p16', title: 'Memory Pillow', category: 'Memory Pillows', image: p16 },
  { id: 'p17', title: 'Memory Pillow', category: 'Memory Pillows', image: p17 },
  { id: 'p18', title: 'Memory Pillow', category: 'Memory Pillows', image: p18 },
  { id: 'p19', title: 'Memory Pillow', category: 'Memory Pillows', image: p19 },
  { id: 'p20', title: 'Memory Pillow', category: 'Memory Pillows', image: p20 },
  { id: 'p21', title: 'Memory Pillow', category: 'Memory Pillows', image: p21 },
  { id: 'p22', title: 'Memory Pillow', category: 'Memory Pillows', image: p22 },
  { id: 'p23', title: 'Memory Pillow', category: 'Memory Pillows', image: p23 },
  { id: 'p24', title: 'Memory Pillow', category: 'Memory Pillows', image: p24 },

  // Memory Toys
  { id: 't25', title: 'Memory Toy', category: 'Memory Toys', image: t25 },
  { id: 't26', title: 'Memory Toy', category: 'Memory Toys', image: t26 },
  { id: 't27', title: 'Memory Toy', category: 'Memory Toys', image: t27 },
  { id: 't28', title: 'Memory Toy', category: 'Memory Toys', image: t28 },
  { id: 't29', title: 'Memory Toy', category: 'Memory Toys', image: t29 },
  { id: 't30', title: 'Memory Toy', category: 'Memory Toys', image: t30 },
  { id: 't31', title: 'Memory Toy', category: 'Memory Toys', image: t31 },
  { id: 't32', title: 'Memory Toy', category: 'Memory Toys', image: t32 },
  { id: 't33', title: 'Memory Toy', category: 'Memory Toys', image: t33 },
  { id: 't34', title: 'Memory Toy', category: 'Memory Toys', image: t34 },
  { id: 't35', title: 'Memory Toy', category: 'Memory Toys', image: t35 },

  // Custom T-Shirts
  { id: 's36', title: 'Custom T-Shirt', category: 'Custom T-Shirts', image: s36 },
  { id: 's37', title: 'Custom T-Shirt', category: 'Custom T-Shirts', image: s37 },
  { id: 's38', title: 'Custom T-Shirt', category: 'Custom T-Shirts', image: s38 },
  { id: 's39', title: 'Custom T-Shirt', category: 'Custom T-Shirts', image: s39 },
  { id: 's40', title: 'Custom T-Shirt', category: 'Custom T-Shirts', image: s40 },
  { id: 's41', title: 'Custom T-Shirt', category: 'Custom T-Shirts', image: s41 },
  { id: 's42', title: 'Custom T-Shirt', category: 'Custom T-Shirts', image: s42 },
  { id: 's43', title: 'Custom T-Shirt', category: 'Custom T-Shirts', image: s43 },
  { id: 's44', title: 'Custom T-Shirt', category: 'Custom T-Shirts', image: s44 }
];

export const homeReviews: Review[] = [
  {
    id: 'hr1',
    name: 'Taniya',
    text: 'It was the best choice for me to have Thaiyal India create my baby\u2019s memory quilt. Each item of clothing had a unique narrative, and the team made the most of it. We were blown away by the quilt\u2019s appearance when it arrived.',
    rating: 5
  },
  {
    id: 'hr2',
    name: 'Ridhan',
    text: 'Pavithra was very patient and accommodating of all the design ideas I had in mind for my daughter\u2019s memory quilt. We are very much impressed with the quilt\u2019s quality and look. I highly recommend Thaiyal India.',
    rating: 5
  },
  {
    id: 'hr3',
    name: 'Harsh',
    text: 'The quilt and pillow turned out even more beautiful than I imagined! Every little piece of fabric holds such precious memories, and they\u2019ve stitched them together with so much love and care. Truly a keepsake I\u2019ll cherish forever.',
    rating: 5
  }
];

export const galleryReviews: Review[] = [
  {
    id: 'gr1',
    name: 'Adhidev',
    text: 'I liked the quilt a lot, everyone in my family was surprised by the recreation and they all liked it. I personally liked the way you listened and incorporated all my suggestions patiently. My heartfelt thanks and best wishes to you and your team.',
    rating: 5
  },
  {
    id: 'gr2',
    name: 'Verified Customer',
    text: 'I have ordered a memory quilt to be stitched from my late mother-in-law\u2019s saree as a gift for my husband. Thaiyal India did a great job without damaging the saree and by stitching a high quality quilt. They are very friendly and approachable.',
    rating: 5
  },
  {
    id: 'gr3',
    name: 'Verified Customer',
    text: 'I got a beautiful memory blanket made for my nephew\u2019s first birthday from his old clothes, and I couldn\u2019t be happier with how it turned out! Every detail was handled with such care, from the design to the finishing touches.',
    rating: 5
  },
  {
    id: 'gr4',
    name: 'Verified Customer',
    text: 'I received my son\u2019s memory quilt today, and I don\u2019t have enough words. You\u2019ve handled his clothes and memories with so much care and respect. Every stitch feels full of love. I will cherish this forever.',
    rating: 5
  },
  {
    id: 'gr5',
    name: 'Verified Customer',
    text: 'I had a wonderful experience with the team at Thaiyal India. From the very beginning, they were professional, friendly, and attentive to my needs. I truly felt valued as a customer and will definitely be returning.',
    rating: 5
  },
  {
    id: 'gr6',
    name: 'Verified Customer',
    text: 'I just saw the quilt while taking it to my parents. It looks very neat and the stitching looked perfect. Thank you for not missing the cute designs and prints from the clothes and bringing them to the quilt. A beautiful keepsake!',
    rating: 5
  }
];
