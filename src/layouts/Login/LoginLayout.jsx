import React, { useEffect, useRef } from "react";
import { IonIcon } from "@ionic/react";
import { arrowForwardCircle } from "ionicons/icons";
import { useState } from "react";
import { loginUser } from "@/pages/Organization/utils";
import { Form, redirect, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { getUserByToken } from "@/lib/actions";

function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    async function fetchData() {
      const user = await getUserByToken();
      setUser(user);
    }
    fetchData();
    if (token?.length > 0 || user.code == 201) return navigate("/");
  }, []);

  const passwordInputRef = useRef(null);

  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);

  const emailChange = (e) => {
    updateFormData({
      ...formData,
      email: e.target.value.trim(),
    });

    if (e.code == "Enter") {
      showPassword(e);
    }

    let regex = new RegExp("@");

    if (!regex.test(formData.email)) {
      setIsOpen((isOpen) => false);
    }
  };

  const paswordChange = (e) => {
    updateFormData({
      ...formData,

      password: e.target.value.trim(),
    });
  };

  const showPassword = (e) => {
    e.preventDefault();

    /*Validated the email field is complete*/
    let regex = new RegExp("@");

    if (regex.test(formData.email)) {
      setIsOpen((isOpen) => true);
      setTimeout(() => {
        passwordInputRef.current.focus();
      }, 500);
    } else {
      setIsOpen((isOpen) => false);
    }
  };

  const submitFunction = (e) => {
    e.preventDefault();

    const validation = loginUser(formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blancoBg">
      <div className="p-20">
        <div className="text-center">
          <span className="text-grisText text-2xl font-roboto font-light">
            Sign in to IRB
          </span>
        </div>
        <Form method="POST" action="/login">
          <div className="border-solid border border-grisText rounded-3xl flex h-10 mt-4 w-96">
            <input
              type="text"
              className="rounded-3xl pl-5 outline-none text-sm font-normal text-grisText flex outline-0 w-4/5 bg-blancoBg"
              onKeyPress={emailChange}
              onChange={emailChange}
              placeholder="Email"
              name="email"
            />

            {isOpen == false && (
              <IonIcon
                icon={arrowForwardCircle}
                className="text-grisText size-6 flex m-auto w-1/5"
                onClick={showPassword}
              ></IonIcon>
            )}
          </div>
          {isOpen && (
            <div className="border-solid border border-grisText rounded-3xl flex h-10 mt-4 w-96">
              <input
                type="password"
                ref={passwordInputRef}
                className="rounded-3xl pl-5 text-sm outline-none font-normal text-grisText flex outline-0 w-4/5 bg-blancoBg"
                onChange={paswordChange}
                placeholder="Password"
                name="password"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-end"
              >
                <IonIcon
                  icon={arrowForwardCircle}
                  className="text-grisText size-6 flex w-1/5"
                  // onClick={submitFunction}
                ></IonIcon>
              </button>
            </div>
          )}
        </Form>
      </div>
      <div className="bg-grisBg bottom-0 absolute inset-x-0">
        <div className="flex w-screen mt-3 mb-3">
          <div className="w-1/10 p-1 pr-6 pl-6 border-r-stone-300 border-transparent border-2 text-xs text-grisText">
            <span>Copyright © 2024 Pixells Inc. </span>
          </div>
          <div className="w-1/10 p-1 pr-6 pl-6 border-r-stone-300 border-transparent border-2 text-xs text-grisText">
            <span>Todos los derechos reservados </span>
          </div>
          <div className="w-1/10 p-1 pr-6 pl-6 border-2 border-transparent text-xs text-grisText">
            <span>Política de privacidad</span>
          </div>
          <div className="w-7/10"></div>
        </div>
      </div>
    </div>
  );
}
export default Login;

export async function action({ request }) {
  const formData = await request.formData();
  const response = await loginUser(formData);
  if (response.code === 201) {
    Cookies.set("token", response.access_token, { expires: 0.5 });
    return redirect("/");
  }

  return new Response({ message: "Error" });
}
