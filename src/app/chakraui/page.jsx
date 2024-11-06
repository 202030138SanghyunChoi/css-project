"use client";

import {
  ActionBarContent,
  ActionBarRoot,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
} from "@/components/ui/action-bar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { LuShare, LuTrash2 } from "react-icons/lu";
import { ClipboardIconButton, ClipboardRoot } from "@/components/ui/clipboard";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

export default function ChakraUI() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Checkbox onCheckedChange={(e) => setChecked(!!e.checked)}>
        Show Action bar
      </Checkbox>
      <ActionBarRoot open={checked}>
        <ActionBarContent>
          <ActionBarSelectionTrigger>2 selected</ActionBarSelectionTrigger>
          <ActionBarSeparator />
          <Button variant="outline" size="sm">
            <LuTrash2 />
            Delete
          </Button>
          <Button variant="outline" size="sm">
            <LuShare />
            Share
          </Button>
        </ActionBarContent>
      </ActionBarRoot>

      <Stack direction="row">
        <Badge>Default</Badge>
        <Badge colorPalette="green">Success</Badge>
        <Badge colorPalette="red">Removed</Badge>
        <Badge colorPalette="purple">New</Badge>
      </Stack>

      <ClipboardRoot value="https://chakra-ui.com">
        <ClipboardIconButton />
      </ClipboardRoot>

      <AccordionRoot collapsible defaultValue={["b"]}>
        {items.map((item, index) => (
          <AccordionItem key={index} value={item.value}>
            <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
            <AccordionItemContent>{item.text}</AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </>
  );
}

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
];
