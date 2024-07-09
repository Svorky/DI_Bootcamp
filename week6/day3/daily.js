class Video{
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
      }

      watch(){
        let s = `${this.uploader} watched all ${this.time} of ${this.title}!”`
        console.log(s)
      }
}

let video1 = new Video("Harry Potter", "John", 168)
let video2 = new Video("Load of the Rings", 'Adam', 300)
video1.watch()
video2.watch()

const movies = [
    {
      title: "Inception",
      uploader: "Christopher Nolan",
      time: 148 // 2 hours 28 minutes
    },
    {
      title: "The Matrix",
      uploader: "Lana Wachowski, Lilly Wachowski",
      time: 136 // 2 hours 16 minutes
    },
    {
      title: "Interstellar",
      uploader: "Christopher Nolan",
      time: 169 // 2 hours 49 minutes
    },
    {
      title: "Parasite",
      uploader: "Bong Joon-ho",
      time: 132 // 2 hours 12 minutes
    },
    {
      title: "The Godfather",
      uploader: "Francis Ford Coppola",
      time: 175 // 2 hours 55 minutes
    }
  ];

let videos = []
movies.forEach(
    movie =>
        videos.push(new Video(...Object.values(movie)))
)
videos.forEach(v=>v.watch())