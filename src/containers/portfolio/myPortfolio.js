import ImageMarvel from '../../images/marvel.png';
import ImageToDoList from '../../images/todolist.png';
import ImageNothing from '../../images/nothing.png';
import ImageCryptoverse from '../../images/cryptoverse.png'

export const portfolioData = [
    {
      id: 2,
      name: "Cryptoverse",
      image: ImageCryptoverse,
      link: 'https://cryptoverce-shashkov.netlify.app/',
    },

    {
      id: 2,
      name: "Marvel Website",
      image: ImageMarvel,
      link: 'https://shashkov-test.github.io/marveltest/',
    },
  
    {
      id: 2,
      name: "TodoList",
      image: ImageToDoList,
      link: 'https://shashkov-todo-list.netlify.app/',
    },
  
    {
      id: 3,
      name: "Nothing here.....",
      image: ImageNothing,
      link: 'http://www.thereisnothinghere.com/',
    },

    /* {
      id: 2,
      name: "Random online store",
      image: ImageNothing,
      link: 'http://www.thereisnothinghere.com/',
    }, */
];
  
export const filterData = [
    {
        filterId: 1,
        label: "All"
    },

    {
        filterId: 2,
        label: "Development"
    },

    {
        filterId: 3,
        label: "Something else"
    },
];