import fs from "fs";
import path from "path";

// export default function(req, res) {
//   res.setHeader('Content-Type', 'image/jpg')

//   res.send(imageBuffer)
// }

function videoListCreator() {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    const filePath = "/movies/video" + (i + 1) + ".mp4";
    // const imageBuffer = fs.readFileSync(filePath)
    arr.push({
      url: filePath,
      type: "video",
      header: {
        heading: "Tushar Moolya",
        subheading: "Posted 5h ago",
        profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png",
      },
    });
  }
  return arr;
}
export default function (req, res) {
  try {
    const movies = videoListCreator();
    console.log(movies, "hello world");
    res.status(200).json({ movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
}
