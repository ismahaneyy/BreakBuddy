// const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const socketIO = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("server");
// });

// // socket.io
// let imageUrl, roomIdGlobal;

// const loadUserModule = async () => {
//   const { userJoin, getUsers, userLeave, getUser } = await import("./utils/users.cjs");
//   return { userJoin, getUsers, userLeave, getUser };
// };

// io.on("connection", async (socket) => {
//   const { userJoin, getUsers, userLeave, getUser } = await loadUserModule();

//   socket.on("user-joined", (data) => {
//     const { roomId, userId, userName, host, presenter } = data;
//     roomIdGlobal = roomId; // Update roomIdGlobal when a user joins a room
//     const user = userJoin(socket.id, userName, roomId, host, presenter);
//     const roomUsers = getUsers(user.room);
//     socket.join(user.room);
//     socket.broadcast.to(user.room).emit("message", {
//       message: `${user.username} has joined`,
//     });

//     io.to(user.room).emit("users", roomUsers);
//     io.to(user.room).emit("canvasImage", imageUrl);
//   });

//   socket.on("drawing", (data) => {
//     imageUrl = data;
//     socket.broadcast.to(roomIdGlobal).emit("canvasImage", imageUrl);
//   });

//   socket.on("message", (data) => {
//     const { message } = data;
//     const user = getUser(socket.id);
//     if (user) {
//       socket.broadcast.to(roomIdGlobal).emit("messageResponse", { message, name: user.username });
//     }
//   });

//   socket.on("disconnect", () => {
//     const userLeaves = userLeave(socket.id);
//     const roomUsers = getUsers(roomIdGlobal);

//     if (userLeaves) {
//       io.to(userLeaves.room).emit("message", {
//         message: `${userLeaves.username} left the chat`,
//       });
//       io.to(userLeaves.room).emit("users", roomUsers);
//     }
//   });
// });

// // serve on port
// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () =>
//   console.log(`server is listening on http://localhost:${PORT}`)
// );










// const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const socketIO = require("socket.io");

// // Import user module directly using require
// const { userJoin, getUsers, userLeave, getUser } = require("./utils/users.cjs");

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("server");
// });

// // Socket.io logic
// let imageUrl, roomIdGlobal;

// io.on("connection", (socket) => {
//   // Handle user joining
//   socket.on("user-joined", (data) => {
//     const { roomId, userId, userName, host, presenter } = data;
//     roomIdGlobal = roomId; // Update roomIdGlobal when a user joins a room
//     const user = userJoin(socket.id, userName, roomId, host, presenter);
//     const roomUsers = getUsers(user.room);
//     socket.join(user.room);
//     socket.broadcast.to(user.room).emit("message", {
//       message: `${user.username} has joined`,
//     });

//     io.to(user.room).emit("users", roomUsers);
//     io.to(user.room).emit("canvasImage", imageUrl);
//   });

//   // Handle drawing updates
//   socket.on("drawing", (data) => {
//     imageUrl = data;
//     socket.broadcast.to(roomIdGlobal).emit("canvasImage", imageUrl);
//   });

//   // Handle chat messages
//   socket.on("message", (data) => {
//     const { message } = data;
//     const user = getUser(socket.id);
//     if (user) {
//       socket.broadcast.to(roomIdGlobal).emit("messageResponse", { message, name: user.username });
//     }
//   });

//   // Handle user disconnect
//   socket.on("disconnect", () => {
//     const userLeaves = userLeave(socket.id);
//     const roomUsers = getUsers(roomIdGlobal);

//     if (userLeaves) {
//       io.to(userLeaves.room).emit("message", {
//         message: `${userLeaves.username} left the chat`,
//       });
//       io.to(userLeaves.room).emit("users", roomUsers);
//     }
//   });
// });

// // Start server on specified port
// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () =>
//   console.log(`server is listening on http://localhost:${PORT}`)
// );






const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIO = require("socket.io");

// Import user module directly using require
const { userJoin, getUsers, userLeave, getUser } = require("./utils/users.cjs");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("server");
});

// Socket.io logic
let imageUrl, roomIdGlobal;

io.on("connection", (socket) => {
  console.log(`New socket connected: ${socket.id}`);

  // Handle user joining
  socket.on("user-joined", (data) => {
    const { roomId, userId, userName, host, presenter } = data;
    console.log(`User ${userName} joined room ${roomId}`);

    roomIdGlobal = roomId; // Update roomIdGlobal when a user joins a room
    const user = userJoin(socket.id, userName, roomId, host, presenter);
    const roomUsers = getUsers(user.room);
    socket.join(user.room);

    console.log(`${user.username} has joined the room: ${user.room}`);

    socket.broadcast.to(user.room).emit("message", {
      message: `${user.username} has joined`,
    });

    io.to(user.room).emit("users", roomUsers);
    io.to(user.room).emit("canvasImage", imageUrl);
  });

  // Handle drawing updates
  socket.on("drawing", (data) => {
    imageUrl = data;
    console.log("Received drawing data, broadcasting to room");
    socket.broadcast.to(roomIdGlobal).emit("canvasImage", imageUrl);
  });

  // Handle chat messages
  socket.on("message", (data) => {
    const { message } = data;
    const user = getUser(socket.id);
    if (user) {
      console.log(`Message from ${user.username}: ${message}`);
      socket.broadcast.to(roomIdGlobal).emit("messageResponse", { message, name: user.username });
    } else {
      console.log("User not found for message");
    }
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log(`Socket disconnected: ${socket.id}`);
    const userLeaves = userLeave(socket.id);
    const roomUsers = getUsers(roomIdGlobal);

    if (userLeaves) {
      console.log(`${userLeaves.username} left the chat`);
      io.to(userLeaves.room).emit("message", {
        message: `${userLeaves.username} left the chat`,
      });
      io.to(userLeaves.room).emit("users", roomUsers);
    } else {
      console.log("No user found to leave the room");
    }
  });
});

// Start server on specified port
const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);
