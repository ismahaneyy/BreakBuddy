// import React, { useEffect, useState } from 'react';
// import Room from './Room';
// import ClientRoom from './ClientRoom';
// import JoinCreateRoom from './JoinCreateRoom';

// const RoomManager = ({ socket }) => {
//   const [roomJoined, setRoomJoined] = useState(false);
//   const [user, setUser] = useState({});
//   const [users, setUsers] = useState([]);
//   const [userNo, setUserNo] = useState(0);

//   const uuid = () => {
//     const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
//     return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
//   };

//   useEffect(() => {
//     if (roomJoined) {
//       socket.emit('user-joined', user);
//     }
//   }, [roomJoined, user, socket]);

//   return (
//     <>
//       {roomJoined ? (
//         <>
//           {user.presenter ? (
//             <Room userNo={userNo} user={user} socket={socket} setUsers={setUsers} setUserNo={setUserNo} users={users}/>
//           ) : (
//             <ClientRoom userNo={userNo} user={user} socket={socket} setUsers={setUsers} setUserNo={setUserNo}  users={users}/>
//           )}
//         </>
//       ) : (
//         <JoinCreateRoom uuid={uuid} setRoomJoined={setRoomJoined} setUser={setUser} />
//       )}
//     </>
//   );
// };

// export default RoomManager;










import React, { useEffect, useState } from 'react';
import Room from './Room';
import ClientRoom from './ClientRoom';
import JoinCreateRoom from './JoinCreateRoom';

const RoomManager = ({ socket }) => {
  const [roomJoined, setRoomJoined] = useState(false);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [userNo, setUserNo] = useState(0);

  const uuid = () => {
    const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
  };

  useEffect(() => {
    if (roomJoined && socket) {
      console.log('Emitting user-joined event for user:', user);
      socket.emit('user-joined', user);
    } else if (!socket) {
      console.error('Socket is undefined');
    }
  }, [roomJoined, user, socket]);

  return (
    <>
      {roomJoined ? (
        user.presenter ? (
          <Room 
            userNo={userNo} 
            user={user} 
            socket={socket} 
            setUsers={setUsers} 
            setUserNo={setUserNo} 
            users={users}
          />
        ) : (
          <ClientRoom 
            userNo={userNo} 
            user={user} 
            socket={socket} 
            setUsers={setUsers} 
            setUserNo={setUserNo} 
            users={users}
          />
        )
      ) : (
        <JoinCreateRoom uuid={uuid} setRoomJoined={setRoomJoined} setUser={setUser} />
      )}
    </>
  );
};

export default RoomManager;

