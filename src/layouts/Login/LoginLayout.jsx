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
            setIsOpen((isOpen) => !isOpen);   
        }
    }

    const submitFunction = (e) => {
        e.preventDefault()
        console.log(formData)

    }

  return (
    <div className="flex items-center justify-center h-screen">
        <div className="p-20">
            <div className="text-center">
                <span className="color-grisText text-2xl font-roboto font-light">Sign in to Oruga</span>
            </div>
            <div className="border-solid border border-grisText rounded-3xl flex h-10 mt-4 w-96">
                <input type="text" className="rounded-3xl pl-5 text-sm font-normal text-grisText flex w-auto" onKeyPress={emailChange} onChange={emailChange} placeholder="Email"/>
                {isOpen == false &&
                    <IonIcon icon={arrowForwardCircle} className="text-grisHeading size-6 flex m-auto" onClick={showPassword}></IonIcon>
                }
            </div>
            {isOpen &&
                <div className="border-solid border border-grisText rounded-3xl flex h-10 mt-4 w-96">
                    <input type="password" className="rounded-3xl pl-5 text-sm font-normal text-grisText flex w-auto" onChange={paswordChange} placeholder="Password"/>
                    <IonIcon icon={arrowForwardCircle} className="text-grisHeading size-6 flex m-auto" onClick={submitFunction}></IonIcon>
                </div>
            }
        </div>
    </div>
  );
}
export default Login;

