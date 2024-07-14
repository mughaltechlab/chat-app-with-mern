import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();


  const logout = async ()=>{
    setLoading(true);

    try {
        const res = await fetch(
            "/api/auth/logout",
            {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
            }
        );

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        // remove user-chat from localStorage
        localStorage.removeItem("user-chat");
        // remove data from authUser by doing this we go back to login
        setAuthUser(null);
        
    } catch (e) {
        toast.error(e.message);
    } finally {
        setLoading(false);
    }
  }

  return [loading, logout];
}

export default useLogout