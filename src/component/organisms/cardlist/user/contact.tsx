"use client";
import React from "react";
import { Skeleton } from "src/component/ui/skeleton";
import { CardUserContact } from "src/component/molecules/card/user/contact";
import { useUserSlice } from 'src/component/context/use-ctx';
import { cn } from "src/util";

export const TitleCardListUserContact = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <h2 className={cn("text-center font-semibold text-lg md:text-2xl mb-4", className)}>
    {children}
  </h2>)

export function CardListUserContact({ className }: { className?: string }) {
  const nSlice = 2;
  const { slice, loading, error } = useUserSlice(nSlice);

  return (
    <div className={cn("relative flex flex-wrap justify-center", className)}>
      {!loading && slice.map((v, key) => (
        <CardUserContact key={key}
          className="m-4"
          values={v} />
      ))}

      {loading && Array.from({ length: nSlice }).map((_, key) => (
        <Skeleton key={key} className='h-24 sm:h-28 w-64 sm:w-96 rounded-lg lg:rounded-xl m-4' />
      ))}
    </div>)
}