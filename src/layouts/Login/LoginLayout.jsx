import React, { useEffect, useRef, useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { IonIcon } from "@ionic/react";
import { arrowForwardCircle } from "ionicons/icons";

import { loginUser } from "@/pages/Organization/utils";
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
    if (token !== undefined || user.code == 201) return navigate("/");
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
    <div className="flex h-screen items-center justify-center bg-blancoBg">
      <div className="p-20">
        <div className="text-center">
          <span className="font-roboto text-2xl font-light text-grisText">
            Sign in IRB
          </span>
        </div>
        <Form method="POST" action="/login">
          <div className="mt-4 flex h-10 w-96 rounded-3xl border border-solid border-grisText">
            <input
              type="text"
              className="flex w-4/5 rounded-3xl bg-blancoBg pl-5 text-sm font-normal text-grisText outline-none outline-0"
              onKeyPress={emailChange}
              onChange={emailChange}
              placeholder="Email"
              name="email"
            />

            {isOpen == false && (
              <IonIcon
                icon={arrowForwardCircle}
                className="m-auto flex size-6 w-1/5 text-grisText"
                onClick={showPassword}
              ></IonIcon>
            )}
          </div>
          {isOpen && (
            <div className="mt-4 flex h-10 w-96 rounded-3xl border border-solid border-grisText">
              <input
                type="password"
                ref={passwordInputRef}
                className="flex w-4/5 rounded-3xl bg-blancoBg pl-5 text-sm font-normal text-grisText outline-none outline-0"
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
                  className="flex size-6 w-1/5 text-grisText"
                  // onClick={submitFunction}
                ></IonIcon>
              </button>
            </div>
          )}
        </Form>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-grisBg">
        <div className="mb-3 mt-3 flex w-screen">
          <div className="w-1/10 border-2 border-transparent border-r-stone-300 p-1 pl-6 pr-6 text-xs text-grisText">
            <span>Copyright © 2024 Pixells Inc. </span>
          </div>
          <div className="w-1/10 border-2 border-transparent border-r-stone-300 p-1 pl-6 pr-6 text-xs text-grisText">
            <span>Todos los derechos reservados </span>
          </div>
          <div className="w-1/10 border-2 border-transparent p-1 pl-6 pr-6 text-xs text-grisText">
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
