"use client";

import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";

const inter = Inter({ subsets: ["latin"] });
const { Header, Footer, Content } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Layout>
            <Header style={{ backgroundColor: "#f0f2f5" }}>Header</Header>
            <Content>{children}</Content>
            <Footer>Footer</Footer>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
