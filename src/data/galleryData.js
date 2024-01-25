import pp01 from '../assets/galerija/vestuves/paslaugos_1.jpeg';
import wp01 from '../assets/galerija/krikstynos/paslaugos_2.jpeg';
import lp01 from '../assets/galerija/kita/paslaugos_3.jpeg';

const galleryData = [
  {
    category: "vestuves",
    topicList: [
      {
        id: 1,
        topic: "J&B", 
        list: [
          { id: 1, imageUrl: pp01 },
          { id: 2, imageUrl: pp01 }, 
          { id: 3, imageUrl: pp01 }, 
          { id: 4, imageUrl: pp01 }, 
          { id: 5, imageUrl: pp01 }, 
          { id: 6, imageUrl: pp01 },
        ],
      },
      { id: 2, topic: "D&V", list: [{ id: 7, imageUrl: pp01 }], },
      { id: 3, topic: "R&G", list: [{ id: 8, imageUrl: pp01 }], },
      { id: 4, topic: "A&A", list: [{ id: 9, imageUrl: pp01 }], },
      { id: 5, topic: "K&T", list: [{ id: 10, imageUrl: pp01 }], },
      { id: 6, topic: "Z&O", list: [{ id: 11, imageUrl: pp01 }], },
    ]
  },
  {
    category: "krikstynos",
    topicList: [
      { 
        id: 7, 
        topic: "A krikštynos",
        list: [
          { id: 12, imageUrl: wp01 },
          { id: 13, imageUrl: wp01 }, 
          { id: 14, imageUrl: wp01 }, 
          { id: 15, imageUrl: wp01 }, 
          { id: 16, imageUrl: wp01 }, 
          { id: 17, imageUrl: wp01 },
        ],
      },
      { id: 8, topic: "B gimtadienis", list: [{ id: 18, imageUrl: wp01 }], },
      { id: 9, topic: "C gimtadienis", list: [{ id: 19, imageUrl: wp01 }], },
      { id: 10, topic: "D krikštynos", list: [{ id: 20, imageUrl: wp01 }], },
      { id: 11, topic: "E gimtadienis", list: [{ id: 21, imageUrl: wp01 }], },
      { id: 12, topic: "F krikštynos", list: [{ id: 22, imageUrl: wp01 }], },
    ]
  },
  {
    category: "kita",
    topicList: [
      {
        id: 13,
        topic: "Kažkas", 
        list: [
          { id: 23, imageUrl: lp01, },
          { id: 24, imageUrl: lp01, },
          { id: 25, imageUrl: lp01, },
          { id: 26, imageUrl: lp01, },
          { id: 27, imageUrl: lp01, },
          { id: 28, imageUrl: lp01, },
        ],
      },
      { id: 14, topic: "Kažkas 2", list: [{ id: 29, imageUrl: lp01 }], },
      { id: 15, topic: "Kažkas 3", list: [{ id: 30, imageUrl: lp01 }], },
      { id: 16, topic: "Kažkas 4", list: [{ id: 31, imageUrl: lp01 }], },
      { id: 17, topic: "Kažkas 5", list: [{ id: 32, imageUrl: lp01 }], },
      { id: 18, topic: "Kažkas 6", list: [{ id: 33, imageUrl: lp01 }], },
    ]
  },
];

export default galleryData;