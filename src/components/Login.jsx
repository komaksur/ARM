import React, {createContext, useEffect, useState} from "react";
import LogoTrain from "../assets/image/logo_train.jpg"
import LogoRussia from "../assets/image/logo_russian railways.jpg"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [login, setLogin] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate();

    const Auth = () => {
        if (login === "admin" && pass === "admin"){
            navigate("/")
        }
    }

    return (
       <>
         <div class="header">
    <img src={LogoRussia} width="500" height="250"/>
  </div>
  <section class="container">
    <div class="row justify-content-center">
      <div class="login-form col-lg-6 col-md-8 col-sm-10 row my-5">
        <div class="col-xs-12 col-6 " >
          <img src={LogoTrain}/>
        </div>

        <div class="col-xs-12 col-6 d-flex justify-content-center">
          <form class="h-100 d-flex flex-column justify-content-center">

            <div>
              <label for="Логин" class="u-label">Логин</label>
              <input type="text" placeholder="Логин" id="Логин" name="login" onChange={(e)=>setLogin(e.target.value)}/>
            </div>

            <div>
              <label for="Password" class="u-label">Password</label>
              <input type="password" placeholder="Пароль" id="Password" name="password" onChange={(e)=>setPass(e.target.value)}/>
            </div>

            <input type="submit" value="Войти" class="my-2" onClick={Auth}/>

          </form>
        </div>
      </div>
    </div>
  </section>


  <footer class="mt-auto">
    <div class="mx-auto text-center text-white">
      <p class="my-2">Российские железные дороги</p>
    </div>
  </footer>
       </>
    )
}

export default Login