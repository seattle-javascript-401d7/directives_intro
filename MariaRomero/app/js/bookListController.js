const bookSaleApp = require(__dirname + '/bookSaleApp');

bookSaleApp.controller('BookListController', function() {

  const books = [
    { title: 'Anna Karenina', author: 'Leo Tolstoy', category: 'classics', price: '$5.95' },
    { title: 'Moby Dick', author: 'Herman Melville', category: 'classics', price: '$8.95' },
    { title: 'On the Road', author: 'Jack Kerouac', category: 'classics', price: '$4.50' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', category: 'classics', price: '$9.95' },
    { title: 'The Hound of the Baskervilles', author: 'Conan Doyle', category: 'mystery',
    price: '$7.95' },
    { title: 'The Maltese Falcon', author: 'Dashiell Hammett', cateogory: 'mystery',
    price: '$6.75' },
    { title: 'And Then There Were None', author: 'Agatha Christie', category: 'mystery',
    price: '$5.95' },
    { title: 'Ender\'s Game', author: 'Orson Scott Card', category: 'science-fiction',
    price: '$7.75' },
    { title: 'The Dune Chronicles', author: 'Frank Herbert', category: 'science-fiction',
    price: '$5.95' },
    { title: 'I Robot', author: 'Isaac Asimov', category: 'science-fiction', price: '$8.50' }
  ];

  this.shoppingCart = [];

  this.showAllBooks = () => {
    this.books = books;
  };

  this.addToCart = (book) => {
    this.shoppingCart.push(book);
  };

  this.removeFromCart = (book) => {
    this.shoppingCart.splice(this.shoppingCart.indexOf(book), 1);
  };
});
