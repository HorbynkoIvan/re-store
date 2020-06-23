export default class BookstoreService {
    data = [
        {
            id: 1,
            title: "Production-ready microservices",
            author: 'Susan J. Fowler',
            price: 31.33,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: "Microservice Architecture",
            author: 'Mike Amundsen',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51qSYJTTVUL._SX379_BO1,204,203,200_.jpg'
        },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.data), 1000)
        })
    }
}