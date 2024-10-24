import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function ArticleSelectOptions({productCraft, fillFormulaProduct, newFormula, setNewFormula}) {
  return (
    <div className="flex w-full items-center justify-evenly gap-2 rounded-lg border px-6 py-2.5">
      <div className="flex w-1/3">
        <SelectRouter
          options={productCraft}
          onChange={(e) => fillFormulaProduct(e)}
          value={newFormula}
          placeholder="Selecciona el artículo"
        />
      </div>

      <div className="flex w-28">
        <InputRouter
          type="number"
          name="quantity"
          placeholder="Cantidad"
          value={newFormula.quantity}
          onChange={(e) =>
            setNewFormula({
              ...newFormula,
              quantity: e.target.value,
            })
          }
        />
      </div>
      <div className="flex w-28">
        <InputRouter
          type="text"
          name="unidad"
          placeholder="Unidad"
          value={newFormula.unit}
          onChange={() => {}}
        />
      </div>
      <div className="flex w-20">
        <InputRouter
          type="number"
          name="merma"
          placeholder="Merma"
          value={newFormula.merma}
          onChange={(e) => setNewFormula({
            ...newFormula,
            merma: e.target.value,
          })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="checkBoxMultiProcess"
          className="flex items-center gap-2 text-[14px] font-light text-grisText"
        >
          <Checkbox
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            checked={newFormula.percentegeCheck}
            onCheckedChange={(e) =>
              setNewFormula({
                ...newFormula,
                percentegeCheck: e,
              })
            }
          />
          <p className="text-[12px]">Porcentaje</p>
        </label>
        <label
          htmlFor="checkBoxMultiProcess"
          className="flex items-center gap-2 text-[14px] font-light text-grisText"
        >
          <Checkbox
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            checked={newFormula.unitCheck}
            onCheckedChange={(e) =>
              setNewFormula({
                ...newFormula,
                unitCheck: e,
              })
            }
          />
          <p className="text-[12px]">Unidad</p>
        </label>
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="checkBoxMultiProcess"
          className="flex items-center gap-2 text-[14px] font-light text-grisText"
        >
          <Checkbox
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            checked={newFormula.globalCheck}
            onCheckedChange={(e) =>
              setNewFormula({
                ...newFormula,
                globalCheck: e,
              })
            }
          />
          <p className="text-[12px]">Global</p>
        </label>
        <label
          htmlFor="checkBoxMultiProcess"
          className="flex items-center gap-2 text-[14px] font-light text-grisText"
        >
          <Checkbox
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            checked={newFormula.individualCheck}
            onCheckedChange={(e) =>
              setNewFormula({
                ...newFormula,
                individualCheck: e,
              })
            }
          />
          <p className="text-[12px]">Individual</p>
        </label>
      </div>
    </div>
  );
}

export default ArticleSelectOptions;
