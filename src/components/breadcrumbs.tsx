"use client";

import { Breadcrumb } from "flowbite-react";

export function Component() {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Catlog</Breadcrumb.Item>
      <Breadcrumb.Item>Smartphones</Breadcrumb.Item>
    </Breadcrumb>
  );
}
