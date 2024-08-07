import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
      value: `new-tab-${contacts.length}`,
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

  return (
    <div className="w-full overflow-hidden">
      <Tabs value={currentTab} onValueChange={handleTabChange} className="flex w-full">
        <TabsList className="w-25 mr-4 h-auto flex-col space-y-2 bg-transparent">
          {contacts.map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex h-12 w-full items-center justify-center rounded-full border border-grisHeading bg-transparent text-center font-roboto text-[14px] text-grisHeading transition-colors hover:bg-blancoBox data-[state=active]:bg-primario data-[state=active]:text-white overflow-auto "
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="left-8 pt-1 pr-4">
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full border-none bg-transparent hover:bg-blancoBox"
            onClick={addNewTab}
          >
            <IonIcon icon={addCircle} className="text-xl text-primario" />
          </button>
        </div>

        <div className="flex-grow">
          {contacts.map(({ value }) => (
            <TabsContent key={value} value={value}>
              <ContactInfoForm
                contactData={contactData}
                setContactData={handleContactDataChange}
              />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ContactForm;

