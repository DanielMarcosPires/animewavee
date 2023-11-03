import { ComponentProps } from "react";

type Inputprops = ComponentProps<"input">;
export default function SearchInput({ onChange, ...props }: Inputprops) {
  return (
    <>
      <input
        placeholder="Faça sua pesquisa"
        className="BarraPesquisa w-64 border border-gray-300 p-1 text-black"
        style={{ width: "90%" }}
        {...props}
        onChange={onChange}
      />
    </>
  );
}
