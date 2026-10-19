import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "outline" | "ghost";

type Common = {
  variant?: Variant;
  size?: "md" | "sm";
  children: ReactNode;
  className?: string;
};

type AsLink = Common & { href: string };
type AsButton = Common & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined };

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", children, className } = props;
  const cls = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(" ");
  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }
  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as AsButton;
  return (
    <button type="button" {...rest} className={cls}>
      {children}
    </button>
  );
}
