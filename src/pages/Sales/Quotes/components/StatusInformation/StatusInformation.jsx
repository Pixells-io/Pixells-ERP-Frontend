import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";
import StatusDraft from "./StatusDraft";
import StatusInProgress from "./StatusInProgress";
import StatusDone from "./StatusDone";
import { useLocation,useNavigate } from "react-router-dom";

function StatusInformations({ status, saveDraft, applyFunction }) {
  // Define the status labels and dates based on the status prop
  const statusLabels = {
    draft: "Pending Approval",
    inProgress: "Pending Approval",
    done: "Agustin Hernandez"
  };

  const statusDates = {
    draft: "Pending Date",
    inProgress: "Pending Date",
    done: "27 Jun 2024"
  };
  const location = useLocation();
  const correctLocation = '/sales/quotes';
  const isButtonVisible = location.pathname === correctLocation;
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/sales/quotes/document');
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-8 py-8">
      {/* Status Section */}
      <div className="flex flex-1 flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
        <div className="flex flex-col items-center md:items-start flex-1">
          <p className="text-center text-sm font-medium text-grisText">Estatus</p>
          <div className="mt-2 flex justify-center">
            {status === "draft" && <StatusDraft />}
            {status === "inProgress" && <StatusInProgress />}
            {status === "done" && <StatusDone />}
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start flex-1">
          <p className="text-center text-sm font-medium text-grisText">Aprobado por</p>
          <div className="mt-2">
            <label className="flex rounded-xl bg-blancoBox px-2 py-1 text-center text-xs font-semibold text-grisSubText">
              {statusLabels[status]}
            </label>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start flex-1">
          <p className="text-center text-sm font-medium text-grisText">Fecha y hora de aplicación</p>
          <div className="mt-2">
            <label className="flex rounded-xl bg-blancoBox px-2 py-1 text-center text-xs font-semibold text-grisSubText">
              {statusDates[status]}
            </label>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="flex flex-col md:flex-row md:space-x-8 items-start flex-1 mb-4 md:mb-0">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </Avatar>
        <div className="flex-1 ml-4">
          {status === "done" ? (
            <label className="block h-[80px] w-full rounded-lg px-3 py-2 text-[10px] bg-white">
              Todo en orden se pagó de forma correcta el documento y estamos listos para lo que sigue
            </label>
          ) : (
            <textarea
              placeholder="Comentarios adicionales"
              className="block h-[80px] w-full resize-none rounded-lg border-2 border-dashed border-grisDisabled px-3 py-2 text-xs bg-white"
            ></textarea>
          )}
        </div>
      </div>

      {/* Actions Section */}
      {isButtonVisible ? (
  <div className="flex flex-col p-4 md:flex-row items-center flex-1 space-y-4 md:space-y-0 md:space-x-4">
    <Button
      onClick={handleSave}
      variant="outline"
      className="rounded-lg border-2 bg-primarioBotones border-primarioBotones text-xs text-white hover:text-primarioBotones"
    >
      Save
    </Button>
  </div>
) : (
  <div className="flex flex-col p-4 md:flex-row items-center flex-1 space-y-4 md:space-y-0 md:space-x-4">
    {/* Contenido alternativo o div vacío */}
  </div>
)}
    </div>
  );
}

export default StatusInformations;
