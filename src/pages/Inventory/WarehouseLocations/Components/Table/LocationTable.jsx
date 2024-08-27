// tableColumns.js
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { IonIcon } from '@ionic/react';
import { informationCircle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
export const columnsWL = [
  {
    accessorKey: "inventory_code",
    header: "Código",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Checkbox
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
          <label>{row?.original?.inventory_code}</label>
        </div>
      );
    },
    meta: { filterButton: true },
  },
  {
    accessorKey: "categoria",
    header: "Categoría",
    meta: { filterButton: true },
  },
  {
    accessorKey: "name",
    header: "Nombre",
    meta: { filterButton: true },
  },
  {
    accessorKey: "unidadMedida",
    header: "Unidad Medida",
  },
  {
    accessorKey: "cuentaContable",
    header: "Cuenta Contable",
  },
  {
    accessorKey: "tipo",
    header: "Tipo",
  },
  {
    accessorKey: "creator",
    header: "Creado Por",
  },
  {
    accessorKey: "created",
    header: "Creación",
  },
  {
    id: "acciones",
    header: <div className="text-center">Acciones</div>,
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Link>
          <Button
            type="button"
            className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          >
            <IonIcon
              icon={informationCircle}
              className="h-5 w-5 text-[#696974]"
            />
          </Button>
        </Link>
      </div>
    ),
  },
];
