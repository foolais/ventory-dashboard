"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import z from "zod";
import { goodsSchema } from "@/lib/goodsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { useForm, Controller } from "react-hook-form";
import { useState, useTransition } from "react";
import { useGoodsStore } from "@/store/useGoodsStore";
import { Spinner } from "./ui/spinner";

const CreateGoodsButton = () => {
  const [isSubmitting, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const { addGoods } = useGoodsStore();

  const form = useForm<z.infer<typeof goodsSchema>>({
    defaultValues: {
      name: "",
      stock: "1",
    },
    resolver: zodResolver(goodsSchema),
  });

  const onSubmit = async (data: z.infer<typeof goodsSchema>) => {
    await startTransition(() => {
      try {
        const payload = {
          ...data,
          id: crypto.randomUUID(),
          stock: +data.stock,
          date: new Date(),
        };

        addGoods(payload);
        form.reset();
        setOpen(false);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="cursor-pointer">
          <span className="-mb-1 block sm:hidden">Tambah</span>
          <span className="-mb-1 hidden sm:block">Tambah Barang Baru</span>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Form Tambah Barang</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Nama</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    placeholder="Masukkan nama barang"
                    aria-invalid={fieldState.invalid}
                    disabled={isSubmitting}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="stock"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Stok</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    placeholder="Masukkan stok barang"
                    aria-invalid={fieldState.invalid}
                    disabled={isSubmitting}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button
              type="submit"
              variant="secondary"
              className="cursor-pointer mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Spinner />
                  <span>Menambahkan...</span>
                </>
              ) : (
                <span>Tambah Barang</span>
              )}
            </Button>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateGoodsButton;
