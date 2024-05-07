"use client";

import { Breadcrumb } from "flowbite-react";

export function Component() {
  return (
    <div className="px-20 py-6">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Catlog</Breadcrumb.Item>
        <Breadcrumb.Item>Smartphones</Breadcrumb.Item>
        <Breadcrumb.Item>Apple</Breadcrumb.Item>
        <Breadcrumb.Item>iPhone14ProMax</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
