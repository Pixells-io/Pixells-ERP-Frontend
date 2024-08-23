import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons";
import ContactInfoForm from "./ContactInfo";

const ContactForm = ({ isDisabled, data }) => {
  // Datos iniciales para las filas
  const [positionTap, setPositionTap] = useState(0);

  // Estado inicial de los contactos
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if(contacts.length !== data?.contacts.length){
      setPositionTap(0);
    }
    setContacts(data?.contacts || []);
  }, [data]);

  const addNewTab = () => {
    const newTab = {
      name: "",
      middle_name: "",
      last_name: "",
      email: "",
      phone: "",
      position: "",
      principal: contacts.length > 0 ? false : true,
    };
    setContacts([...contacts, newTab]);
  };

  const handleContactDataChange = (value) => {
    const updatedContacts = contacts.map((contact, index) => {
      if (positionTap == index) {
        return value;
      } else {
        return contact;
      }
    });
    setContacts(updatedContacts);
  };

  const handleDeleteContact = () => {
    if (contacts.length <= 1) {
      return;
    }

    const updatedContacts = contacts.filter(
      (contact, index) => index !== positionTap,
    );

    setContacts(updatedContacts);
    setPositionTap(updatedContacts.length - 1);
  };

  return (
    <div className="flex w-full">
      <Tabs
        defaultValue={positionTap}
        value={positionTap}
        onValueChange={(value) => setPositionTap(value)}
        className="flex w-full"
      >
        <div className="space-y-auto flex w-[180px] flex-col">
          <div className="h-full max-h-[180px] w-full overflow-auto pt-2">
            <TabsList className="w-full flex-col space-y-2 bg-transparent">
              {contacts.map((contact, index) => (
                <TabsTrigger
                  key={index}
                  value={index}
                  className="min-h-[34px] w-full items-center justify-center rounded-full border border-grisHeading bg-transparent text-center font-roboto text-[14px] text-grisHeading transition-colors hover:bg-blancoBox data-[state=active]:bg-grisHeading data-[state=active]:text-[#FFFFFF]"
                >
                  <span className="max-w-[90%] truncate">
                    {!!contact?.id
                      ? !!contact.name
                        ? contact.name
                        : "N/A"
                      : !!contact.name
                        ? contact.name
                        : "Nuevo"}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        <div className="mt-2 flex space-x-2">
          <Button
            type="button"
            className="flex items-center justify-center rounded-full border-none bg-transparent hover:bg-blancoBox"
            onClick={addNewTab}
            disabled={isDisabled}
          >
            <IonIcon icon={addCircle} className="text-xl text-primario" />
          </Button>
        </div>
        <div className="flex-grow">
          {contacts.map((contact, index) => (
            <TabsContent key={index} value={index} className="h-auto">
              <ContactInfoForm
                contactData={contact}
                setContactData={handleContactDataChange}
                onDelete={handleDeleteContact}
                setContacts={setContacts}
                contacts={contacts}
                positionTap={positionTap}
                isDisabled={isDisabled}
                index={index}
                supplier_id={data.id}
              />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ContactForm;
