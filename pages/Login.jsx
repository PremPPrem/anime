import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import s from "@/styles/logIn.module.scss";
import { BiEdit, BiTrash } from "react-icons/bi";
import Link from "next/link";

export default function Login() {
  const [user, setUser] = useState([]);
  const [fName, setFName] = useState("");
  // const [id,setId] = useState([])
  // https://reqres.in/api/users
  const router = useRouter();
  const logOut = () => {
    window.localStorage.clear();
    router.push("/SignIn");
  };

  const userList = () => {
    axios
      .get("https://www.melivecode.com/api/users")
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = async (id) => {
    let data = {
      id: id,
    };
    if (window.confirm("Do you want to delete")) {
      await axios
        .delete(`https://www.melivecode.com/api/users/delete`, {
          // "id": id
          data: data,
        })
        .then(() => {
          userList();
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    userList();
    // deleteUser();
  }, []);

  return (
    <>
      <div className={s.head}>
        <h1>Login</h1>
        <button onClick={logOut} className={s.btn}>
          Log Out
        </button>
      </div>
      <div className={s.addUserTop}>
        <Link href="/CreateUser">
         
          <button className={s.addUser}>Create User</button>
        </Link>
      </div>

      {user.map((user, index) => {
        return (
          <div className={s.container} key={index}>
            <div className={s.img}>
              <img src={user.avatar} alt={user.avatar} />
            </div>
            <div className={s.title}>
              <p>{user.fname}</p>
            </div>
            <div className={s.title}>
              <p>{user.lname}</p>
            </div>
            <div className={s.title}>
              <p>{user.username}</p>
            </div>
            <div className={s.userBtn}>
            <Link href={{ pathname: '/EditUser', query: { id: user.id  } }}>
                <BiEdit className={s.edit} />
                </Link>
          
                <BiTrash
                  className={s.edit}
                  onClick={() => deleteUser(user.id)}
                />
            
            </div>
          </div>
        );
      })}
    </>
  );
}
