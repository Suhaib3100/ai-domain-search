import React from "react";
import { Card, Input, Spacer, Textarea } from "@nextui-org/react";

export default function DomainSettings({
  minLength,
  setMinLength,
  maxLength,
  setMaxLength,
  includeWords,
  setIncludeWords,
  excludeWords,
  setExcludeWords,
}) {
  return (
    <Card className="p-4 dark:border dark:border-gray-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
        <div className="flex flex-col justify-center items-center">
          <Input
            label="Name Min Length"
            onChange={(e) => setMinLength(e.target.value)}
            color="default"
            size="sm"
            value={minLength}
            aria-label="length"
            type="number"
          />
          <Spacer y={2} />
          <Input
            type="number"
            value={maxLength}
            label="Name Max Length"
            onChange={(e) => setMaxLength(e.target.value)}
            size="sm"
            aria-label="max length"
          />
        </div>

        <Textarea
          value={includeWords}
          label="Include Words"
          onChange={(e) => setIncludeWords(e.target.value)}
          color="default"
          aria-label="length"
        />
        <Textarea
          value={excludeWords}
          label="Exclude Words"
          onChange={(e) => setExcludeWords(e.target.value)}
          aria-label="max length"
        />
      </div>
    </Card>
  );
}
