"use client";

import Editor from "@/components/editor";
import ImageDropzone from "@/components/image-dropzone";
import ImageGroup from "@/components/image-group";
import ToolBar from "@/components/toolbar";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <ImageDropzone>
      <div className="flex items-center justify-center flex-col min-h-[100dvh] bg-canvas-background">
        <div
          id="canvas"
          className={cn("relative aspect-video p-20 flex gap-20 justify-center items-center bg-canvas-background")}
        >
          <Editor />
          <ImageGroup />
        </div>

        <ToolBar />
      </div>
    </ImageDropzone>
  );
}
