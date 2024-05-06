"use client";
import { Label, RangeSlider, Sidebar } from "flowbite-react";
export function Component() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#">
            Price
            <hr />
            <form>
              <label>From </label>
              <input type="text"> </input>
              <label>To </label>
              <input type="text"> </input>
            </form>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="default-range" />
              </div>
              <RangeSlider id="default-range" />
            </div>
          </Sidebar.Item>

          <Sidebar.Item href="#">Kanban</Sidebar.Item>
          <Sidebar.Item href="#">Inbox</Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
