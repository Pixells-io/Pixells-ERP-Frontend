import React from "react";
import { IonIcon } from "@ionic/react";
import { arrowForwardCircle } from "ionicons/icons";
import {useState} from "react";

function Login() {

    const initialFormData = Object.freeze({
        email: "",
        password: ""
      });

    const [isOpen, setIsOpen] = useState(false);
    const [formData, updateFormData] = React.useState(initialFormData);

    const emailChange = (e) => {
        updateFormData({
          ...formData,
          email: e.target.value.trim()
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

          password: e.target.value.trim()
        });
    };

    const showPassword = (e) => {
        e.preventDefault()

        /*Validated the email field is complete*/
        let regex = new RegExp("@");

        if (regex.test(formData.email)) {
            console.log(formData.email)
            setIsOpen((isOpen) => true);   
        }else{
            setIsOpen((isOpen) => false);  
        }
    }

    const submitFunction = (e) => {
        e.preventDefault()
        console.log(formData)

    }

  return (
    <div className="flex items-center justify-center h-screen bg-blancoBg">
        <div className="p-20">
            <div className="text-center">
                <span className="text-grisText text-2xl font-roboto font-light">Sign in to Oruga</span>
            </div>
            <div className="border-solid border border-grisText rounded-3xl flex h-10 mt-4 w-96">
                <input type="text" className="rounded-3xl pl-5 text-sm font-normal text-grisText flex outline-0 w-4/5 bg-blancoBg" onKeyPress={emailChange} onChange={emailChange} placeholder="Email"/>
                {isOpen == false &&
                    <IonIcon icon={arrowForwardCircle} className="text-grisText size-6 flex m-auto w-1/5" onClick={showPassword}></IonIcon>
                }
            </div>
            {isOpen &&
                <div className="border-solid border border-grisText rounded-3xl flex h-10 mt-4 w-96">
                    <input type="password" className="rounded-3xl pl-5 text-sm font-normal text-grisText flex outline-0 w-4/5 bg-blancoBg" onChange={paswordChange} placeholder="Password"/>
                    <IonIcon icon={arrowForwardCircle} className="text-grisText size-6 flex m-auto w-1/5" onClick={submitFunction}></IonIcon>
                </div>
            }
        </div>
        <div className="bg-grisBg bottom-0 absolute inset-x-0">
            <div className="flex w-screen mt-3 mb-3">
                <div className="w-1/10 p-1 pr-6 pl-6 border-r-stone-300 border-transparent border-2 text-sm text-grisText">
                    <span>Copyright © 2024 Pixells Inc. </span>
                </div>
                <div className="w-1/10 p-1 pr-6 pl-6 border-r-stone-300 border-transparent border-2 text-sm text-grisText">
                    <span>Todos los derechos reservados </span>
                </div>
                <div className="w-1/10 p-1 pr-6 pl-6 text-sm border-2 border-transparent text-grisText">
                    <span>Política de privacidad</span>
                </div>
                <div className="w-7/10">
            
                </div>
            </div>
        </div>
    </div>
  );
}
export default Login;

