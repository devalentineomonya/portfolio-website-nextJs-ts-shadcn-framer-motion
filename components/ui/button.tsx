import React from "react";
import Link from "next/link";

export type ButtonVariant = "black" | "white";

type BaseProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsAnchorProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button = (props: ButtonProps) => {
  const { variant = "black", children, className = "", ...restProps } = props;
  const href = "href" in props ? props.href : undefined;
  const isBlack = variant === "black";
  const baseClassName = `relative inline-flex h-12 items-center justify-center border border-black px-8 font-sans text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 ease-in-out group ${
    isBlack
      ? "bg-black text-white hover:bg-white hover:text-black"
      : "bg-white text-black hover:bg-black hover:text-white"
  } ${className}`;

  const dots = (
    <>
      <span
        className={`absolute -top-[1px] -left-[1px] w-4 h-4 border-t-[3px] border-l-[3px] transition-all duration-300 ease-in-out z-10 opacity-0 group-hover:opacity-100 ${isBlack ? "border-white group-hover:!border-black" : "border-black group-hover:!border-white"}`}
      ></span>
      <span
        className={`absolute -top-[1px] -right-[1px] w-4 h-4 border-t-[3px] border-r-[3px] transition-all duration-300 ease-in-out z-10 opacity-0 group-hover:opacity-100 ${isBlack ? "border-white group-hover:!border-black" : "border-black group-hover:!border-white"}`}
      ></span>
      <span
        className={`absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-[3px] border-l-[3px] transition-all duration-300 ease-in-out z-10 opacity-0 group-hover:opacity-100 ${isBlack ? "border-white group-hover:!border-black" : "border-black group-hover:!border-white"}`}
      ></span>
      <span
        className={`absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-[3px] border-r-[3px] transition-all duration-300 ease-in-out z-10 opacity-0 group-hover:opacity-100 ${isBlack ? "border-white group-hover:!border-black" : "border-black group-hover:!border-white"}`}
      ></span>
    </>
  );

  if (href) {
    if (href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={baseClassName}
          {...(restProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {dots}
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={baseClassName}
        {...(restProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {dots}
        {children}
      </Link>
    );
  }

  return (
    <button
      className={baseClassName}
      {...(restProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {dots}
      {children}
    </button>
  );
};
