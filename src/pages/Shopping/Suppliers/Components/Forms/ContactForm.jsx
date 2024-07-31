import React,{useState} from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons";
import ContactInfoForm from "./ContactInfo";


const ContactForm = () => {
    
    const [contactData, setContactData] = useState({
        nombre:"",
        apellidop:"",
        apellidom:"",
        email:"",
        tel:"",
        position:"",
        princ:false
      });
 
  return (
    <div className="w-full overflow-hidden">
      <Tabs defaultValue="general" className="flex w-full">
        <TabsList className="w-25 mr-4 h-auto flex-col space-y-2 bg-transparent">
          
          {[
            { value: "perengano", label: "Perengano" },
            { value: "sultano", label: "Sultano" },
            { value: "libano", label: "Libano" },
            { value: "otros", label: "Otros" },
          ].map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex h-12 w-full items-center justify-center rounded-full border border-grisHeading bg-transparent text-center font-roboto text-[14px] text-grisHeading transition-colors hover:bg-blancoBox data-[state=active]:bg-primario data-[state=active]:text-white"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="left-8 pt-1 pr-4">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border-none bg-transparent hover:bg-blancoBox">
            <IonIcon icon={addCircle} className="text-xl text-primario" />
          </button>
        </div>

        <div className="flex-grow">
          <TabsContent value="perengano">
            <ContactInfoForm
             contactData={contactData}
             setContactData={setContactData}
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ContactForm;
