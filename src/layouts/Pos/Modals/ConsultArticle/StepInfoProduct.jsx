import React from "react";

import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const sizesData = [
  { id: 1, name: "XS" },
  { id: 2, name: "S" },
  { id: 3, name: "M" },
  { id: 4, name: "L" },
  { id: 5, name: "XL" },
];

const dataInfoProducts = [
  {
    id: 1,
    name: "TIENDA",
    products: [
      {
        id: 1,
        quantity: 1,
      },
      {
        id: 2,
        quantity: 3,
      },
      {
        id: 3,
        quantity: 2,
      },
      {
        id: 4,
        quantity: 2,
      },
      {
        id: 5,
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    name: "ALMACEN",
    products: [
      {
        id: 21,
        quantity: 2,
      },
      {
        id: 22,
        quantity: 4,
      },
      {
        id: 23,
        quantity: 1,
      },
      {
        id: 24,
        quantity: 3,
      },
      {
        id: 25,
        quantity: 2,
      },
    ],
  },
];

const productDetail = {
  id: 1,
  price: 1599.0,
  discount: 799.0,
  size: "M",
  options: [
    {
      id: 1,
      url: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 2,
      url: "https://picsum.photos/200/300?grayscale",
    },
    {
      id: 3,
      url: "https://picsum.photos/id/254/200/300",
    },
    {
      id: 4,
      url: "https://picsum.photos/id/253/200/300",
    },
    {
      id: 5,
      url: "https://picsum.photos/id/283/200/300",
    },
    {
      id: 6,
      url: "https://picsum.photos/id/288/200/300",
    },
    {
      id: 7,
      url: "https://picsum.photos/id/289/200/300",
    },
    {
      id: 9,
      url: "https://picsum.photos/id/282/200/300",
    },
    {
      id: 10,
      url: "https://picsum.photos/id/249/200/300",
    },
  ],
};

function StepInfoProduct({ setSection }) {
  return (
    <>
      <DialogHeader className="border-b">
        <DialogTitle className="px-4 py-1">
          <div className="flex justify-between">
            <div className="grid grid-cols-2 gap-1 pl-3">
              <div className="col-span-1 flex items-center">
                <del className="font-poppins text-xs font-normal text-grisText">
                  ${productDetail.price}
                </del>
              </div>
              <div className="col-span-1 flex items-center justify-center rounded-md bg-blancoBox px-3 py-1">
                <p className="font-poppins text-xs font-medium text-grisText">
                  ${productDetail.discount}
                </p>
              </div>
              <div className="col-span-1">
                <p className="font-roboto text-xs font-light text-grisText">
                  Talla: {productDetail.size}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              ||||||||||||||||||||||||
            </div>
            <div></div>
          </div>
        </DialogTitle>
      </DialogHeader>
      <DialogDescription className="hidden"></DialogDescription>
      <div className="h-full w-full overflow-auto">
        <div className="h-full max-h-[313px] w-fit">
          <img
            loading="lazy"
            src={"https://random.imagecdn.app/500/150"}
            className="h-full w-fit"
          />
        </div>
        <div className="max-h-[173px] w-full overflow-auto border-t border-[#D7D7D7]">
          <Table className="border-separate border-spacing-y-1">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                {sizesData?.map((size, i) => (
                  <TableHead
                    key={"th" + i}
                    style={{ width: `${100 / sizesData.length}%` }}
                  >
                    <p className="text-md text-center font-roboto font-medium text-grisText">
                      {size.name}
                    </p>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataInfoProducts?.map((infoProduct, i) => (
                <TableRow key={i}>
                  <TableCell className="rounded-r-lg bg-[#D7D7D7]">
                    <span className="font-roboto text-[15px] font-normal text-grisText">
                      {infoProduct.name}
                    </span>
                  </TableCell>
                  {infoProduct.products?.map((product, i) => (
                    <TableCell key={"tc" + i}>
                      <div className="flex w-full justify-center">
                        <span className="text-md font-roboto font-normal text-[#696974]">
                          {product.quantity}
                        </span>
                      </div>
                    </TableCell>
                  ))}
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex gap-x-4 overflow-x-auto px-2 py-1">
          {productDetail.options.map((option) => (
            <div
              key={option.id}
              className="h-[48px] w-[48px] cursor-pointer rounded-lg border border-[#D7D7D7]"
            >
              <div className="h-[48px] w-[48px]">
                <img
                  loading="lazy"
                  src={option.url}
                  className="h-full w-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
        <DialogFooter className="px-2 py-4">
          <div className="flex w-full flex-wrap gap-2">
            <Button className="text-roboto text-md flex-1 rounded-3xl bg-[#F0F0F0] font-normal text-grisText hover:bg-[#F0F0F0]">
              Solicitar de Almacen
            </Button>
            <Button className="text-roboto text-md flex-1 rounded-3xl bg-[#8F8F8F] font-normal text-white hover:bg-[#8F8F8F]">
              Solicitar de Almacen
            </Button>
          </div>
        </DialogFooter>
      </div>
    </>
  );
}

export default StepInfoProduct;
