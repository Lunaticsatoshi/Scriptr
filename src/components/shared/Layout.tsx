import { FC, ReactNode } from "react";
import Head from "next/head";

type LayoutProps = {
  title: string;
  description?: string;
  keywords?: string;
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({
  title,
  description,
  keywords,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </>
  );
};

Layout.defaultProps = {
  title: "Scriptr",
  description: "A modern, free, open source, powerful and feature rich script writing platform with support for multi collaborative documents dedicated to all the amatuer and veteran writors",
  keywords: "script, text editor, free, open source, writers",
};

export default Layout;
