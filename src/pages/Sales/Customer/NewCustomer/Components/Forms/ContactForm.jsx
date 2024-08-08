import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons";
import ContactInfoForm from "./ContactInfo";

const ContactForm = () => {
  const initialRow = {
    nombre: "",
    apellidop: "",
    apellidom: "",
    email: "",
    tel: "",
    position: "",
    princ: false,
  };

  const [contacts, setContacts] = useState([
    { value: "juan", label: "Juan", data: initialRow },
    { value: "maria", label: "Maria", data: initialRow },
    { value: "pedro", label: "Pedro", data: initialRow },
    { value: "ana", label: "Ana", data: initialRow },
  ]);

  const [currentTab, setCurrentTab] = useState(contacts[0].value);
  const [contactData, setContactData] = useState(initialRow);

  const addNewTab = () => {
    const newTab = {
      value: `${contacts.length}`,
      label: "Nuevo",
      data: initialRow,
    };
    setContacts([...contacts, newTab]);
    setCurrentTab(newTab.value);
    setContactData(initialRow);
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
        : contact
    );
    setContacts(updatedContacts);
  };

  const handleDeleteContact = () => {
    if (contacts.length <= 1) {
      return; // No permitir la eliminación si queda solo un contacto
    }
    
    const updatedContacts = contacts.filter((contact) => contact.value !== currentTab);
    setContacts(updatedContacts);
    if (updatedContacts.length > 0) {
      setCurrentTab(updatedContacts[0].value);
      setContactData(updatedContacts[0].data);
    } else {
      setCurrentTab("");
      setContactData(initialRow);
    }
  };

  return (
    <div className="w-full overflow-hidden flex">
      <Tabs value={currentTab} onValueChange={handleTabChange} className="flex w-full">
        <div className="w-[200px] flex flex-col">
          <TabsList className="   h-[400px] overflow-auto flex-col space-y-2 bg-transparent">
            {contacts.map(({ value, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="flex-shrink-0 w-full items-center justify-center rounded-full border border-grisHeading bg-transparent text-center font-roboto text-[14px] text-grisHeading transition-colors hover:bg-blancoBox data-[state=active]:bg-grisHeading data-[state=active]:text-[#FFFFFF]"
              >
                <span className="truncate max-w-[90%]">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
         
        </div>
        <div className="mt-2 flex space-x-2">
            <Button
              type='button'
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
              />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ContactForm;

