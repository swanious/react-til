import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../component/Header";

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error와 users를 초기화하고
        setUsers(null);
        setError(null);

        // loading 상태를 true로 바꿉니다.
        setLoading(true);

        const response = await axios.get(url);
        console.log(response.data);
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  return (
    <div>
      <Header />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>
              <table className="border-b-2">
                <tr>
                  <th className="w-28 border-r-2">유저 이름</th>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <th className="w-28  border-r-2">이메일</th>
                  <td>{user.email}</td>
                </tr>
              </table>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
