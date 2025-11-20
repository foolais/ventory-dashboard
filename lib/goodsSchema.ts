import z from "zod";

const requiredString = z.string().min(1, "Field ini wajib diisi");

export const goodsSchema = z.object({
  name: requiredString.min(3, "Nama barang minimal 3 karakter"),
  stock: requiredString.min(0, "Kuantitas minimal adalah 0"),
});
