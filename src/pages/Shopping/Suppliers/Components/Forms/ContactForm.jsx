import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons";
import ContactInfoForm from "./ContactInfo";

const ContactForm = ({isDisabled}) => {
  // Datos iniciales para las filas
  const initialRow = [
    {
      nombre: "juan",
      apellidop: "guzman",
      apellidom: "getta",
      email: "example@mail.com",
      tel: "3122434",
      position: "administrador",
      princ: true,
    },
    {
      nombre: "maria",
      apellidop: "hernandez",
      apellidom: "hernandez",
      email: "maria@mail.com",
      tel: "23423432",
      position: "empleado",
      princ: false,
    },
    {
      nombre: "pedro",
      apellidop: "ortega",
      apellidom: "villanueva",
      email: "pedro@mail.com",
      tel: "123131231",
      position: "administrador",
      princ: true,
    },
    {
      nombre: "ana",
      apellidop: "orozco",
      apellidom: "beltran",
      email: "ana@mail.com",
      tel: "12342423",
      position: "empleado",
      princ: false,
    },
  ];

  // Estado inicial de los contactos
  const [contacts, setContacts] = useState([
    { value: "juan", label: "Juan", data: initialRow[0] },
    { value: "maria", label: "Maria", data: initialRow[1] },
    { value: "pedro", label: "Pedro", data: initialRow[2] },
    { value: "ana", label: "Ana", data: initialRow[3] },
  ]);

  const [currentTab, setCurrentTab] = useState(contacts[0].value);
  const [contactData, setContactData] = useState(contacts[0].data);

  const addNewTab = () => {
    const newTab = {
      value: `${contacts.length}`,
      label: "Nuevo",
      data: {
        nombre: "",
        apellidop: "",
        apellidom: "",
        email: "",
        tel: "",
        position: "",
        princ: false,
      },
    };
    setContacts([...contacts, newTab]);
    setCurrentTab(newTab.value);
    setContactData(newTab.data);
  };

  const handleTabChange = (value) => {
    const selectedTab = contacts.find((tab) => tab.value === value);
    setCurrentTab(value);
    setContactData(selectedTab.data);
  };

  const handleContactDataChange = (data) => {
    setContactData(data);
    const updatedContacts = contacts.map((contact) =>
      contact.value === currentTab
        ? { ...contact, label: data.nombre || "Nuevo", data }
        : contact,
    );
    setContacts(updatedContacts);
  };

  const handleDeleteContact = () => {
    if (contacts.length <= 1) {
      return; 
    }

    const updatedContacts = contacts.filter(
      (contact) => contact.value !== currentTab,
    );
    setContacts(updatedContacts);
    if (updatedContacts.length > 0) {
      setCurrentTab(updatedContacts[0].value);
      setContactData(updatedContacts[0].data);
    } else {
      setCurrentTab("");
      setContactData({
        nombre: "",
        apellidop: "",
        apellidom: "",
        email: "",
        tel: "",
        position: "",
        princ: false,
      });
    }
  };

  return (
    <div className="flex w-full">
      <Tabs
        value={currentTab}
        onValueChange={handleTabChange}
        className="flex w-full"
      >
        <div className="space-y-auto flex w-[180px] flex-col">
          <div className="pt-2 w-full h-full max-h-[180px] overflow-auto">
            <TabsList className="w-full flex-col space-y-2 bg-transparent">
              {contacts.map(({ value, label }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="w-full items-center justify-center rounded-full border border-grisHeading bg-transparent text-center font-roboto text-[14px] text-grisHeading transition-colors hover:bg-blancoBox data-[state=active]:bg-grisHeading data-[state=active]:text-[#FFFFFF]"
                >
                  <span className="max-w-[90%] truncate">{label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div></div>
        </div>
        <div className="mt-2 flex space-x-2">
          <Button
            type="button"
            className="flex items-center justify-center rounded-full border-none bg-transparent hover:bg-blancoBox"
            onClick={addNewTab}
          >
            <IonIcon icon={addCircle} className="text-xl text-primario" />
          </Button>
        </div>
        <div className="flex-grow">
          {contacts.map(({ value }) => (
            <TabsContent key={value} value={value} className="h-auto">
              <ContactInfoForm
                contactData={contactData}
                setContactData={handleContactDataChange}
                onDelete={handleDeleteContact}
                isDisabled={isDisabled}
              />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ContactForm;
