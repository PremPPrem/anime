import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import s from "@/styles/user.module.scss";

export default function CreateUser() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://www.melivecode.com/api/users/create", {
        fname: fname,
        lname: lname,
        username: username,
        password: fname,
        email: username,
        avatar: avatar,
      })
      .then((res) => {
        alert('Create User')
        router.push("/Login");

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <div className={s.header}>
     <h1>Create User</h1>
      <div className={s.create}>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <input type="text" onChange={(e) => setFname(e.target.value)} />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                onChange={(e) => setLname(e.target.value)}
                value={lname}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div>
              <label>Image URL</label>
              <input
                type="text"
                onChange={(e) => setAvatar(e.target.value)}
                value={avatar}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}
