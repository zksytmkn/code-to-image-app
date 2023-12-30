"use client";

import { bundledLanguagesInfo } from "shikiji/bundle/web";
import { useApp } from "@/providers/app-provider";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function LangSelector() {
  const { lang, setLang } = useApp();

  return (
    <Select defaultValue={lang} onValueChange={(v) => setLang(v)}>
      <SelectTrigger className="w-32 rounded-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {bundledLanguagesInfo.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
