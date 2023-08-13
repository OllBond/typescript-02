/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
  Цей інтерфейс відображає структуру page1 та page2. 
  Однак, варто врахувати, що page2 не містить ключа details, 
  тому в інтерфейсі ми робимо це поле необов'язковим за допомогою оператора ?.
*/
type Pages = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};
const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};
